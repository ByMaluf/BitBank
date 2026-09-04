import Reveal from "@/components/ui/Reveal";
import { testimonials } from "./content";

type Testimonial = (typeof testimonials)[number];

const groupA = testimonials.filter((_, i) => i % 2 === 0);
const groupB = testimonials.filter((_, i) => i % 2 === 1).reverse();
const rowA = [...groupA, ...groupA];
const rowBLoop = [...groupB, ...groupB];

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="mr-5 flex h-36 w-[26rem] shrink-0 items-center gap-4 rounded-2xl bg-white/[0.03] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.2px]">
      <img src={t.photo} alt={t.name} className="size-12 shrink-0 rounded-full object-cover" />
      <div className="min-w-0">
        <p className="line-clamp-3 text-[0.875rem] leading-[1.45] text-cream-2">{t.quote}</p>
        <div className="mt-2 text-[0.8125rem] font-semibold">{t.name}</div>
        <div className="font-mono text-[0.65rem] text-mute-2">{t.role}</div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden border-b border-line bg-ink-950 bg-no-repeat"
      style={{
        backgroundImage:
          "radial-gradient(1400px 950px at 0% 0%, rgba(10,9,8,0.15) 0%, rgba(10,9,8,0.35) 30%, rgba(10,9,8,0.6) 50%, rgba(10,9,8,0.85) 70%, #0A0908 100%), url('/assets/empresa_bitbank.png')",
        backgroundSize: "auto, 70%",
        backgroundPosition: "center, left top",
      }}
    >
      <div className="relative mx-auto max-w-[75rem] px-8 pt-24">
        <Reveal easing="ease" className="mb-13">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">PESSOAS REAIS</div>
          <h2 className="text-[2.75rem] leading-[1.06] font-bold tracking-[-0.03em]">
            Feito com quem escreve código.
          </h2>
        </Reveal>
      </div>

      <Reveal easing="ease" delay={100} className="relative grid gap-5">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowBLoop} reverse />
      </Reveal>

      <div className="pb-24" />
    </section>
  );
}
