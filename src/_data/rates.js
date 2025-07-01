// src/_data/rates.js
const URL =
  "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL";

module.exports = async function () {
  const res  = await fetch(URL);
  if (!res.ok) throw new Error("Falha ao buscar cotações");
  const j = await res.json();

  // Retorna sempre em relação ao BRL
  return {
    USDBRL: +j.USDBRL.bid,   // Dólar
    EURBRL: +j.EURBRL.bid,   // Euro
    ARSBRL: +j.ARSBRL.bid,   // Peso Argentino
    BTCBRL: +j.BTCBRL.bid    // Bitcoin
  };
};
