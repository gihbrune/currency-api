# currency-api
Consumo de API Pública (Cotação de Moedas)

COMO USAR A API DE COTAÇÃO DE MOEDAS - ATENÇÃO!

Quando você for testar a API no navegador, NÃO digite "dois pontos moeda" literalmente.

O que está escrito como :moeda na documentação é apenas um exemplo. Você precisa SUBSTITUIR o :moeda pelo código real da moeda que você quer consultar.

Exemplo do que está na documentação:
http://localhost:3000/api/quote/:moeda

Isso é apenas um modelo. O correto é trocar o :moeda por um código de verdade.

Vou dar exemplos práticos:

Se você quer a cotação do DÓLAR americano, deve digitar:
http://localhost:3000/api/quote/USD

Se você quer a cotação do EURO, deve digitar:
http://localhost:3000/api/quote/EUR

Se você quer a cotação do BITCOIN, deve digitar:
http://localhost:3000/api/quote/BTC

Se você quer a cotação do REAL brasileiro, deve digitar:
http://localhost:3000/api/quote/BRL

Se você quer a cotação da LIBRA esterlina, deve digitar:
http://localhost:3000/api/quote/GBP

Se você quer a cotação do IENE japonês, deve digitar:
http://localhost:3000/api/quote/JPY

Entendeu a lógica? O código da moeda vem DEPOIS da barra, no lugar do :moeda.

Os códigos de moeda que funcionam são:
USD para Dólar Americano
EUR para Euro
GBP para Libra Esterlina
JPY para Iene Japonês
BTC para Bitcoin
ETH para Ethereum
BRL para Real Brasileiro
CAD para Dólar Canadense
AUD para Dólar Australiano
CHF para Franco Suíço

Então lembre-se: SEMPRE substitua o :moeda pelo código de três letras da moeda que você quer consultar.

Se você digitar exatamente http://localhost:3000/api/quote/:moeda com o dois pontos e a palavra moeda, vai dar erro. O sistema vai entender que você está procurando uma moeda chamada ":MOEDA" que não existe.

O correto é usar os códigos reais como USD, EUR, BTC, etc.

Resumo: Troque :moeda por USD, EUR, BTC ou qualquer outro código de moeda válido.
