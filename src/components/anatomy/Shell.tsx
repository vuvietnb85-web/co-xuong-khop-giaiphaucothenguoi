import { useEffect, useMemo, useState, type ComponentType } from "react";
import {
  Activity,
  Bone,
  CircleDot,
  GraduationCap,
  HeartPulse,
  RotateCcw,
  Scan,
  Search,
  Stethoscope,
  Volume2,
  Waypoints,
  Wind,
  X,
} from "lucide-react";
import {
  DISCLAIMER,
  PATH_INTRO,
  TICKER,
  TOPIC_BY_ID,
  TOPICS,
  quizOf,
  sideWord,
  type System,
  type Tab,
} from "@/lib/anatomy/content";
import { useAtlas } from "@/lib/anatomy/store";

const SYSTEMS: { id: System; label: string }[] = [
  { id: "cxk", label: "Cơ xương" },
  { id: "circ", label: "Tuần hoàn" },
  { id: "resp", label: "Hô hấp" },
];

const TABS: Record<System, { id: Tab; label: string; icon: typeof Bone }[]> = {
  cxk: [
    { id: "bone", label: "Xương", icon: Bone },
    { id: "muscle", label: "Cơ", icon: Activity },
    { id: "joint", label: "Khớp", icon: CircleDot },
    { id: "path", label: "Bệnh", icon: Stethoscope },
    { id: "quiz", label: "Luyện", icon: GraduationCap },
  ],
  circ: [
    { id: "heart", label: "Tim", icon: HeartPulse },
    { id: "vessel", label: "Mạch", icon: Waypoints },
    { id: "path", label: "Bệnh", icon: Stethoscope },
    { id: "quiz", label: "Luyện", icon: GraduationCap },
  ],
  resp: [
    { id: "lung", label: "Phổi", icon: Wind },
    { id: "airway", label: "Khí đạo", icon: Activity },
    { id: "path", label: "Bệnh", icon: Stethoscope },
    { id: "quiz", label: "Luyện", icon: GraduationCap },
  ],
};

const FALLBACK: Record<System, string> = {
  cxk: "Xoay mô hình bằng một ngón. Chụm để phóng. Chọn Xương, Cơ, Khớp hoặc Bệnh. Vàng là cấu trúc đang chọn.",
  circ: "Cây mạch người lớn từ atlas Z-Anatomy. Đỏ: động mạch hệ thống và tĩnh mạch phổi. Xanh: tĩnh mạch hệ thống và động mạch phổi. Nhịp là minh họa, không phải mạch của người đang xem. Buồng tim mở lát cắt Visible Human.",
  resp: "Phổi Visible Human nam, tới phân thùy phế quản-phổi. Không cùng một cơ thể với cây mạch. Bật Chi tiết để hiện phân thùy. Thở chỉ là nhịp minh họa.",
};

function speak(text: string) {
  if (typeof speechSynthesis === "undefined") return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "vi-VN";
  utter.rate = 0.98;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

export function Shell() {
  const [Stage, setStage] = useState<ComponentType | null>(null);
  const [when, setWhen] = useState("");
  const [sourceOpen, setSourceOpen] = useState(false);
  const system = useAtlas((s) => s.system);
  const heartCut = useAtlas((s) => s.heartCut);
  const tab = useAtlas((s) => s.tab);
  const ready = useAtlas((s) => s.ready);
  const error = useAtlas((s) => s.error);
  const topicId = useAtlas((s) => s.topicId);
  const meshId = useAtlas((s) => s.meshId);
  const parts = useAtlas((s) => s.parts);
  const query = useAtlas((s) => s.query);
  const studied = useAtlas((s) => s.studied);
  const isolate = useAtlas((s) => s.isolate);
  const xray = useAtlas((s) => s.xray);
  const rom = useAtlas((s) => s.rom);
  const detail = useAtlas((s) => s.detail);
  const side = useAtlas((s) => s.side);

  useEffect(() => {
    useAtlas.getState().hydrate();
    setWhen(
      new Date().toLocaleDateString("vi-VN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
    void import("@/components/anatomy/AtlasStage").then((mod) => setStage(() => mod.AtlasStage));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") useAtlas.getState().clearMesh();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const mesh = parts.find((p) => p.uuid === meshId) ?? null;
  const topic = topicId ? TOPIC_BY_ID[topicId] : undefined;
  const tabs = TABS[system];
  const list = useMemo(
    () => TOPICS.filter((item) => (item.system ?? "cxk") === system && item.tab === tab),
    [tab, system],
  );
  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return parts
      .filter(
        (p) =>
          p.vi.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.latin.toLowerCase().includes(q),
      )
      .slice(0, 24);
  }, [parts, query]);

  const title = mesh
    ? [mesh.vi, sideWord(mesh.side)].filter(Boolean).join(" ")
    : (topic?.vi ?? "Chạm một cấu trúc");
  const latin = mesh?.latin ?? topic?.latin ?? "Atlas giải phẫu mở";
  const body = topic?.body ?? (tab === "path" ? PATH_INTRO : FALLBACK[system]);
  const lessonCount = TOPICS.filter((item) => (item.system ?? "cxk") === system).length;

  return (
    <div
      className="flex h-dvh flex-col bg-ink text-paper"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,11fr)_minmax(0,2fr)] gap-1 p-1">
        <section className="gold-frame relative min-h-0 overflow-hidden bg-ink">
          <div className="absolute inset-0">{Stage ? <Stage /> : null}</div>

          <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col gap-2 p-2">
            <div className="pointer-events-auto flex items-center gap-2">
              <div className="min-w-0">
                <p className="font-display text-lg leading-none tracking-widest text-gold uppercase">
                  Atlas CXK
                </p>
                <p className="truncate text-xs text-muted">Cơ · Xương · Khớp · Tuần hoàn · Hô hấp</p>
              </div>
              <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-panel/90 px-2">
                <Search className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => useAtlas.getState().setQuery(event.target.value)}
                  placeholder={system === "cxk" ? "Tìm xương, cơ…" : "Tìm mạch, phổi…"}
                  className="w-full bg-transparent text-sm text-paper outline-none placeholder:text-muted"
                  aria-label="Tìm cấu trúc"
                />
                {query ? (
                  <button
                    type="button"
                    className="grid size-8 place-items-center text-muted"
                    onClick={() => useAtlas.getState().setQuery("")}
                    aria-label="Xóa tìm kiếm"
                  >
                    <X className="size-4" />
                  </button>
                ) : null}
              </label>
            </div>
            <div className="pointer-events-auto flex gap-1">
              {SYSTEMS.map((item) => {
                const on = system === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => useAtlas.getState().setSystem(item.id)}
                    className={
                      "h-11 flex-1 rounded-md border font-display text-sm tracking-wide uppercase " +
                      (on ? "border-gold bg-gold text-ink" : "border-line bg-panel/90 text-ivory")
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-auto no-scrollbar flex gap-1 overflow-x-auto">
              {tabs.map((item) => {
                const Icon = item.icon;
                const on = tab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => useAtlas.getState().setTab(item.id)}
                    className={
                      "flex h-11 shrink-0 items-center gap-1 rounded-md border px-3 font-display text-sm tracking-wide uppercase " +
                      (on
                        ? "border-gold bg-gold text-ink"
                        : "border-line bg-panel/90 text-ivory")
                    }
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </header>

          {system !== "cxk" ? (
            <div className="pointer-events-none absolute top-40 left-2 z-10 flex flex-col gap-1">
              {system === "circ" ? (
                <>
                  <span className="rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper">
                    Đỏ · máu giàu oxy
                  </span>
                  <span className="rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper">
                    Xanh · máu nghèo oxy
                  </span>
                </>
              ) : (
                <>
                  <span className="rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper">
                    Hồng · nhu mô phổi
                  </span>
                  <span className="rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper">
                    Kem · khí quản, phế quản
                  </span>
                </>
              )}
            </div>
          ) : null}

          {!ready && !error ? (
            <div className="absolute inset-0 grid place-items-center bg-ink/95 px-6 text-center">
              <div>
                <p className="font-display text-xl tracking-widest text-gold uppercase">
                  Đang mở atlas
                </p>
                <p className="mt-2 text-sm text-muted">
                  Mô hình hợp pháp, giải nén trên máy — vài giây.
                </p>
              </div>
            </div>
          ) : null}
          {error ? (
            <div className="absolute inset-x-6 bottom-24 rounded-md border border-gold bg-panel p-4 text-sm">
              {error}
            </div>
          ) : null}

          {query.trim().length >= 2 ? (
            <div className="absolute inset-x-2 top-44 z-20 max-h-1/2 overflow-auto rounded-md border border-line bg-panel">
              {hits.length === 0 ? (
                <p className="p-3 text-sm text-muted">Không thấy cấu trúc khớp với chữ vừa gõ.</p>
              ) : (
                hits.map((hit) => (
                  <button
                    key={hit.uuid}
                    type="button"
                    className="flex min-h-11 w-full items-baseline justify-between gap-3 border-b border-line px-3 py-2 text-left last:border-b-0"
                    onClick={() => useAtlas.getState().pickMesh(hit.uuid)}
                  >
                    <span className="text-sm text-paper">
                      {hit.vi}
                      {sideWord(hit.side) ? ` ${sideWord(hit.side)}` : ""}
                    </span>
                    <span className="shrink-0 text-xs text-muted">{hit.latin}</span>
                  </button>
                ))
              )}
            </div>
          ) : null}

          <div className="absolute inset-x-2 bottom-2 z-10 flex max-h-1/2 flex-col gap-2 overflow-hidden">
            {tab === "quiz" ? (
              <QuizCard />
            ) : (
              <div className="no-scrollbar flex gap-2 overflow-x-auto">
                {list.map((item) => {
                  const on = topicId === item.id && !mesh;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => useAtlas.getState().pickTopic(item.id)}
                      className={
                        "h-11 shrink-0 rounded-md border px-3 text-sm " +
                        (on
                          ? "border-gold bg-navy text-gold"
                          : "border-line bg-panel/90 text-paper")
                      }
                    >
                      {item.vi}
                    </button>
                  );
                })}
              </div>
            )}
            {tab !== "quiz" && (mesh || topic || tab === "path") ? (
              <article className="min-h-0 overflow-auto rounded-md border border-line bg-panel/95 p-3">
                <h2 className="font-display text-base tracking-wide text-gold uppercase">{title}</h2>
                <p className="text-xs text-ivory">{latin}</p>
                <p className="mt-2 text-sm text-paper">{body}</p>
                {topic?.board ? (
                  <div className="mt-2 grid gap-1 text-sm">
                    <p>
                      <span className="font-display tracking-wide text-gold uppercase">Nhận diện </span>
                      {topic.board.see}
                    </p>
                    <p>
                      <span className="font-display tracking-wide text-gold uppercase">Ôn trên hình </span>
                      {topic.board.step}
                    </p>
                    <p className="text-ivory">
                      <span className="font-display tracking-wide text-gold uppercase">Cờ đỏ </span>
                      {topic.board.flag}
                    </p>
                  </div>
                ) : null}
                {system !== "cxk" || tab === "path" ? (
                  <p className="mt-2 text-xs text-muted">{DISCLAIMER}</p>
                ) : null}
                {heartCut ? (
                  <p className="mt-2 text-xs text-ivory">
                    Buồng tim Visible Human — không có cây mạch. Tắt nút Buồng tim để xem toàn bộ hệ mạch.
                  </p>
                ) : null}
              </article>
            ) : null}
          </div>
        </section>

        <section className="gold-frame flex min-h-0 flex-col justify-center gap-1 overflow-hidden bg-panel px-2 py-1">
          <div className="overflow-hidden text-gold">
            <div className="ticker-track font-display text-xs tracking-widest uppercase">
              <span className="px-3">{TICKER}</span>
              <span className="px-3">{TICKER}</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 text-xs text-muted">
            <span className="truncate capitalize">{when || "—"}</span>
            <span className="shrink-0">
              Đã xem {studied.length} · {lessonCount} bài hệ này
            </span>
          </div>
          <div className="no-scrollbar flex gap-1 overflow-x-auto">
            <Chip on={false} label="Nghe" icon={Volume2} onClick={() => speak(`${title}. ${body}`)} />
            <Chip
              on={isolate}
              label="Cô lập"
              icon={Scan}
              onClick={() => useAtlas.getState().toggle("isolate")}
            />
            <Chip
              on={xray}
              label="X-quang"
              icon={Bone}
              onClick={() => useAtlas.getState().toggle("xray")}
            />
            <Chip
              on={rom}
              label={system === "circ" ? "Nhịp" : system === "resp" ? "Thở" : "Biên độ"}
              icon={Activity}
              disabled={system === "cxk" && !topic?.rom}
              onClick={() => useAtlas.getState().toggle("rom")}
            />
            <Chip
              on={detail}
              label="Chi tiết"
              icon={CircleDot}
              onClick={() => useAtlas.getState().toggle("detail")}
            />
            {system === "circ" ? (
              <Chip
                on={heartCut}
                label="Buồng tim"
                icon={HeartPulse}
                onClick={() => useAtlas.getState().toggleHeart()}
              />
            ) : null}
            <Chip
              on={false}
              label="Giữa"
              icon={RotateCcw}
              onClick={() => useAtlas.getState().resetView()}
            />
            {(["cả", "trái", "phải"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => useAtlas.getState().setSide(value)}
                className={
                  "h-11 shrink-0 rounded-md border px-3 text-sm capitalize " +
                  (side === value
                    ? "border-gold bg-gold text-ink"
                    : "border-line bg-panel-2 text-ivory")
                }
              >
                {value}
              </button>
            ))}
            <button
              type="button"
              className="h-11 shrink-0 rounded-md border border-line px-3 text-sm text-ivory"
              onClick={() => setSourceOpen(true)}
            >
              Nguồn
            </button>
          </div>
        </section>
      </div>

      {sourceOpen ? (
        <div className="absolute inset-0 z-30 grid place-items-end bg-ink/70 p-3">
          <article className="gold-frame max-h-4/5 w-full max-w-lg overflow-auto bg-panel p-4">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg tracking-wide text-gold uppercase">
                Nguồn mô hình
              </h2>
              <button
                type="button"
                className="grid size-11 place-items-center"
                onClick={() => setSourceOpen(false)}
                aria-label="Đóng nguồn"
              >
                <X />
              </button>
            </div>
            <p className="mt-2 text-sm text-paper">
              Cơ–xương–khớp: atlas nam người lớn dẫn xuất Z-Anatomy (CC BY-SA 4.0), gốc
              BodyParts3D của Database Center for Life Science, Nhật Bản (CC BY-SA 2.1 Japan).
              Bản nén trình duyệt do hpfrei xuất.
            </p>
            <p className="mt-2 text-sm text-paper">
              Tuần hoàn: cùng atlas Z-Anatomy, bản glTF hệ mạch do Dr. Murat Altun xuất trong
              anatomi-simulatoru, giữ giấy phép CC BY-SA 4.0. Buồng tim là mô hình
              VH_M_Heart không chỉnh sửa của HuBMAP Human Reference Atlas v1.2, CC BY 4.0,
              từ Visible Human nam.
            </p>
            <p className="mt-2 text-sm text-paper">
              Hô hấp: VH_M_Lung không chỉnh sửa, cùng thư viện HuBMAP / Visible Human, CC BY 4.0
              (Kristen Browne và nhóm Human Reference Atlas). Phổi và cây mạch không phải cùng một
              cơ thể, không chồng lên nhau.
            </p>
            <p className="mt-2 text-sm text-ivory">{DISCLAIMER}</p>
            <p className="mt-2 text-xs text-muted">
              Trái / phải là bên của hình người trong atlas, không phải bên tay người xem.
            </p>
          </article>
        </div>
      ) : null}
    </div>
  );
}

function Chip({
  on,
  label,
  icon: Icon,
  onClick,
  disabled,
}: {
  on: boolean;
  label: string;
  icon: typeof Bone;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={
        "flex h-11 shrink-0 items-center gap-1 rounded-md border px-3 text-sm disabled:opacity-40 " +
        (on ? "border-gold bg-navy text-gold" : "border-line bg-panel-2 text-ivory")
      }
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
    </button>
  );
}

function QuizCard() {
  const system = useAtlas((s) => s.system);
  const quizIndex = useAtlas((s) => s.quizIndex);
  const quizScore = useAtlas((s) => s.quizScore);
  const quizChoice = useAtlas((s) => s.quizChoice);
  const quizDone = useAtlas((s) => s.quizDone);
  const bank = quizOf(system);
  const item = bank[quizIndex];

  if (quizDone || !item) {
    return (
      <article className="rounded-md border border-line bg-panel/95 p-3">
        <h2 className="font-display tracking-wide text-gold uppercase">Kết quả luyện</h2>
        <p className="mt-1 text-sm">
          {quizScore}/{bank.length} câu đúng. Sau mỗi câu, cấu trúc liên quan được tô vàng trên mô hình.
        </p>
        <button
          type="button"
          className="mt-2 h-11 rounded-md bg-gold px-4 font-display tracking-wide text-ink uppercase"
          onClick={() => useAtlas.getState().resetQuiz()}
        >
          Làm lại
        </button>
      </article>
    );
  }

  return (
    <article className="min-h-0 overflow-auto rounded-md border border-line bg-panel/95 p-3">
      <p className="text-xs text-muted">
        Câu {quizIndex + 1}/{bank.length} · đúng {quizScore}
      </p>
      <h2 className="mt-1 text-sm text-paper">{item.q}</h2>
      <div className="mt-2 grid gap-1">
        {item.options.map((option, index) => {
          const picked = quizChoice === index;
          const show = quizChoice !== null;
          const correct = index === item.a;
          const tone = !show
            ? "border-line bg-panel-2 text-paper"
            : correct
              ? "border-gold bg-navy text-gold"
              : picked
                ? "border-muscle bg-panel-2 text-ivory"
                : "border-line bg-panel-2 text-muted";
          return (
            <button
              key={option}
              type="button"
              className={"min-h-11 rounded-md border px-3 text-left text-sm " + tone}
              onClick={() => useAtlas.getState().answer(index)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {quizChoice !== null ? (
        <div className="mt-2">
          <p className="text-sm text-ivory">{item.explain}</p>
          <button
            type="button"
            className="mt-2 h-11 rounded-md bg-gold px-4 font-display tracking-wide text-ink uppercase"
            onClick={() => useAtlas.getState().nextQuiz()}
          >
            {quizIndex + 1 >= bank.length ? "Xem điểm" : "Câu tiếp"}
          </button>
        </div>
      ) : null}
    </article>
  );
}
