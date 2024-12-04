const paddle1 = document.querySelector("#p1paddle");
const paddle2 = document.querySelector("#p2paddle");
// getPaddleRect(){
// return this.#paddle.getBoundingClientRect();
// }



function paddle(){
    const areaBounds= area.getBoundingClientRect();
    const leftPaddleBounds = area.getBoundingClientRect();
    const rightPaddleBounds = area.getBoundingClientRect();

    if(keyPressed["w"] && leftPaddleBounds.top -10 >=areaBounds.top){
        leftPaddlePosition -= 10;
    }

    if(keyPressed["s"] && leftPaddleBounds.top +10 <= areaBounds.top){
        leftPaddlePosition += 10;
    }

    if(keyPressed["i"] && rightPaddleBounds.top - 10 >=areaBounds.top){
        rightPaddlePosition -= 10;
    }

    if(keyPressed["o"] && rightPaddleBounds.top + 10 <=areaBounds.top){
        rightPaddlePosition += 10;

        leftPaddle.style.top = leftPaddlePosition + "px";
        rightPaddle.style.top = rightPaddlePosition + "px";
    }
}