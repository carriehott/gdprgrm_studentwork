let img;

//candy image
function preload() {
  img = loadImage('candy.png');
}

function setup() {
  createCanvas(600, 600);
}


function draw() {

background(img); 
  

  //back of hair
  fill("#241701");
  rect(190, 261, 220, 250);

  //head
  fill("#F0D5A8");
  noStroke();
  ellipse(width / 2, height / 2, 250, 290);

  //glasses
  stroke("#2A3A78");
  strokeWeight(4);
  line(274, 300, 350, 300);

  fill("#3F519E");
  rect(220, 277, 60, 50);

  fill("#3F519E");
  rect(325, 277, 60, 50);

  //nose
  fill("#BFA97E");
  noStroke();
  ellipse(302, 351, 28, 15);

  //mouth
  fill("#913358");
  stroke("#B24471");
  arc(303, 380, 80, 80, 12.5, 600, PIE);

  //hair
  fill("#241701");
  noStroke();
  push();
  translate(360, 200);
  rotate(PI / 4);
  ellipse(0, 0, 200, 100);
  noStroke();

  translate(-95, 100);
  rotate(PI / 2);
  ellipse(0, 0, 200, 100);
  pop();

  //please type your name
  textAlign(CENTER);
  fill("purple");
  textSize(30);
  text("please type your name", width / 2, 50);

  //img
  image(img, 0, 100);
}

function keyPressed() {
  textAlign(CENTER);
  fill("yellow");
  textSize(32);
  text("Nice to Meet You", width / 2, 500);
  
}
 
