let newDeck = [];

const buildNewDeck = () => {
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
    let cardDiv = `<div class="card ${suit}">${value} <div class="${suit}">${suit}</div></div>`;
    cardTable.innerHTML += cardDiv;
  });
};

viewAllCards();
