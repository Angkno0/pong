const paddle1 = document.querySelector("#p1paddle");
const paddle1Rect = paddle1.getBoundingClientRect();
const paddle2 = document.querySelector("#p2paddle");
const paddle2Rect = paddle2.getBoundingClientRect();
const gamearea = document.querySelector("#gamearea");
const gameareaRect = gamearea.getBoundingClientRect();

const paddleHeight = paddle1.offsetHeight;
const paddleheight = paddle2.offsetHeight;
const paddleSpeed = 20;




let paddle1Top = paddle1Rect.top - gameareaRect.top;
console.log("paddle1Top :" + paddle1Top);
paddle1.style.top = paddle1Top + "px";
let paddle2Top = paddle2Rect.top - gameareaRect.top;
paddle2.style.top = paddle2Top + "px";


window.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    if (paddle1Top > 0) {
      paddle1Top -= paddleSpeed;
    } else {
      paddle1Top = 0;
    }
    paddle1.style.top = paddle1Top + "px";
  }

  if (e.key === "s") {
    if (paddle1Top + paddleHeight + paddleSpeed < gameareaRect.height) {
      console.log("debug1");
      paddle1Top += paddleSpeed;
    } else{
      console.log("degub2");
      paddle1Top = gameareaRect.height - paddleHeight;
    }
    paddle1.style.top = paddle1Top + "px";
  
  }

  if (e.key === "i") {
    if(paddle2Top - 20 > 0){
    paddle2Top -= paddleSpeed;
  } else {
    paddle2Top = 0;
  }
  paddle2.style.top = paddle2Top + "px";
}
 
if (e.key === "k") {
    if (paddle2Top + paddleheight + paddleSpeed < gameareaRect.height) {
        paddle2Top += paddleSpeed
        paddle2.style.top = paddle2Top + "px";
      } else{
        paddle2Top = gameareaRect.height + paddleHeight;
      }
  }
});


function resetBall(){
  const centerX = (gameWidth - ballSize) / 2;
    const centerY = (gameHeight - ballSize) / 2;
    ball.style.left = centerX + "px";
    ball.style.top = centerY + "px";

    ballSpeedX *= -1; 
    ballSpeedY = Math.random() > 0.5 ? 4 : -4;
}

function updateScore() {
  console.log("Player scored!");
  resetBall();
}

function gameLoop() {
  if (!isGameRunning) return; 
  movePaddles();
  moveBall();
  requestAnimationFrame(gameLoop);
}

resetBall();

updateScore();

function gameRunning() {
  if (victoryMessage.style.display === "block") return; 
  isGameRunning = !isGameRunning;
  if (isGameRunning) {
      requestAnimationFrame(gameLoop);
  }
}