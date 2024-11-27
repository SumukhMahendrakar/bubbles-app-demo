class Circle {
    constructor(xpos, ypos, radius, startAngle, endAngle, color="blue", counterClock=false) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.counterClock = counterClock;
        this.color = color;
        this.defaltColor = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, this.startAngle, this.endAngle, this.counterClock)
        context.strokeStyle='black';
        context.lineWidth=2;
        context.stroke();
        context.fillStyle=this.color;
        context.fill();
        context.closePath();
    }

    isClicked(x, y){
        const dist = Math.sqrt(
            Math.pow((x - this.xpos), 2) + Math.pow((y - this.ypos), 2)
        );
        
        if(dist <= this.radius) {
            return true;
        }
        return false;
    }
    
    arrowHit(context) {
        this.color = "gray";
        this.draw(context);
    }

    reset(context) {
        this.color = this.defaltColor;
        this.draw(context);
    }
}

class Arrow{
    constructor(xpos, ypos, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.xdefault = xpos;
        this.ydefault = ypos;
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.xpos+20, this.ypos+5);
        context.lineTo(this.xpos+20, this.ypos+15);
        context.lineTo(this.xpos, this.ypos);
        context.lineTo(this.xpos+20, this.ypos-15);
        context.lineTo(this.xpos+20, this.ypos-5);
        context.lineTo(this.xpos+50, this.ypos-5);
        context.lineTo(this.xpos+50, this.ypos+5);
        context.lineTo(this.xpos+20, this.ypos+5);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
    }

    move(context) {
        context.clearRect(this.xpos, this.ypos-20, 60, 40);
        
        this.xpos = this.xpos-1;
        this.draw(context);

    }

    reset(context) {
        context.clearRect(this.xpos, this.ypos-20, 60, 40)

        this.xpos = this.xdefault;
        this.ypos = this.ydefault;
        this.draw(context);
    }
}