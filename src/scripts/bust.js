const checkBust = () => {
  if (playerScore > 21) {
    resultArea.innerHTML = `<h2>You busted!</h2>`;
    youLose();
  }
};
