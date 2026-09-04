import { useRef, useState, type PointerEvent } from "react";

export type CardVariant = "black" | "gold";

const CARD: Record<
  CardVariant,
  {
    bg: string;
    label: string;
    number: string;
    verseNumberLabel: string;
    verso3digits: string;
    cashback: string;
    glare: "gold" | "silver";
  }
> = {
  black: {
    bg: "/assets/cartao-black-bg.jpg",
    label: "BLACK · PJ",
    number: "4291 7715 0043 8317",
    verseNumberLabel: "serial 8891·0042·7715",
    verso3digits: "492",
    cashback: "6%",
    glare: "silver",
  },
  gold: {
    bg: "/assets/cartao-gold-bg.jpg",
    label: "GOLD · PJ",
    number: "5391 2204 7768 1120",
    verseNumberLabel: "serial 5391·2204·7768",
    verso3digits: "728",
    cashback: "4%",
    glare: "gold",
  },
};

/** Um cartão: inclinação segue o ponteiro (cor do brilho por variante), clique vira o cartão. */
export default function BankCard3D({ variant }: { variant: CardVariant }) {
  const outer = useRef<HTMLDivElement>(null);
  const glare = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const c = CARD[variant];

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = outer.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform .09s linear";
    el.style.transform = `rotateX(${-py * 11}deg) rotateY(${px * 15}deg)`;
    if (glare.current) {
      const cor = c.glare === "silver" ? "rgba(224,228,235,0.22)" : "rgba(245,197,66,0.17)";
      glare.current.style.opacity = "1";
      glare.current.style.backgroundImage = `radial-gradient(420px 300px at ${
        (px + 0.5) * 100
      }% ${(py + 0.5) * 100}%, ${cor}, transparent 62%)`;
    }
  };

  const onLeave = () => {
    const el = outer.current;
    if (el) {
      el.style.transition = "transform .7s cubic-bezier(.2,.7,.2,1)";
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
    if (glare.current) glare.current.style.opacity = "0";
  };

  return (
    <div className="relative w-full max-w-[28rem]">
      <div className="pointer-events-none absolute -bottom-[1.875rem] left-[10%] right-[10%] h-10 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.8),rgba(0,0,0,0))] blur-[9px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.2,1)]" />
      <div
        ref={outer}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onClick={() => setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label={`Cartão BitBank ${variant} — clique para virar`}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((v) => !v)}
        className="relative aspect-[1.586] w-full cursor-pointer [transform-style:preserve-3d]"
      >
        <div
          className="absolute inset-0 transition-transform duration-[950ms] ease-[cubic-bezier(.35,.05,.15,1)] [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* frente */}
          <div
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-line-4 bg-[#100E0B] bg-cover bg-center px-[1.625rem] py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.85),inset_0_0_0_1px_rgba(245,197,66,0.1),0_26px_44px_-26px_rgba(0,0,0,0.9)] [backface-visibility:hidden]"
            style={{
              backgroundImage: `linear-gradient(163deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0) 34%), radial-gradient(130% 100% at 18% -10%, rgba(42,36,27,0.5) 0%, rgba(10,9,7,0.68) 52%, rgba(10,9,7,0.86) 100%), url('${c.bg}')`,
            }}
          >
            <div
              ref={glare}
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(102deg,transparent_30%,rgba(255,255,255,0.055)_44%,transparent_55%)]" />
            <div className="relative flex items-start justify-between">
              <img src="/assets/logo-bitbank.svg" alt="BitBank" className="h-6 w-auto" />
              <span className="font-mono text-[0.625rem] tracking-[0.16em] text-[#8A8172]">{c.label}</span>
            </div>
            <div className="relative mt-1 flex items-center gap-[0.9375rem]">
              <span className="relative h-[2.0625rem] w-11 rounded-md bg-[linear-gradient(135deg,#F8D670_0%,#B0801D_44%,#F2CA5E_68%,#8A6112_100%)] shadow-[inset_0_0_0_1px_rgba(10,9,8,0.4),0_1px_2px_rgba(0,0,0,0.65)]">
                <span className="absolute inset-[5px_7px] bg-[repeating-linear-gradient(0deg,rgba(10,9,8,0.4)_0_1px,rgba(0,0,0,0)_1px_9px),repeating-linear-gradient(90deg,rgba(10,9,8,0.4)_0_1px,rgba(0,0,0,0)_1px_13px)]" />
              </span>
              <span className="relative h-[1.3125rem] w-[1.3125rem] opacity-70">
                <span className="absolute left-px top-1 h-[0.8125rem] w-1.5 rounded-r-xl border-r-[1.5px] border-[#E9D6A8]" />
                <span className="absolute left-[0.3125rem] top-0.5 h-[1.0625rem] w-2 rounded-r-2xl border-r-[1.5px] border-[#E9D6A8]" />
                <span className="absolute left-[0.5625rem] top-0 h-[1.3125rem] w-2.5 rounded-r-2xl border-r-[1.5px] border-[#E9D6A8]" />
              </span>
            </div>
            <div className="relative flex gap-[0.9375rem] font-mono text-[1.3125rem] tracking-[0.09em] text-[#DED5C4] [text-shadow:0_1px_0_rgba(0,0,0,0.9),0_-1px_0_rgba(255,255,255,0.13)]">
              {c.number.split(" ").map((g, i) => (
                <span key={i}>{g}</span>
              ))}
            </div>
            <div className="relative flex items-end justify-between gap-4">
              <div className="flex items-end gap-[1.625rem]">
                <div>
                  <div className="mb-1.5 font-mono text-[0.53125rem] tracking-[0.2em] text-mute-2">TITULAR</div>
                  <div className="font-mono text-[0.78125rem] tracking-[0.1em] text-cream-2 [text-shadow:0_1px_0_rgba(0,0,0,0.8)]">
                    BRENNO YSRAEL
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 font-mono text-[0.53125rem] tracking-[0.2em] text-mute-2">VALIDADE</div>
                  <div className="font-mono text-[0.78125rem] tracking-[0.1em] text-cream-2 [text-shadow:0_1px_0_rgba(0,0,0,0.8)]">
                    08/31
                  </div>
                </div>
              </div>
              <img src="/assets/mastercard.png" alt="Mastercard" className="h-13 w-auto opacity-95" />
            </div>
          </div>

          {/* verso */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-line-4 bg-[#0E0D0B] bg-cover shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(245,197,66,0.05),0_26px_44px_-26px_rgba(0,0,0,0.9)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style={{
              backgroundImage: `radial-gradient(120% 100% at 80% 0%, rgba(33,29,22,0.55) 0%, rgba(16,14,11,0.75) 50%, rgba(10,9,7,0.9) 100%), url('${c.bg}')`,
              backgroundPosition: "center",
            }}
          >
            <div className="mt-[1.375rem] h-12 bg-[linear-gradient(180deg,#1A1918_0%,#050505_46%,#121110_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
            <div className="flex items-stretch gap-2.5 px-6 pt-5">
              <div className="flex h-10 flex-1 items-center overflow-hidden rounded-[0.1875rem] bg-[#EFEAE0] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.05)_0_2px,rgba(0,0,0,0)_2px_5px)] px-3.5">
                <img src="/assets/assinatura-escura.svg" alt="Assinatura de Brenno Ysrael" className="h-[1.625rem] w-auto rotate-[-1.5deg] opacity-90" />
              </div>
              <div className="grid w-[4.25rem] place-items-center rounded-[0.1875rem] bg-[#F6F3ED]">
                <span className="font-mono text-[0.8125rem] font-bold tracking-[0.12em] text-ink-950">{c.verso3digits}</span>
              </div>
            </div>
            <div className="mt-auto flex items-end justify-between gap-[1.125rem] px-6 pt-5 pb-[1.375rem]">
              <div className="max-w-[32ch] font-mono text-[0.5625rem] leading-[1.75] text-mute-2">
                Emitido por BitBank IP S.A. Perdeu? Bloqueie pelo app ou por{" "}
                <span className="text-[#8A8172]">0800 000 1010</span>.
                <br />
                {c.verseNumberLabel}
              </div>
              <div className="text-right">
                <div className="mb-1.5 font-mono text-[0.53125rem] tracking-[0.2em] text-mute-2">CASHBACK CRIPTO</div>
                <div className="text-xl font-bold tracking-[-0.02em] text-gold">{c.cashback}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
