"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;

// Display message function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function to change CSS style when the player wins
const winGameStyle = function () {
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
};

// Function to Change CSS style when the player loses
const loseGameStyle = function () {
  document.querySelector(".score").textContent = 0;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#ff0000";
  document.querySelector(".number").style.width = "30rem";
};

// Reload game function
const reloadGame = function () {
  score = 20;
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

// Check button event listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No number! 🚫");
  }
  // When guess is out of range
  else if (guess > 100 || guess < 1) {
    displayMessage("Number must be between 1 and 100! 🚫");
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number! 🎉");

    // Change CSS style
    winGameStyle();
  }
  // When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 😢");

      // Change CSS style
      loseGameStyle();
    }
  }
});

// Again button event listener

document.querySelector(".again").addEventListener("click", function () {
  reloadGame();
});
