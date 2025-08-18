// Rock,  Paper, Scissors Game

// Steps:
// Get a users pick
// Get random computer pick
// Check the result of the two picks
// Claim the winner

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
getHumanChoice();

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
getComputerChoice();

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();


  const playRound = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You picked ${humanChoice} and computer picked ${computerChoice}.`);
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

  playRound(humanSelection, computerSelection);

  for (let i = 1; i >= 5; i++) {
    playRound();
  };

};

playGame();