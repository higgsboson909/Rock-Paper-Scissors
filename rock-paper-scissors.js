
let humanScore = 0;
let computerScore = 0;


// create elements for score, result, scoreList & announcements 
let resultDiv = document.createElement("div");
let scoreDiv = document.createElement("ul")
let pScore = document.createElement("li");
let cScore = document.createElement("li")
let announcement1 = document.createElement("div");
let announcement2 = document.createElement("div");

// reference for nav
let nav = document.querySelector("nav");
// text content for announcements
announcement1.textContent = "Select You Choice";
announcement2.textContent = "First to score 5 points will be the winner";

// add to DOM
nav.after(announcement1);
announcement1.style.cssText = "text-align: center; font-weight: 700; font-size: x-large; padding-left: 30px; padding-right: 30px;";
announcement1.after(announcement2);
announcement2.style.cssText = "font-weight: 600; text-align: center; padding-top: 10px; font-size: larger; padding-left: 30px; padding-right: 30px;";


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


// create classes to control score & result elements
resultDiv.classList.add("result")
scoreDiv.classList.add("score");


// play the match, announce the winner & increase the score
function playRound(humanChoice, computerChoice){
        uList.after(resultDiv);


        if(humanChoice === computerChoice){
            resultDiv.textContent = "Match is draw";
        }
        else if(humanChoice === "rock" && computerChoice === "paper"){
            resultDiv.textContent = `You lost! Paper beats Rock`;
            ++computerScore;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            resultDiv.textContent = `You won! Rock beats Scissors`;
            ++humanScore;
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){
            resultDiv.textContent = `You won! Paper beats Rock`;
            ++humanScore;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            resultDiv.textContent = `You lost! Scissors beats Paper`;
            ++computerScore;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            resultDiv.textContent = `You won! Scissors beats Paper`;
            ++humanScore;
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            resultDiv.textContent = `You lost! Rock beats Scissors`;
            ++computerScore;
        }   
        
        if(humanScore < 5 && computerScore < 5){
            resultDiv.after(scoreDiv);
            scoreDiv.appendChild(pScore);
            scoreDiv.appendChild(cScore);
            pScore.textContent = `Your Score: ${humanScore}`;
            cScore.textContent = `Computer Score: ${computerScore}`;    
            
        }
        else if(computerScore === 5){
            resultDiv.after(scoreDiv);
            scoreDiv.appendChild(pScore);
            scoreDiv.appendChild(cScore);
            pScore.textContent = `Your Score: ${humanScore}`;
            cScore.textContent = `Computer Score: ${computerScore}`; 
            announcement1.style.cssText = "text-align: center; font-weight: 900; font-size: xx-large; padding-left: 30px; padding-right: 30px; color: red";
            announcement2.style.cssText = "font-weight: 800; text-align: center; padding-top: 10px; font-size: x-large; padding-left: 30px; padding-right: 30px; color: red";
            announcement1.textContent = "You Lost!";
            announcement2.textContent = "Refresh the Page to Play Again";

        }
        else if(humanScore === 5){
            resultDiv.after(scoreDiv);
            scoreDiv.appendChild(pScore);
            scoreDiv.appendChild(cScore);
            pScore.textContent = `Your Score: ${humanScore}`;
            cScore.textContent = `Computer Score: ${computerScore}`; 
            announcement1.style.cssText = "text-align: center; font-weight: 900; font-size: xx-large; padding-left: 30px; padding-right: 30px; color: green";
            announcement2.style.cssText = "font-weight: 800; text-align: center; padding-top: 10px; font-size: x-large; padding-left: 30px; padding-right: 30px; color: green";
            announcement1.textContent = "You Won the Game!";
            announcement2.textContent = "Refresh the Page to Play Again";
        }

}

let humanSelection;
let computerSelection;
let uList = document.querySelector(".uList");

    uList.addEventListener('click', function (e){
    if(humanScore === 5 || computerScore === 5){
        return;
    }
    let target = e.target;
    switch(target.id){
        case "rock":
            playRound(target.id, getComputerChoice());
            break;
        case "paper":
            playRound(target.id, getComputerChoice());
            break;        
        case "scissors":
            playRound(target.id, getComputerChoice());
            break;    
        }
    });