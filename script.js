let humanScore = 0;
let computerScore = 0;

let roundNumber = 1;


function getComputerChoice() {

    const randomNum = Math.floor(Math.random()*3) + 1;
    //let computerChoice = "";

    if (randomNum === 1) return "rock";
    else if(randomNum === 2) return "paper";
    else return "scissors"
    
    /*console.log(randomNum);
    console.log(computerChoice);
    return computerChoice;*/
    
}




function getHumanChoice() {

    let humanChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();  
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        humanChoice = prompt("Invalid input. Please enter Rock, Paper, or Scissors").toLowerCase();
    }
    return humanChoice;
}


/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`computer selection ${computerSelection}`);
console.log(`human selection ${humanSelection}`);*/

function playRound(humanChoice, computerChoice) {
    
    console.log(`Round number: ${roundNumber}`);
    console.log(`   Human choice: ${humanChoice}`);
    console.log(`   Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) console.log("Draw!");

    else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log(`YOU LOSE: ${computerChoice} beats ${humanChoice}...`);
        computerScore++;
    }

    else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`YOU LOSE: ${computerChoice} beats ${humanChoice}...`);
        computerScore++;
    }

    
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`YOU LOSE: ${computerChoice} beats ${humanChoice}...`);   
        computerScore++;
    }

    else {
        console.log("YOU WIN");
        humanScore++;
    }

    console.log(`Computer score: ${computerScore}, Human Score: ${humanScore}`);


}

function playGame() {
    for (roundNumber = 1; roundNumber <= 5; roundNumber++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) console.log("YOU LOSE, COMPUTER WINS");
        
    else if (humanScore > computerScore) console.log("YOU WIN, COMPUTER LOSES");

    else console.log("Game is a TIE");
}

playGame();



