const p1ScoreElem = document.querySelector("#p1Score");
const p2ScoreElem = document.getElementById("#p2Score");
const ball = document.querySelector("#ball");
const gameArea = document.getElementById("#gameArea");


let p1Score = 0;
let p2Score = 0;


let ballX = 390, ballY = 190; 
let ballSpeedX = 4, ballSpeedY = 4; 
const ballSize = 20;


const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;


function updateScore() {
    p1ScoreElem.textContent = p1Score;
    p2ScoreElem.textContent = p2Score;
}


function resetBall() {
    ballX = gameWidth / 2 - ballSize / 2;
    ballY = gameHeight / 2 - ballSize / 2;
    ballSpeedX *= -1; 
    ballSpeedY = (Math.random() > 0.5 ? 1 : -1) * 4; 
}


function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

   
    if (ballY <= 0 || ballY + ballSize >= gameHeight) {
        ballSpeedY = -ballSpeedY;
    }

    
    if (ballX <= 0) {
        p2Score++; 
        updateScore();
        resetBall();
    } else if (ballX + ballSize >= gameWidth) {
        p1Score++; 
        updateScore();
        resetBall();
    }

   
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

   
    requestAnimationFrame(moveBall);
}


moveBall();
