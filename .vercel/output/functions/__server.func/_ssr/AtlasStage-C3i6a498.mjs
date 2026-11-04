import { i as __toESM } from "../_runtime.mjs";
import { V as MeshStandardMaterial, c as Box3, dt as Vector3, et as Quaternion, f as Color, ht as require_react, i as useThree, mt as require_jsx_runtime, n as Canvas, r as useFrame, t as OrbitControls } from "../_libs/@react-three/drei+[...].mjs";
import { a as TOPIC_BY_ID, c as labelOf, d as isFine, f as isJunkName, i as TOPICS, l as quizOf, m as toneOf, n as useAtlas, o as baseName, p as labelSystem, r as QUIZ, s as bestTopic, u as structureTopic } from "./routes-Cj-Zz8X2.mjs";
import { n as DRACOLoader, t as GLTFLoader } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AtlasStage-C3i6a498.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REDUCE = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function mat(color, rough, emissive = "#000000", intensity = 0, opacity = 1) {
	return new MeshStandardMaterial({
		color,
		roughness: rough,
		metalness: .04,
		emissive,
		emissiveIntensity: intensity,
		transparent: opacity < 1,
		opacity,
		depthWrite: opacity > .5,
		side: 2
	});
}
var GLOW = {
	artery: .72,
	vein: .55,
	pulmArtery: .58,
	pulmVein: .64,
	heart: .42
};
var mats = {
	bone: mat("#e4d5c0", .62),
	muscle: mat("#9d3030", .58),
	other: mat("#c9b59a", .7),
	artery: mat("#ff5b68", .32, "#ff2438", GLOW.artery),
	vein: mat("#5aa6ff", .34, "#1a6dff", GLOW.vein),
	pulmArtery: mat("#8ea0ff", .34, "#3040d0", GLOW.pulmArtery),
	pulmVein: mat("#ff6a80", .32, "#e01840", GLOW.pulmVein),
	heart: mat("#ee6a78", .42, "#c01830", GLOW.heart),
	valve: mat("#f6ead0", .36, "#c9a15a", .28),
	lung: mat("#f3c9d2", .55, "#d06078", .28, .94),
	air: mat("#f6e6c4", .42, "#e0b060", .32),
	pick: mat("#ffb81c", .38, "#8a5a00", .45),
	xray: new MeshStandardMaterial({
		color: "#d5e4f2",
		roughness: .4,
		metalness: .02,
		transparent: true,
		opacity: .14,
		depthWrite: false,
		side: 2
	})
};
var runtime = {
	entries: [],
	scene: null
};
var loads = /* @__PURE__ */ new Map();
var modelCache = /* @__PURE__ */ new Map();
function urlOf(key) {
	if (key === "circ") return "/models/circulation.glb";
	if (key === "heart") return "/models/heart.glb";
	if (key === "resp") return "/models/lung.glb";
	return "/models/body.glb";
}
function loadUrl(url) {
	let pending = loads.get(url);
	if (!pending) {
		pending = new Promise((resolve, reject) => {
			const draco = new DRACOLoader();
			draco.setDecoderPath("/draco/");
			draco.setWorkerLimit(2);
			const loader = new GLTFLoader();
			loader.setDRACOLoader(draco);
			loader.load(url, (gltf) => {
				draco.dispose();
				resolve(gltf.scene);
			}, void 0, () => {
				draco.dispose();
				loads.delete(url);
				reject(/* @__PURE__ */ new Error("load"));
			});
		});
		loads.set(url, pending);
	}
	return pending;
}
function kindOfBone(mesh) {
	const data = mesh.userData;
	const name = mesh.name || "";
	if (/cartilage|tooth|incisor|molar|premolar|canine/i.test(name)) return "other";
	if (data.type === "muscle" || /muscle|tendon|aponeurosis/i.test(name)) return "muscle";
	if (data.type === "bone") return "bone";
	return "other";
}
function isTiny(name) {
	return /phalanx|tooth|incisor|molar|premolar|canine|malleus|incus|stapes|ossicle|nasal concha/i.test(name);
}
function sideOf(x, radius) {
	const t = Math.max(.02, radius * .04);
	if (x > t) return "trái";
	if (x < -t) return "phải";
	return "giữa";
}
function topicFor(name, system, kind) {
	if (system === "cxk") return ((kind === "muscle" || kind === "bone" ? structureTopic(name, kind === "muscle" ? "muscle" : "bone") : null) ?? bestTopic(name, "bone"))?.id ?? null;
	return TOPICS.find((item) => (item.system ?? "cxk") === system && item.tab !== "path" && item.match(name))?.id ?? null;
}
function prepare(scene, system) {
	scene.updateMatrixWorld(true);
	const bounds = new Box3().setFromObject(scene);
	const center = bounds.getCenter(new Vector3());
	const size = bounds.getSize(new Vector3());
	scene.position.sub(center);
	scene.updateMatrixWorld(true);
	const radius = Math.max(size.x, size.y, size.z) * .5 || .2;
	const halfY = size.y / 2;
	const entries = [];
	const parts = [];
	scene.traverse((obj) => {
		const mesh = obj;
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
			baseQuat: mesh.quaternion.clone()
		});
		parts.push({
			uuid: mesh.uuid,
			name: baseName(mesh.name),
			vi: label.vi,
			latin: label.latin,
			kind,
			side,
			topicId: topicFor(mesh.name, system, kind)
		});
	});
	runtime.entries = entries;
	runtime.scene = scene;
	const pivots = [];
	if (system === "cxk") {
		const pushEnd = (id, topicId, list, end) => {
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
				z: c.z
			});
		};
		const bySide = (pred) => {
			const all = entries.filter(pred);
			return {
				trái: all.filter((e) => e.side === "trái"),
				phải: all.filter((e) => e.side === "phải")
			};
		};
		const hum = bySide((e) => e.kind !== "muscle" && /^humerus/i.test(e.name));
		const fem = bySide((e) => e.kind !== "muscle" && /^femur/i.test(e.name));
		const rad = bySide((e) => e.kind !== "muscle" && /^radius/i.test(e.name));
		const tib = bySide((e) => e.kind !== "muscle" && /^tibia/i.test(e.name));
		["trái", "phải"].forEach((side) => {
			pushEnd(`shoulder-${side}`, "joint-shoulder", hum[side], "max");
			pushEnd(`elbow-${side}`, "joint-elbow", hum[side], "min");
			pushEnd(`wrist-${side}`, "joint-wrist", rad[side], "min");
			pushEnd(`hip-${side}`, "joint-hip", fem[side], "max");
			pushEnd(`knee-${side}`, "joint-knee", fem[side], "min");
			pushEnd(`ankle-${side}`, "joint-ankle", tib[side], "min");
		});
		const spine = (id, topicId, re) => {
			const list = entries.filter((e) => re.test(e.name));
			if (!list.length) return;
			const box = new Box3();
			list.forEach((e) => box.expandByObject(e.mesh));
			const c = box.getCenter(new Vector3());
			pivots.push({
				id,
				topicId,
				side: "giữa",
				x: c.x,
				y: c.y,
				z: c.z
			});
		};
		spine("cspine", "joint-cspine", /atlas|axis|vertebra c/i);
		spine("lspine", "joint-lspine", /vertebra l/i);
	}
	const payload = {
		parts,
		pivots,
		radius,
		halfY
	};
	useAtlas.getState().boot(payload);
	return {
		scene,
		entries,
		payload
	};
}
function matchesTopic(entry, topicId, side) {
	if (!topicId) return false;
	if (!TOPIC_BY_ID[topicId]?.match(entry.name)) return false;
	if (side !== "cả" && entry.side !== "giữa" && entry.side !== side) return false;
	return true;
}
function currentTopicId() {
	const s = useAtlas.getState();
	if (s.tab === "quiz") {
		if (s.quizChoice === null) return null;
		return quizOf(s.system)[s.quizIndex]?.topicId ?? QUIZ[s.quizIndex]?.topicId ?? null;
	}
	return s.topicId;
}
function homeFocus(system) {
	if (system === "cxk") return runtime.entries;
	const re = system === "circ" ? /atrium|ventricle|coronary|pulmonary trunk|aortic arch|ascending aorta|heart|brachiocephalic|superior vena cava/i : /lobe|trachea|bronchus|lung/i;
	const named = runtime.entries.filter((entry) => re.test(entry.name));
	const compact = named.filter((entry) => {
		const size = new Box3().setFromObject(entry.mesh).getSize(new Vector3());
		return Math.max(size.x, size.y, size.z) < .42;
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
		const hot = entry.mesh.uuid === s.meshId || !s.meshId && matchesTopic(entry, topicId, s.side);
		let visible = true;
		if (s.system === "cxk") {
			if (!s.detail && isTiny(entry.name) && entry.mesh.uuid !== s.meshId) visible = false;
			if ((s.tab === "bone" || s.tab === "joint") && entry.kind === "muscle") visible = false;
		} else if (!s.detail && !heartCut && isFine(entry.name) && entry.kind !== "lung" && !hot && entry.mesh.uuid !== s.meshId) visible = false;
		if (s.isolate) {
			if (s.meshId) visible = entry.mesh.uuid === s.meshId;
			else if (topicId) visible = matchesTopic(entry, topicId, s.side);
		}
		entry.mesh.visible = visible;
		let dim = false;
		if (!hot && s.xray) dim = true;
		else if (!hot && s.system === "cxk" && s.tab === "muscle" && !s.isolate && entry.kind === "bone") dim = true;
		else if (!hot && s.system === "circ" && s.tab === "heart" && (entry.kind === "artery" || entry.kind === "vein" || entry.kind === "pulmArtery" || entry.kind === "pulmVein")) dim = true;
		else if (!hot && s.system === "circ" && s.tab === "vessel" && (entry.kind === "heart" || entry.kind === "valve")) dim = true;
		else if (!hot && s.system === "resp" && s.tab === "airway" && entry.kind === "lung") dim = true;
		entry.mesh.material = hot ? mats.pick : dim ? mats.xray : mats[entry.kind] ?? mats.other;
	}
}
var ROM_AXIS = new Vector3(1, 0, 0);
var Z_AXIS = new Vector3(0, 0, 1);
var tmpQ = new Quaternion();
function restorePoses() {
	for (const entry of runtime.entries) {
		entry.mesh.position.copy(entry.basePos);
		entry.mesh.quaternion.copy(entry.baseQuat);
	}
}
function romTargets(rom, side) {
	return runtime.entries.filter((e) => {
		if (e.kind === "muscle" || e.side !== side) return false;
		if (rom === "elbow" || rom === "shoulder") {
			const arm = /^(humerus|radius|ulna|scaphoid|lunate|pisiform|triquetrum|hamate|capitate|trapezium|trapezoid)/i.test(e.name);
			const hand = /metacarpal|phalanx of .*hand|finger of hand/i.test(e.name);
			if (rom === "elbow") return !/^humerus/i.test(e.name) && (arm || hand);
			return arm || hand;
		}
		return /^(tibia|fibula|talus|calcaneus|navicular|cuneiform|cuboid|metatarsal)/i.test(e.name) || /phalanx of .*foot|finger of foot/i.test(e.name);
	});
}
function swing(entries, pivot, axis, angle) {
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
	mats.lung.opacity = .94;
}
function Body() {
	const system = useAtlas((s) => s.system);
	const heartCut = useAtlas((s) => s.heartCut);
	const [scene, setScene] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
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
		loadUrl(urlOf(key)).then((group) => {
			if (dead) return;
			if (group.parent) group.parent.remove(group);
			const built = prepare(group, system);
			modelCache.set(key, built);
			applyLook();
			setScene(group);
		}).catch(() => {
			if (!dead) useAtlas.getState().fail("Không mở được mô hình. Hãy tải lại trang.");
		});
		return () => {
			dead = true;
		};
	}, [system, heartCut]);
	if (!scene) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", {
		object: scene,
		onClick: (event) => {
			event.stopPropagation();
			const mesh = event.object;
			if (!mesh.isMesh || !mesh.visible) return;
			if (!runtime.entries.some((entry) => entry.mesh.uuid === mesh.uuid)) return;
			useAtlas.getState().pickMesh(mesh.uuid);
		}
	});
}
function Markers() {
	const pivots = useAtlas((s) => s.pivots);
	const tab = useAtlas((s) => s.tab);
	const topicId = useAtlas((s) => s.topicId);
	const side = useAtlas((s) => s.side);
	const radius = useAtlas((s) => s.radius);
	const ring = Math.max(.012, radius * .045);
	const shown = (0, import_react.useMemo)(() => {
		const jointFocus = topicId?.startsWith("joint-") ? topicId : null;
		if (tab !== "joint" && !jointFocus) return [];
		return pivots.filter((p) => {
			if (jointFocus && p.topicId !== jointFocus) return false;
			if (!jointFocus && side !== "cả" && p.side !== "giữa" && p.side !== side) return false;
			return true;
		});
	}, [
		pivots,
		tab,
		topicId,
		side
	]);
	if (!shown.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: shown.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			p.x,
			p.y,
			p.z
		],
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		onClick: (event) => {
			event.stopPropagation();
			useAtlas.getState().pickTopic(p.topicId);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
			ring,
			ring * .14,
			8,
			28
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#ffb81c",
			emissive: "#8a6200",
			emissiveIntensity: .65,
			roughness: .32
		})]
	}, p.id)) });
}
function Rig() {
	const camera = useThree((s) => s.camera);
	const controls = useThree((s) => s.controls);
	(0, import_react.useRef)(0);
	const goalPos = (0, import_react.useRef)(new Vector3(1.6, .4, 2.8));
	const goalTgt = (0, import_react.useRef)(new Vector3());
	const clock = (0, import_react.useRef)(0);
	const romOn = (0, import_react.useRef)(false);
	const snap = (0, import_react.useRef)(false);
	const frameEntries = (list) => {
		if (!list.length) return;
		const box = new Box3();
		list.forEach((e) => box.expandByObject(e.mesh));
		if (box.isEmpty()) return;
		const c = box.getCenter(new Vector3());
		const size = box.getSize(new Vector3());
		const dist = Math.max(size.x, size.y, size.z) * 1.35 + .05;
		goalTgt.current.copy(c);
		goalPos.current.set(c.x + dist * .42, c.y + dist * .06, c.z + dist);
		if (controls) {
			camera.position.copy(goalPos.current);
			controls.target.copy(goalTgt.current);
			controls.update();
			snap.current = false;
		} else snap.current = true;
	};
	const frameRef = (0, import_react.useRef)(frameEntries);
	frameRef.current = frameEntries;
	(0, import_react.useEffect)(() => {
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
				state.ready
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
		const d = Math.min(delta, .1);
		const state = useAtlas.getState();
		const topic = state.topicId ? TOPIC_BY_ID[state.topicId] : void 0;
		if (state.system === "cxk" && Boolean(state.rom && topic?.rom) && topic?.rom) {
			romOn.current = true;
			clock.current += d;
			const wave = Math.sin(clock.current * 1.25);
			const pivots = state.pivots.filter((p) => p.topicId === topic.id && (state.side === "cả" || p.side === state.side || p.side === "giữa"));
			restorePoses();
			for (const pivot of pivots) {
				if (pivot.side === "giữa") continue;
				const group = romTargets(topic.rom, pivot.side);
				const point = new Vector3(pivot.x, pivot.y, pivot.z);
				if (topic.rom === "elbow") swing(group, point, ROM_AXIS, -Math.max(0, wave) * 1.2);
				else if (topic.rom === "knee") swing(group, point, ROM_AXIS, Math.max(0, wave) * 1.25);
				else swing(group, point, Z_AXIS, (pivot.side === "phải" ? -1 : 1) * Math.max(0, wave) * .85);
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
				mats.artery.emissiveIntensity = GLOW.artery + beat * .55;
				mats.pulmVein.emissiveIntensity = GLOW.pulmVein + beat * .45;
				mats.heart.emissiveIntensity = GLOW.heart + beat * .35;
				mats.vein.emissiveIntensity = GLOW.vein + (1 - beat) * .22;
				mats.pulmArtery.emissiveIntensity = GLOW.pulmArtery + (1 - beat) * .28;
			} else mats.lung.opacity = .62 + breath * .34;
		} else if (!state.rom || state.system === "cxk") resetPulse();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		position: [
			0,
			-halfY + .002,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [Math.max(.2, radius * .85), 48] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: "#071525",
			transparent: true,
			opacity: .9
		})]
	});
}
function AtlasStage() {
	const radius = useAtlas((s) => s.radius);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "h-full w-full touch-none",
		dpr: [1, 1.5],
		gl: {
			antialias: true,
			alpha: false,
			powerPreference: "high-performance",
			toneMapping: 4
		},
		camera: {
			fov: 32,
			position: [
				.4,
				.2,
				1.4
			],
			near: .01,
			far: 80
		},
		onCreated: ({ gl }) => {
			gl.setClearColor(new Color("#041018"));
			gl.toneMappingExposure = 1.2;
		},
		onPointerMissed: () => useAtlas.getState().clearMesh(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#041018"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .38 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
				"#d5e2f2",
				"#2a1c12",
				.55
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					radius * 1.4,
					radius * 2.4,
					radius * 1.6
				],
				intensity: 2.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-radius * 1.8,
					radius * .4,
					-radius
				],
				intensity: .45,
				color: "#9eb6d8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					0,
					radius,
					-radius * 1.6
				],
				intensity: .55,
				color: "#ffb81c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rig, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				makeDefault: true,
				enableDamping: true,
				dampingFactor: .08,
				enablePan: false,
				minDistance: .04,
				maxDistance: Math.max(4, radius * 5),
				maxPolarAngle: Math.PI * .92
			})
		]
	});
}
//#endregion
export { AtlasStage };
