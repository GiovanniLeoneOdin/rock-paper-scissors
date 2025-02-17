let humanChoice = undefined;
let computerChoice = undefined;
let humanScore = 0;
let computerScore = 0;
let round = 0;

playRound();

function getHumanInput(promptMessage) {
    //use case sensitive string for comparisons
    let string = prompt(promptMessage).toLowerCase();
    if (string === "rock" || string === "paper" || string === "scissors") {
        //clear console of previous round strings
        console.clear();
        humanChoice = string;
        getComputerInput();
    } else {
        getHumanInput("What the heck is that, enter a valid prompt");
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
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`);
    if (humanChoice == computerChoice) {
        console.log("Tied");
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        //humanChoice equals rock
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You won this round");
        humanScore++
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("The computer mogged you");
        computerScore++;
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        //humanChoice equals paper
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won this round");
        humanScore++
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("The computer mogged you");
        computerScore++;
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        //humanChoice equals scissors
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won this round");
        humanScore++
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("The computer mogged you");
        computerScore++;
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    repeatRound();

}

function repeatRound() {
    //reset game after round = 5;
    if (round === 5) {
        console.log("Game over");
        if (humanScore > computerScore) {
            console.log("You won!")
        } else if (computerScore > humanScore) {
            console.log("Wow, the computer mogged you this time lil bro");
        } else {
            console.log("You tied with the computer, not too sad I guess.")
        }
        humanScore = 0;
        computerScore = 0;
        round = 0;
        playRound();
    } else {
        playRound()
    }
}

function playRound() {
    round++;
    console.log(`Round ${round}`);
    getHumanInput("Enter either rock, paper or scissors");
}