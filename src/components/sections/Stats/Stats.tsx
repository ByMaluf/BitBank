import Reveal from "@/components/ui/Reveal";
import { stats } from "./content";

export default function Stats() {
  return (
    <section className="border-b border-line bg-ink-900">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-8 py-11 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} duration={600} easing="ease">
            <div
              className={`text-[34px] font-bold tracking-[-0.03em] ${s.gold ? "text-gold" : ""}`}
            >
              {s.value}
            </div>
            <div className="mt-1.5 font-mono text-xs text-mute-2">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
