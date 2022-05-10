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
    // comparing if you win or lose!
    // rock ifelse
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "It's a tie! " + playerSelection + " is same as " + computerSelection;
    }
    // paper ifelse
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "It's a tie! " + playerSelection + " is same as " + computerSelection;
    }
    // scissors ifelse
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "It's a tie! " + playerSelection + " is same as " + computerSelection;
    }
}
// main program is here and looping it 5 times
function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        var tempPlayerSelection = prompt("What's your weapon, Rock, Paper or Scissors?"); // input from user
        const playerSelection = tempPlayerSelection.charAt(0).toUpperCase() + tempPlayerSelection.slice(1).toLowerCase(); // string case insensitive
        const computerSelection = computerPlay();
        playRound();
        //console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection)); //print return game winner
    }
}

var counter = 0; // for scores
var max = 3;
game(5);