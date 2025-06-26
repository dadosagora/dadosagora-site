import { writeFile } from 'node:fs/promises';
const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL');
const data = await res.json();
await writeFile('src/_data/rates.json', JSON.stringify(data, null, 2));
console.log('Rates updated');