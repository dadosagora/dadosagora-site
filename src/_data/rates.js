// src/_data/rates.js
// Node 18+ já tem fetch global – não precisa instalar nada.
module.exports = async function () {
  const url =
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Falha ao buscar cotações: " + res.statusText);
  }
  const json = await res.json();

  return {
    USDBRL: +json.USDBRL.bid,
    EURBRL: +json.EURBRL.bid,
    ARSBRL: +json.ARSBRL.bid,
    BTCBRL: +json.BTCBRL.bid,
  };
};
