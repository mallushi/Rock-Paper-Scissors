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
        return("No points given.");
    }
    else if ((playerSelection === "rock") & (computerSelection === "paper")){
        return("You lose!");
    }
    else if ((playerSelection === "rock") & (computerSelection === "scissors")){
        return("You win!");
    }
    else if ((playerSelection === "paper") & (computerSelection === "rock")){
        return("You win!");
    }
    else if ((playerSelection === "paper") & (computerSelection === "scissors")){
        return("You lose!");
    }
    else if ((playerSelection === "scissors") & (computerSelection === "paper")){
        return("You win!");
    }
    else if ((playerSelection === "scissors") & (computerSelection === "rock")){
        return("You lose!");
    }
}
function game(){
    let i = 0;
    while (i<5){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        i++;
    }
}
let winner = game();