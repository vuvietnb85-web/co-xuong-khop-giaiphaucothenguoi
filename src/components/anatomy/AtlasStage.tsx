import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  ACESFilmicToneMapping,
  Box3,
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshStandardMaterial,
  Quaternion,
  Vector3,
} from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import {
  QUIZ,
  baseName,
  bestTopic,
  labelOf,
  quizOf,
  structureTopic,
  TOPIC_BY_ID,
  TOPICS,
  type Kind,
  type Rom,
  type Side,
  type System,
} from "@/lib/anatomy/content";
import { isFine, isJunkName, labelSystem, toneOf, type Tone } from "@/lib/anatomy/systems";
import { useAtlas, type Part, type Pivot } from "@/lib/anatomy/store";

type Entry = {
  mesh: Mesh;
  name: string;
  kind: Tone;
  side: Side;
  basePos: Vector3;
  baseQuat: Quaternion;
};

type CacheHit = {
  scene: Group;
  entries: Entry[];
  payload: { parts: Part[]; pivots: Pivot[]; radius: number; halfY: number };
};

const REDUCE =
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

function mat(
  color: string,
  rough: number,
  emissive = "#000000",
  intensity = 0,
  opacity = 1,
): MeshStandardMaterial {
  return new MeshStandardMaterial({
    color,
    roughness: rough,
    metalness: 0.04,
    emissive,
    emissiveIntensity: intensity,
    transparent: opacity < 1,
    opacity,
    depthWrite: opacity > 0.5,
    side: DoubleSide,
  });
}

const GLOW = {
  artery: 0.72,
  vein: 0.55,
  pulmArtery: 0.58,
  pulmVein: 0.64,
  heart: 0.42,
};

const mats: Record<Tone | "pick" | "xray", MeshStandardMaterial> = {
  bone: mat("#e4d5c0", 0.62),
  muscle: mat("#9d3030", 0.58),
  other: mat("#c9b59a", 0.7),
  artery: mat("#ff5b68", 0.32, "#ff2438", GLOW.artery),
  vein: mat("#5aa6ff", 0.34, "#1a6dff", GLOW.vein),
  pulmArtery: mat("#8ea0ff", 0.34, "#3040d0", GLOW.pulmArtery),
  pulmVein: mat("#ff6a80", 0.32, "#e01840", GLOW.pulmVein),
  heart: mat("#ee6a78", 0.42, "#c01830", GLOW.heart),
  valve: mat("#f6ead0", 0.36, "#c9a15a", 0.28),
  lung: mat("#f3c9d2", 0.55, "#d06078", 0.28, 0.94),
  air: mat("#f6e6c4", 0.42, "#e0b060", 0.32),
  pick: mat("#ffb81c", 0.38, "#8a5a00", 0.45),
  xray: new MeshStandardMaterial({
    color: "#d5e4f2",
    roughness: 0.4,
    metalness: 0.02,
    transparent: true,
    opacity: 0.14,
    depthWrite: false,
    side: DoubleSide,
  }),
};

const runtime: { entries: Entry[]; scene: Group | null } = {
  entries: [],
  scene: null,
};

const loads = new Map<string, Promise<Group>>();
const modelCache = new Map<string, CacheHit>();

function urlOf(key: string): string {
  if (key === "circ") return "/models/circulation.glb";
  if (key === "heart") return "/models/heart.glb";
  if (key === "resp") return "/models/lung.glb";
  return "/models/body.glb";
}

function loadUrl(url: string): Promise<Group> {
  let pending = loads.get(url);
  if (!pending) {
    pending = new Promise((resolve, reject) => {
      const draco = new DRACOLoader();
      draco.setDecoderPath("/draco/");
      draco.setWorkerLimit(2);
      const loader = new GLTFLoader();
      loader.setDRACOLoader(draco);
      loader.load(
        url,
        (gltf) => {
          draco.dispose();
          resolve(gltf.scene);
        },
        undefined,
        () => {
          draco.dispose();
          loads.delete(url);
          reject(new Error("load"));
        },
      );
    });
    loads.set(url, pending);
  }
  return pending;
}

function kindOfBone(mesh: Mesh): Tone {
  const data = mesh.userData as { type?: string };
  const name = mesh.name || "";
  if (/cartilage|tooth|incisor|molar|premolar|canine/i.test(name)) return "other";
  if (data.type === "muscle" || /muscle|tendon|aponeurosis/i.test(name)) return "muscle";
  if (data.type === "bone") return "bone";
  return "other";
}

function isTiny(name: string): boolean {
  return /phalanx|tooth|incisor|molar|premolar|canine|malleus|incus|stapes|ossicle|nasal concha/i.test(
    name,
  );
}

function sideOf(x: number, radius: number): Side {
  const t = Math.max(0.02, radius * 0.04);
  if (x > t) return "trái";
  if (x < -t) return "phải";
  return "giữa";
}

function topicFor(name: string, system: System, kind: Tone): string | null {
  if (system === "cxk") {
    const boneKind: Kind = kind === "muscle" ? "muscle" : "bone";
    const topic =
      (kind === "muscle" || kind === "bone" ? structureTopic(name, boneKind) : null) ??
      bestTopic(name, "bone");
    return topic?.id ?? null;
  }
  const topic = TOPICS.find(
    (item) => (item.system ?? "cxk") === system && item.tab !== "path" && item.match(name),
  );
  return topic?.id ?? null;
}

function prepare(scene: Group, system: System): CacheHit {
  scene.updateMatrixWorld(true);
  const bounds = new Box3().setFromObject(scene);
  const center = bounds.getCenter(new Vector3());
  const size = bounds.getSize(new Vector3());
  scene.position.sub(center);
  scene.updateMatrixWorld(true);
  const radius = Math.max(size.x, size.y, size.z) * 0.5 || 0.2;
  const halfY = size.y / 2;

  const entries: Entry[] = [];
  const parts: Part[] = [];
  scene.traverse((obj) => {
    const mesh = obj as Mesh;
    if (!mesh.isMesh) return;
    if (isJunkName(mesh.name)) {
      mesh.visible = false;
      return;
    }
    const kind = system === "cxk" ? kindOfBone(mesh) : toneOf(mesh.name);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.material = mats[kind] ?? mats.other;
    const world = new Vector3();
    mesh.getWorldPosition(world);
    const side = sideOf(world.x, radius);
    const label = system === "cxk" ? labelOf(mesh.name) : labelSystem(mesh.name);
    entries.push({
      mesh,
      name: mesh.name,
      kind,
      side,
      basePos: mesh.position.clone(),
      baseQuat: mesh.quaternion.clone(),
    });
    parts.push({
      uuid: mesh.uuid,
      name: baseName(mesh.name),
      vi: label.vi,
      latin: label.latin,
      kind,
      side,
      topicId: topicFor(mesh.name, system, kind),
    });
  });

  runtime.entries = entries;
  runtime.scene = scene;

  const pivots: Pivot[] = [];
  if (system === "cxk") {
    const pushEnd = (id: string, topicId: string, list: Entry[], end: "max" | "min") => {
      if (!list.length) return;
      const box = new Box3();
      list.forEach((e) => box.expandByObject(e.mesh));
      const c = box.getCenter(new Vector3());
      pivots.push({
        id,
        topicId,
        side: sideOf(c.x, radius),
        x: c.x,
        y: end === "max" ? box.max.y : box.min.y,
        z: c.z,
      });
    };
    const bySide = (pred: (e: Entry) => boolean) => {
      const all = entries.filter(pred);
      return {
        trái: all.filter((e) => e.side === "trái"),
        phải: all.filter((e) => e.side === "phải"),
      };
    };
    const hum = bySide((e) => e.kind !== "muscle" && /^humerus/i.test(e.name));
    const fem = bySide((e) => e.kind !== "muscle" && /^femur/i.test(e.name));
    const rad = bySide((e) => e.kind !== "muscle" && /^radius/i.test(e.name));
    const tib = bySide((e) => e.kind !== "muscle" && /^tibia/i.test(e.name));
    (["trái", "phải"] as const).forEach((side) => {
      pushEnd(`shoulder-${side}`, "joint-shoulder", hum[side], "max");
      pushEnd(`elbow-${side}`, "joint-elbow", hum[side], "min");
      pushEnd(`wrist-${side}`, "joint-wrist", rad[side], "min");
      pushEnd(`hip-${side}`, "joint-hip", fem[side], "max");
      pushEnd(`knee-${side}`, "joint-knee", fem[side], "min");
      pushEnd(`ankle-${side}`, "joint-ankle", tib[side], "min");
    });
    const spine = (id: string, topicId: string, re: RegExp) => {
      const list = entries.filter((e) => re.test(e.name));
      if (!list.length) return;
      const box = new Box3();
      list.forEach((e) => box.expandByObject(e.mesh));
      const c = box.getCenter(new Vector3());
      pivots.push({ id, topicId, side: "giữa", x: c.x, y: c.y, z: c.z });
    };
    spine("cspine", "joint-cspine", /atlas|axis|vertebra c/i);
    spine("lspine", "joint-lspine", /vertebra l/i);
  }

  const payload = { parts, pivots, radius, halfY };
  useAtlas.getState().boot(payload);
  return { scene, entries, payload };
}

function matchesTopic(entry: Entry, topicId: string | null, side: "cả" | Side) {
  if (!topicId) return false;
  const topic = TOPIC_BY_ID[topicId];
  if (!topic?.match(entry.name)) return false;
  if (side !== "cả" && entry.side !== "giữa" && entry.side !== side) return false;
  return true;
}

function currentTopicId(): string | null {
  const s = useAtlas.getState();
  if (s.tab === "quiz") {
    if (s.quizChoice === null) return null;
    return quizOf(s.system)[s.quizIndex]?.topicId ?? QUIZ[s.quizIndex]?.topicId ?? null;
  }
  return s.topicId;
}

function homeFocus(system: System): Entry[] {
  if (system === "cxk") return runtime.entries;
  const re =
    system === "circ"
      ? /atrium|ventricle|coronary|pulmonary trunk|aortic arch|ascending aorta|heart|brachiocephalic|superior vena cava/i
      : /lobe|trachea|bronchus|lung/i;
  const named = runtime.entries.filter((entry) => re.test(entry.name));
  const compact = named.filter((entry) => {
    const box = new Box3().setFromObject(entry.mesh);
    const size = box.getSize(new Vector3());
    return Math.max(size.x, size.y, size.z) < 0.42;
  });
  if (compact.length) return compact;
  if (named.length) return named;
  return runtime.entries.filter((entry) => entry.mesh.visible);
}

function applyLook() {
  const s = useAtlas.getState();
  const topicId = currentTopicId();
  const heartCut = s.heartCut && s.system === "circ";
  for (const entry of runtime.entries) {
    const hot =
      entry.mesh.uuid === s.meshId || (!s.meshId && matchesTopic(entry, topicId, s.side));
    let visible = true;
    if (s.system === "cxk") {
      if (!s.detail && isTiny(entry.name) && entry.mesh.uuid !== s.meshId) visible = false;
      if ((s.tab === "bone" || s.tab === "joint") && entry.kind === "muscle") visible = false;
    } else if (
      !s.detail &&
      !heartCut &&
      isFine(entry.name) &&
      entry.kind !== "lung" &&
      !hot &&
      entry.mesh.uuid !== s.meshId
    ) {
      visible = false;
    }
    if (s.isolate) {
      if (s.meshId) visible = entry.mesh.uuid === s.meshId;
      else if (topicId) visible = matchesTopic(entry, topicId, s.side);
    }
    entry.mesh.visible = visible;
    let dim = false;
    if (!hot && s.xray) dim = true;
    else if (!hot && s.system === "cxk" && s.tab === "muscle" && !s.isolate && entry.kind === "bone") {
      dim = true;
    } else if (
      !hot &&
      s.system === "circ" &&
      s.tab === "heart" &&
      (entry.kind === "artery" || entry.kind === "vein" || entry.kind === "pulmArtery" || entry.kind === "pulmVein")
    ) {
      dim = true;
    } else if (
      !hot &&
      s.system === "circ" &&
      s.tab === "vessel" &&
      (entry.kind === "heart" || entry.kind === "valve")
    ) {
      dim = true;
    } else if (!hot && s.system === "resp" && s.tab === "airway" && entry.kind === "lung") {
      dim = true;
    }
    entry.mesh.material = hot ? mats.pick : dim ? mats.xray : (mats[entry.kind] ?? mats.other);
  }
}

const ROM_AXIS = new Vector3(1, 0, 0);
const Z_AXIS = new Vector3(0, 0, 1);
const tmpQ = new Quaternion();

function restorePoses() {
  for (const entry of runtime.entries) {
    entry.mesh.position.copy(entry.basePos);
    entry.mesh.quaternion.copy(entry.baseQuat);
  }
}

function romTargets(rom: Rom, side: Side): Entry[] {
  return runtime.entries.filter((e) => {
    if (e.kind === "muscle" || e.side !== side) return false;
    if (rom === "elbow" || rom === "shoulder") {
      const arm =
        /^(humerus|radius|ulna|scaphoid|lunate|pisiform|triquetrum|hamate|capitate|trapezium|trapezoid)/i.test(
          e.name,
        );
      const hand = /metacarpal|phalanx of .*hand|finger of hand/i.test(e.name);
      if (rom === "elbow") return !/^humerus/i.test(e.name) && (arm || hand);
      return arm || hand;
    }
    return (
      /^(tibia|fibula|talus|calcaneus|navicular|cuneiform|cuboid|metatarsal)/i.test(e.name) ||
      /phalanx of .*foot|finger of foot/i.test(e.name)
    );
  });
}

function swing(entries: Entry[], pivot: Vector3, axis: Vector3, angle: number) {
  const scene = runtime.scene;
  if (!scene) return;
  const localPivot = pivot.clone().sub(scene.position);
  tmpQ.setFromAxisAngle(axis, angle);
  for (const entry of entries) {
    entry.mesh.position.copy(entry.basePos).sub(localPivot);
    entry.mesh.position.applyQuaternion(tmpQ);
    entry.mesh.position.add(localPivot);
    entry.mesh.quaternion.copy(tmpQ).multiply(entry.baseQuat);
  }
}

function resetPulse() {
  mats.artery.emissiveIntensity = GLOW.artery;
  mats.vein.emissiveIntensity = GLOW.vein;
  mats.pulmArtery.emissiveIntensity = GLOW.pulmArtery;
  mats.pulmVein.emissiveIntensity = GLOW.pulmVein;
  mats.heart.emissiveIntensity = GLOW.heart;
  mats.lung.opacity = 0.94;
}

function Body() {
  const system = useAtlas((s) => s.system);
  const heartCut = useAtlas((s) => s.heartCut);
  const [scene, setScene] = useState<Group | null>(null);

  useEffect(() => {
    let dead = false;
    const key = system === "circ" && heartCut ? "heart" : system;
    restorePoses();
    resetPulse();
    const hit = modelCache.get(key);
    if (hit) {
      if (hit.scene.parent) hit.scene.parent.remove(hit.scene);
      runtime.entries = hit.entries;
      runtime.scene = hit.scene;
      useAtlas.getState().boot(hit.payload);
      applyLook();
      setScene(hit.scene);
      return () => {
        dead = true;
      };
    }
    setScene(null);
    loadUrl(urlOf(key))
      .then((group) => {
        if (dead) return;
        if (group.parent) group.parent.remove(group);
        const built = prepare(group, system);
        modelCache.set(key, built);
        applyLook();
        setScene(group);
      })
      .catch(() => {
        if (!dead) useAtlas.getState().fail("Không mở được mô hình. Hãy tải lại trang.");
      });
    return () => {
      dead = true;
    };
  }, [system, heartCut]);

  if (!scene) return null;
  return (
    <primitive
      object={scene}
      onClick={(event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        const mesh = event.object as Mesh;
        if (!mesh.isMesh || !mesh.visible) return;
        const named = runtime.entries.some((entry) => entry.mesh.uuid === mesh.uuid);
        if (!named) return;
        useAtlas.getState().pickMesh(mesh.uuid);
      }}
    />
  );
}

function Markers() {
  const pivots = useAtlas((s) => s.pivots);
  const tab = useAtlas((s) => s.tab);
  const topicId = useAtlas((s) => s.topicId);
  const side = useAtlas((s) => s.side);
  const radius = useAtlas((s) => s.radius);
  const ring = Math.max(0.012, radius * 0.045);
  const shown = useMemo(() => {
    const jointFocus = topicId?.startsWith("joint-") ? topicId : null;
    if (tab !== "joint" && !jointFocus) return [];
    return pivots.filter((p) => {
      if (jointFocus && p.topicId !== jointFocus) return false;
      if (!jointFocus && side !== "cả" && p.side !== "giữa" && p.side !== side) return false;
      return true;
    });
  }, [pivots, tab, topicId, side]);

  if (!shown.length) return null;
  return (
    <group>
      {shown.map((p) => (
        <mesh
          key={p.id}
          position={[p.x, p.y, p.z]}
          rotation={[Math.PI / 2, 0, 0]}
          onClick={(event) => {
            event.stopPropagation();
            useAtlas.getState().pickTopic(p.topicId);
          }}
        >
          <torusGeometry args={[ring, ring * 0.14, 8, 28]} />
          <meshStandardMaterial color="#ffb81c" emissive="#8a6200" emissiveIntensity={0.65} roughness={0.32} />
        </mesh>
      ))}
    </group>
  );
}

function Rig() {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;
  const focusUntil = useRef(0);
  const goalPos = useRef(new Vector3(1.6, 0.4, 2.8));
  const goalTgt = useRef(new Vector3());
  const clock = useRef(0);
  const romOn = useRef(false);
  const snap = useRef(false);

  const frameEntries = (list: Entry[]) => {
    if (!list.length) return;
    const box = new Box3();
    list.forEach((e) => box.expandByObject(e.mesh));
    if (box.isEmpty()) return;
    const c = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const dist = Math.max(size.x, size.y, size.z) * 1.35 + 0.05;
    goalTgt.current.copy(c);
    goalPos.current.set(c.x + dist * 0.42, c.y + dist * 0.06, c.z + dist);
    if (controls) {
      camera.position.copy(goalPos.current);
      controls.target.copy(goalTgt.current);
      controls.update();
      snap.current = false;
    } else {
      snap.current = true;
    }
  };

  const frameRef = useRef(frameEntries);
  frameRef.current = frameEntries;
  useEffect(() => {
    let last = "";
    return useAtlas.subscribe((state) => {
      applyLook();
      const frameKey = [
        state.system,
        state.heartCut,
        state.topicId,
        state.meshId,
        state.side,
        state.tab,
        state.quizChoice,
        state.quizIndex,
        state.ready,
      ].join("|");
      if (frameKey === last || !state.ready) return;
      last = frameKey;
      const go = frameRef.current;
      if (state.meshId) {
        go(runtime.entries.filter((e) => e.mesh.uuid === state.meshId));
        return;
      }
      const topic = currentTopicId();
      if (topic) {
        const list = runtime.entries.filter((e) => matchesTopic(e, topic, state.side));
        if (list.length) {
          go(list);
          return;
        }
      }
      const focus = homeFocus(state.system);
      go(focus.length ? focus : runtime.entries.filter((e) => e.mesh.visible));
    });
  }, []);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.1);
    const state = useAtlas.getState();
    const topic = state.topicId ? TOPIC_BY_ID[state.topicId] : undefined;
    const wantRom = state.system === "cxk" && Boolean(state.rom && topic?.rom);
    if (wantRom && topic?.rom) {
      romOn.current = true;
      clock.current += d;
      const wave = Math.sin(clock.current * 1.25);
      const pivots = state.pivots.filter(
        (p) =>
          p.topicId === topic.id &&
          (state.side === "cả" || p.side === state.side || p.side === "giữa"),
      );
      restorePoses();
      for (const pivot of pivots) {
        if (pivot.side === "giữa") continue;
        const group = romTargets(topic.rom, pivot.side);
        const point = new Vector3(pivot.x, pivot.y, pivot.z);
        if (topic.rom === "elbow") swing(group, point, ROM_AXIS, -Math.max(0, wave) * 1.2);
        else if (topic.rom === "knee") swing(group, point, ROM_AXIS, Math.max(0, wave) * 1.25);
        else swing(group, point, Z_AXIS, (pivot.side === "phải" ? -1 : 1) * Math.max(0, wave) * 0.85);
      }
    } else if (romOn.current) {
      romOn.current = false;
      clock.current = 0;
      restorePoses();
    }

    if (!REDUCE && state.rom && state.system !== "cxk") {
      clock.current += d;
      const beat = (Math.sin(clock.current * 7.4) + 1) / 2;
      const breath = (Math.sin(clock.current * 1.6) + 1) / 2;
      if (state.system === "circ") {
        mats.artery.emissiveIntensity = GLOW.artery + beat * 0.55;
        mats.pulmVein.emissiveIntensity = GLOW.pulmVein + beat * 0.45;
        mats.heart.emissiveIntensity = GLOW.heart + beat * 0.35;
        mats.vein.emissiveIntensity = GLOW.vein + (1 - beat) * 0.22;
        mats.pulmArtery.emissiveIntensity = GLOW.pulmArtery + (1 - beat) * 0.28;
      } else {
        mats.lung.opacity = 0.62 + breath * 0.34;
      }
    } else if (!state.rom || state.system === "cxk") {
      resetPulse();
    }

    if (!controls) return;
    if (snap.current) {
      camera.position.copy(goalPos.current);
      controls.target.copy(goalTgt.current);
      snap.current = false;
    }
    controls.update();
  });

  return null;
}

function Ground() {
  const halfY = useAtlas((s) => s.halfY);
  const radius = useAtlas((s) => s.radius);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -halfY + 0.002, 0]}>
      <circleGeometry args={[Math.max(0.2, radius * 0.85), 48]} />
      <meshBasicMaterial color="#071525" transparent opacity={0.9} />
    </mesh>
  );
}

export function AtlasStage() {
  const radius = useAtlas((s) => s.radius);
  return (
    <Canvas
      className="h-full w-full touch-none"
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: ACESFilmicToneMapping,
      }}
      camera={{ fov: 32, position: [0.4, 0.2, 1.4], near: 0.01, far: 80 }}
      onCreated={({ gl }) => {
        gl.setClearColor(new Color("#041018"));
        gl.toneMappingExposure = 1.2;
      }}
      onPointerMissed={() => useAtlas.getState().clearMesh()}
    >
      <color attach="background" args={["#041018"]} />
      <ambientLight intensity={0.38} />
      <hemisphereLight args={["#d5e2f2", "#2a1c12", 0.55]} />
      <directionalLight position={[radius * 1.4, radius * 2.4, radius * 1.6]} intensity={2.2} />
      <directionalLight position={[-radius * 1.8, radius * 0.4, -radius]} intensity={0.45} color="#9eb6d8" />
      <directionalLight position={[0, radius, -radius * 1.6]} intensity={0.55} color="#ffb81c" />
      <Body />
      <Markers />
      <Ground />
      <Rig />
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        enablePan={false}
        minDistance={0.04}
        maxDistance={Math.max(4, radius * 5)}
        maxPolarAngle={Math.PI * 0.92}
      />
    </Canvas>
  );
}
