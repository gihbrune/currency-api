const axios = require('axios');
const { formatDate } = require('../utils/validators');

const API_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json';

class CurrencyService {
  async getExchangeRate(currency) {
    try {
      console.log(`Consultando cotação para: ${currency}`);
      
      const response = await axios.get(API_URL, {
        timeout: 10000,
        headers: { 'User-Agent': 'Currency-API/1.0' }
      });
      
      const rates = response.data.brl;
      const lowerCurrency = currency.toLowerCase();
      
      if (!rates || !rates[lowerCurrency]) {
        throw new Error(`Moeda ${currency} não encontrada na API`);
      }
      
      let valorEmBRL;
      if (currency === 'BRL') {
        valorEmBRL = 1.00;
      } else {
        valorEmBRL = Number((1 / rates[lowerCurrency]).toFixed(4));
      }
      
      return {
        moeda: currency.toUpperCase(),
        valor: valorEmBRL,
        data: formatDate(new Date())
      };
      
    } catch (error) {
      console.error('Erro:', error.message);
      throw new Error('Erro ao consultar cotação');
    }
  }
}

module.exports = new CurrencyService();