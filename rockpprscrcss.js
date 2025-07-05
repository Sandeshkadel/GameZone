let userScore = 0;
let computerScore = 0;
let countdownInterval;

function play(userChoice) {
    clearInterval(countdownInterval);


    const computerChoice = getComputerChoice();


    const result = determineWinner(userChoice, computerChoice);

    if (result === "user")
        
        {
        userScore++;
        document.getElementById("result").innerText = `You are a winner ${userChoice} beats ${computerChoice}`;
    } else if (result === "computer") {
        computerScore++;
        document.getElementById("result").innerText = `You Lost against computer ${computerChoice} beats ${userChoice}`;
    } else {
        document.getElementById("result").innerText = `It's a Draw Both lose , You both chose ${userChoice}`;
    }

    updateScores();
    startCountdown(); //countdown startoo
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "draw";
    }
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "user";
    }
    return "computer";
}

function updateScores() {
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function startCountdown() {
    let count = 3; // Countdown starts at 3
    const countdownDisplay = document.getElementById("countdown");
    countdownDisplay.innerText = count;

    countdownInterval = setInterval(() => {
        count--;
        countdownDisplay.innerText = count;

        if (count <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerText = ''; enableChoices(); 
        }
    }, 1000);


}

function enableChoices() {
    document.getElementById("rockBtn").onclick = () => play('rock');


    document.getElementById("paperBtn").onclick = () => play('paper');
    document.getElementById("scissorsBtn").onclick = () => play('scissors');



}





enableChoices();
