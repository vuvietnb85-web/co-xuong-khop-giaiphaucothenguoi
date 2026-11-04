import { create } from "zustand";
import {
  quizOf,
  TOPIC_BY_ID,
  TOPICS,
  type Side,
  type System,
  type Tab,
} from "@/lib/anatomy/content";
import type { Tone } from "@/lib/anatomy/systems";

const KEY = "atlas-cxk-v2";

export type Part = {
  uuid: string;
  name: string;
  vi: string;
  latin: string;
  kind: Tone;
  side: Side;
  topicId: string | null;
};

export type Pivot = {
  id: string;
  topicId: string;
  side: Side;
  x: number;
  y: number;
  z: number;
};

type Persisted = {
  studied: string[];
  quizBest: number;
};

type AtlasState = {
  ready: boolean;
  error: string | null;
  parts: Part[];
  pivots: Pivot[];
  radius: number;
  halfY: number;
  system: System;
  heartCut: boolean;
  tab: Tab;
  topicId: string | null;
  meshId: string | null;
  isolate: boolean;
  xray: boolean;
  rom: boolean;
  side: "cả" | Side;
  detail: boolean;
  query: string;
  studied: string[];
  quizBest: number;
  quizIndex: number;
  quizScore: number;
  quizChoice: number | null;
  quizDone: boolean;
  boot: (payload: {
    parts: Part[];
    pivots: Pivot[];
    radius: number;
    halfY: number;
  }) => void;
  fail: (message: string) => void;
  hydrate: () => void;
  setSystem: (system: System) => void;
  toggleHeart: () => void;
  setTab: (tab: Tab) => void;
  setQuery: (query: string) => void;
  pickTopic: (id: string) => void;
  pickMesh: (uuid: string) => void;
  clearMesh: () => void;
  resetView: () => void;
  toggle: (key: "isolate" | "xray" | "rom" | "detail") => void;
  setSide: (side: "cả" | Side) => void;
  answer: (index: number) => void;
  nextQuiz: () => void;
  resetQuiz: () => void;
};

function readPersist(): Persisted {
  if (typeof localStorage === "undefined") return { studied: [], quizBest: 0 };
  try {
    const raw = localStorage.getItem(KEY) ?? localStorage.getItem("atlas-cxk-v1");
    if (!raw) return { studied: [], quizBest: 0 };
    const data = JSON.parse(raw) as Partial<Persisted>;
    return {
      studied: Array.isArray(data.studied) ? data.studied.slice(0, 400) : [],
      quizBest: typeof data.quizBest === "number" ? data.quizBest : 0,
    };
  } catch {
    return { studied: [], quizBest: 0 };
  }
}

function writePersist(studied: string[], quizBest: number) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ studied, quizBest }));
  } catch {
    /* bộ nhớ đầy thì bỏ qua, vẫn học được trong phiên */
  }
}

const TAB_OF: Record<System, Tab> = {
  cxk: "bone",
  circ: "heart",
  resp: "lung",
};

export const useAtlas = create<AtlasState>((set, get) => ({
  ready: false,
  error: null,
  parts: [],
  pivots: [],
  radius: 1,
  halfY: 0.8,
  system: "cxk",
  heartCut: false,
  tab: "bone",
  topicId: null,
  meshId: null,
  isolate: false,
  xray: false,
  rom: false,
  side: "cả",
  detail: false,
  query: "",
  studied: [],
  quizBest: 0,
  quizIndex: 0,
  quizScore: 0,
  quizChoice: null,
  quizDone: false,
  boot: (payload) => set({ ready: true, error: null, ...payload }),
  fail: (message) => set({ error: message, ready: false }),
  hydrate: () => set(readPersist()),
  setSystem: (system) =>
    set({
      system,
      heartCut: false,
      tab: TAB_OF[system],
      topicId: null,
      meshId: null,
      rom: false,
      isolate: false,
      query: "",
      ready: false,
      error: null,
      parts: [],
      quizIndex: 0,
      quizScore: 0,
      quizChoice: null,
      quizDone: false,
    }),
  toggleHeart: () =>
    set({
      heartCut: !get().heartCut,
      system: "circ",
      tab: "heart",
      topicId: null,
      meshId: null,
      rom: false,
      ready: false,
      error: null,
      parts: [],
    }),
  setTab: (tab) => {
    const first =
      tab === "path"
        ? TOPICS.find((item) => (item.system ?? "cxk") === get().system && item.tab === "path")
        : undefined;
    set({
      tab,
      topicId: first?.id ?? null,
      meshId: null,
      rom: false,
      query: "",
    });
  },
  setQuery: (query) => set({ query }),
  pickTopic: (id) => {
    const studied = Array.from(new Set([...get().studied, id]));
    writePersist(studied, get().quizBest);
    set({ topicId: id, meshId: null, rom: false, studied, query: "" });
  },
  pickMesh: (uuid) => {
    const part = get().parts.find((p) => p.uuid === uuid);
    const studied = part
      ? Array.from(new Set([...get().studied, part.uuid]))
      : get().studied;
    if (part) writePersist(studied, get().quizBest);
    const current = get().topicId;
    const stillFits = Boolean(current && part && TOPIC_BY_ID[current]?.match(part.name));
    set({
      meshId: uuid,
      topicId: stillFits ? current : (part?.topicId ?? null),
      studied,
      rom: false,
    });
  },
  clearMesh: () => set({ meshId: null }),
  resetView: () => set({ topicId: null, meshId: null, rom: false, isolate: false }),
  toggle: (key) => set((s) => ({ [key]: !s[key] })),
  setSide: (side) => set({ side, rom: false }),
  answer: (index) => {
    const { quizChoice, quizIndex, quizScore, quizBest, studied, system } = get();
    if (quizChoice !== null) return;
    const bank = quizOf(system);
    const correct = index === bank[quizIndex]?.a;
    const score = quizScore + (correct ? 1 : 0);
    const best = Math.max(quizBest, score);
    writePersist(studied, best);
    set({ quizChoice: index, quizScore: score, quizBest: best });
  },
  nextQuiz: () => {
    const { quizIndex, system } = get();
    if (quizIndex + 1 >= quizOf(system).length) set({ quizDone: true });
    else set({ quizIndex: quizIndex + 1, quizChoice: null });
  },
  resetQuiz: () => set({ quizIndex: 0, quizScore: 0, quizChoice: null, quizDone: false }),
}));
