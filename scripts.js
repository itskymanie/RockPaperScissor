
let computerScore = 0;
let playerScore = 0;

const container = document.getElementById("container");

const rockButton = createButton("Rock", "Rock");
const scissorButton = createButton("Scissors", "Scissors");
const paperButton = createButton("Paper", "Paper");
const results = document.createElement("div");
const score = document.createElement("div");

container.appendChild(rockButton);
container.appendChild(scissorButton);
container.appendChild(paperButton);
container.appendChild(results);
container.appendChild(score);

function createButton(text, selection)
{
    const button = document.createElement("button");
    button.textContent = text;

    button.addEventListener("click", function() {
        playGame(selection);
    });

    return button;
}

function playGame(playerSelection)
{
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){
        results.textContent =("You Draw! Both chose " + playerSelection + ".\n");
    } 
    else if(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) 
    {
        displayRound("player", playerSelection, computerSelection);
    } 
    else
    {
        displayRound("computer", playerSelection, computerSelection);
    }
}

function getComputerChoice()
{
    let moves = Array("Rock", "Paper", "Scissors");
    return moves[Math.floor(Math.random()* moves.length)];
}

function displayRound (winner, playerSelection, computerSelection)
{
    if(winner === "player")
    {
        playerScore++;
        results.textContent = ("You win! " + playerSelection + " beats " + computerSelection + ".");
        score.textContent = ("Player : " + playerScore + " Computer : " + computerScore);
    }
    else if(winner === "computer")
    {
        computerScore++;
        results.textContent = ("You lose! " + computerSelection + " beats " + playerSelection + ".");
        score.textContent = ("Player : " + playerScore + " Computer : " + computerScore);
    }

    if (playerScore === 5)
        {
            score.textContent = ("You win with 5 points.");
            playerScore = computerScore = 0;
        }
        else if (computerScore === 5)
        {
            score.textContent = ("Imagine losing. Computer with 5 points.");
            playerScore = computerScore = 0;
        }
}
