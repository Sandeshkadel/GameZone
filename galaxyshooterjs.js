const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const spaceship = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 50,
    width: 30,
    height: 30,
    color: 'cyan'
};



const bullets = [];
const asteroids = [];
let score = 0;
let gameOver = false;
let isPaused = false; 
const sideSpeed = 7; 



const keys = {}; 

function drawSpaceship() {
 ctx.fillStyle = spaceship.color;
    ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}


function drawBullets() {
    bullets.forEach((bullet, index) => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        bullet.y -= bullet.speed;
  
        if (bullet.y + bullet.height < 0) {
            bullets.splice(index, 1);
        }
    });
}

function drawAsteroids() {
    asteroids.forEach((asteroid, index) => {
        ctx.fillStyle = asteroid.color;   ctx.fillRect(asteroid.x, asteroid.y, asteroid.width, asteroid.height);
        asteroid.y += asteroid.speed; if (checkCollision(spaceship, asteroid)) {
            endGame();
        }

        if (asteroid.y > canvas.height) {
            asteroids.splice(index, 1);
        }
    });
}

function detectCollisions() {
    bullets.forEach((bullet, bulletIndex) => {
        asteroids.forEach((asteroid, asteroidIndex) => {
            if (checkCollision(bullet, asteroid)) { bullets.splice(bulletIndex, 1);  asteroids.splice(asteroidIndex, 1);
                score += 10;
                updateScore();
            }
        });
    });
}


function checkCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}


function updateScore() {
    document.getElementById('scoreboard').innerText = `Score: ${score}`;
}


function endGame() {
    gameOver = true;
    document.getElementById('replayButton').style.display = 'block';
}


function resetGame() {
    spaceship.x = canvas.width / 2 - 15;
    bullets.length = 0;
    asteroids.length = 0;
    score = 0;
    gameOver = false;
    isPaused = false; 
    updateScore();
    document.getElementById('replayButton').style.display = 'none';
    generateAsteroids(); 
    requestAnimationFrame(update);
}


function update() {
    if (gameOver || isPaused) return; 

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    handleKeys(); 

    drawSpaceship();
    drawBullets();
    drawAsteroids();
    detectCollisions();

    requestAnimationFrame(update);
}

function handleKeys() {
    if (keys['ArrowLeft'] && spaceship.x > 0) {
        spaceship.x -= sideSpeed;}
    if (keys['ArrowRight'] && spaceship.x + spaceship.width < canvas.width) {
        spaceship.x += sideSpeed;}
    if (keys[' ']) {fireBullet();}}


function fireBullet() {
    if (bullets.length === 0 || bullets[bullets.length - 1].y < spaceship.y - 20) {
        



        bullets.push({ x: spaceship.x + spaceship.width / 2 - 2.5, y: spaceship.y, width: 5, height: 10, speed: 5 });
    }}


function generateAsteroids() {
    if (gameOver) return;

    const size = Math.random() * 30 + 20;
    const speed = Math.random() * 2 + 1;
    asteroids.push({ x: Math.random() * (canvas.width - size), y: -size, width: size, height: size, speed: speed, color: 'gray' });



   
    setTimeout(generateAsteroids, 1000);
}

window.addEventListener('keydown', (event) => {
    if (gameOver) return;
    keys[event.key] = true;

    if (event.key === 'x' || event.key === 'x') {
        isPaused = !isPaused; 
       if (!isPaused) {
      update();  } }});

window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});


document.getElementById('replayButton').addEventListener('click', resetGame);generateAsteroids();
update();
