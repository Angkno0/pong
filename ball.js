const gameArea = document.querySelector("#gameArea");
const ball = document.querySelector("#Ball");

const paddle1 = document.querySelector("#paddle1");
const paddle2 = document.querySelector("#paddle2");

let ballX = 390; 
let ballY = 190; 
let ballSpeedX = 4;
let ballSpeedY = 4;

const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;
const paddleHeight = paddle1.offsetHeight;
const paddleWidth = paddle1.offsetWidth;

let isPaused = false;

function pauseUntilKeyPress(e) {
    isPaused = true;
    window.addEventListener("keydown", (e) => {
      isPaused = false;
      moveBall();
    }, { once: true });
  }

  function moveBall() {
    if (isPaused) return;

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY + ballSize >= gameHeight) {
        ballSpeedY = -ballSpeedY;
      }

      const paddle1Rect = paddle1.getBoundingClientRect();
  if (
    ballX <= paddle1Rect.right &&
    ballY + ballSize >= paddle1Rect.top &&
    ballY <= paddle1Rect.bottom
  ) {
    ballSpeedX = -ballSpeedX;
  }

  const paddle2Rect = paddle2.getBoundingClientRect();
  if (
    ballX + ballSize >= paddle2Rect.left &&
    ballY + ballSize >= paddle2Rect.top &&
    ballY <= paddle2Rect.bottom
  ) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX <= 0) {
  
    p2score++;
    updateScore();
    pauseUntilKeyPress();
    resetBall();
  } else if (ballX + ballSize >= gameWidth) {
    
    p1score++;
    updateScore();
    pauseUntilKeyPress();
    resetBall();
  }

  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

 
  requestAnimationFrame(moveBall);
}

moveBall();



