let newDeck = [];

const buildNewDeck = () => {
  newDeck.splice(0, newDeck.length);
  let suits = ["hearts", "diamonds", "clubs", "spades"];
  let cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  suits.forEach(function (suit) {
    cardValues.forEach(function (value) {
      let card = { value: value, suit: suit };
      newDeck.push(card);
    });
  });
};

buildNewDeck();

let cardTable = document.querySelector(".cards");
const viewAllCards = () => {
  newDeck.forEach(function (el) {
    let { suit, value } = el;
    let cardDiv = `<div class="card ${suit}"><span class=cardValueTop>${value}</span><span class="${suit}Shape"></span><span class=cardValueBottom>${value}</span></div>`;
    cardTable.innerHTML += cardDiv;
  });
};

viewAllCards();
