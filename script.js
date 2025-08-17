// Rock,  Paper, Scissors Game

// Steps:
// Get a users pick
// Get random computer pick
// Check the result of the two picks
// Claim the winner

const getHumanChoice = () => {
  let input = parseInt(
    prompt("Enter a number between 1 and 3. \n1 = Rock \n2 = Paper \n3 = Scissors:")
  );

  if (input === 1) {
    console.log("Rock");
  } else if (input === 2) {
    console.log("Paper");
  } else if (input === 3) {
    console.log("Scissors");
  } else {
    alert("Enter a number between 1 and 3!");
    location.reload();
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
