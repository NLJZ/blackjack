const youWin = () => {
  wins++;
  resultArea.innerHTML = `<h2>You Win! You have won ${wins} times.</h2>`;
};

const youLose = (string) => {
  losses++;
  resultArea.innerHTML = `<h2>${string} You have lost ${losses} times.</h2>`;
};

const youTie = () => {
  resultArea.innerHTML = `<h2>It's a draw!</h2>`;
};
