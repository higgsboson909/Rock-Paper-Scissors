// return computer's choice
function getComputerChoice(){
    let randValue = Math.floor(Math.random() * 3);          // random num reduced to only 3 values
    switch(randValue){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

