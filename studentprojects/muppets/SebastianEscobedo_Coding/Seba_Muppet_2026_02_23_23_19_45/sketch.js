function preload() {
   displaytext = "";
}
let cnv;

function setup() {
  cnv = createCanvas(400, 400);
  centerCanvas();
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

// Optional: Re-center if the window is resized
function windowResized() {
  centerCanvas();
}

function draw() {
  background("blue");

  fill('cyan');
  noStroke();
  rect(random(width), random(50, 800), 50); //Covering Canvas
  //Weird Collar
  noStroke();
  fill("yellow");
  triangle(400, 350, 200, 350, 200, 200);

  noStroke();
  fill("yellow");
  triangle(300, 250, 200, 350, 300, 400);

  noStroke();
  fill("yellow");
  triangle(250, 400, 200, 250, 10, 300);

  noStroke();
  fill("yellow");
  triangle(50, 350, 150, 150, 200, 350);

  noStroke();
  fill("yellow");
  triangle(90, 450, 150, 250, 200, 350);

  //Head
  noStroke();
  fill("green");
  ellipse(200, 200, 300, random(350,400));

  //Eyes
  stroke(0);
  strokeWeight(2);
  fill(255);
  ellipse(150, 141, 75, 100);

  stroke(0);
  strokeWeight(2);
  fill(255);
  ellipse(250, 140, 75, 100);

  //Pupils
  fill(0);
  circle(155, 150, 20);

  fill(0);
  circle(245, 150, 20);

  //Nose
  noStroke();
  fill("yellow");
  circle(200, 200, 100);

  //Mouth
  fill(0); // Set fill color (e.g., Red)
  noStroke(); // Remove outline
  // arc(x, y, width, height, startAngle, stopAngle)
  arc(200, 260, 200, 200, 0, PI, PIE); // PIE mode for closed shape

  //Spikey Hair
  fill(255);
  triangle(10, 10, 40, 40, 5, 5);


  textAlign(CENTER);
  noStroke();
  fill("magenta");
  textSize(32);
  text("please type your name", width / 2, 50);

  fill('white');
  stroke(0);
  strokeWeight(2);
  textSize(32);
  text(displaytext, width / 2, 340);

}

function keyPressed() {
    displaytext = "please to meet you";
  }
