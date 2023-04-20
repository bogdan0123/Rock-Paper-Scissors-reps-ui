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

/// Play one round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // Determine the winner based on the playerSelection and computerSelection
  if (playerSelection === 'rock' && computerSelection === 'Paper') {
    computerScore++;
    return 'You Lose! Rock don\'t beats Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
    playerScore++;
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
    computerScore++;
    return 'You Lose! Scissors don\'t beats Rock';
  } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
    playerScore++;
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
    computerScore++;
    return 'You Lose! Paper don\'t beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
    playerScore++;
    return 'You Win! Scissors beats Paper';
  } else {
    return 'It\'s a tie!';
  }
}

// Play the game for 5 rounds, keeping the score
let computerScore = 0;
let playerScore = 0;

function game() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);

      const playerScoreDiv = document.querySelector('#player-score');
      const computerScoreDiv = document.querySelector('#computer-score');
      const resultsDiv = document.querySelector('#results');
      const p = document.createElement('p');

      playerScoreDiv.textContent = `Player: ${playerScore}`;
      computerScoreDiv.textContent = `Computer: ${computerScore}`;
      p.textContent = result;
      
      resultsDiv.appendChild(p);

      //reporting a winner or loser at the end of those 5 rounds
      if (playerScore === 5) {
        const p = document.createElement('span');
        p.textContent = "Congratulations, you win the game!";
        resultsDiv.appendChild(p);
        disableButtons();
      } else if (computerScore === 5) {
        const p = document.createElement('span');
        p.textContent = "Sorry, the computer wins the game!";
        resultsDiv.appendChild(p);
        disableButtons();
      }
    });
  });
}

function disableButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Start the game
game();