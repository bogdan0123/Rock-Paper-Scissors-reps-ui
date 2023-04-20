// Generate a random number between 0 and 2
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 );
  // Use the random number to return a random choice
  if(randomNumber === 0) {
    return 'Rock';
  } else if(randomNumber === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// Play one round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // Determine the winner based on the playerSelection and computerSelection
  if (playerSelection === 'rock' && computerSelection === 'Paper') {
    return 'You Lose! Rock don\'t beats Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
    return 'You Lose! Scissors don\'t beats Rock';
  } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
    return 'You Lose! Paper don\'t beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
    return 'You Win! Scissors beats Paper';
  } else {
    return 'It\'s a tie!';
  }
}

// Play the game for 5 rounds, keeping score and reporting a winner or loser at the end
function game() {
  let playerScore = 0;
  let computerScore = 0;


  if (playerScore > computerScore) {
    console.log("Congratulations, you win the game!");
  } else if (computerScore > playerScore) {
    console.log("Sorry, the computer wins the game!");
  } else {
    console.log("The game is tied!");
  }
}

// Start the game
game();


//Cand definim o functie ceea ce se afla in paranteze se numeste parametru.
// Acest parametru este un placeholder pentru argumentul pe care il dam acestei functii cand il invocam. 
//  Cand invocam o functie, ceea ce se afla in paranteze se numeste argument.

// function sayHello( name ) {
//  return ("Hello " + name);
//  };

// console.log(sayHello("Alex"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const rockBtn = document.getElementById('rock-btn');
    rockBtn.addEventListener('click', () => {
      const result = playRound('rock');
      console.log(result);
    });

    const paperBtn = document.getElementById('paper-btn');
    paperBtn.addEventListener('click', () => {
      const result = playRound('paper');
      console.log(result);
    });

    const scissorsBtn = document.getElementById('scissors-btn');
    scissorsBtn.addEventListener('click', () => {
      const result = playRound('scissors');
      console.log(result);
    });



