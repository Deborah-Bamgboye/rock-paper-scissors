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

gameArea.appendChild(score_keep)
 
//initialise the array with the three values
// use math.random to generate a random index for the array
//  which the engine will return as the value for choice




let humanScore = 0
let computerScore = 0




function playRound(humanChoice, computerChoice){
// if they are both the same

switch (true) {
    case (humanChoice === computerChoice):
    // Code to run if expression === value1
    console.log("No one winsz, computer chose " + computerChoice )
    break;
    case (humanChoice === "rock" && computerChoice === "paper"):
    console.log("You lose, computer chose " + computerChoice )
    computerScore++ 
    // Code to run if expression === value2
    break;
    case (humanChoice === "paper" && computerChoice === "rock"):
        console.log("You win, computer chose " + computerChoice)
        humanScore++
    break;
    case (humanChoice === "paper" && computerChoice === "scissors"):
            console.log("You lose, computer chose " + computerChoice)
            computerScore++
    break;
    case (humanChoice === "scissors" && computerChoice === "paper"):
            console.log("You win, computer chose " + computerChoice )
            humanScore++
    break;
    case (humanChoice === "scissors" && computerChoice === "rock"):
            console.log("You lose, computer chose " + computerChoice )
            computerScore++
    break;
    case (humanChoice === "rock" && computerChoice === "scissors"):
            console.log("You win, computer chose " + computerChoice )
            humanScore++
    break;
}
 score_keep.textContent = `Current Scores:Human - ${humanScore} Computer - ${computerScore}`

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