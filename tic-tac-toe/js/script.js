"use strict";

const cells = document.querySelectorAll(".cell");
const message = document.querySelector("h2");
let isPlaying = true;

const gameBoard = (function () {
  let marks = ["", "", "", "", "", "", "", "", ""];
  return { marks };
})();

const players = (function () {
  let activePlayer = "X";
  return { activePlayer };
})();

const playing = (function () {
  if (isPlaying) markCell();
})();

// Mark cell and add marker in marks
function markCell() {
  cells.forEach((cell, index) =>
    cell.addEventListener("click", function (e) {
      if (gameBoard.marks[index] === "") {
        e.target.textContent = players.activePlayer;
        gameBoard.marks[index] = players.activePlayer;
        players.activePlayer = switchPlayer();
        console.log(gameBoard.marks);
        checkWinner();
      }
    })
  );
}

// Switch Player
function switchPlayer() {
  console.log(players.activePlayer);
  return players.activePlayer === "X" ? "O" : "X";
}

// Form combinations
function formCombs() {
  const horizontals = [
    gameBoard.marks.slice(0, 3),
    gameBoard.marks.slice(3, 6),
    gameBoard.marks.slice(6),
  ];

  const verticals = [
    [gameBoard.marks[0], gameBoard.marks[3], gameBoard.marks[6]],
    [gameBoard.marks[1], gameBoard.marks[4], gameBoard.marks[7]],
    [gameBoard.marks[2], gameBoard.marks[5], gameBoard.marks[8]],
  ];
  const diagonals = [
    [gameBoard.marks[0], gameBoard.marks[4], gameBoard.marks[8]],
    [gameBoard.marks[2], gameBoard.marks[4], gameBoard.marks[6]],
  ];

  const combinations = [...horizontals, ...verticals, ...diagonals];
}

// Check for winner
function checkWinner() {
  console.log(combs);
  combs.forEach((comb) => {
    if (comb.every((n) => n === comb[0] && comb[0] !== "")) {
      isPlaying = false;
      message.textContent = `${comb[0]} is a winner!`;
    }
  });
}
