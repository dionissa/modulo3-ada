/* Atividade 1:                                    */

class Pessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    calcularIdadeBissextos(ano) {
        // Verificar o ano de nascimento da pessoa
        const anoNascimento = new Date().getFullYear() - this.idade;
        // Iniciar uma variável onde vai adicionar os anos bissextos desde o nascimento até a idade tual da pessoa
        let anosBissextos = 0;

        // Criar um loop que vai verificar os anos bissextos contidos nesse período seguindo a lógica:
        // Se for divisível por 4 e não for divisível por 100, adiciona 1 exceto se ele for divisível por 400, que ai adiciona 1 também.
        for (let i = anoNascimento; i <= ano; i++) {
            if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
                anosBissextos++;
            }
        }
        return this.idade + anosBissextos;
}
}

const pessoa1 = new Pessoa("Rodrigo", 28, "Jaraguá do Sul")
const pessoa2 = new Pessoa("Lucas", 25, "Pelotas")

const anoAtual = 2023;
console.log(`${pessoa1.nome} teria ${pessoa1.calcularIdadeBissextos(anoAtual)} anos em ${anoAtual} considerando os anos Bissextos. A idade normal seria ${pessoa1.idade}`)
console.log(`${pessoa2.nome} teria ${pessoa2.calcularIdadeBissextos(anoAtual)} anos em ${anoAtual} considerando os anos Bissextos. A idade normal seria ${pessoa2.idade}`)
console.log("-------------------------------------------------------------------------------------------------------")
/* Atividade 2:                                    */

class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    
    inseridoCatalogo() {
        console.log(`${this.nome} Está inserido no Catálogo de animais`)
    }
}

class Mamifero extends Animal {
    amamentar() {
        console.log(`${this.nome} é capaz de amamentar seus filhotes`)
    }
}

class Ave extends Animal {
    voar() {
        console.log(`${this.nome} é capaz de voar`)
    }
}

const rinoceronte = new Mamifero("Rinoceronte", "Mamifero")
rinoceronte.inseridoCatalogo();
rinoceronte.amamentar();

const coruja = new Ave("Coruja", "Ave")
coruja.inseridoCatalogo();
coruja.voar();

console.log("-------------------------------------------------------------------------------------------------------")

/* Atividade 3:                                    */
class Carro {
    constructor(modelo, ano, ligado) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
        this.velocidade = 0
    }

    ligar() {
        if (!this.ligado) {
        console.log(`O ${this.modelo} foi ligado.`)
        return this.ligado = true
        } else {
            console.log(`O ${this.modelo} já está ligado.`)
            return this.ligado
        }    
    }

    desligar() {
        if (this.ligado){
        console.log(`O ${this.modelo} foi desligado`)
        return this.ligado = false
    }   else {
        console.log(`O ${this.modelo} já está desligado.`)
        return this.ligado
    }
    }

    acelerar() {
        let velocidadeAtual;
        if (this.ligado && this.velocidade === 0) {
            velocidadeAtual = this.velocidade + 10
            console.log(`O ${this.modelo} acelerou e está a ${velocidadeAtual}km/h`)
            return this.velocidade = velocidadeAtual
        } else if (this.velocidade > 0) {
            velocidadeAtual = this.velocidade + 10
            console.log(`O ${this.modelo} acelerou e está a ${velocidadeAtual}km/h`)
            return this.velocidade = velocidadeAtual
        }
    }

    frear() {
        let velocidadeAtual;
        if (this.velocidade > 0) {
            velocidadeAtual = this.velocidade - 10
            console.log(`O ${this.modelo} freou e agora está a ${velocidadeAtual}km/h`)
            return this.velocidade = velocidadeAtual
        } else {
            console.log(`O ${this.modelo} já está parado.`)
        }
    }

    status() {
        let statusDoCarro = ""
        if (this.ligado) {
            statusDoCarro = "ligado"
        } else {
            statusDoCarro = "desligado"
        }
        console.log(`O ${this.modelo} está atualmente ${statusDoCarro} e se movimentando a ${this.velocidade}km/h`)
    }
}

const carro1 = new Carro("Corsa", 2011, false)
carro1.ligar();
carro1.ligar();
carro1.desligar();
carro1.desligar();
carro1.acelerar();
carro1.ligar();
carro1.acelerar();
carro1.frear();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.frear();
carro1.frear();
carro1.frear();
carro1.frear();
carro1.status();
carro1.desligar();
carro1.frear();
carro1.status();