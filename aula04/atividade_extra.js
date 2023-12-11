class Player {
    constructor(name, symbol) {
        this.name = name,
        this.symbol = symbol
    }
}

class PlayerMove {
    constructor(row, col, playerSymbol) {
        this.row = row,
        this.col = col, 
        this.playerSymbol = playerSymbol
    }
}

class GameTable {
    grid = [["_","_","_"],["_","_","_"],["_","_","_"]]
    makeMove(row, col, playerSymbol) {
        if (this.grid[row][col] === "_") {
        this.grid[row][col] = playerSymbol
        } else {
            console.log("Campo já preenchido, escolha outro lugar")
        }
    }
    isValidMove(row, col){
        if (this.grid[row][col] === "_") {
            console.log(`Essa jogada é válida`)
        } else {
            console.log(`Jogada invalída, escolher outra linha ou coluna!!`)
        }
    }
    display(){
        console.log(newGameTable.grid[0])
        console.log(newGameTable.grid[1])
        console.log(newGameTable.grid[2])
    }
    checkWinner(player1, player2) {
        if (this.grid[0][0] === this.grid[0][1] && this.grid[0][1] === this.grid[0][2]) {
            if (this.grid[0][0] === player1.symbol) {
            console.log(`Acabou o jogo, o vencedor foi o ${player1.name}`)
        } else {
            console.log(`Acabou o jogo, o vencedor foi o ${player2.name}`)
        }
        } else {
            console.log(`O jogo ainda não foi finalizado, por favor, continue jogando`)
        }
    }
    checkPlayerSymbol(player1, player2){
        if (player1.name === player2.name){
            alert("Nome já foi escolhido, escolha outro nome")
            player2 = new Player(prompt("Qual o nome do Jogador 2?"), prompt("Escolha um Símbolo"))
        }
        if (player1.symbol === player2.symbol){
            alert("Símbolo já foi escolhido, escolha outro Símbolo")
            player2 = new Player(prompt("Qual o nome do Jogador 2?"), prompt("Escolha um Símbolo"))
        }
    }
    
}
const newGameTable = new GameTable()
let player1 = new Player(prompt("Qual o nome do Jogador 1?"), prompt("Escolha um Símbolo"))
let player2 = new Player(prompt("Qual o nome do Jogador 2?"), prompt("Escolha um Símbolo"))
newGameTable.checkPlayerSymbol(player1, player2)


function findItem(array, item) {
    return array.find(element => element === item);
  }
  
  const itemToFind = '_';
  let contadorDeJogada = 0;
  let foundItem = newGameTable.grid.find(array => findItem(array, itemToFind));
  
while (foundItem) {
        let play1 = new PlayerMove(
            (Number(prompt(`${newGameTable.grid[0]}\n${newGameTable.grid[1]}\n${newGameTable.grid[2]}\nJogador: ${player1.name}. Digite a linha. (1,2 ou 3)`))-1),
            (Number(prompt(`${newGameTable.grid[0]}\n${newGameTable.grid[1]}\n${newGameTable.grid[2]}\nJogador: ${player1.name}. Digite a Coluna. (1,2 ou 3)`))-1),
            player1.symbol)
        newGameTable.makeMove(play1.row, play1.col, play1.playerSymbol)
        foundItem = newGameTable.grid.find(array => findItem(array, itemToFind));
        while (foundItem) {
            let play2 = new PlayerMove(
                (Number(prompt(`${newGameTable.grid[0]}\n${newGameTable.grid[1]}\n${newGameTable.grid[2]}\nJogador: ${player2.name}. Digite a linha. (1,2 ou 3)`))-1),
                (Number(prompt(`${newGameTable.grid[0]}\n${newGameTable.grid[1]}\n${newGameTable.grid[2]}\nJogador: ${player2.name}. Digite a Coluna. (1,2 ou 3)`))-1),
                player2.symbol)
            newGameTable.makeMove(play2.row, play2.col, play2.playerSymbol)
            foundItem = newGameTable.grid.find(array => findItem(array, itemToFind));
        }
}