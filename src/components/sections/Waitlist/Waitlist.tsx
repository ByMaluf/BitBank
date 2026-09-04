import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState<string | null>(null);

  return (
    <section
      id="waitlist"
      className="border-b border-line bg-[radial-gradient(700px_300px_at_50%_110%,rgba(245,197,66,0.10),transparent_70%)]"
    >
      <div className="mx-auto max-w-[43.75rem] px-8 py-26 text-center">
        <Reveal easing="ease">
          <h2 className="mb-4.5 text-[3rem] leading-[1.04] font-bold tracking-[-0.035em]">
            Seu banco, <span className="text-gold">seu código.</span>
          </h2>
          <p className="mx-auto mb-9 max-w-[46ch] text-lg leading-[1.55] text-mute">
            Entra na lista e a gente te manda a chave de sandbox antes da abertura pública. Sem cartão, sem
            call de vendas, sem sequência de sete e-mails.
          </p>
          {sent ? (
            <div className="rounded-xl border border-gold bg-ink-750 p-5.5 font-mono text-sm text-gold">
              pronto — chave de sandbox a caminho de {sent}
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(email);
              }}
              className="flex flex-wrap justify-center gap-2.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@dominio.dev"
                className="max-w-[22.5rem] flex-[1_1_18.75rem] rounded-[0.625rem] border border-line-3 bg-ink-800 px-4 py-3.5 text-[0.9375rem] text-cream outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-[0.625rem] bg-gold px-6 py-3.5 text-[0.9375rem] font-semibold text-ink-950 hover:bg-gold-hi"
              >
                Quero minha chave
              </button>
            </form>
          )}
          <div className="mt-5 font-mono text-[0.71875rem] text-mute-3">
            nada de spam · cancele com um clique
          </div>
        </Reveal>
      </div>
    </section>
  );
}
