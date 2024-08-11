const buttons = document.querySelectorAll('.btn');
const resultElement = document.getElementById('ins');

// Define the choices and their corresponding values
const choices = {
  '🪨': 'rock',
  '📃': 'paper',
  '✂️': 'scissor'
};

// Define the computer's choice function
function getComputerChoice() {
  const choicesArray = Object.keys(choices);
  return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

// Define the game logic function
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  let result;

  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer wins!';
  }

  resultElement.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

// Define the user selection function
function userSelFunction(event) {
  const userChoice = choices[event.target.textContent];
  playGame(userChoice);
}

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', userSelFunction);
})