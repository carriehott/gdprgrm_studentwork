function setup() {
  createCanvas(500, 600);
  background("pink");
}

function draw() {
  //text("X: "+mouseX, 0, height/3);
  //text("Y: "+mouseY, 0, height/2);
  // hair
  rect(100, 70, 300, 400);

  //head
  noStroke();
  fill("#FFFD74");
  ellipse(width / 2, height / 2, 300, 400);

  //eyes
  fill("white");
  ellipse(200, 200, 45, 45);
  ellipse(300, 200, 45, 45);

  fill("black");
  ellipse(200, 200, 15, 15);
  ellipse(300, 200, 15, 15);

  //nose
  fill("pink");
  triangle(250, 215, 280, 270, 220, 270);

  //mouth
  fill("#FF00FF");
  ellipse(250, 350, 100, 30);

  //Hair
  fill("#FF00FF");
  ellipse(190, 80, 140, 90);
  fill("#FF00FF");
  ellipse(290, 80, 200, 90);

  //please type your name
  textAlign(CENTER);
  fill("orange");
  textSize(30);
  text("Hannah Dinius", width / 2, 70);
}
function keyPressed() {
  fill("blue");
  textAlign(CENTER);
  textSize(32);
  text("nice to meet you", width / 2, 550);
}
