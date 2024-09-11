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
