class Conta{
  saldo = 100;
  
constructor(banco, agencia, conta, tipoCartao, PFouPJ){
  
    this.banco = banco;
    this.agencia = agencia;
    this.conta = conta;
    this.tipoCartao = tipoCartao;
    this.PFouPJ = PFouPJ;
      }

    apresentacao(){
        console.log(`Conta de ${this.PFouPJ} no banco ${this.banco}, agência ${this.agencia}, conta ${this.conta} e possui cartão ${this.tipoCartao}`);
    }

    validar(){
        if(!this.banco){
            throw new Error("Ops, voce esqueceu de preencher o banco");
        }else if(typeof(this.banco) != "string"){
            throw new Error("O tipo do banco deve ser String");
        }
        if(!this.agencia){
            console.error("Ops, voce esqueceu de preencher a agência");
          }else if(typeof(this.agencia) != "number"){
              throw new Error("O tipo da agência deve ser Number");
          }
        if(!this.conta){
            console.log("Ops, voce esqueceu de preencher a conta");
          }else if(typeof(this.conta) != "number"){
              throw new Error("O tipo da conta deve ser Number");
        }
      if(!this.tipoCartao){
          console.log("Ops, voce esqueceu de preencher o tipo de cartão");
        }else if(typeof(this.tipoCartao) != "string"){
            throw new Error("O tipo da conta deve ser String");
      }
      if(!this.PFouPJ){
          console.log("Ops, voce esqueceu de preencher se a conta é PF ou PJ");
        }else if(typeof(this.PFouPJ) != "string"){
            throw new Error("O tipo da conta deve ser String");
      }
       }

    padronizar(){
        this.banco = this.banco.toString().toUpperCase();
        this.tipoCartao = this.tipoCartao.toString().toLowerCase();
        this.PFouPJ = this.PFouPJ.toString().toUpperCase();
    }
      juros(taxa) {
          this.saldo += taxa;
          console.log(`Saldo atual: ${this.saldo}`);
      }

      tarifa(taxa) {
          this.saldo -= taxa;
          console.log(`Saldo atual: ${this.saldo}`);
      }
  }

  module.exports = Conta