import { useState } from "react";
import Reveal from "./Reveal";
import { plans } from "../content";

type Cycle = "monthly" | "annual";

export default function Pricing({ defaultAnnual = false }: { defaultAnnual?: boolean }) {
  const [cycle, setCycle] = useState<Cycle>(defaultAnnual ? "annual" : "monthly");

  const tab = (active: boolean) =>
    `cursor-pointer rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors ${
      active ? "bg-gold text-ink-950" : "text-mute hover:text-cream"
    }`;

  return (
    <section id="precos" className="border-b border-line bg-ink-900">
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <Reveal easing="ease" className="mb-13 flex flex-wrap items-end justify-between gap-10">
          <div className="max-w-[560px]">
            <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">QUANTO CUSTA</div>
            <h2 className="text-[44px] leading-[1.06] font-bold tracking-[-0.03em]">
              Sem tarifa escondida no rodapé.
            </h2>
          </div>
          <div className="flex items-center gap-2.5 rounded-full border border-line-3 bg-ink-800 p-1">
            <button type="button" onClick={() => setCycle("monthly")} className={tab(cycle === "monthly")}>
              Mensal
            </button>
            <button type="button" onClick={() => setCycle("annual")} className={tab(cycle === "annual")}>
              Anual −20%
            </button>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} duration={600} easing="ease">
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  p.featured ? "border-gold bg-ink-750" : "border-line bg-ink-800"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-[11px] left-8 rounded-full bg-gold px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.08em] text-ink-950">
                    MAIS ESCOLHIDO
                  </span>
                )}
                <div className="mb-1.5 text-[15px] font-semibold tracking-[0.02em]">{p.name}</div>
                <div
                  className={`mb-6 font-mono text-xs ${p.featured ? "text-[#8A8172]" : "text-mute-2"}`}
                >
                  {p.audience}
                </div>
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span
                    className={`text-[40px] font-bold tracking-[-0.03em] ${p.featured ? "text-gold" : ""}`}
                  >
                    {p.price[cycle]}
                  </span>
                  <span className={`text-sm ${p.featured ? "text-[#8A8172]" : "text-mute-2"}`}>
                    /mês
                  </span>
                </div>
                <div
                  className={`mb-7 font-mono text-xs ${p.featured ? "text-[#8A8172]" : "text-mute-2"}`}
                >
                  {p.note[cycle]}
                </div>
                <div className="mb-8 grid gap-3">
                  {p.items.map((it) => (
                    <div
                      key={it}
                      className={`text-[14.5px] ${p.featured ? "text-cream-2" : "text-sub"}`}
                    >
                      {it}
                    </div>
                  ))}
                </div>
                <a
                  href="#waitlist"
                  className={`mt-auto rounded-[10px] py-3.5 text-center text-[15px] ${
                    p.featured
                      ? "bg-gold font-semibold text-ink-950 hover:bg-gold-hi hover:text-ink-950"
                      : "border border-line-3 font-medium text-cream hover:border-[#4A4238] hover:text-cream"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
