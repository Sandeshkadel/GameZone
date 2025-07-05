const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

let score = 0;
let gameInterval;
let balloonInterval;

//game starto
startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    scoreDisplay.innerText = score;
    startButton.disabled = true;

    clearInterval(balloonInterval);
    clearTimeout(gameInterval);
    balloonInterval = setInterval(createBalloon, 1000);
    gameInterval = setTimeout(endGame, 30000);
}

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.position = "absolute";
    balloon.style.bottom = "0px";
    balloon.style.left = `${Math.random() * (gameArea.offsetWidth - 40)}px`;

    gameArea.appendChild(balloon); 

    const riseSpeed = Math.random() * 3 + 2;
    let position = 0;

    const balloonMove = setInterval(() => {
        position += riseSpeed;
        balloon.style.bottom = `${position}px`;
        if (position > gameArea.offsetHeight) {
            balloon.remove();
            clearInterval(balloonMove);
        }
    }, 20);

    //these is the code to lesten for the clickk evenet

    
    balloon.addEventListener("click", function () {
        score++;
        scoreDisplay.innerText = score;
        balloon.remove();
        clearInterval(balloonMove);
    });
}

function endGame() {
    clearInterval(balloonInterval);
    startButton.disabled = false;
    alert(`Game overooo the thing you achived  score is: ${score}`);
}
