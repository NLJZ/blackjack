const playerCards = document.getElementById("player-cards");
const dealerCards = document.getElementById("dealer-cards");
const newGame = () => {
  buildNewDeck();
  shuffleDeck(newDeck);
  firstDeal();
  dealerCards.innerHTML = "<h2>Dealer</h2>";
  playerCards.innerHTML = "<h2>Player</h2>";
  dealerHand.forEach(function (el) {
    let { suit, value } = el;
    let cardDiv = `<div class="card ${suit}"><span class=cardValueTop">${value}</span><span class="${suit}Shape"></span><span class=cardValueBottom">${value}</span></div>`;
    dealerCards.innerHTML += cardDiv;
  });
  playerHand.forEach(function (el) {
    let { suit, value } = el;
    let cardDiv = `<div class="card ${suit}"><span class=cardValueTop">${value}</span><span class="${suit}Shape"></span><span class=cardValueBottom">${value}</span></div>`;
    playerCards.innerHTML += cardDiv;
  });
  console.log(newDeck);
};
