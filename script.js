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
    return 'Rock';
  } else if (input === "paper") {
    return 'Paper';
  } else if (input === "scissors") {
    return 'Scissors';
  }
};
getHumanChoice();

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return 'Rock';
  } else if (randomNum === 2) {
    return 'Paper';
  } else if (randomNum === 3) {
    return 'Scissors';
  }
};
getComputerChoice();

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
