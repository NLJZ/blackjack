const resultArea = document.querySelector(".display-result");
const playerCards = document.getElementById("player-cards");
const dealerCards = document.getElementById("dealer-cards");
const body = document.querySelector("body");
let scoreDiv = document.createElement("div");
scoreDiv.style.color = "#fff";
body.appendChild(scoreDiv);
let newDeck = [];
let dealerHand = [];
let playerHand = [];
let dealerScore = 0;
let playerScore = 0;
