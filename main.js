class ContaBancaria {
    constructor(numeroConta, saldoInicial, tipoConta, agencia) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
      this.tipoConta = tipoConta;
      this.agencia = agencia;
    }
  
    buscarSaldo() {
      return this.saldo;
    }
  
    deposito(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return "Valor inválido para depósito.";
      }
    }
  
    saque(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return "Saldo insuficiente ou valor de saque inválido.";
      }
    }
  
    numeroDaConta() {
      return this.numeroConta;
    }
  }
  
  // Exemplo de uso:
  const minhaConta = new ContaBancaria("12345", 1000.0, "Corrente", "001");
  console.log(minhaConta.numeroDaConta());  // Retorna o número da conta
  console.log(minhaConta.buscarSaldo());  // Retorna o saldo atual
  console.log(minhaConta.deposito(500.0));  // Realiza um depósito
  console.log(minhaConta.saque(200.0));  // Realiza um saque
  