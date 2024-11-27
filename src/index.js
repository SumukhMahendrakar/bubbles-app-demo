const width = window.screen.width;
const height = window.screen.height;

const boardElem = document.getElementById("board");
boardElem.width = width*0.8;
boardElem.height = height*0.6;

const context = boardElem.getContext("2d");;

firstCircle = new Circle(100, 70, 35, 0, Math.PI * 2, "yellow");
firstCircle.draw(context);

secondCircle = new Circle(100, 185, 35, 0, Math.PI*2, "blue");
secondCircle.draw(context);

thirdCircle = new Circle(100, 300, 35, 0, Math.PI*2, "red");
thirdCircle.draw(context);

fourthCircle = new Circle(100, 415, 35, 0, Math.PI*2, "green");
fourthCircle.draw(context);

firstArrow = new Arrow(1000, 70, "black");
firstArrow.draw(context);

secondArrow = new Arrow(1000, 185, "black");
secondArrow.draw(context);

thirdArrow = new Arrow(1000, 300, "black");
thirdArrow.draw(context);

fourthArrow = new Arrow(1000, 415, "black");
fourthArrow.draw(context);