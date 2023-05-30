var xSpeed;
var ySpeed;
var xPosition;
var yPosition;
var dir;
const animalSize = 50;

function preload() {
  img = loadImage('../images/droog.png');
  droog = loadImage('../images/droog.png');
  droog2 = loadImage('../images/droog2.png');
  baab = loadImage('../images/baab.png');
}

function setup() {
  enclosure = createCanvas(250, 250, WEBGL);
  xSpeed = random(-3, 3);
  ySpeed = random(-1.25, 1.25);
  dir = random(-1, 1);
  xPosition = width/2
  yPosition = height/2;
  fill(0);
}

function draw() {
  background(255);
  translate(-125,-125)
  texture(img);
  noStroke();
  rect(xPosition, yPosition, animalSize, animalSize);
  xPosition += xSpeed;
  yPosition += ySpeed;
  if(xPosition > (width - animalSize)) {
  	xPosition = width - animalSize;
    	xSpeed = xSpeed * -1;
  }
  else if(xPosition < 0) {
  	xPosition = 0;
    	xSpeed = xSpeed * -1;
  }
  if(yPosition > (height - animalSize)) {
  	yPosition = height - animalSize;
    	ySpeed = ySpeed * -1;
  }
  else if(yPosition < 0) {
  	yPosition = 0;
    	ySpeed = ySpeed * -1;
  }
}

function mouseClicked() {
  if (dist(mouseX - (animalSize/2), mouseY - (animalSize/2), xPosition, yPosition) <= animalSize) {
    fill(255, 0, 0)
    img = droog2;
    xSpeed = random(0);
    ySpeed = random(0);
    setTimeout(continueMoving, 500);
  }
}


function continueMoving() {
  fill(0)
  img = droog;
  xSpeed = random(0, 3);
  ySpeed = random(0, 3);
}