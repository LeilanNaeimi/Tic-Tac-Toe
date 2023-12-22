const cells = document.querySelectorAll(".cell");
const tableBody = document.querySelector("table");
let board = "";

const player1 = "X";
const player2 = "O";

const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  document.querySelector(".endGame").style.display = "none";
  //make an array with 9 elements from 0 to 0, and return keys
  //and create other array from it
  board = Array.from(Array(9).keys());
  console.log(board);
  //remove all x and o from the board
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    //remove background color
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnclick, false);
  }
}

function turnclick(e) {
  turn(e.target.id, player1);
}

function turn(id, player) {
  board[id] = player;
  console.log(board[id], id, player);
  document.getElementById(id).innerHTML = player;
}
