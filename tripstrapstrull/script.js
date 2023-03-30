let cells = document.querySelectorAll(".cell");
cells = Array.from(cells); //convert list to array of all the cells

let currentPlayer = "X";

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWinner() {
  //look through all winning combinations
  winningCombinations.forEach(function (combination) {
    let check = combination.every(
      (idx) => cells[idx].innerText.trim() == currentPlayer //idx as index, is equal to CurrentPlayer
    );
    if (check) {
      highlightCells(combination); //winningcombination
    }
  });
}

function highlightCells(combination) {
  combination.forEach(function (idx) {
    cells[idx].classList.add("highlight");
  });
}

cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.innerText.trim() != "") return; //not equals to empty string, return
    cell.innerText = currentPlayer;
    checkForWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X"; //if previously current player was X, set curent player to 0, otherwise X
    //alternate between cross and circle
  });
});
