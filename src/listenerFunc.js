boardElem.addEventListener("click", (event) => {
    offsetX = event.x - boardElem.offsetLeft;
    offsetY = event.y - boardElem.offsetTop;

    if(firstCircle.isClicked(offsetX, offsetY)) {

        const startMoving = function() { 
            if(firstArrow.xpos > (firstCircle.xpos+firstCircle.radius)) {
                requestAnimationFrame(startMoving);
                firstArrow.move(context);
            }
            else {
                firstCircle.arrowHit(context);
            }
        }
        startMoving();
    }

    if(secondCircle.isClicked(offsetX, offsetY)) {

        const startMoving = function() { 
            if(secondArrow.xpos > (secondCircle.xpos+secondCircle.radius)) {
                requestAnimationFrame(startMoving);
                secondArrow.move(context);
            }
            else {
                secondCircle.arrowHit(context);
            }
        }
        startMoving();
    }

    if(thirdCircle.isClicked(offsetX, offsetY)) {

        const startMoving = function() { 
            if(thirdArrow.xpos > (thirdCircle.xpos+thirdCircle.radius)) {
                requestAnimationFrame(startMoving);
                thirdArrow.move(context);
            }
            else {
                thirdCircle.arrowHit(context);
            }
        }
        startMoving();
    }

    if(fourthCircle.isClicked(offsetX, offsetY)) {

        const startMoving = function() { 
            if(fourthArrow.xpos > (fourthCircle.xpos+fourthCircle.radius)) {
                requestAnimationFrame(startMoving);
                fourthArrow.move(context);
            }
            else {
                fourthCircle.arrowHit(context);
            }
        }
        startMoving();
    }
})