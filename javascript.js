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
        return("Same choice. No points given.");
    }
    else if ((playerSelection === "rock") & (computerSelection === "paper")){
        return("You lose! You get 0 score.");
    }
    else if ((playerSelection === "rock") & (computerSelection === "scissors")){
        return("You win! You get 1 score.");
    }
    else if ((playerSelection === "paper") & (computerSelection === "rock")){
        return("You win! You get 1 score.");
    }
    else if ((playerSelection === "paper") & (computerSelection === "scissors")){
        return("You lose! You get 0 score.");
    }
    else if ((playerSelection === "scissors") & (computerSelection === "paper")){
        return("You win! You get 1 score.");
    }
    else if ((playerSelection === "scissors") & (computerSelection === "rock")){
        return("You lose! You get 0 score.");
    }
}
function game(){
    let i = 0;
    while (i<5){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        keepScore(result);
        i++;
    }
}
let playerScore = 0;
let computerScore = 0;
function keepScore(result){
    if (result === "You win! You get 1 score."){
        playerScore += 1;
    }
    else if (result === "You lose! You get 0 score."){
        computerScore += 1;
    }
    console.log(computerScore);
    console.log(playerScore);
}

function decideWinner(computerScore, playerScore){
    if (computerScore > playerScore){
        console.log("Result: " + playerScore + " - " + computerScore + "\nYou lost the game!")
    }
    else if (computerScore < playerScore){
        console.log("Result: " + playerScore + " - " + computerScore + "\nCongratulations! You won the game.")
    }
    else
        console.log("YResult: " + playerScore + " - " + computerScore + "\nYou Have got equal score")
}

let fiveRounds = game();
let winner = decideWinner(computerScore, playerScore);