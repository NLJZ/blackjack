const youWin = () => {
  resultArea.innerHTML = `<h2>You Win!</h2>`;
  wins++;
};

const youLose = () => {
  resultArea.innerHTML = `<h2>You Lose...</h2>`;
  losses++;
};

const youTie = () => {
  resultArea.innerHTML = `<h2>It's a draw!</h2>`;
  losses++;
};
