import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import Kicker from "@/components/ui/Kicker";
import { features } from "./content";

export default function Features() {
  return (
    <Section id="produto" bg="bg-ink-900" containerClassName="py-24">
      <Reveal easing="ease" className="mb-14 max-w-[40rem]">
        <Kicker>O QUE TEM DENTRO</Kicker>
        <h2 className="mb-4 text-display leading-[1.06] font-bold tracking-[-0.03em]">
          Um banco que aceita <span className="text-gold">git push</span>.
        </h2>
        <p className="text-body leading-[1.6] text-mute">
          Tudo que você faz no app existe como endpoint. Tudo que acontece na conta vira webhook.
        </p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((ft, i) => (
          <Reveal key={ft.kicker} delay={(i % 3) * 60} duration={600} easing="ease">
            <div className="h-full rounded-card border border-line bg-ink-800 p-7 transition-colors hover:border-line-4">
              <div className="mb-5 font-mono text-2xs tracking-[0.14em] text-gold">{ft.kicker}</div>
              <h3 className="mb-2.5 text-xl font-semibold tracking-[-0.01em]">{ft.title}</h3>
              <p className="text-body-sm leading-[1.6] text-mute">{ft.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
