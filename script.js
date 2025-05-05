let playerDisplay = document.getElementById("playerDisplay")
let computerDisplay = document.getElementById("computerDisplay")
let resultDisplay = document.getElementById("resultDisplay")
let choices = ["rock", "paper", "scissors"]
let playerScoreDisplay = document.getElementById("playerScoreDisplay")
let computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0
let computerScore = 0

function playGame(playerChoice){
    

    let computerChoice = choices[Math.floor(Math.random()*choices.length)]

    let result= "";

    if(playerChoice=== computerChoice){
        result = "IT'S A TIE"
    }

    else{
        switch(playerChoice){
            case "rock" :
            result = (computerChoice==="scissors") ? "YOU WIN" : "YOU LOSE"
            break;

            case "paper" :
            result = (computerChoice==="rock") ? "YOU WIN" : "YOU LOSE"
            break;

            case "scissors" :
            result = (computerChoice==="paper") ? "YOU WIN" : "YOU LOSE"
            break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Computer: ${computerChoice}`
    resultDisplay.textContent = `${result}`
    
    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN":
        resultDisplay.classList.add("greenText")
        playerScore++
        playerScoreDisplay.textContent = playerScore
        break
        
        
        
        case "YOU LOSE":
        resultDisplay.classList.add("redText") 
        computerScore++
        computerScoreDisplay.textContent = computerScore
        break  
         
    }
}




