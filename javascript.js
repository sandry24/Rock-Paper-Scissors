const choices = ["rock", "paper", "scissors"];

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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

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

    let rounds = 5;
    for (let round = 1; round <= rounds; round++){
        console.log(`Round #${round}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    }

    console.log("Game over!");
    if (humanScore > computerScore)
        console.log("You won!");
    else if (humanScore < computerScore)
        console.log("You lost!");
    else
        console.log("It's a tie!");
}

playGame();