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
function playRound(playerSelection, computerSelection, counterComputer, counterPlayer) {
    // comparing if you win or lose!
    // rock ifelse
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        //return counterComputer += 1; // score for computer NOT WORKING *
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log("It's a tie! " + playerSelection + " is same as " + computerSelection);
    }
    // paper ifelse
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log("It's a tie! " + playerSelection + " is same as " + computerSelection);
    }
    // scissors ifelse
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        console.log("It's a tie! " + playerSelection + " is same as " + computerSelection);
    }
}

// main program is here and looping it 5 times
function game(rounds) {
    let counterComputer = 0;
    let counterPlayer = 0;
    for (let i = 0; i < rounds; i++) {
        var tempPlayerSelection = prompt("What's your weapon, Rock, Paper or Scissors?"); // input from user
        const playerSelection = tempPlayerSelection.charAt(0).toUpperCase() + tempPlayerSelection.slice(1).toLowerCase(); // string case insensitive
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection, counterComputer, counterPlayer);//print return game winner
        //how to print scores if else?????
        if (playerSelection == "Rock" && computerSelection == "Paper") {
            counterComputer++;
        }
        else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            counterPlayer++;
        } 
        // paper ifelse
        else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            counterComputer++;
        }
        else if (playerSelection == "Paper" && computerSelection == "Rock") {
            counterPlayer++;
        }
        // scissors ifelse
        else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            counterComputer++;
        }
        else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            counterComputer++;
        }
        console.log(counterPlayer + " " + counterComputer); // printing
    }
}

//var counterComputer = 0; // score for computer
//var counterPlayer = 0; // score for user
var max = 3;

game(5); // main game
//console.log(counterComputer + "COMP");
//console.log(counterPlayer);
// who won?
/*if(counterPlayer > counterPlayer) {
    console.log("You win!");
}
else {
    console.log("You Lose!")
}*/