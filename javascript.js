const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice(){
    let choice = "";
    while (!choices.find(c => c.toLowerCase() === choice.toLowerCase()))
        choice = prompt("What do you choose?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lost! Paper beats rock!");
            computerScore++;
        } else {
            console.log("You won! Rock beats scissors!");
            humanScore++;
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("You won! Paper beats rock!");
            humanScore++;
        } else {
            console.log("You lost! Scissors beats paper!");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock"){
            console.log("You lost! Rock beats scissors!");
            computerScore++;
        } else {
            console.log("You won! Scissors beats paper!");
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);