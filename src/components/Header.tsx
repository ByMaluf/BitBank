const nav = [
  { label: "Produto", href: "#produto" },
  { label: "Cashback", href: "#cashback" },
  { label: "Preços", href: "#precos" },
  { label: "Docs", href: "#docs" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-4 z-50 mx-auto -mb-[84px] max-w-[1200px] overflow-hidden rounded-2xl bg-transparent backdrop-blur-[20px] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
      <div className="flex h-[68px] items-center gap-10 px-8">
        <a href="#topo" className="flex items-center gap-2.5 text-cream hover:text-cream">
          <img src="/assets/logo-bitbank.svg" alt="BitBank" className="h-[30px] w-auto" />
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
            className="rounded-lg border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-3.5 py-2 text-sm text-cream backdrop-blur-md hover:border-[rgba(245,197,66,0.45)] hover:bg-[rgba(255,255,255,0.09)] hover:text-cream"
          >
            Entrar
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-ink-950 hover:bg-gold-hi hover:text-ink-950"
          >
            Criar conta grátis
          </a>
        </div>
      </div>
    </header>
  );
}
