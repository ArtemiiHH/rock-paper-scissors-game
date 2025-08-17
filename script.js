// Rock,  Paper, Scissors Game

// Steps:
// Get a users pick
// Get random computer pick
// Check the result of the two picks
// Claim the winner

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    console.log('Rock');
  } else if (randomNum === 2) {
    console.log('Paper');
  } else {
    console.log('Scissors');
  }
};
getComputerChoice();
