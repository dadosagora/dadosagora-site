// src/_data/rates.js
/**
 * Busca cotações na AwesomeAPI e devolve objeto
 * onde cada chave é <SIGLA>BRL => valor numérico (bid).
 */
const URL =
  "https://economia.awesomeapi.com.br/last/" +
  [
    "USD-BRL",
    "EUR-BRL",
    "ARS-BRL",
    "GBP-BRL",
    "CAD-BRL",
    "AUD-BRL",
    "CHF-BRL",
    "JPY-BRL",
    "BTC-BRL"
  ].join(",");

module.exports = async function () {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Falha ao buscar cotações");
  const j = await res.json();

  return {
    USDBRL: +j.USDBRL.bid,
    EURBRL: +j.EURBRL.bid,
    ARSBRL: +j.ARSBRL.bid,
    GBPBRL: +j.GBPBRL.bid,
    CADBRL: +j.CADBRL.bid,
    AUDBRL: +j.AUDBRL.bid,
    CHFBRL: +j.CHFBRL.bid,
    JPYBRL: +j.JPYBRL.bid,
    BTCBRL: +j.BTCBRL.bid
  };
};
