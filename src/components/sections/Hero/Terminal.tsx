import { useEffect, useRef, useState } from "react";
import { terminalLines } from "./content";

const CHAR_MS = 22;
const OUT_MS = 420;
const TAIL_MS = 320;

const durations = terminalLines.map((l) =>
  l.kind === "cmd" ? l.text.length * CHAR_MS + TAIL_MS : OUT_MS,
);

function useTypewriter(enabled = true) {
  const [elapsed, setElapsed] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (!enabled || typeof requestAnimationFrame !== "function") {
      setElapsed(Infinity);
      return;
    }
    const total = durations.reduce((a, b) => a + b, 0);
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now + 450;
      const t = now - start;
      setElapsed(t);
      if (t < total) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [enabled]);

  return terminalLines.map((line, i) => {
    const before = durations.slice(0, i).reduce((a, b) => a + b, 0);
    const local = elapsed - before;
    if (local < 0) return { ...line, shown: "", visible: false, active: false };
    if (local >= durations[i])
      return { ...line, shown: line.text, visible: true, active: false };
    return {
      ...line,
      shown: line.kind === "cmd" ? line.text.slice(0, Math.floor(local / CHAR_MS)) : line.text,
      visible: true,
      active: true,
    };
  });
}

const color = { cmd: "text-cream", ok: "text-term", out: "text-sub" } as const;

export default function Terminal({ minHeight = "18.75rem" }: { minHeight?: string }) {
  const lines = useTypewriter();

  return (
    <div className="overflow-hidden rounded-xl border border-line-2 bg-ink-850 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-line bg-ink-800 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#33302B]" />
        <span className="size-2.5 rounded-full bg-[#33302B]" />
        <span className="size-2.5 rounded-full bg-[#33302B]" />
        <span className="ml-2 font-mono text-[0.6875rem] text-mute-2">~/projetos/bitbank</span>
      </div>
      <div
        className="grid gap-0.5 px-5 pt-5 pb-6 font-mono text-[0.8125rem] leading-[1.85]"
        style={{ minHeight }}
      >
        {lines.map((l, i) => (
          <div key={i} className={l.visible ? color[l.kind] : "invisible"}>
            {l.kind === "cmd" && <span className="text-gold">$ </span>}
            {l.shown}
            {l.active && (
              <span className="ml-0.5 animate-blink text-gold" aria-hidden>
                █
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
