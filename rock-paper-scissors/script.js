"use strict";

const variants = document.querySelectorAll(".variant");
let gameOn = true;

const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const choicesText = document.querySelector(".choices-text");
const resultText = document.querySelector(".result-text");

let playerScore = 0;
let computerScore = 0;

// PLAYER CHOICE
let playerChoice;
let computerChoice;

// COMPUTER CHOICE
const computerSelect = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
};

const playRound = function (player, computer) {
  let message;
  if (player === "rock") {
    if (computer === "paper") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      message = `Computer choose ${computer}. Computer won`;
    } else if (computer === "scissors") {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      message = `Computer choose ${computer}. Player won`;
    } else {
      {
        message = "Draw. Try again";
      }
    }
  }
  if (player === "paper") {
    if (computer === "scissors") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      message = `Computer choose ${computer}. Computer won`;
    } else if (computer === "rock") {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      message = `Computer choose ${computer}. Player won`;
    } else {
      message = "Draw. Try again";
    }
  }
  if (player === "scissors") {
    if (computer === "rock") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      message = `Computer choose ${computer}. Computer won`;
    } else if (computer === "scissors") {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      message = `Computer choose ${computer}. Player won`;
    } else {
      message = "Draw. Try again";
    }
  }
  return message;
};

const gameChecker = function () {
  if (playerScore === 5) {
    gameOn = false;
    choicesText.textContent = "You won!";
    choicesText.classList.add("player");
  } else if (computerScore === 5) {
    gameOn = false;
    choicesText.textContent = "You lost!";
    choicesText.classList.add("computer");
  }
};

variants.forEach((variant) =>
  variant.addEventListener("click", function (e) {
    if (gameOn) {
      playerChoice = e.target.classList[1];
      computerSelect();
      // console.log(playerChoice, computerChoice);
      const result = playRound(playerChoice, computerChoice);
      choicesText.textContent = result;
    }
    gameChecker();
  })
);
