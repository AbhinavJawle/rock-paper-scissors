function getComputerChoice() {

    const randomNum = Math.floor(Math.random()*10);
    //let computerChoice = "";

    if (randomNum >= 0 && randomNum < 3) return "rock";
    else if(randomNum >= 3 && randomNum < 6) return "paper";
    else return "scissors"
    
    /*console.log(randomNum);
    console.log(computerChoice);
    return computerChoice;*/
    
}




function getHumanChoice() {

   /* const humanChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();  
    console.log(humanChoice); */ 
    return prompt("Choose: Rock, Paper or Scissors").toLowerCase();
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`computer selection ${computerSelection}`);
console.log(`human selection ${humanSelection}`);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let roundNumber = 1;
    
    let x = function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        
        console.log(`Round number ${roundNumber}`);
        console.log(`human choice ${humanChoice}`);
        console.log(`computer choice ${computerChoice}`);

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
    
        else if(humanChoice != "rock" && humanChoice && "paper" && humanChoice != "scissors") {
            alert("not valid");
        }
    
        else {
            console.log("You win");
            humanScore++;
        }
    
        console.log(`computer score: ${computerScore}`);
        console.log(`human Score ${humanScore}`);
    
    }

    for (roundNumber = 1; roundNumber <= 5; roundNumber++) {
        
        x(humanSelection, computerSelection);
    }
}

playGame();



