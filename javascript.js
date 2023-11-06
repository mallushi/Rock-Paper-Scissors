let div = document.querySelector('div');
    console.log(document.querySelector('div'))

    let btnScissors = document.createElement('button');
    btnScissors.textContent = 'scissors';
    btnScissors.addEventListener('click', function() {
        playRound('scissors', getComputerChoice());
        //console.log( playRound('scissors', getComputerChoice()))
    });

    let btnPaper = document.createElement('button');
    btnPaper.textContent = 'paper';
    btnPaper.addEventListener('click', function() {
        playRound('paper', getComputerChoice());
        //console.log( playRound('paper', getComputerChoice()))
    });

    let btnRock = document.createElement('button');
    btnRock.textContent = 'rock';
    btnRock.addEventListener('click', function() {
        playRound('rock', getComputerChoice());
        //console.log( playRound('rock', getComputerChoice()))
    });

    div.appendChild(btnScissors);
    div.appendChild(btnRock);
    div.appendChild(btnPaper);

//create a function to get a random choice from computer
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice;
}

//create a function that plays 1 round of the game with 2 parameters as computers selection and players selection 
//and than returns a winner
function playRound(playerSelection, computerSelection){
    if (playerScore == 5 || computerScore == 5){
            playerScore = 0;
            computerScore = 0;
    } 
    let result;
    if (playerSelection === computerSelection){
        result = "Same choice. No points given.";
    }
    else if ((playerSelection === "rock") & (computerSelection === "paper")){
        result = "You lose! You get 0 score.";
    }
    else if ((playerSelection === "rock") & (computerSelection === "scissors")){
        result = "You win! You get 1 score.";
    }
    else if ((playerSelection === "paper") & (computerSelection === "rock")){
        result = "You win! You get 1 score.";
    }
    else if ((playerSelection === "paper") & (computerSelection === "scissors")){
        result = "You lose! You get 0 score.";
    }
    else if ((playerSelection === "scissors") & (computerSelection === "paper")){
        result = "You win! You get 1 score.";
    }
    else if ((playerSelection === "scissors") & (computerSelection === "rock")){
        result = "You lose! You get 0 score.";
    }
    keepScore(result);
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

    if (playerScore == 5 || computerScore == 5){
        decideWinner(computerScore, playerScore)
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
        console.log("Result: " + playerScore + " - " + computerScore + "\nYou Have got equal score")
}

const computerSelection = getComputerChoice();
let winner = decideWinner(computerScore, playerScore);