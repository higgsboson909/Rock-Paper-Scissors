// return computer's choice
function getComputerChoice(){
    let randValue = Math.floor(Math.random() * 3);          // random num reduced to only 3 values
    switch(randValue){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// return human choice
function getHumanChoice(){
    let choice;
    
    // for input validation
    do{
        choice = prompt("- Rock\n- Paper\n- Scissors\nEnter your choice : ");
        choice = choice.toLowerCase();                          // modify player input to lowercase
        if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
            alert("Invalid Choice!\nTry Again...")
        }                                            
    }while(choice !== "rock" && choice !== "paper" && choice !== "scissors");

    return choice;          // return choice if input is valid
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



// 5 rounds of game
function playGame(){
    for(let i = 0; i < 5; i++){

        alert(`Round ${i + 1} of 5`);

        // fresh choices returned to constants each time 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);   
    }
    alert(`Your total score is ${humanScore}`);
}

playGame();
