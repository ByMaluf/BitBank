import { footerColumns } from "../content";

export default function Footer() {
  return (
    <footer className="bg-ink-900">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-8 pt-18 pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4">
            <img src="/assets/logo-bitbank.svg" alt="BitBank" className="h-7 w-auto" />
          </div>
          <p className="max-w-[34ch] text-[14.5px] leading-[1.6] text-mute-2">
            O banco digital para desenvolvedores. Somos 11 pessoas em São Paulo e todas usam a conta que
            vendem.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title} className="grid content-start gap-3">
            <div className="mb-1 font-mono text-[11px] tracking-[0.1em] text-mute-3">
              {col.title}
            </div>
            {col.links.map((l) => (
              <a key={l.label} href={l.href} className="text-[14.5px] text-mute hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-6 border-t border-line px-8 pt-6 pb-12">
        <div className="font-mono text-[11.5px] text-mute-3">
          BitBank Instituição de Pagamento S.A. · CNPJ 00.000.000/0001-00 · São Paulo, BR
        </div>
        <div className="font-mono text-[11.5px] text-mute-3">© 2026 BitBank</div>
      </div>
    </footer>
  );
}
