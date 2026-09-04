import { useMemo } from "react";
import Reveal from "@/components/ui/Reveal";
import CountUp, { shuffledDelays } from "@/components/ui/CountUp";
import LiveCountUp from "@/components/ui/LiveCountUp";
import { stats } from "./content";

export default function FounderLetter() {
  const delays = useMemo(() => shuffledDelays(stats.length, 120), []);
  return (
    <section className="border-b border-line bg-ink-900">
      <div className="mx-auto grid max-w-[75rem] justify-center gap-10 px-8 py-26 md:grid-cols-[12.5rem_minmax(0,38.75rem)]">
        <Reveal easing="ease">
          <div className="border-t border-gold pt-3.5 font-mono text-[0.71875rem] leading-[1.9] tracking-[0.14em] text-mute-3">
            CARTA DO
            <br />
            FUNDADOR
            <br />
            <span className="text-[#3E3A33]">out. 2025</span>
          </div>
        </Reveal>
        <Reveal delay={100} easing="ease">
          <p className="mb-5.5 text-xl leading-[1.62] text-cream-2">
            Em 2023 eu perdi um cliente porque um boleto do meu MEI caiu na conta errada e eu levei nove dias
            pra descobrir. Nove dias respondendo "vou verificar" num e-mail que eu já sabia perdido.
          </p>
          <p className="mb-5.5 text-lg leading-[1.68] text-mute">
            Não comecei o BitBank porque banco é chato. Comecei porque eu queria olhar meu dinheiro do jeito
            que olho meus logs: com carimbo de tempo, com id, com metadata — e sem abrir um app pra tentar
            adivinhar o que aconteceu ontem.
          </p>
          <p className="mb-8.5 text-lg leading-[1.68] text-mute">
            Ainda falta coisa. Não temos crédito, não temos investimentos, e o app de Android saiu três meses
            depois do iOS. Mas o que existe funciona, e quando você abre um ticket responde alguém que
            escreveu aquele endpoint.
          </p>
          <div className="mb-8.5 flex divide-x divide-line">
            {stats.map((s, i) => (
              <div key={s.label} className="flex-1 px-3 first:pl-0">
                <div
                  className={`flex items-center gap-2 text-[1.75rem] font-bold tracking-[-0.02em] whitespace-nowrap ${
                    s.live ? "text-gold" : "text-cream"
                  }`}
                >
                  {s.live && (
                    <span className="relative flex size-2 shrink-0">
                      <span className="absolute size-full animate-ping rounded-full bg-gold opacity-75" />
                      <span className="relative size-2 rounded-full bg-gold" />
                    </span>
                  )}
                  {s.live ? (
                    <LiveCountUp
                      target={s.target}
                      decimals={s.decimals}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      delay={delays[i]}
                      storageKey="bitbank:devs-count"
                    />
                  ) : (
                    <CountUp
                      target={s.target}
                      decimals={s.decimals}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      delay={delays[i]}
                    />
                  )}
                </div>
                <div className="mt-2 font-mono text-[0.71875rem] leading-[1.4] text-mute">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-end gap-4.5">
            <img src="/assets/assinatura-gold.svg" alt="Assinatura de Brenno Ysrael" className="h-[1.5rem] w-auto rotate-[-2deg]" />
            <span className="pb-1.5 font-mono text-[0.71875rem] text-mute">fundador · ainda faz code review na sexta</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
