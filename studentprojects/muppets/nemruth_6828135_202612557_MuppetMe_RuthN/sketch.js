function setup() {
createCanvas(500, 500);
  
}

function draw() {
background('orange');
  frameRate(12);
  
  
  
  //head
  fill('tan');
  noStroke();
  ellipse(width/2, height/2, 300, 300);
 //Eyes
  fill('white');
  circle(192, 202, 70);
  circle(310, 202, 70);
  fill(0);
  //Inner Eyes
  fill('brown')
  circle(190, 200, 30);
  circle(308, 201, 30);
  //Nose
  fill('green');
   rect(234, 259, 30);
  //mouth
  fill('pink');
   stroke(20);
   line(200,317,300,317)
    noStroke();
   triangle(261, 318, 281, 350, 302, 318);
  
  //line, circle, ellipse,triangle, rectangle,
  //text("X: "+mouseX, 0, height/4);
  //text("Y: "+mouseY, 0, height/2);
  
}

