// // return computer's choice
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

// // return human choice
// function getHumanChoice(){
//     let choice;
// // listen to button click
//     const list = document.querySelector(".uList");
//     list.addEventListener('click', function (e){
//         let target = e.target;
//         switch(target.id){
//             case 'rock':
//                 choice = "rock";
//                 break;
//             case 'paper':
//                 choice = "paper";
//                 break;
//             case 'scissors':
//                 choice = "scissors";
//                 break;
//         }
//     });

//     return choice;
// }

// store score of both players
let humanScore = 0;
let computerScore = 0;

// play the match, announce the winner & increase the score
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Match is draw");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }   
}

let humanSelection;
let computerSelection;


const list = document.querySelector(".uList");
list.addEventListener('click', function (e){
    let target = e.target;
    switch(target.id){
        case "rock":
            humanSelection = target.id;
            playRound(humanSelection, getComputerChoice());

            break;
        case "paper":
            humanSelection = target.id;
            playRound(humanSelection, getComputerChoice());

            break;
        case "scissors":
            humanSelection = target.id;
            playRound(humanSelection, getComputerChoice());

            break;
    }
})
