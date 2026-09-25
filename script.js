console.log("Hello World")
let options = ["rock","paper","scissors"]

function getComputerChoice() {
let num = Math.floor(Math.random() * 3)

return options[num]
    
}
let gameArea = document.querySelector("#game-area")
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let score_keep = document.createElement('div')
let result = document.createElement('p')
let congrats 

gameArea.appendChild(score_keep)
gameArea.appendChild(result)
 
//initialise the array with the three values
// use math.random to generate a random index for the array
//  which the engine will return as the value for choice




let humanScore = 0
let computerScore = 0



let isGameOver = false;
function playRound(humanChoice, computerChoice){
// if they are both the same
if (isGameOver) return;

switch (true) {
    case (humanChoice === computerChoice):
    // Code to run if expression === value1
    result.textContent = "No one winsz, computer chose " + computerChoice 
    break;
    case (humanChoice === "rock" && computerChoice === "paper"):
    result.textContent = "You lose, computer chose " + computerChoice 
    computerScore++ 
    // Code to run if expression === value2
    break;
    case (humanChoice === "paper" && computerChoice === "rock"):
        result.textContent ="You win, computer chose " + computerChoice
        humanScore++
    break;
    case (humanChoice === "paper" && computerChoice === "scissors"):
            result.textContent ="You lose, computer chose " + computerChoice
            computerScore++
    break;
    case (humanChoice === "scissors" && computerChoice === "paper"):
            result.textContent = "You win, computer chose " + computerChoice 
            humanScore++
    break;
    case (humanChoice === "scissors" && computerChoice === "rock"):
            result.textContent = "You lose, computer chose " + computerChoice 
            computerScore++
    break;
    case (humanChoice === "rock" && computerChoice === "scissors"):
            result.textContent = "You win, computer chose " + computerChoice 
            humanScore++
    break;
}
 scoreTracker()

  checkWinner() 
}

 
// const humanSelection = getHumanChoice;
// const computerSelection = getComputerChoice;
    function scoreTracker() {
        score_keep.textContent = `Current Scores:Human - ${humanScore} Computer - ${computerScore}`
    }

 function checkWinner() {

    congrats = document.createElement("div")
    if (humanScore === 5 || computerScore === 5) {
        isGameOver = true; // Lock the game state
        
        // 3. Disable the choice buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (humanScore === 5) {
        
        congrats.textContent = "Congratulations! You reached 5 points first. You win the game!  ";
    
      
        } else if (computerScore === 5) {
        congrats.textContent = "The computer reached 5 points first. You lose the game!";
        

    }
    resetGame()
}}
function resetGame(){
    let resetButton = document.createElement("button")
        resetButton.textContent = "Reset Game"
     gameArea.appendChild(congrats)
     congrats.appendChild(resetButton)
     resetButton.addEventListener('click', function () {
        humanScore = 0
        computerScore = 0
        scoreTracker()
        isGameOver = false;
        rock.disabled= false;
        paper.disabled = false;
        scissors.disabled = false;
        gameArea.removeChild(congrats)
        result.textContent = ""
     })
        
}

 rock.addEventListener('click', function () {
        
        playRound("rock",getComputerChoice())
    })
 paper.addEventListener('click', function () {
    
    playRound("paper",getComputerChoice())
    })
 scissors.addEventListener('click', function () {
    playRound("scissors",getComputerChoice())
    })
// function playGame() {
//     // for (let i = 0; i < 5.; i++) {
//         // playRound(getHumanChoice(), getComputerChoice());

     
       
//     // }
    
    
//    console.log("Your score: " + humanScore + "," + "computer's: " + computerScore)
  
  
//     rock.addEventListener('click', playGame)
//  paper.addEventListener('click', playGame)
//  scissors.addEventListener('click', playGame)

 // so what are we meant to deal with in the first place
 /* i press a button,
 the value of humanchoice is selected based on the button and simultanoeusly,
 a round runs.
 let's put the whole winner loser logic on pause)
 */