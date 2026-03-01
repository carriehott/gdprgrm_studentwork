function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('white');
  frameRate(12);
  fill('black');
  
  //hair
  fill('#5C4033');
  noStroke();
  rect(115,170, 70, 190);
  rect(250, 170, 70, 190);
  
  //head
  fill('#EDE2D8')
  ellipse(215, 225, 180, 200)
  
  //bangs
  fill('#5C4033')
  triangle(208, 110, 181, 171, 98,182)
  triangle(208, 110, 324, 173, 240,161)
  
  //eyes
  fill('white')
  circle(175, 210, 40)
  circle(245, 210, 40)
  
  fill('green')
  circle(175, 210, 15)
  circle(245, 210, 15)
  
  //nose
  fill('lightpink')
  ellipse(210, 235, 15, 40)
  
  //mouth
  fill('#E691AC')
  ellipse(209, 277, 40, 15)
  
  
  
}

function mousePressed(){
  fill('yellow')
  circle(250, 250, 500);
}
