function getComputerChoice() {
    const choices = {1: "Rock", 2: "Scissors", 3:"Paper"};
    let choice = Math.floor(Math.random() * 3) + 1;
    let computerChoice = choices[choice];
    console.log(computerChoice);
    return computerChoice
    
}

getComputerChoice();

function gameRound(computerChoice, playerChoice) {
    computerChoice = getComputerChoice();
}