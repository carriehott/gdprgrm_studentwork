function setup() {
  createCanvas(500, 500);
  background('yellow');
}

function draw() {
  
  //head
  fill ('#207D74');
  noStroke();
  ellipse (250, 250, 250, 400);
  
  //eyes
  fill ('white');
  noStroke();
  circle (200, 175, 35);
  circle (300, 175, 35);
  
  //eyes (iris)
  fill ('#A17452');
  noStroke();
  circle (200, 175, 20);
  circle (300, 175, 20);
  
  //eyes (pupil)
  fill ('black');
  noStroke();
  circle (200, 175, 10);
  circle (300, 175, 10);

  
  //nose
  fill ('#70C26D');
  noStroke();
  ellipse (250, 250, 50, 25);
  
  //mouth
  noFill();
  stroke ('#BF483F');
  strokeWeight (10);
  arc (250, 334, 100, 50, 0, PI);

  //please type your name
  textFont ("discovery");
  noStroke();
  textAlign(CENTER);
  fill('black');
  textSize(32);
  text('Lindsey', width/2, 40);
}

function keyPressed() {
  textFont ("discovery"); 
  textAlign(CENTER);
  fill('black');
  textSize(32);
  text('nice to meet you', width/2, 480);
}