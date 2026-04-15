const currencyService = require('../services/currencyService');
const { validateCurrency } = require('../utils/validators');

class CurrencyController {
  async getQuote(req, res) {
    try {
      const { moeda } = req.params;
      
      const validatedCurrency = validateCurrency(moeda);
      
      const quote = await currencyService.getExchangeRate(validatedCurrency);
      
      res.status(200).json(quote);
      
    } catch (error) {
      if (error.message.includes('obrigatório') || error.message.includes('não suportada')) {
        return res.status(400).json({ 
          error: 'Requisição inválida', 
          message: error.message 
        });
      }
      
      if (error.message.includes('não encontrada')) {
        return res.status(404).json({ 
          error: 'Moeda não disponível', 
          message: error.message 
        });
      }
      
      if (error.message.includes('API')) {
        return res.status(503).json({ 
          error: 'Serviço indisponível', 
          message: error.message 
        });
      }
      
      res.status(500).json({ 
        error: 'Erro interno', 
        message: error.message 
      });
    }
  }
}

module.exports = new CurrencyController();