import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import CardDeck, { ACTIVE_INFO } from "./CardDeck";

type ProviderRate = "padrao" | "bonus";

const providers: { key: ProviderRate; icon: React.ReactNode; label: React.ReactNode }[] = [
  {
    key: "padrao",
    icon: <i className="fa-brands fa-aws text-[14px] text-mute" />,
    label: "Amazon Web Services",
  },
  {
    key: "padrao",
    icon: <img src="https://cdn.simpleicons.org/googlecloud/9C958A" alt="" className="size-3.5 opacity-85" />,
    label: "Google Cloud",
  },
  {
    key: "padrao",
    icon: <i className="fa-brands fa-microsoft text-[13px] text-mute" />,
    label: "Microsoft Azure",
  },
  {
    key: "bonus",
    icon: (
      <>
        <img src="https://cdn.simpleicons.org/vercel/9C958A" alt="" className="size-3.5 opacity-85" />
        <img src="https://cdn.simpleicons.org/flydotio/9C958A" alt="" className="size-3.5 opacity-85" />
        <img src="https://cdn.simpleicons.org/railway/9C958A" alt="" className="size-3.5 opacity-85" />
      </>
    ),
    label: "+ Fly.io + Railway",
  },
];

export default function Cashback() {
  const [frente, setFrente] = useState(0);
  const info = ACTIVE_INFO[frente];
  const acento = frente === 1 ? "#F5C542" : "#E4E8EB";

  return (
    <section
      id="cashback"
      className="relative flex min-h-screen flex-col overflow-hidden border-b border-line bg-ink-950 bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0A0908 0%, rgba(10,9,8,0.72) 220px, rgba(10,9,8,0.86) 100%), url('/assets/cashback-section-bg.jpg')",
        backgroundSize: "100% 100%, cover",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            opacity: frente === 1 ? 0.75 : 0,
            backgroundImage:
              "radial-gradient(900px 460px at 82% 8%, rgba(245,197,66,0.4), transparent 68%), radial-gradient(900px 460px at 18% 92%, rgba(245,197,66,0.28), transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            opacity: frente === 1 ? 0 : 0.75,
            backgroundImage:
              "radial-gradient(900px 460px at 82% 8%, rgba(200,208,217,0.4), transparent 68%), radial-gradient(900px 460px at 18% 92%, rgba(200,208,217,0.28), transparent 68%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-8 py-24">
        <div className="mb-14 grid items-start gap-[72px] lg:grid-cols-[1fr_1.1fr]">
          <Reveal easing="ease">
            <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">CASHBACK EM CRIPTO</div>
            <h2 className="mb-5 text-[44px] leading-[1.06] font-bold tracking-[-0.03em]">
              Sua infra se paga sozinha.
            </h2>
            <p className="mb-9 max-w-[44ch] text-[17px] leading-[1.6] text-mute">
              Pague AWS, GCP, Azure ou Vercel com o cartão BitBank e escolha em qual moeda receber: BTC, ETH
              ou USDC. Cai na sua carteira dia 5, com o câmbio da hora registrado no extrato. Sem pontos, sem
              catálogo, sem "resgate em até 45 dias".
            </p>
            <div
              className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-ink-800 py-4 pr-5 pl-5 transition-colors"
              style={{ borderLeft: `3px solid ${info.borda}` }}
            >
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.14em] text-mute-2">CARTÃO ATIVO</div>
                <span className="text-[17px] font-bold tracking-[-0.01em] transition-colors" style={{ color: info.cor }}>
                  {info.nome}
                </span>
              </div>
              <span className="max-w-[26ch] text-right font-mono text-[13px] text-sub">{info.rota}</span>
            </div>
          </Reveal>
          <Reveal delay={100} easing="ease">
            <CardDeck onChange={setFrente} />
          </Reveal>
        </div>

        <Reveal delay={150} easing="ease">
          <div className="mb-2.5 ml-0.5 font-mono text-[11px] tracking-[0.1em] text-mute-3">
            CASHBACK POR PROVEDOR DE NUVEM
          </div>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {providers.map((p, i) => (
              <div key={i} className="rounded-[10px] border border-line bg-ink-800 px-5 py-4.5">
                <div className="text-2xl font-bold tracking-[-0.02em] transition-colors" style={{ color: acento }}>
                  {p.key === "padrao" ? info.taxaPadrao : info.taxaBonus}
                </div>
                <div className="mt-1.5 flex items-center gap-1.5">
                  {p.icon}
                  <div className="font-mono text-[12.5px] text-mute">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
