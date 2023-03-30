// VARIABLES
const cells = document.querySelectorAll(".cell"); //select class cell
const statusText = document.querySelector("#statusText"); //select status text
const restartBtn = document.querySelector("#restartBtn"); //id restart button
const winConditions = [
  [0, 1, 2], // which cells to check for win
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""]; //array of placeholders
let currentPlayer = "X"; //keep track of current player
let running = false; //boolean variable

//FUNCTIONS
initializeGame(); //when begin game

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked)); // for each cell add eventlistener, event is click, callback cellclicked
  restartBtn.addEventListener("click", restartGame); //eventlistener to restart button, event click, callback restartGame function
  statusText.textContent = `${currentPlayer} - käik`; //update status text, use template literal, current player, its their turn
  running = true; //when we initialize game set running to true
}
function cellClicked() {
  // when click on cell what are going to do
  const cellIndex = this.getAttribute("cellIndex"); //local variable - const cellIndex is equal to this (whatever cell we click on),
  //we get attribute (the attribute we are getting is cell index)

  if (options[cellIndex] != "" || !running) {
    // we only want to update a cell, if there is nothing there. check if placeholder is empty
    // if our options in cellindex does not equal an empty space or if the game is not running, then we will return
    return;
  }
  //otherwize updatecell function
  updateCell(this, cellIndex); //this an an argument as well as cellIndex
  checkWinner(); // followed by check winner function
}
function updateCell(cell, index) {
  //updating placeholders
  options[index] = currentPlayer; // take options of index parameter equals currentPlayer
  cell.textContent = currentPlayer; // then change the text content (whatever cell we click originally)
}
function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  //if change player is equal to X we reassign our current player to O otherwise X
  statusText.textContent = `${currentPlayer} - käik`;
  //then take, template literal -  it's their turn
}
function checkWinner() {
  //with boolean!
  let roundWon = false; //temporay variable roundWon
  //if somebody wins we flip this to be true
  for (let i = 0; i < winConditions.length; i++) {
    // let i be 0, continue this as long as i is less than our winConditions, incerment +1
    const condition = winConditions[i]; //equals wincondition in our current index
    const cellA = options[condition[0]]; //index 0 - if these three are not spaces and they are
    //all the same, that means somebody won, if there is no winner we check next set winConditions
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    } //if there is an empty spce, continue
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} - võit!`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Viik!`;
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer} - käik`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
