// computes random number 0, 1 or 2 (rock, paper, scissors)
function computerPlay() {
    const randomNum = Math.floor(Math.random() * max);

    if (randomNum == 0){
        return "Rock";
    }
    else if(randomNum == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
// selection of a winner
// return input from user and random pick from computer
function playRound(playerSelection, computerSelection) {
    return "You Lose! " + playerSelection + " beats " + computerSelection;
}

var max = 3;
var tempPlayerSelection = prompt("What's your weapon, Rock, Paper or Scissors?"); 
const playerSelection = tempPlayerSelection.charAt(0).toUpperCase() + tempPlayerSelection.slice(1).toLowerCase(); // string case insensitive
const computerSelection = computerPlay();

console.log(computerSelection);
//print return game winner
console.log(playRound(playerSelection, computerSelection));