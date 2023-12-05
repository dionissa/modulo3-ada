/* 
Exercício 2: Conversor de Moeda em JavaScript

Requisitos:

Crie um conversor de moeda simples em JavaScript utilizando POO. O conversor deve permitir a conversão de uma moeda para outra com base em uma taxa de câmbio.

    Classe: ConversorDeMoeda
        Atributos: taxaCambio.
        Método: converter(valor, moedaOrigem, moedaDestino), que converte o valor de uma moeda para outra.

Exemplo de Uso:

// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
console.log(`Valor convertido: ${valorConvertido} BRL`);
// Saída esperada: Valor convertido: 500.0 BRL```
*/

class ConversorDeMoeda {
    constructor(taxaCambio) {
        this.taxaCambio = taxaCambio
    }
    converter(valor, moedaOrigem, moedaDestino) {
        let valorRecebido = valor;
        this.origem = moedaOrigem;
        this.destino = moedaDestino;
        let valorConvertido = valorRecebido * this.taxaCambio
        return this.valor = valor, moedaOrigem, moedaDestino, valorConvertido
    }
}

const conversorMoeda = new ConversorDeMoeda(5.0)
const testeValorConvertido = conversorMoeda.converter(100, "USD", "BRL")

console.log(`O valor em ${conversorMoeda.origem} é: ${conversorMoeda.valor}` )
console.log(`O valor convertido é: ${testeValorConvertido} ${conversorMoeda.destino}`)
console.log(`A taxa de conversão é de ${conversorMoeda.taxaCambio} vezes`)