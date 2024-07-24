const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");
const divResults = document.querySelector("#results");
const pHumanScore = document.querySelector("#human-score");
const pComputerScore = document.querySelector("#computer-score");
const pHuman = document.querySelector("#human-text");
const pComputer = document.querySelector("#computer-text");
const pResult = document.querySelector("#result-text");
const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", resetGame);

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    const winner = determineWinner(humanChoice, computerChoice);
    updateScores(winner);
    updateMessage(humanChoice, computerChoice, winner);
    checkForGameEnd();
}

function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function disableButtons() {
    document.querySelectorAll(".choice-button").forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    document.querySelectorAll(".choice-button").forEach(button => {
        button.disabled = false;
    });
}

function showResetButton() {
    resetButton.classList.remove("hidden");
}

function hideResetButton() {
    resetButton.classList.add("hidden");
}

function resetGame(pGameOver, buttonTryAgain){
    pResult.textContent = "Game has been reset!";
    humanScore = 0;
    computerScore = 0;
    pHumanScore.textContent = humanScore;
    pComputerScore.textContent = computerScore;
    enableButtons();
    hideResetButton();
}

function showGameEndMessage() {
    if (humanScore === 5) {
        pResult.textContent = "Congratulations! You reached 5 points and won the game.";
    } else {
        pResult.textContent = "Game over! The computer reached 5 points and won the game.";
    }
}

function checkForGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        showResetButton();
        showGameEndMessage();
        disableButtons();
    }
}

function updateMessage(humanChoice, computerChoice, result) {
    if (result === "draw") {
        pResult.textContent = `It's a draw! You both chose ${humanChoice}.`;
    } else if (result === "human") {
        pResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        pResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function updateScores(winner) {
    if (winner === "human") {
        humanScore++;
        pHumanScore.textContent = humanScore;
    } else if (winner === "computer") {
        computerScore++;
        pComputerScore.textContent = computerScore;
    }
}