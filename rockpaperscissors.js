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

var max = 3;
game(5);