import { useEffect, useRef, useState } from "react";
import BankCard3D, { type CardVariant } from "./BankCard3D";

const ORDER: { id: number; variant: CardVariant }[] = [
  { id: 0, variant: "black" },
  { id: 1, variant: "gold" },
];

export type ActiveInfo = {
  nome: string;
  cor: string;
  rota: string;
  borda: string;
  taxaPadrao: string;
  taxaBonus: string;
};

export const ACTIVE_INFO: Record<number, ActiveInfo> = {
  0: {
    nome: "BLACK",
    cor: "#E4E8EB",
    rota: "6% de volta em cripto, sem limite de cartões virtuais",
    borda: "#C4C9CE",
    taxaPadrao: "6%",
    taxaBonus: "8%",
  },
  1: {
    nome: "GOLD",
    cor: "#F5C542",
    rota: "4% de volta em cripto, sem limite de cartões extras",
    borda: "#F5C542",
    taxaPadrao: "4%",
    taxaBonus: "6%",
  },
};

/** Baralho de dois cartões: o de trás pode ser trazido pra frente (clique, bolinha, ou scroll do mouse). */
export default function CardDeck({ onChange }: { onChange?: (frente: number) => void }) {
  const [frente, setFrente] = useState(0);
  const rolando = useRef(false);
  const deckRef = useRef<HTMLDivElement>(null);
  const frenteRef = useRef(frente);
  frenteRef.current = frente;

  const irPara = (id: number) => {
    if (id === frenteRef.current) return;
    setFrente(id);
    onChange?.(id);
  };

  // Listener nativo com passive:false: o onWheel sintético do React é passivo
  // por padrão, então preventDefault() dentro dele não bloqueia o scroll da página.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (rolando.current) return;
      rolando.current = true;
      const ids = ORDER.map((o) => o.id);
      const pos = ids.indexOf(frenteRef.current);
      const prox = e.deltaY > 0 ? (pos + 1) % ids.length : (pos - 1 + ids.length) % ids.length;
      irPara(ids[prox]);
      setTimeout(() => {
        rolando.current = false;
      }, 550);
    };
    deck.addEventListener("wheel", onWheel, { passive: false });
    return () => deck.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 px-2 pt-2 pb-3 [perspective:1700px]">
      <div ref={deckRef} className="relative mb-14 w-full max-w-[28rem] [aspect-ratio:1.586]">
        {ORDER.map(({ id, variant }) => {
          const pos = id === frente ? 0 : 1;
          const style =
            pos === 0
              ? { transform: "none", filter: "none", zIndex: 2, cursor: "" }
              : {
                  transform: `translate(${pos * 34}px, ${pos * 40}px) scale(${1 - pos * 0.05}) rotate(${pos * 4}deg)`,
                  filter: `brightness(${1 - pos * 0.08})`,
                  zIndex: 2 - pos,
                  cursor: "pointer",
                };
          return (
            <div
              key={id}
              onClickCapture={(e) => {
                // Cartão de trás: intercepta na fase de captura, antes que o
                // clique alcance o próprio onClick de flip do BankCard3D — só
                // traz pra frente, não vira. O da frente recebe o clique
                // normalmente (bubble) e vira, sem passar por aqui.
                if (id !== frente) {
                  e.stopPropagation();
                  irPara(id);
                }
              }}
              className="absolute inset-0 origin-bottom transition-[transform,filter] duration-500 ease-[cubic-bezier(.22,.7,.2,1)]"
              style={style as React.CSSProperties}
            >
              <BankCard3D variant={variant} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-1.5">
        {ORDER.map(({ id }) => (
          <button
            key={id}
            type="button"
            aria-label={`Cartão ${ACTIVE_INFO[id].nome}`}
            onClick={() => irPara(id)}
            className="h-0.5 cursor-pointer rounded-full border-none p-0 transition-[background,width] duration-300"
            style={{
              width: id === frente ? "1.625rem" : "1rem",
              background: id === frente ? ACTIVE_INFO[id].cor : "#2A2622",
            }}
          />
        ))}
      </div>
      <div className="max-w-[20rem] text-center font-mono text-[0.71875rem] text-[#8A8172]">
        clique no cartão de trás pra trazer pra frente · no da frente, clique pra virar
      </div>
    </div>
  );
}
