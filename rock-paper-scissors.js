// return computer's choice
function getComputerChoice(){
    let randValue = Math.floor(Math.random() * 3);          // random num reduced to only 3 values
    switch(randValue){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// return human choice
function getHumanChoice(){
    let choice = prompt("- Rock\n- Paper\n- Scissors\nEnter your choice : ");
    choice = choice.toLowerCase();                                                      // modify player input to lowercase
    if(choice === "rock" || choice === "paper" || choice === "scissors"){               // user choice validation
        return choice;
    }
    else{
        alert("You have entered wrong choice!\nTry Again");
        getHumanChoice();
    }
}

// store score of both players
let humanScore = 0;
let computerScore = 0;

// play the match, announce the winner & increase the score
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("Match is draw");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        alert(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert(`You Won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }   
}

// choices returned to constants
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



