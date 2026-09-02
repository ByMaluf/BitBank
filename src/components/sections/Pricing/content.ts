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
