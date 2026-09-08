import { useState } from "react";

const nav = [
  { label: "Produto", href: "#produto" },
  { label: "Cashback", href: "#cashback" },
  { label: "Preços", href: "#precos" },
  { label: "Docs", href: "#docs" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 -mb-[3.5rem] bg-transparent backdrop-blur-[8px]">
      <div className="mx-auto flex h-[3.5rem] max-w-[75rem] items-center gap-10 px-8">
        <a href="#topo" className="flex items-center gap-2.5 text-cream hover:text-cream">
          <img src="/assets/logo-bitbank.svg" alt="BitBank" className="h-6 w-auto" />
        </a>
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-mute hover:text-cream">
              {i.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a
            href="#waitlist"
            className="hidden rounded-lg bg-gold px-3.5 py-2 text-sm font-semibold text-ink-950 hover:bg-gold-hi hover:text-ink-950 sm:inline-block"
          >
            Criar conta grátis
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line-3 text-cream md:hidden"
          >
            <span className="relative block size-4">
              <span
                className={`absolute left-0 block h-[0.09375rem] w-4 bg-current transition-transform ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[0.09375rem] w-4 -translate-y-1/2 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[0.09375rem] w-4 bg-current transition-transform ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        className={`grid overflow-hidden border-b border-line bg-ink-950 transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="flex min-h-0 flex-col px-8">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="border-t border-line py-3.5 text-sm text-mute first:border-t-0 hover:text-cream"
            >
              {i.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-3.5 mb-4 rounded-lg bg-gold px-3.5 py-2 text-center text-sm font-semibold text-ink-950 hover:bg-gold-hi sm:hidden"
          >
            Criar conta grátis
          </a>
        </div>
      </nav>
    </header>
  );
}
