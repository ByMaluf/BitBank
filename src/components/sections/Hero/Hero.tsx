import Reveal from "@/components/ui/Reveal";
import Terminal from "./Terminal";

export type HeroVariant = "split" | "centered";

const Badge = () => (
  <div className="inline-flex items-center gap-2.5 rounded-full border border-line-3 bg-ink-800 py-1.5 pr-3.5 pl-2">
    <span className="rounded-full bg-gold px-1.5 py-0.5 font-mono text-3xs font-bold tracking-[0.08em] text-ink-950">
      NOVO
    </span>
    <span className="font-mono text-xs text-sub">cashback em cripto: até 6% do que você gasta em cloud</span>
  </div>
);

const Ctas = ({ center = false }: { center?: boolean }) => (
  <div className={`flex gap-2.5 sm:gap-3.5 ${center ? "justify-center" : ""}`}>
    <a
      href="#waitlist"
      className="flex-1 rounded-btn bg-gold px-2.5 py-2 text-center text-xs font-semibold whitespace-nowrap text-ink-950 hover:bg-gold-hi hover:text-ink-950 sm:flex-initial sm:px-3.5 sm:text-sm"
    >
      Criar conta grátis
    </a>
    <a
      href="#docs"
      className="flex-1 rounded-btn border border-line-3 bg-ink-800 px-2.5 py-2 text-center text-xs font-medium whitespace-nowrap text-cream hover:border-line-hover hover:text-cream sm:flex-initial sm:px-3.5 sm:text-sm"
    >
      Ver a documentação
    </a>
  </div>
);

const Title = ({ className }: { className: string }) => (
  <h1 className={className}>
    Automatize suas finanças, <span className="text-gold">codifique sua liberdade.</span>
  </h1>
);

const HERO_BG = "/assets/hero-cartoes-bg3x.jpg";

export default function Hero({ variant = "split" }: { variant?: HeroVariant }) {
  if (variant === "centered") {
    return (
      <section
        id="topo"
        className="relative z-0 border-b border-line bg-ink-950 bg-cover bg-[position:center,center,30%] bg-no-repeat pt-[5.25rem]"
        style={{
          backgroundImage: `radial-gradient(700px 320px at 50% -10%, rgba(245,197,66,0.12), transparent 70%), linear-gradient(180deg, rgba(10,9,8,0.72) 0%, rgba(10,9,8,0.66) 30%, rgba(10,9,8,0.38) 62%, #0A0908 100%), url('${HERO_BG}')`,
          backgroundSize: "auto, auto, min(1254px, 115%)",
        }}
      >
        <div className="mx-auto max-w-[56.25rem] px-8 pt-[7.5rem] text-center">
          <Reveal>
            <Badge />
          </Reveal>
          <Reveal delay={60}>
            <Title className="mx-auto mt-8 mb-6 max-w-[20ch] text-5xl leading-[0.98] font-bold tracking-[-0.04em] md:text-[4.75rem]" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mb-9 max-w-[56ch] text-xl leading-[1.5] text-mute">
              Conta PF e PJ com PIX, boleto e cartão — e uma API pra tudo que você faria clicando. O que
              você gasta em cloud volta em bitcoin, ether ou USDC.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mb-16">
              <Ctas center />
            </div>
          </Reveal>
        </div>
        <Reveal delay={220} duration={800} className="mx-auto max-w-[53.75rem] px-8">
          <div className="[&>div]:rounded-b-none [&>div]:border-b-0 [&>div]:shadow-[0_-30px_90px_-50px_rgba(245,197,66,0.35)]">
            <Terminal minHeight="16.25rem" />
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section
      id="topo"
      className="relative z-0 flex min-h-screen flex-col border-b border-line bg-ink-950 bg-no-repeat pt-[3.5rem] [background-position:bottom] lg:[background-position:center]"
      style={{
        backgroundImage: `radial-gradient(900px 380px at 50% -8%, rgba(245,197,66,0.10), transparent 70%), linear-gradient(180deg, rgba(10,9,8,0) 45%, rgba(10,9,8,0.55) 80%, #0A0908 100%), linear-gradient(90deg, rgba(10,9,8,0.82) 0%, rgba(10,9,8,0.3) 50%, rgba(10,9,8,0.82) 100%), url('${HERO_BG}')`,
        backgroundSize: "auto, auto, auto, 100%",
      }}
    >
      <div className="mx-auto grid w-full max-w-[75rem] flex-1 content-center items-center gap-16 px-8 py-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <div className="mb-7">
              <Badge />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <Title className="mb-6 max-w-[15ch] text-5xl leading-[1.02] font-bold tracking-[-0.035em] md:text-[3.875rem]" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-9 max-w-[46ch] text-md leading-[1.55] text-sub [text-shadow:0_2px_12px_rgba(10,9,8,0.9)]">
              Conta PF e PJ com PIX, boleto e cartão, e uma API pra tudo que você faria clicando. O que
              você gasta em AWS, GCP, Azure ou Vercel volta em bitcoin, ether ou USDC, não em pontos.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mb-8">
              <Ctas />
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} duration={800}>
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
