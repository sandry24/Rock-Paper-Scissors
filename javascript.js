const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors?");
    while (!choices.find(c => c.toLowerCase() === choice.toLowerCase()))
        choice = prompt("Invalid input. Rock, paper or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    let divResults = document.querySelector("#results");
    let pHumanScore = document.querySelector("#human-score");
    let pComputerScore = document.querySelector("#computer-score");

    let pHuman = document.querySelector("#human-text");
    pHuman.textContent = `You chose ${humanChoice}`;

    let pComputer = document.querySelector("#computer-text");
    pComputer.textContent = `Computer chose ${computerChoice}`;

    let pResult = document.querySelector("#result-text");
    
    if (humanChoice === computerChoice){
        pResult.textContent = "It's a tie!";
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            pResult.textContent = "You lost! Paper beats rock!";
            computerScore++;
        } else {
            pResult.textContent = "You won! Rock beats scissors!";
            humanScore++;
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            pResult.textContent = "You won! Paper beats rock!";
            humanScore++;
        } else {
            pResult.textContent = "You lost! Scissors beats paper!";
            computerScore++;
        }
    } else {
        if (computerChoice === "rock"){
            pResult.textContent = "You lost! Rock beats scissors!";
            computerScore++;
        } else {
            pResult.textContent = "You won! Scissors beats paper!";
            humanScore++;
        }
    }

    pHumanScore.textContent = `Human score: ${humanScore}`;
    pComputerScore.textContent = `Computer score: ${computerScore}`;
}

let rock = document.querySelector("#rock-button");
let paper = document.querySelector("#paper-button");
let scissors = document.querySelector("#scissors-button");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});