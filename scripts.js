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
        wins += 1;
        return win;
    } else if (computerChoice === "rock" && playerChoice.toLowerCase() === "scissors") {
        loss += 1;
        return lose;
    } else if (computerChoice === "paper" && playerChoice.toLowerCase() === "rock") {
        loss += 1;
        return lose;
    } else if (computerChoice === "paper" && playerChoice.toLowerCase() === "scissors") {
        wins += 1;
        return win;
    } else if (computerChoice === "scissors" && playerChoice.toLowerCase() === "paper") {
        loss += 1;
        return lose;
    } else if (computerChoice === "scissors" && playerChoice.toLowerCase() === "rock") {
        wins += 1;
        return win;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("What's your move?").toLowerCase();
        console.log(gameRound(computerChoice, playerChoice));
     }
    if (wins > loss) {
        console.log(`You win! ${wins} - ${loss}`);
    }
    else if (wins == loss) {
        console.log(`It's a tie! ${wins} - ${loss}`);
    }
    else {
        console.log(`You lose! ${wins} - ${loss}`);
    }
}

let wins = 0;
let loss = 0;


// console.log(gameRound(computerSelection, playerChoice));
game();



