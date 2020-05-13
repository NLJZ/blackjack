const printScore = () => {
  scoreDiv.innerHTML = `<h3>Dealer Score = ${dealerScore}<br>Player Score = ${playerScore}<h3>`;
};
const scoreUpdate = () => {
  let dh = [];
  let ph = [];
  dealerHand.forEach(function (el) {
    if (el.value == "A") {
      dh.push(11);
    } else if (el.value == "K" || el.value == "Q" || el.value == "J") {
      dh.push(10);
    } else {
      dh.push(parseInt(el.value));
    }
  });
  playerHand.forEach(function (el) {
    if (el.value == "A") {
      ph.push(11);
    } else if (el.value == "K" || el.value == "Q" || el.value == "J") {
      ph.push(10);
    } else {
      ph.push(parseInt(el.value));
    }
  });
  dealerScore = dh.reduce((a, b) => a + b, 0);
  playerScore = ph.reduce((a, b) => a + b, 0);
  printScore();
};
