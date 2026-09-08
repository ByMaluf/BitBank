import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import Kicker from "@/components/ui/Kicker";
import { steps } from "./content";

export default function Quickstart() {
  return (
    <Section id="docs" bg="bg-ink-900" containerClassName="py-24">
      <Reveal easing="ease" className="mb-13 max-w-[38.75rem]">
        <Kicker>OS PRIMEIROS 4 MINUTOS</Kicker>
        <h2 className="mb-4 text-display leading-[1.06] font-bold tracking-[-0.03em]">
          Do zero ao primeiro PIX em 3 passos.
        </h2>
        <p className="text-body leading-[1.6] text-mute">
          Sem contrato, sem call de onboarding. Crie a conta, pegue a chave de sandbox e chame a
          API.
        </p>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 70} duration={600} easing="ease">
            <div className="h-full bg-ink-800 p-8">
              <div className="mb-4.5 font-mono text-2xs text-gold">{s.n}</div>
              <h3 className="mb-2.5 text-md font-semibold">{s.title}</h3>
              <p className="mb-5 line-clamp-3 min-h-[4.5rem] text-body-sm leading-[1.6] text-mute">{s.body}</p>
              <code className="block rounded-lg border border-line bg-ink-850 px-3.5 py-3 font-mono text-xs-mono text-sub">
                {s.code}
              </code>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
