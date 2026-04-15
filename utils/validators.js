const MOEDAS_SUPORTADAS = [
  'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD',
  'NZD', 'SEK', 'KRW', 'SGD', 'NOK', 'MXN', 'INR', 'RUB', 'ZAR',
  'TRY', 'BRL', 'BTC', 'ETH', 'LTC', 'XRP',
  'ARS', 'CLP', 'PEN', 'UYU', 'COP', 'VEF', 'BOB', 'PYG'
];

const validateCurrency = (currency) => {
  if (!currency) {
    throw new Error('Parâmetro "moeda" é obrigatório');
  }
  
  const moedaUpper = currency.toUpperCase();
  
  if (!MOEDAS_SUPORTADAS.includes(moedaUpper)) {
    throw new Error(`Moeda "${currency}" não suportada. Moedas disponíveis: ${MOEDAS_SUPORTADAS.slice(0, 15).join(', ')}...`);
  }
  
  return moedaUpper;
};

const formatDate = (date) => {
  return date.toISOString().slice(0, 16);
};

module.exports = {
  validateCurrency,
  formatDate,
  MOEDAS_SUPORTADAS
};