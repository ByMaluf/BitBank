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
