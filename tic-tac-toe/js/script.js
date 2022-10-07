"use strict";

const cells = document.querySelectorAll(".cell");

const gameBoard = (function () {
  let marks = ["", "", "", "", "", "", "", "", ""];
  return { marks };
})();

const players = (function () {
  let activePlayer = "X";
  return { activePlayer };
})();

const playing = (function () {
  markCell();
})();

// Mark cell and add marker in marks
function markCell() {
  cells.forEach((cell, index) =>
    cell.addEventListener("click", function (e) {
      e.target.textContent = players.activePlayer;
      gameBoard.marks[index] = players.activePlayer;
      players.activePlayer = switchPlayer();
    })
  );
}

// Switch Player
function switchPlayer() {
  console.log(players.activePlayer);
  return players.activePlayer === "X" ? "O" : "X";
}
