class Cliente {
  constructor(nome, email, cpf) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }

  relatorio() {
    return `
    A pessoa ${this.nome} com o CPF ${this.cpf} tem o e-mail ${this.email}
    `
  }
}

const clienteMaria = new Cliente("Maria", "maria@bla.com.br", "123456789");
console.log(clienteMaria);
console.log(clienteMaria.relatorio());

class ClienteBanco extends Cliente {
  constructor(nome, email, cpf, saldo) {
    super(nome, email, cpf);
    this.saldo = saldo;
  }

  sacar(valorSaque) {
    if(valorSaque <= this.saldo) {
      this.saldo -= valorSaque;
    } else {
      return "Valor é maior que o saldo."
    }
  }
  
  depositar(valorDeposito) {
    this.saldo += valorDeposito;
  }

  //sobreescrita
  relatorio() {
    return `
    A pessoa ${this.nome} com o CPF ${this.cpf} tem o e-mail ${this.email} e o saldo de R$: ${this.saldo} reais.
    `
  }
}

