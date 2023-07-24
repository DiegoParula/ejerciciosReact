import { WINNER_COMBOS } from "../constants"
export const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras para ver si x u o gano
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a]
      }


    }
    return null // si no hay ganador 
  }


export const checkEndGame = (newBoard) => {
  //revisamos si hay empate si no hay mas espacios vacios en el tablero

    return newBoard.every((Square) => Square != null)
}  