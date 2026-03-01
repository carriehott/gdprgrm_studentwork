function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#C6E4A4");
  // hair behind head
  fill("#cf1818");
  circle(110, 120, 50);
  circle(280, 120, 50);
  //left ear
  fill("#BBC935");
  ellipse(100, 200, 70, 70);
  //right ear
  fill("#BBC935");
  ellipse(300, 200, 70, 70);
  //head
  fill("#CDDC39");
  ellipse(200, 200, 220, 270);
  //left eye
  fill("#EBF776");
  circle(160, 175, 30);
  //Left pupil
  fill("#8BC34A");
  circle(160, 175, 20);
  //right eye
  fill("#EBF776");
  circle(230, 175, 30);
  //right pupil
  fill("#8BC34A");
  circle(230, 175, 20);
  //left eyebrow
  fill("#568D16");
  triangle(130, 160, 145, 150, 180, 150);
  //Right eyebrow
  fill("#568D16");
  triangle(250, 160, 245, 150, 200, 150);
  //nose
  fill("#486922");
  triangle(200, 200, 220, 240, 180, 240);
  //mouth
  fill("#345A08");
  rect(160, 260, 80, 10);

  //hair
  fill("#cf1818");
  noStroke();
  circle(170, 50, 50);
  circle(240, 50, 50);
  circle(270, 70, 50);
  circle(130, 70, 50);
  circle(150, 80, 50);
  circle(250, 80, 50);
  circle(200, 50, 50);
  circle(170, 70, 50);
  circle(230, 70, 50);
  circle(280, 100, 50);
  circle(120, 100, 50);
  circle(200, 90, 50);
  noStroke();
  end;
}

function keyPressed() {
  textAlign(CENTER);
  textSize(20);
  fill("#cf1818");
  text("I look like this cantaloupe dont I?", width / 2, height / 2);
}

function mousePressed() {
  textAlign(CENTER);
  textSize(20);
  fill("#cf1818");
  text("What do you think?", width / 2, 20);
}
