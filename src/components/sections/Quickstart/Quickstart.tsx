import Reveal from "@/components/ui/Reveal";
import { steps } from "./content";

export default function Quickstart() {
  return (
    <section id="docs" className="border-b border-line bg-ink-900">
      <div className="mx-auto max-w-[75rem] px-8 py-24">
        <Reveal easing="ease" className="mb-13 max-w-[38.75rem]">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">OS PRIMEIROS 4 MINUTOS</div>
          <h2 className="mb-4 text-[2.75rem] leading-[1.06] font-bold tracking-[-0.03em]">
            Do zero ao primeiro PIX em 3 passos.
          </h2>
          <p className="text-[1.0625rem] leading-[1.6] text-mute">
            Sem contrato, sem call de onboarding. Crie a conta, pegue a chave de sandbox e chame a
            API.
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-[0.875rem] border border-line bg-line md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} duration={600} easing="ease">
              <div className="h-full bg-ink-800 p-8">
                <div className="mb-4.5 font-mono text-[0.6875rem] text-gold">{s.n}</div>
                <h3 className="mb-2.5 text-[1.1875rem] font-semibold">{s.title}</h3>
                <p className="mb-5 text-[0.9375rem] leading-[1.6] text-mute">{s.body}</p>
                <code className="block rounded-lg border border-line bg-ink-850 px-3.5 py-3 font-mono text-[0.78125rem] text-sub">
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
