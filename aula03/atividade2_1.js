class Account {
    #balance = 0;
    deposit(value){
        this.#balance =+ value
        return `Foi depositado o valor de R$${value} com sucesso`
    };
    withdraw(value){
        if (this.#balance < value) {
            return `Saldo insuficiente para saque. Vefique seu Saldo.`
        } else {
            this.#balance = this.#balance - value
            return `Saque de R$${value} realizado com sucesso`
        }
    };
    balance(){
        return `Saldo atual: R$${this.#balance}`
    };
}

class Client {
    constructor(name, age, accountType){
        this.name = name
        this.age = age
        this.account = new accountType()
    }
}

class CurrentAccount extends Account {
    AskForDebitCard() {
        return `Pedido de Cartão de Débito realizado com sucesso`
    }
}

class SavingsAccount extends Account {
    AskForSavingsCheck() {
        return `Pedido de cheque para conta poupança efetuado com sucesso`
    }
}

const clienteTeste1 = new Client("Duck Tales", 46, Account)
console.log(clienteTeste1.account.balance())
console.log(clienteTeste1.account.deposit(1500))
console.log(clienteTeste1.account.withdraw(3000))
console.log(clienteTeste1.account.balance())
console.log(clienteTeste1.account.withdraw(1000))
console.log(clienteTeste1.account.balance())

const clienteTeste2 = new Client("Fera", 55, CurrentAccount)
console.log(clienteTeste2.account.AskForDebitCard())
const clienteTeste3 = new Client("Cascudinho", 26, SavingsAccount)
console.log(clienteTeste3.account.AskForSavingsCheck())