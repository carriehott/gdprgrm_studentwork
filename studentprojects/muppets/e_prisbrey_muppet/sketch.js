let showMessage = false;

function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  showMessage = true;
}

function draw() {
  background("white");

  noStroke();

  //fill("white");
  //textSize(24);
  //text("X: " + mouseX, 0, height / 4);
  //text("Y: " + mouseY, 0, height / 2);

  fill("magenta");
  ellipse(200, 200, 100, 175);
  fill("black");
  triangle(120, 150, 210, 100, 190, 150);
  triangle(220, 150, 200, 100, 290, 150);
  rect(140, 150, 30, 150);
  rect(240, 150, 30, 150);
  fill("red");
  ellipse(205, 250, 50, 15);
  fill("white");
  circle(185, 190, 35);
  circle(225, 190, 35);
  fill("black");
  circle(185, 190, 15);
  circle(225, 190, 15);
  fill("pink");
  rect(195, 200, 20, 30);
  fill("red");
  textAlign(CENTER);
  textSize(30);
  text("please type your name", width / 2, 50);

  if (showMessage) {
    textAlign(CENTER);
    fill("black");
    textSize(30);
    text("nice to meet you", width / 2, height - 30);
  }
}
