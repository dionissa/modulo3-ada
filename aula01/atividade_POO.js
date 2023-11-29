/* Atividade 1:                                                                               */
function somaQuadradosPares(numbers) {
    numerosPares = numbers.filter((number) => (number % 2) === 0)
    paresAoQuadrado = numerosPares.map((number) => number ** 2)
    let somaParesAoQuadrado = 0;
    for (numbers of paresAoQuadrado) {
        somaParesAoQuadrado += numbers
    } return somaParesAoQuadrado
}

console.log(somaQuadradosPares([0,1,4,5,6,7,8,12,15,17,20]))
console.log("-------------------------------------------------------------------------------")
/* Atividade 2:                                                                               */
function ordenarPalavrasPorTamanho(arrayDeFrutas) {
       arrayDeFrutas.sort((a, b) => a.length - b.length)
       return arrayDeFrutas
}

console.log(ordenarPalavrasPorTamanho(["Maracujá","Melância","Manga","Pêra","Laranja","Limão","Maçã","Banana","Kiwi","Morango","Tomate","Caqui"]))
console.log("-------------------------------------------------------------------------------")
/* Atividade 3:                                                                               */
function mediaNumerosImpares(numbers) {
    numerosImpares = numbers.filter((number) => (number % 2) !== 0)
    let somaNumerosImpares = 0;
    for (numbers of numerosImpares) {
        somaNumerosImpares += numbers
    }
    let mediaFinal = somaNumerosImpares / numerosImpares.length
    return mediaFinal
}

console.log(mediaNumerosImpares([0,1,4,5,6,7,8,12,15,17,20]))
