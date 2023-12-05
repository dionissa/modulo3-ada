/* 
Exercício 1: Sistema de Login em JavaScript

Requisitos:

Desenvolva um sistema de login simples em JavaScript utilizando POO. O sistema deve permitir que usuários se cadastrem, realizem login e exibam uma mensagem personalizada após o login.

    Classe: SistemaDeLogin
        Atributo: usuarios (array de objetos com informações de usuário).
        Métodos: cadastrarUsuario(nome, senha), realizarLogin(nome, senha), exibirMensagemPersonalizada(nome).

Exemplo de Uso:

// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin();

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123");
sistemaLogin.cadastrarUsuario("usuario2", "abc456");

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
// Saída esperada: Bem-vindo, usuario1!
*/

class SistemaDeLogin {
    usuarios = [];
    cadastrarUsuario(nome, senha) {
        try {
            if (nome.length < 4 && senha.length <= 5) {
                throw new Error("Usuário precisa ter no mínimo 5 letras e senha no mínimo 5 caracteres")
            }   else  {
                this.usuarios.push({
                    nome: nome,
                    senha: senha,
                    logado: false
                });
            }
        }
     catch (error) {
        console.error("Erro ao Cadastrar Usuário:", error.message);
    }
}
    realizarLogin(nome, senha) {
        for (let users of this.usuarios) {
            if (users.nome === nome && users.senha === senha) {
            users.logado = true
            }
        }            
        };
    exibirMensagemPersonalizada() {
        for (let users of this.usuarios) {
            if (users.logado) {
                console.log(`Bem vindo novamente ${users.nome}`)
            }
        }
    }
    }


const sistemaLogin = new SistemaDeLogin();
sistemaLogin.cadastrarUsuario("Bilbo", "gollum")
sistemaLogin.cadastrarUsuario("Frodo", "oAnel")
sistemaLogin.cadastrarUsuario("nop", "123")
sistemaLogin.cadastrarUsuario("Legolas", "elvesFTW")
const usuarioLogado = sistemaLogin.realizarLogin("Frodo", "oAnel")
const usuarioLogado2 = sistemaLogin.realizarLogin("Legolas", "elvesFTW")
sistemaLogin.exibirMensagemPersonalizada(usuarioLogado, usuarioLogado2)
