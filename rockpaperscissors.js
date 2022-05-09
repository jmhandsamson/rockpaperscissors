// computes random number 0, 1 or 2 (rock, paper, scissors)
function computerPlay(randomNum) {
    randomNum = Math.floor(Math.random() * randomNum);
    //console.log(randomNum);
    
    // how to return string???
    if (randomNum == 0){
        return "Rock";
    }
    else if (randomNum == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}



// print return rock paper scissors
console.log(computerPlay(3));
