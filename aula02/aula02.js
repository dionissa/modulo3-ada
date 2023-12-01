class Autor {
    constructor(nomeAutor, nacionalidade) {
        this.nomeAutor = nomeAutor;
        this.nacionalidade = nacionalidade
    }
    exibirDetalhes(nomeAutor, nacionalidade) {
        console.log(`O autor se chama ${nomeAutor} e é ${nacionalidade}`)
    }
}

class Livro extends Autor {
    constructor(titulo, anoPublicacao, nomeAutor, nacionalidade) {
        super (nomeAutor, nacionalidade) 
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;        
    }
    detalhesDoLivro(titulo, anoPublicacao, nomeAutor, nacionalidade){
        console.log(`O livro ${titulo} foi publicado no ano ${anoPublicacao}, escrito por ${nomeAutor} que é ${nacionalidade}`)
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
        this.buscarPorAutor = this.buscarPorAutor.bind(this);
    }
    adicionarLivro(livro) {
        this.livros.push(livro)
    }
    buscarPorAutor(nomeAutor) {
        for (let livro of this.livros) {
            if (livro.nomeAutor === nomeAutor) {
                console.log(`Encontramos o livro ${livro.titulo} que é do Autor ${livro.nomeAutor}`)
                return
            } else if (nomeAutor === undefined){
                console.log(`Nome do autor em branco, favor preencher corretamente`)
                return
            } else {
                console.log(`Não encontramos nenhum livro do autor ${nomeAutor}`)
                return
            }
        }
    }
}

const livro1 = new Livro("O Silmarillion", 1977, "J. R. R. Tolkien", "sul-africano")
const livro2 = new Livro("GUERRA CIVIL", 2014, "Stuart Moore", "americano")
const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro(livro1)
minhaBiblioteca.adicionarLivro(livro2)

livro1.exibirDetalhes(livro1.nomeAutor, livro1.nacionalidade)
livro1.detalhesDoLivro(livro1.titulo, livro1.anoPublicacao, livro1.nomeAutor, livro1.nacionalidade)

minhaBiblioteca.buscarPorAutor("Arnaldo")
minhaBiblioteca.buscarPorAutor("J. R. R. Tolkien")
minhaBiblioteca.buscarPorAutor()