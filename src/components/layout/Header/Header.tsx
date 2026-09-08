const nav = [
  { label: "Produto", href: "#produto" },
  { label: "Cashback", href: "#cashback" },
  { label: "Preços", href: "#precos" },
  { label: "Docs", href: "#docs" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="relative z-50 -mb-[3.5rem] overflow-hidden bg-transparent backdrop-blur-[8px]">
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
            className="rounded-lg bg-gold px-3.5 py-2 text-sm font-semibold text-ink-950 hover:bg-gold-hi hover:text-ink-950"
          >
            Criar conta grátis
          </a>
        </div>
      </div>
    </header>
  );
}
