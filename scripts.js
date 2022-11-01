function getComputerChoice() {
    const choices = {1: "rock", 2: "scissors", 3:"paper"};
    let choice = Math.floor(Math.random() * 3) + 1;
    const computerChoice = choices[choice];
    return computerChoice
    
}

function gameRound(computerChoice, playerChoice) {
    let win = `You won! ${playerChoice} beats ${computerChoice}`;
    let lose = `You lost! ${computerChoice} beats ${playerChoice}`;
    const draw = "It's a tie!";

    if (computerChoice == playerChoice.toLowerCase()) {
        return draw;
    }
    // rocks
    if (computerChoice === "rock" && playerChoice.toLowerCase() === "paper") {
        return win;
    }
    if (computerChoice === "rock" && playerChoice.toLowerCase() === "scissors") {
        return lose;
    }
    // paper
    if (computerChoice === "paper" && playerChoice.toLowerCase() === "rock") {
        return lose;
    }
    if (computerChoice === "paper" && playerChoice.toLowerCase() === "scissors") {
        return win;
    }
    //scissors
    if (computerChoice === "scissors" && playerChoice.toLowerCase() === "paper") {
        return lose;
    }
    if (computerChoice === "scissors" && playerChoice.toLowerCase() === "rock") {
        return win;
    }
}

const computerSelection = getComputerChoice();
let playerChoice = prompt("What's your move?").toLowerCase();

console.log(gameRound(computerSelection, playerChoice));



