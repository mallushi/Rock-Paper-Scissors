//create a function to get a random choice from computer
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice;
}
console.log(getComputerChoice())

//create a functiion to get players input
function getPlayerChoice(){
    let playerChoice = prompt("What is your choice: rock, paper or scissors?");
    let answer = playerChoice.toLowerCase();
    return answer;
}
console.log(getPlayerChoice())