
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);

playGame(playerSelection, computerSelection);


function getComputerChoice(){
    let moves = Array("rock", "paper", "scissors");
    return moves[Math.floor(Math.random()* moves.length)];
}

function playGame(playerSelection, computerSelection){
    playerSelection= playerSelection.replace(/ /g,'');
    playerSelection= playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        console.log("You Draw! Both did " + playerSelection);
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats Scissors.");
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats Rock.");
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock.");
    }
    else if(playerSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose! Scissor beats Paper.");
    }
    else if(playerSelection == "scissor" && computerSelection == "rock"){
        console.log("You lose! Rock beats scissors.");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats Paper.");
    }
    else{
        console.log("Error Baby!");
    }
}

function getPlayerChoice(){
    return prompt("Pick one : Rock , Paper, Scissors. : ");
}
