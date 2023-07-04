//create a function to get a random choice from computer
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice;
}

//create a function to get players input and then convert the answer to lowercase
function getPlayerChoice(){
    let playerChoice = prompt("What is your choice: rock, paper or scissors?");
    let answer = playerChoice.toLowerCase();
    return answer;
}

//create a function that plays 1 round of the game with 2 parameters as computers selection and players selection 
//and than returns a winner
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return("Same choice. No points given. Play again.");
    }
    else if ((playerSelection === "rock") & (computerSelection === "paper")){
        return("You lose! Paper beats Rock.");
    }
    else if ((playerSelection === "rock") & (computerSelection === "scissors")){
        return("You win! Rock beats Scissors.");
    }
    else if ((playerSelection === "paper") & (computerSelection === "rock")){
        return("You win! Paper beats Rock.");
    }
    else if ((playerSelection === "paper") & (computerSelection === "scissors")){
        return("You lose! Scissors beat Paper.");
    }
    else if ((playerSelection === "scissors") & (computerSelection === "paper")){
        return("You win! Scissors beat Paper.");
    }
    else if ((playerSelection === "scissors") & (computerSelection === "rock")){
        return("You lose! Rock beats Scissors.");
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));