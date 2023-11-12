let div = document.querySelector('div');
div.id = 'page';

let title = document.createElement('header');
title.id = 'titulli';
title.textContent = 'ROCK-PAPER-SCISSORS Game';
    
let btncontainer = document.createElement('div');
btncontainer.id = 'container';
let scissorsctn = document.createElement('div');
scissorsctn.className = 'elements';
let rockctn = document.createElement('div');
rockctn.className = 'elements';
let paperctn = document.createElement('div');
paperctn.className = 'elements';

let btnScissors = document.createElement('button');
btnScissors.textContent = 'scissors';
btnScissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});
    
let btnPaper = document.createElement('button');
btnPaper.textContent = 'paper';
btnPaper.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});

let btnRock = document.createElement('button');
btnRock.textContent = 'rock';
btnRock.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});

let scissorsimg = document.createElement('img');
scissorsimg.src = 'https://static.thenounproject.com/png/88666-200.png';
scissorsimg.addEventListener('click', function(){
    btnScissors.click();
})

let rockimg = document.createElement('img');
rockimg.src = 'https://cdn-icons-png.flaticon.com/128/3562/3562093.png';
rockimg.addEventListener('click', function(){
    btnRock.click();
})

let paperimg = document.createElement('img');
paperimg.src = 'https://static.thenounproject.com/png/477922-200.png';
paperimg.addEventListener('click',function(){
    btnPaper.click();
})

let scorecontainer = document.createElement('div');
scorecontainer.id = 'score';
let scorediv = document.createElement('div');
scorediv.id = 'scoreid';
let compscorediv = document.createElement('div');
let playerscorediv = document.createElement('div');
let compchoice = document.createElement('div');
let playerchoice = document.createElement('div');
let para = document.createElement('p');
para.textContent = 'Choose your weapon:';

let playerChoice;
let computerChoice;    

//create a function to get a random choice from computer
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    return computerChoice;
}

//create a function that plays 1 round of the game with 2 parameters as computers selection and players selection 
//and than returns a winner
function playRound(playerSelection, computerSelection){
    playerChoice = playerSelection;
    computerChoice = computerSelection;
    compchoice.textContent = `Computer's choice: ${computerChoice}`;
    playerchoice.textContent = `Your choice: ${playerChoice}`;

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
    checkScore(computerScore, playerScore);
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
    compscorediv.textContent = `Computer score is : ${computerScore}`;
    playerscorediv.textContent = `Your score is : ${playerScore}`;
    scorediv.textContent = result;

}

function checkScore(computerScore, playerScore) {
    if (playerScore == 5 || computerScore == 5){
        decideWinner(computerScore, playerScore);
        resetGame();
    }
}

function decideWinner(computerScore, playerScore){
    let winner;
    if (computerScore > playerScore){
        winner ="Result: " + playerScore + " - " + computerScore + "  \nYou lost the game!"; 
    }
    else if (computerScore < playerScore){
        winner = "Result: " + playerScore + " - " + computerScore + "  \nCongratulations! You won the game."
    }

    let thewinner = document.createElement('div');
    thewinner.className = 'alert-box';
    thewinner.textContent =  ` Game Over! ${winner}  Play again!`;
    document.body.appendChild(thewinner);

    setTimeout(() => {
        thewinner.remove();
    }, 2000);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    compscorediv.textContent = '';
    playerscorediv.textContent = '';
    compchoice.textContent = '';
    playerchoice.textContent = '';
    thewinner.textContent = '';
    scorediv.textContent = '';
    
}

const computerSelection = getComputerChoice();

scissorsctn.appendChild(scissorsimg);
scissorsctn.appendChild(btnScissors);

rockctn.appendChild(rockimg);
rockctn.appendChild(btnRock);

paperctn.appendChild(paperimg);
paperctn.appendChild(btnPaper);

btncontainer.appendChild(scissorsctn);
btncontainer.appendChild(rockctn);
btncontainer.appendChild(paperctn);

scorecontainer.appendChild(scorediv);
scorecontainer.appendChild(playerchoice);
scorecontainer.appendChild(compchoice);
scorecontainer.appendChild(compscorediv);
scorecontainer.appendChild(playerscorediv);

div.appendChild(title);
div.appendChild(para);
div.appendChild(btncontainer);
div.appendChild(scorecontainer);