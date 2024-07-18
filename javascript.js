const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice(){
    let index = 0;
    do {
        index = parseInt(prompt("What do you choose?\n0 - rock\n1 - paper\n2 - scissors"));
    } while (index < 0 || index > 2);
    return choices[index];
}

console.log(getComputerChoice());
console.log(getHumanChoice());