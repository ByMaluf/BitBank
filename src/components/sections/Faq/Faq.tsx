import Reveal from "@/components/ui/Reveal";
import { faq } from "./content";

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5C542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export default function Faq() {
  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-8 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal easing="ease">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">DÚVIDAS HONESTAS</div>
          <h2 className="mb-4 text-[40px] leading-[1.06] font-bold tracking-[-0.03em]">
            Perguntas diretas, respostas diretas.
          </h2>
          <p className="text-base leading-[1.6] text-mute">
            Não encontrou? Escreva para <a href="#waitlist">suporte@bitbank.dev</a> — respondemos em até 4
            horas úteis.
          </p>
        </Reveal>
        <Reveal delay={80} easing="ease" className="grid gap-px border-y border-line bg-line">
          {faq.map((item) => (
            <details key={item.q} className="bg-ink-950 px-1 py-5">
              <summary className="flex items-center justify-between gap-6 text-[17px] font-medium text-cream">
                <span>{item.q}</span>
                <Plus />
              </summary>
              <p className="mt-4 max-w-[62ch] text-[15.5px] leading-[1.65] text-mute">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
