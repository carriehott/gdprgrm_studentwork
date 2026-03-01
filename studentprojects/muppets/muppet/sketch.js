function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill("hotPink");
  noStroke();
  ellipse(width / 2, height / 2, 200, 300);

  fill("yellow");
  triangle(200, 180, 190, 240, 210, 240);

  fill("lightBlue");
  circle(160, 150, 50);
  circle(235, 150, 50);

  fill("black");
  circle(160, 150, 10);
  circle(235, 150, 10);

  fill("lightGreen");
  rect(150, 280, 100, 10);

  textAlign(CENTER);
  fill("blue");
  textSize(32);
  text("Ali Wolf", width / 2, 45);
}

function keyPressed() {
  textAlign(CENTER);
  fill("purple");
  textSize(32);
  text("nice to meet you", width / 2, 380);
}
