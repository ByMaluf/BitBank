import Reveal from "@/components/ui/Reveal";

export default function FounderLetter() {
  return (
    <section className="border-b border-line bg-ink-900">
      <div className="mx-auto grid max-w-[1200px] justify-center gap-10 px-8 py-26 md:grid-cols-[200px_minmax(0,620px)]">
        <Reveal easing="ease">
          <div className="border-t border-gold pt-3.5 font-mono text-[11.5px] leading-[1.9] tracking-[0.14em] text-mute-3">
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
          <div className="flex flex-wrap items-end gap-4.5">
            <img src="/assets/assinatura-gold.svg" alt="Assinatura de Brenno Ysrael" className="h-[34px] w-auto rotate-[-2deg]" />
            <span className="pb-1.5 font-mono text-[11.5px] text-mute-3">fundador · ainda faz code review na sexta</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
