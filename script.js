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

// Score variables
let humanScore = 0;
let computerScore = 0;

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

  if (humanChoice === computerChoice) {
    result.textContent = `You both picked ${humanChoice}. Nobody gets a point.`;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    result.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    humanScore++;
    pScore.textContent = `Player: ${humanScore}`;
  } else {
    result.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    computerScore++;
    cScore.textContent = `Computer: ${computerScore}`;
  }

  // Display winner and disable buttons after 5 points
  if (humanScore === 5) {
    result.textContent = `You won the game!`;
    disableBtns();
  } else if (computerScore === 5) {
    result.textContent = `Computer wins the game!`;
    disableBtns();
  }
}

// Disable buttons function
const disableBtns = () => {
  [rockBtn, paperBtn, scissorsBtn].forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = 0.3;
  });
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
