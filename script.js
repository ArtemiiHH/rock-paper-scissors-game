// Rock,  Paper, Scissors Game

// Steps:
// Get a users pick
// Get random computer pick
// Check the result of the two picks
// Claim the winner

// Buttons
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

// Display result
const result = document.querySelector('.result-text');

// Display scores
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');

// Get computer's choice
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else if (randomNum === 3) {
    return 'scissors';
  }
};

// Play Round function
const playRound = (humanChoice, computerChoice) => {
  // Score variables
  let humanScore = 0;
  let computerScore = 0;

  if (humanChoice === computerChoice) {
    result.textContent = `It's a tie! You both picked ${humanChoice}.`;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    pScore.textContent = `Player: ${humanScore++}`;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    cScore.textContent = `Computer: ${computerScore++}`;
  }

  // Display winner after the loop
  if (humanScore > computerScore) {
    result.textContent = `You won the game!`;
  } else if (computerScore > humanScore) {
    result.textContent = `Computer wins the game!`;
  } else {
    result.textContent = `The game is a tie.`;
  }
}

};

// Buttons actions
rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
