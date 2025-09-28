const express = require('express');
const app = express();
const port = 3000; // A porta do seu servidor

// Rota para receber os dados do ESP-01
app.get('/receber_dados', (req, res) => {
  const valorRecebido = req.query.valor;

  if (valorRecebido) {
    console.log(`Valor do sensor recebido: ${valorRecebido}`);
    res.status(200).send('Dados recebidos com sucesso!');
  } else {
    res.status(400).send('Erro: Nenhum valor foi recebido.');
  }
});

// Inicia o servidor e o faz "escutar" em uma porta específica
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log('Aguardando dados do ESP-01...');
});
