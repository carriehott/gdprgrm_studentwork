function preload() {
displayText="" ;
browy=50 ;
browspeed=0;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');

  rectMode(CENTER)
  fill('yellow')
  square(200, 200, 300);
  
  fill('lightYellow')
  square(125,150,100);
  square(275,150,100);
  line(175,150,225,150);
  line(75,150,50,125);
  line(325,150,350,125)
  
  fill('orange')
  triangle(200,150,175,250,225,250);
  
  fill('brown')
  rect(125,browy,100,25);
  rect(275,browy,100,25);
  
  fill('pink')
  ellipse(200,300,100,25);

  fill('red');
  textSize(25);
    textAlign(CENTER);
text("Please type your name", 200,25);

textAlign(CENTER);
  text(displayText,200,375);

brows()
}

function keyPressed() {
  displayText='Nice to meet you!'
}

function brows() {

if(browy<40) {
  browspeed = 5;
}

if(browy>60) {
  browspeed = -5;
}
browy += browspeed;

}