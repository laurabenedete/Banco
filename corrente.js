const Conta = require("./conta");

class Corrente extends Conta{
    constructor(banco, agencia, conta, tipoCartao, PFouPJ, numTitulares){
        super(banco, agencia, conta, tipoCartao, PFouPJ);
        this.numTitulares = numTitulares;
    }

tarifa(){
    console.log("Tarifa de R$5,00 mês");
}
  tarifa(taxa) {
      super.tarifa(taxa);
  }
}


module.exports = Corrente;