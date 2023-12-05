const Conta = require("./conta");

class Poupanca extends Conta{
    constructor(banco, agencia, conta, tipoCartao, PFouPJ, tempoAnos){
        super(banco, agencia, conta, tipoCartao, PFouPJ);
      this.Tempo = tempoAnos;
    }
juros(){
    console.log("Juros R$1,00 ao mês");
}

juros(taxa) {
    super.juros(taxa);
}}

module.exports = Poupanca;