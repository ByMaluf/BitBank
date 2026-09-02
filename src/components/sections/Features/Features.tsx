import Reveal from "@/components/ui/Reveal";
import { features } from "./content";

export default function Features() {
  return (
    <section id="produto" className="border-b border-line bg-ink-900">
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <Reveal easing="ease" className="mb-14 max-w-[640px]">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">O QUE TEM DENTRO</div>
          <h2 className="mb-4 text-[44px] leading-[1.06] font-bold tracking-[-0.03em]">
            Um banco que aceita <span className="text-gold">git push</span>.
          </h2>
          <p className="text-[17px] leading-[1.6] text-mute">
            Tudo que você faz no app existe como endpoint. Tudo que acontece na conta vira webhook.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((ft, i) => (
            <Reveal key={ft.kicker} delay={(i % 3) * 60} duration={600} easing="ease">
              <div className="h-full rounded-[14px] border border-line bg-ink-800 p-7 transition-colors hover:border-[#3B342A]">
                <div className="mb-5 font-mono text-[11px] tracking-[0.14em] text-gold">{ft.kicker}</div>
                <h3 className="mb-2.5 text-xl font-semibold tracking-[-0.01em]">{ft.title}</h3>
                <p className="text-[15px] leading-[1.6] text-mute">{ft.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
