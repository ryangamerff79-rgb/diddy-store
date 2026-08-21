DIDDY STORE — PIX → MERCADO PAGO → WEBHOOK → ENTREGA

1. npm.cmd install
2. Copy-Item .env.example .env.local
3. Preencha MERCADOPAGO_ACCESS_TOKEN.
4. Configure o Webhook do Mercado Pago para https://SEU-DOMINIO/api/webhook
5. npm.cmd run dev

Produtos associados aos links MediaFire fornecidos.
Fluxo: Pix → confirmação Mercado Pago → webhook → pedido aprovado → página de entrega.
Para produção, troque o arquivo local data/orders.json por banco persistente.
