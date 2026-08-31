export type TerminalLine = { text: string; kind: "cmd" | "ok" | "out" };

export const terminalLines: TerminalLine[] = [
  { text: "npm i -g bitbank", kind: "cmd" },
  { text: "bitbank login --token $BITBANK_TOKEN", kind: "cmd" },
  { text: "ok autenticado como @voce", kind: "ok" },
  { text: "bitbank pix send --to cnpj:12.345.678/0001-99 --amount 1240.00", kind: "cmd" },
  { text: "ok PIX liquidado em 0,8s · id ptx_9f21ac", kind: "ok" },
  { text: "bitbank cashback status --provider aws", kind: "cmd" },
  { text: "AWS · agosto: 0,00214 BTC creditados (4% de R$ 7.960)", kind: "out" },
];

export const stats = [
  { value: "R$ 1,2 bi", label: "movimentados por gente que escreve código", gold: false },
  { value: "38.400", label: "devs com a conta aberta hoje", gold: false },
  { value: "R$ 4,7 mi", label: "devolvidos em cripto — pro seu bolso, não pro nosso", gold: true },
  { value: "99,99%", label: "uptime da API — a página de status é pública", gold: false },
];

export const features = [
  {
    kicker: "api",
    title: "API-first, de verdade",
    body: "REST versionada, webhooks assinados, chaves de idempotência e sandbox ilimitado. SDKs em JS, Python e Go.",
  },
  {
    kicker: "conta",
    title: "PF e PJ na mesma conta",
    body: "Sua vida pessoal e seu CNPJ lado a lado, separados de verdade. Transferência interna instantânea e pró-labore agendado.",
  },
  {
    kicker: "cartões",
    title: "Cartões por projeto",
    body: "Um cartão virtual por cliente ou por ambiente, com limite e data de expiração definidos por chamada de API.",
  },
  {
    kicker: "conciliação",
    title: "Conciliação automática",
    body: "Anexe metadata em qualquer PIX ou boleto e receba o pagamento já casado com a fatura. Fim da planilha de fim de mês.",
  },
  {
    kicker: "câmbio",
    title: "Cobrança internacional",
    body: "Receba de clientes fora do Brasil em USD ou EUR com câmbio transparente e contrato gerado automaticamente.",
  },
  {
    kicker: "portabilidade",
    title: "Exporta para onde você quiser",
    body: "CSV, OFX, extrato em JSON e integração direta com seu contador. Seus dados nunca ficam reféns.",
  },
];

export const requestSnippet = `curl -X POST https://api.bitbank.dev/v1/transfers \\
  -H "Authorization: Bearer $BITBANK_KEY" \\
  -H "Idempotency-Key: inv_2026_08_014" \\
  -d '{
    "type": "pix",
    "to": "financeiro@cliente.com",
    "amount": 124000,
    "metadata": { "invoice": "INV-014" }
  }'`;

export const responseSnippet = `{
  "id": "ptx_9f21ac",
  "status": "settled",
  "amount": 124000,
  "settled_at": "2026-08-27T14:02:11Z",
  "cashback": { "eligible": false }
}`;

export type Plan = {
  name: string;
  audience: string;
  price: { monthly: string; annual: string };
  note: { monthly: string; annual: string };
  items: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Dev",
    audience: "para quem está começando",
    price: { monthly: "R$ 0", annual: "R$ 0" },
    note: { monthly: "para sempre", annual: "para sempre" },
    items: [
      "Conta PF com PIX ilimitado",
      "1 cartão virtual",
      "Cashback de 2% em cripto",
      "Sandbox completo da API",
    ],
    cta: "Começar grátis",
  },
  {
    name: "Builder",
    audience: "freelancer e indie hacker",
    price: { monthly: "R$ 29", annual: "R$ 23" },
    note: { monthly: "cancele quando quiser", annual: "cobrado anualmente" },
    items: [
      "Tudo do Dev, mais PJ (CNPJ)",
      "API e webhooks em produção",
      "10 cartões virtuais por projeto",
      "Cashback de 4% em cripto",
      "Conciliação automática",
    ],
    cta: "Criar conta grátis",
    featured: true,
  },
  {
    name: "Studio",
    audience: "time de produto",
    price: { monthly: "R$ 99", annual: "R$ 79" },
    note: { monthly: "cancele quando quiser", annual: "cobrado anualmente" },
    items: [
      "Tudo do Builder, sem limite de cartões",
      "Multiusuário com permissões",
      "Cashback de 6% em cripto",
      "Cobrança em USD e EUR",
      "SLA de 99,99% e suporte prioritário",
    ],
    cta: "Falar com vendas",
  },
];

export const testimonials = [
  {
    quote:
      "Migrei minha PJ num sábado à tarde, meio irritada, esperando burocracia. Na segunda os recebimentos já entravam conciliados com as faturas do meu SaaS.",
    name: "Marina Deveza",
    role: "indie hacker · Recife",
  },
  {
    quote:
      "O cashback cobre quase metade da minha conta da AWS — e recebo em bitcoin, que é onde eu ia colocar esse dinheiro de qualquer jeito.",
    name: "Rafael Nakano",
    role: "freelancer backend · Curitiba",
  },
  {
    quote:
      "Um cartão por cliente resolveu meu pior problema de contabilidade. Não abro planilha há sete meses — isso me devolveu dois sábados por mês.",
    name: "Camila Braga",
    role: "estúdio de produto · Belo Horizonte",
  },
];

export const steps = [
  {
    n: "PASSO 01",
    title: "Instale a CLI",
    body: "Node 18+ ou Homebrew. A CLI cria o ambiente de sandbox junto.",
    code: "npm i -g bitbank",
  },
  {
    n: "PASSO 02",
    title: "Autentique",
    body: "A chave de sandbox aparece no dashboard assim que a conta é criada.",
    code: "bitbank login --token $KEY",
  },
  {
    n: "PASSO 03",
    title: "Mande o primeiro PIX",
    body: "Em sandbox o dinheiro é fictício, o comportamento é idêntico ao de produção.",
    code: "bitbank pix send --amount 10",
  },
];

export const faq = [
  {
    q: "O BitBank é um banco de verdade?",
    a: "Operamos como instituição de pagamento autorizada pelo Banco Central, com saldo em conta de pagamento segregada. Seu dinheiro não entra no nosso balanço.",
  },
  {
    q: "Como funciona o cashback em cripto?",
    a: "Identificamos as cobranças dos provedores suportados no seu cartão, convertemos o percentual do seu plano na moeda que você escolheu (BTC, ETH ou USDC) e creditamos na sua carteira BitBank no dia 5 do mês seguinte. O câmbio usado fica no extrato, e você pode sacar em real a qualquer momento. Sem teto no plano Studio.",
  },
  {
    q: "Preciso ter CNPJ para abrir conta?",
    a: "Não. Você começa como PF e adiciona o CNPJ depois, sem abrir uma segunda conta nem migrar histórico.",
  },
  {
    q: "A API tem custo por chamada?",
    a: "Não cobramos por requisição. Sandbox é ilimitado; produção tem limite de 300 req/min por chave, ajustável sob pedido.",
  },
  {
    q: "O que vocês ainda não têm?",
    a: "Crédito, investimentos e conta em dólar (hoje só recebimento). O app de Android saiu três meses depois do iOS. Tudo isso está no roadmap público — com data, e com o aviso quando a data escorrega.",
  },
  {
    q: "Consigo exportar tudo se eu sair?",
    a: "Sim: extrato completo em CSV, OFX e JSON, incluindo metadata e anexos, a qualquer momento e sem pedir autorização a ninguém.",
  },
];

export const footerColumns = [
  {
    title: "O QUE TEM DENTRO",
    links: [
      { label: "Conta PF e PJ", href: "#produto" },
      { label: "Cashback em cripto", href: "#cashback" },
      { label: "Cartões virtuais", href: "#api" },
      { label: "Preços", href: "#precos" },
    ],
  },
  {
    title: "DESENVOLVEDORES",
    links: [
      { label: "Documentação", href: "#docs" },
      { label: "Referência da API", href: "#api" },
      { label: "SDKs", href: "#docs" },
      { label: "Status", href: "#docs" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { label: "Sobre", href: "#faq" },
      { label: "Segurança", href: "#faq" },
      { label: "Termos", href: "#faq" },
      { label: "Privacidade", href: "#faq" },
    ],
  },
];
