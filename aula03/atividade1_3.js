/*
# Contador de Palavras em JavaScript

Requisitos:

Implemente um contador de palavras em JavaScript utilizando POO. O contador deve receber uma string como entrada e fornecer a contagem de palavras.

1. **Classe: ContadorDePalavras**
    - Atributo: `texto` (string de entrada).
    - Método: `contarPalavras()`, que retorna o número de palavras no texto.

**Exemplo de Uso:**

```javascript
// Criando instância do contador de palavras
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');

// Obtendo contagem de palavras
const contagem = contadorPalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);
// Saída esperada: Número de palavras: 5```
*/

class ContadorDePalavras {
    constructor(frase){
        this.frase = frase
    }
    contarPalavras(texto) {
        let textoCortado = texto.split(" ")
        let contador = textoCortado.length
        return contador
    }
}

const contadorPalavras = new ContadorDePalavras("JavaScript e POO são coisas que não se misturam bem")

const contagem = contadorPalavras.contarPalavras(contadorPalavras.frase)

console.log(`Número de palavras: ${contagem}`)