function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");

  // x and y coordinates
  //fill("black");
  //noStroke();
  //frameRate(12);
  //textSize(24);
  //text("X: " + mouseX, 0, height / 4);
  // text("Y: " + mouseY, 0, height / 2);

  // hair
  fill("#6A4F29");
  noStroke();
  rect(135, 199, 200, 250);
  ellipse(235, 201, 200);

  //face
  fill("lightblue");
  noStroke();
  ellipse(235, 255, 150, 225);

  //bangs
  stroke("#6A4F29");
  strokeWeight(17);
  line(168, 191, 168, 228);
  line(187, 163, 187, 228);
  line(204, 145, 204, 228);
  line(220, 135, 220, 228);
  line(241, 137, 241, 228);
  line(256, 141, 256, 228);
  line(275, 151, 275, 228);
  line(293, 172, 293, 228);
  line(310, 204, 310, 228);

  //eyes
  fill("white");
  noStroke();
  ellipse(201, 260, 30, 30);
  ellipse(267, 260, 30, 30);

  fill("#469B9D");
  ellipse(201, 260, 10, 10);
  ellipse(267, 260, 10, 10);

  //nose
  fill("#C4A484");
  triangle(234, 273, 243, 290, 234, 300);

  //mouth
  fill("#e66386");
  ellipse(235, 323, 40, 10);

  //type name
  textAlign(CENTER);
  fill("darkcyan");
  textSize(30);
  text("Please type your name", width / 2, 50);
}

function keyPressed() {
  textAlign(CENTER);
  fill("#e66386");
  textSize(32);
  text("Nice to meet you", width / 2, 435);
  fill("lightblue");
  noStroke();
  ellipse(201, 260, 35, 35);
  ellipse(267, 260, 35, 35);
}
