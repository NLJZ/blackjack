let dealerHand = [];
let playerHand = [];

const firstDeal = () => {
  playerHand.push(newDeck.shift(0));
  dealerHand.push(newDeck.shift(0));
  playerHand.push(newDeck.shift(0));
  dealerHand.push(newDeck.shift(0));
};
