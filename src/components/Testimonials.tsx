import Reveal from "./Reveal";
import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <Reveal easing="ease" className="mb-13">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">TRÊS PESSOAS REAIS</div>
          <h2 className="text-[44px] leading-[1.06] font-bold tracking-[-0.03em]">
            Feito com quem escreve código.
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70} duration={600} easing="ease">
              <div className="h-full rounded-[14px] border border-line bg-ink-800 p-7">
                <p className="mb-6 text-[16.5px] leading-[1.6] text-cream-2">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <span className="size-[34px] rounded-full bg-[repeating-linear-gradient(135deg,#232019_0_6px,#1C1A17_6px_12px)]" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="font-mono text-[11.5px] text-mute-2">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
