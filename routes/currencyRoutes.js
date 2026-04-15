const express = require('express');
const currencyController = require('../controllers/currencyController');

const router = express.Router();

router.get('/quote/:moeda', currencyController.getQuote);

router.get('/', (req, res) => {
  res.status(200).json({
    name: 'Currency API',
    version: '1.0.0',
    description: 'API para consulta de cotação de moedas em Real (BRL)',
    endpoints: {
      'GET /api/quote/:moeda': 'Consulta cotação de uma moeda específica',
      'GET /health': 'Verifica status da API'
    },
    example: 'GET /api/quote/USD',
    supportedCurrencies: [
      'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 
      'CNY', 'BRL', 'BTC', 'ETH'
    ]
  });
});

module.exports = router;