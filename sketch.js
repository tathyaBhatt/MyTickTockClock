var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
var clockImg, clock
function preload(){
   clockImg = loadImage("hello.png");
}
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(clockImg);
  translate(200, 200);  
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  drawSprites();
}