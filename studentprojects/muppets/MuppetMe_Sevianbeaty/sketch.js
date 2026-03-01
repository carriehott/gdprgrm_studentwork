let flipped = false;
let angryBrows = false;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(255);

  // text 
  textAlign(CENTER);
  fill('orange');
  textSize(32);
  text('please type your name', width/2, 60);

  fill('red');
  textSize(32);
  text('nice to meet you', width/2, height - 40);

  // flip 
  push();
  translate(width/2, height/2);
  if (flipped) {
    scale(1, -1);
  }
  translate(-width/2, -height/2);

  // hair (drawn before head so it sits behind)
  fill('#6B3A2A');
  noStroke();
  ellipse(width/2, height/2 - 150, 260, 120);       // top hair mound
  ellipse(width/2 - 90, height/2 - 120, 80, 140);  // left side hair
  ellipse(width/2 + 90, height/2 - 120, 80, 140);  // right side hair

  // head
  fill('#E8B47A');
  noStroke();
  ellipse(width/2, height/2, 250, 370);
  // top hair mound so it sits on top of head
  fill('#6B3A2A');
  ellipse(width/2, height/2 - 170, 250, 100);  
  // eyebrows
  stroke('#3B1F0A');
  strokeWeight(5);
  strokeCap(ROUND);
  if (angryBrows) {
    // angry - slanted inward downward
    line(width/2 - 75, height/2 - 95,  width/2 - 18, height/2 - 115);
    line(width/2 + 18, height/2 - 115, width/2 + 75, height/2 - 95);
  } else {
    // normal
    line(width/2 - 75, height/2 - 104, width/2 - 18, height/2 - 108);
    line(width/2 + 18, height/2 - 108, width/2 + 75, height/2 - 104);
  }

  // left eye white
  fill(255);
  noStroke();
  ellipse(width/2 - 45, height/2 - 75, 52, 46);

  // right eye white
  ellipse(width/2 + 45, height/2 - 75, 52, 46);

  // left eye
  fill(30, 20, 10);
  ellipse(width/2 - 45, height/2 - 73, 18, 18);

  // right eye
  ellipse(width/2 + 45, height/2 - 73, 18, 18);

  // nose
  fill('#C49060');
  noStroke();
  ellipse(width/2, height/2 - 10, 32, 82);

  // lips
  fill('#F0AABB');
  ellipse(width/2, height/2 + 122, 58, 16);

  pop();
}

function keyPressed() {
  flipped = !flipped;
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width/2, height/2 - 10);
  if (d < 40) {
    angryBrows = !angryBrows;
  }
}