const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) //or possibleChoices.length
    console.log(randomNumber)

    //could switch for an array?

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }

    if (randomNumber === 1) {
        computerChoice = 'paper'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!"
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!"
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!"
    } else(
            result = "You lose!"
        ) //better than if for every possibility

    resultDisplay.innerHTML = result
}