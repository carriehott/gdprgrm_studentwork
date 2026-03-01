let img

function preload() {
  img = loadImage('sparkle.png');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('beige');
  
  
//hair back
        fill('#1C0B05');
  noStroke();
  rect(105, 195, 290, 300);
  
  //head
  fill('#E8C0A0');
  noStroke();
  ellipse(width/2, height/2, 225, 300);
  
  //nose
  fill('#D9866F');
  noStroke();
  ellipse(width/2, 290, 50, 25);
  
  //mouth
  noFill();
  stroke('#D45937');
  strokeWeight(10);
  arc(height/2, 325, 70, 25, 0, PI / 1.0);
  
  //eyes
    noFill();
  stroke('#1C0B05');
  strokeWeight(10);
  arc(200, 240, 40, 10, PI, 0);
      noFill();
  stroke('#1C0B05');
  strokeWeight(10);
  arc(295, 240, 40, 10, PI, 0);
  
  //eyebrows
      noFill();
  stroke('#1C0B05');
  strokeWeight(7);
  arc(200, 220, 50, 10, PI, 0);
        noFill();
  stroke('#1C0B05');
  strokeWeight(7);
  arc(295, 220, 50, 10, PI, 0);
  
  //hair front
  push();
    fill('#1C0B05');
  noStroke();
  rotate(QUARTER_PI);
  ellipse(225, -25, 100, 200);
      fill('#1C0B05');
  noStroke();
  rotate(QUARTER_PI);
    rotate(QUARTER_PI);
  ellipse(-125, -325, 100, 200);
  pop();
  
  //blushies
  push();
          fill('#DE3C3C');
  noStroke();
  rotate(QUARTER_PI)
  rect(440, -50, 5, 20);
            fill('#DE3C3C');
  noStroke();
  rect(430, -40, 5, 20);
              fill('#DE3C3C');
  noStroke();
  rect(420, -30, 5, 20);
                fill('#DE3C3C');
  noStroke();
  rect(330, 60, 5, 20);
                  fill('#DE3C3C');
  noStroke();
  rect(320, 70, 5, 20);
                    fill('#DE3C3C');
  noStroke();
  rect(310, 80, 5, 20);
  pop();

  //type name
  textAlign(CENTER)
  fill('yellow');
  textSize(32);
  text("please type your name", width/2, 50);

  //img
   image(img, 0, 50, 100, 100);
}

function keyPressed() {
  textAlign(CENTER);
  fill('white');
  textSize(32);
  text("nice to meet you", width/2, 50);
}