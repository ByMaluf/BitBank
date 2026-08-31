import Reveal from "./Reveal";
import { steps } from "../content";

export default function Quickstart() {
  return (
    <section id="docs" className="border-b border-line bg-ink-900">
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <Reveal className="mb-13 max-w-[620px]">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">OS PRIMEIROS 4 MINUTOS</div>
          <h2 className="mb-4 text-[44px] leading-[1.06] font-bold tracking-[-0.03em]">
            Do zero ao primeiro PIX em 3 passos.
          </h2>
          <p className="text-[17px] leading-[1.6] text-mute">
            Sem contrato, sem call de onboarding. Crie a conta, pegue a chave de sandbox e chame a
            API.
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="h-full bg-ink-800 p-8">
                <div className="mb-4.5 font-mono text-[11px] text-gold">{s.n}</div>
                <h3 className="mb-2.5 text-[19px] font-semibold">{s.title}</h3>
                <p className="mb-5 text-[15px] leading-[1.6] text-mute">{s.body}</p>
                <code className="block rounded-lg border border-line bg-ink-850 px-3.5 py-3 font-mono text-[12.5px] text-sub">
                  {s.code}
                </code>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
