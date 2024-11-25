// script.js
const choices = ["Kő", "Papír", "Olló"];
const choiceButtons = document.querySelectorAll(".choice");
const resultText = document.getElementById("result-text");
const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        playerChoice = button.getAttribute("data-choice");
        computerChoice = choices[Math.floor(Math.random() * 3)];
        displayResult();
        updateScore();
    });
});

function displayResult() {
    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;

    if (playerChoice === computerChoice) {
        resultText.textContent = "Döntetlen!";
    } else if (
        (playerChoice === "Kő" && computerChoice === "Olló") ||
        (playerChoice === "Papír" && computerChoice === "Kő") ||
        (playerChoice === "Olló" && computerChoice === "Papír")
    ) {
        resultText.textContent = "Nyertél!";
        playerScore++;
    } else {
        resultText.textContent = "Vesztettél!";
        computerScore++;
    }
}

function updateScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

resetButton.addEventListener("click", () => {
    playerChoice = "";
    computerChoice = "";
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = "Válassz egyet a játékhoz!";
    playerChoiceText.textContent = "-";
    computerChoiceText.textContent = "-";
    playerScoreText.textContent = "0";
    computerScoreText.textContent = "0";
});
