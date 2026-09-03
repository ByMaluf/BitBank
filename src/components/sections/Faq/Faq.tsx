import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { faq } from "./content";

const Plus = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F5C542"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${open ? "rotate-45" : ""}`}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-ink-950 px-1 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 text-left text-[17px] font-medium text-cream"
      >
        <span>{q}</span>
        <Plus open={open} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-4 max-w-[62ch] text-[15.5px] leading-[1.65] text-mute">{a}</p>
        </div>
      </div>
    </div>
  );
}

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
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
