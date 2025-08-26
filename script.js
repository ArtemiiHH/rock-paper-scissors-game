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
const result = document.querySelector('.result-text');

// Get user's choice
const getHumanChoice = () => {
  let input = prompt("Pick and enter: \n'Rock' \n'Paper' \n'Scissors'");

  input = input.toLowerCase();

  if (input === "rock") {
    return 'rock';
  } else if (input === "paper") {
    return 'paper';
  } else if (input === "scissors") {
    return 'scissors';
  }
};

// Let computer make a random choice
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

// Play Game function
const playGame = () => {

  // Score variables
  let humanScore = 0;
  let computerScore = 0;

  // Play Round function
  const playRound = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {
      result.textContent = `It's a tie! You picked ${humanChoice} and computer picked ${computerChoice}.`;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log(`You win! Rock beats scissors.`);
      humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You win! Paper beats rock.`);
      humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You win! Scissors beat paper.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }

  };

  // Loop executes the function 5 times (5 Rounds)
  // for (let i = 0; i < 5; i++) {

  //   playRound(getHumanChoice(), getComputerChoice());
  // }

  // Display winner after the loop
  if (humanScore > computerScore) {
    console.log('You won the game!');
  } else if (computerScore > humanScore) {
    console.log('Computer wins the game!');
  } else {
    console.log('The game is a tie.');
  }

};

// Buttons actions
rockBtn.addEventListener('click', () => {
  playRound();
});

paperBtn.addEventListener('click', () => {
  playRound();
});

scissorsBtn.addEventListener('click', () => {
  playRound();
});

playGame();