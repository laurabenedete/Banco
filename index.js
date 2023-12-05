const Poupanca = require('./poupanca');
const Corrente = require('./corrente');

const poupanca = new Poupanca("Nubank", 0300, 0168954, "Crédito", "PF", 1);

const corrente = new Corrente("Santander", 0168, 0165654, "Débito", "PF", 2);

poupanca.validar();
poupanca.padronizar();
console.log(poupanca);
poupanca.juros(1);
console.log(poupanca);

corrente.validar();
corrente.padronizar();
console.log(corrente);
corrente.tarifa(5);
console.log(corrente);