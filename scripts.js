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
    computerChoice = getComputerChoice();
    playerChoice = prompt("What's your move?").toLowerCase();

    if (computerChoice == playerChoice.toLowerCase()) {
        return draw;
    }
    // rocks
    if (computerChoice === "rock" && playerChoice.toLowerCase() === "paper") {
        return win;
    } else if (computerChoice === "rock" && playerChoice.toLowerCase() === "scissors") {
        return lose;
    } else if (computerChoice === "paper" && playerChoice.toLowerCase() === "rock") {
        return lose;
    } else if (computerChoice === "paper" && playerChoice.toLowerCase() === "scissors") {
        return win;
    } else if (computerChoice === "scissors" && playerChoice.toLowerCase() === "paper") {
        return lose;
    } else if (computerChoice === "scissors" && playerChoice.toLowerCase() === "rock") {
        return win;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(gameRound(computerChoice, playerChoice));
     }
}


let computerChoice = getComputerChoice();
let playerChoice = prompt("What's your move?").toLowerCase();
// console.log(gameRound(computerSelection, playerChoice));
game();



