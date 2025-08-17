// Rock,  Paper, Scissors Game

// Steps:
// Get a users pick
// Get random computer pick
// Check the result of the two picks
// Claim the winner

let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () => {
  let input = prompt("Pick and enter: \n'Rock' \n'Paper' \n'Scissors'");

  input = input.toLowerCase();

  if (input === 'rock') {
    console.log("Rock");
  } else if (input === 'paper') {
    console.log("Paper");
  } else if (input === 'scissors') {
    console.log("Scissors");
  } else {
    // alert("Enter a number between 1 and 3!");
    // location.reload();
  }
};
getHumanChoice();

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    console.log("Rock");
  } else if (randomNum === 2) {
    console.log("Paper");
  } else if (randomNum === 3) {
    console.log("Scissors");
  }
};
getComputerChoice();
