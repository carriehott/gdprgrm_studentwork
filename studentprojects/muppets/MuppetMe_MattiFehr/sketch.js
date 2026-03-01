let img;
xpos = 100;
xspeed = 2;

function setup() {
  createCanvas(500, 500);
}

function preload() {
  img = loadImage("mustache.png");
}

function draw() {
  background("lightyellow");

  // head
  noStroke();
  fill("lightgreen");
  square(100, 100, 300);
  //   nose
  fill("green");
  ellipse(width / 2, 275, 30, 60);

  //   eyes
  stroke("teal");
  noFill();
  strokeWeight(5);
  ellipse(200, 200, 50);
  ellipse(300, 200, 50);
  fill("teal");
  ellipse(200, 200, 10);
  ellipse(300, 200, 10);

  //   mouth
  strokeWeight(10);
  line(200, 350, 300, 325);

  noStroke();
  textAlign(CENTER);
  textSize(25);
  text("Please type your name", width/2, 75);

  image(img, xpos, height/2, 100, 100);
  bounce();
}

function keyPressed() {
  textAlign(CENTER);
  fill('red');
  textSize(32);
  text('Nice to meet you!', width/2, 450);
}

function bounce(){
  if(xpos > 300){
    xspeed = -2;
  }
  
  if(xpos < 100){
    xspeed = 2;
  }
  
  xpos += xspeed;
}