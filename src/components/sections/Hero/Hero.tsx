import Reveal from "@/components/ui/Reveal";
import Terminal from "./Terminal";

export type HeroVariant = "split" | "centered";

const Badge = () => (
  <div className="inline-flex items-center gap-2.5 rounded-full border border-line-3 bg-ink-800 py-1.5 pr-3.5 pl-2">
    <span className="rounded-full bg-gold px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.08em] text-ink-950">
      NOVO
    </span>
    <span className="font-mono text-xs text-sub">cashback em cripto: até 6% do que você gasta em cloud</span>
  </div>
);

const Ctas = ({ center = false }: { center?: boolean }) => (
  <div className={`flex flex-wrap gap-3.5 ${center ? "justify-center" : ""}`}>
    <a
      href="#waitlist"
      className="rounded-[10px] bg-gold px-6 py-4 text-base font-semibold text-ink-950 hover:bg-gold-hi hover:text-ink-950"
    >
      Criar conta grátis
    </a>
    <a
      href="#docs"
      className="rounded-[10px] border border-line-3 bg-ink-800 px-6 py-4 text-base font-medium text-cream hover:border-[#4A4238] hover:text-cream"
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

const HERO_BG = "/assets/hero-cartoes-bg3x.png";

export default function Hero({ variant = "split" }: { variant?: HeroVariant }) {
  if (variant === "centered") {
    return (
      <section
        id="topo"
        className="relative z-0 border-b border-line bg-ink-950 bg-cover bg-[position:center,center,30%] bg-no-repeat pt-[84px]"
        style={{
          backgroundImage: `radial-gradient(700px 320px at 50% -10%, rgba(245,197,66,0.12), transparent 70%), linear-gradient(180deg, rgba(10,9,8,0.72) 0%, rgba(10,9,8,0.66) 30%, rgba(10,9,8,0.38) 62%, #0A0908 100%), url('${HERO_BG}')`,
          backgroundSize: "auto, auto, min(1254px, 115%)",
        }}
      >
        <div className="mx-auto max-w-[900px] px-8 pt-[120px] text-center">
          <Reveal>
            <Badge />
          </Reveal>
          <Reveal delay={60}>
            <Title className="mx-auto mt-8 mb-6 max-w-[20ch] text-5xl leading-[0.98] font-bold tracking-[-0.04em] md:text-[76px]" />
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
        <Reveal delay={220} duration={800} className="mx-auto max-w-[860px] px-8">
          <div className="[&>div]:rounded-b-none [&>div]:border-b-0 [&>div]:shadow-[0_-30px_90px_-50px_rgba(245,197,66,0.35)]">
            <Terminal minHeight={260} />
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section
      id="topo"
      className="relative z-0 border-b border-line bg-ink-950 bg-no-repeat pt-[84px]"
      style={{
        backgroundImage: `radial-gradient(900px 380px at 50% -8%, rgba(245,197,66,0.10), transparent 70%), linear-gradient(180deg, rgba(10,9,8,0) 45%, rgba(10,9,8,0.55) 80%, #0A0908 100%), linear-gradient(90deg, rgba(10,9,8,0.82) 0%, rgba(10,9,8,0.3) 50%, rgba(10,9,8,0.82) 100%), url('${HERO_BG}')`,
        backgroundSize: "auto, auto, auto, 100%",
        backgroundPosition: "center, center, center, center",
      }}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-8 pt-[104px] pb-24 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <div className="mb-7">
              <Badge />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <Title className="mb-6 max-w-[15ch] text-5xl leading-[1.02] font-bold tracking-[-0.035em] md:text-[62px]" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-9 max-w-[46ch] text-[19px] leading-[1.55] text-mute">
              Conta PF e PJ com PIX, boleto e cartão — e uma API pra tudo que você faria clicando. O que
              você gasta em AWS, GCP, Azure ou Vercel volta em bitcoin, ether ou USDC — não em pontos.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mb-8">
              <Ctas />
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-6 font-mono text-xs text-mute-2">
              <span>conta aberta em 4 minutos</span>
              <span>sem tarifa de manutenção</span>
              <span>sandbox que não expira</span>
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
