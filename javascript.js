let div = document.querySelector('div');

    let title = document.createElement('div');
    title.id = 'titulli';
    title.textContent = 'ROCK-PAPER-SCISSORS Game';
    
    let btncontainer = document.createElement('div');
    btncontainer.id = 'container';
    let scissorsctn = document.createElement('div');
    scissorsctn.class = 'elements';
    let rockctn = document.createElement('div');
    rockctn.class = 'elements';
    let paperctn = document.createElement('div');
    paperctn.class = 'elements';

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

    let scissorsimg = document.createElement('img');
    scissorsimg.src = 'https://static.thenounproject.com/png/88666-200.png';
    scissorsimg.addEventListener('click', function(){
        btnScissors.click();
    })

    let rockimg = document.createElement('img');
    rockimg.src = 'https://www.pinclipart.com/picdir/big/536-5360218_rock-paper-scissors-clipart-png-download-paper-rock.png';
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
    let compscorediv = document.createElement('div');
    let playerscorediv = document.createElement('div');
    let thewinner = document.createElement('div');

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
    scorecontainer.appendChild(compscorediv);
    scorecontainer.appendChild(playerscorediv);
    scorecontainer.appendChild(thewinner);

    div.appendChild(title);
    div.appendChild(btncontainer);
    div.appendChild(scorecontainer);



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
    scorediv.textContent = result;
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
    compscorediv.textContent = `Computer score is : ${computerScore}`;
    playerscorediv.textContent = `Your score is : ${playerScore}`;
    console.log(computerScore);
    console.log(playerScore);
}

function decideWinner(computerScore, playerScore){
    let winner;
    if (computerScore > playerScore){
        winner ="Result: " + playerScore + " - " + computerScore + "\nYou lost the game!"; 
        console.log("Result: " + playerScore + " - " + computerScore + "\nYou lost the game!")
    }
    else if (computerScore < playerScore){
        winner = "Result: " + playerScore + " - " + computerScore + "\nCongratulations! You won the game."
        console.log("Result: " + playerScore + " - " + computerScore + "\nCongratulations! You won the game.")
    }
    else
    winner = "Result: " + playerScore + " - " + computerScore + "\nYou Have got equal score";
        console.log("Result: " + playerScore + " - " + computerScore + "\nYou Have got equal score")
        thewinner.textContent = winner;
}

const computerSelection = getComputerChoice();
//let winner = decideWinner(computerScore, playerScore);