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
