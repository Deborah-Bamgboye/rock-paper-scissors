console.log("Hello World")
let options = ["rock","paper","scissors"]
function getComputerChoice() {
let num = Math.floor(Math.random() * 3)
 
return options[num]
    
}
//initialise the array with the three values
// use math.random to generate a random index for the array
//  which the engine will return as the value for choice
function getHumanChoice() {

    return (prompt("rock,paper or scissors")).toLowerCase()
}
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
}
// const humanSelection = getHumanChoice;
// const computerSelection = getComputerChoice;


function playGame() {
    for (let i = 0; i < 5.; i++) {
        playRound(getHumanChoice(), getComputerChoice());
     
       
    }
   console.log("Your score: " + humanScore + "," + "computer's: " + computerScore)
   if (humanScore > computerScore) {
        console.log("congratulations! You win")
   } else if (humanScore === computerScore) {
        console.log("No-one wins!")
   } else{
    console.log("You lose computer wins!")
   }
}
playGame()