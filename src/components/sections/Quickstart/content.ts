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
