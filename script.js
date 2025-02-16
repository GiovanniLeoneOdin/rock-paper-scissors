let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;

getHumanInput();

function getHumanInput() {
    let string = prompt("Enter either rock, paper or scissors").toLowerCase();
    if (string === "rock" || string === "paper" || string === "scissors") {
        humanChoice = string;
        console.log("Good choice");
        getComputerInput();
    } else {
        console.log("What the heck is that dummy, enter a valid answer");
    }
}

//randomly generate string value with math.random
function getComputerInput() {
    let randomInt = Math.floor(Math.random() * 9);
    if (randomInt >= 0 && randomInt <= 2) {
        computerChoice = "rock";
    } else if (randomInt >=3 && randomInt <= 5) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    checkWinner(humanChoice, computerChoice);
}

function checkWinner(humanChoice, computerChoice) {
    console.log(`The human chooses ${humanChoice} and the computer chooses ${computerChoice}`);
    if (humanChoice == computerChoice) {
        console.log("Tied");
        //humanChoice equals rock
    } else if (humanChoice == "rock" && computerChoice =="scissors") {
        console.log("You won this round");
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("The computer mogged you");
        //humanChoice equals paper
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won this round");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("The computer mogged you");
        //humanChoice equals scissors
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won this round");
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("The computer mogged you");
    }

}