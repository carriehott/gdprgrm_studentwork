let img;

function preload() {
  img = loadImage("Little Me.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");

  //X,Y
  fill("black"); //white text
  noStroke();
  textSize(12);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);

  //Hair
  fill("black");
  noStroke();
  rect(97, 190, 308, 250);

  circle(251, 190, 308);

  //Neck
  fill(228, 160, 172);
  square(216, 370, 70);

  //Head
  fill("pink");
  noStroke();
  ellipse(width / 2, height / 2, 250, 340);

  //Eyes & Eyelashes
  stroke(0);
  strokeWeight(3);
  line(176, 213, 162, 204);

  stroke(0);
  strokeWeight(3);
  line(182, 206, 170, 192);

  stroke(0);
  strokeWeight(3);
  line(319, 213, 330, 204);

  stroke(0);
  strokeWeight(3);
  line(312, 206, 322, 192);

  fill("white");
  noStroke();
  ellipse(200, 220, 50, 50);

  fill("white");
  noStroke();
  ellipse(295, 220, 50, 50);

  fill(87, 47, 47);
  noStroke();
  ellipse(295, 220, 30, 30);

  fill(87, 47, 47);
  noStroke();
  ellipse(200, 220, 30, 30);

  //Eyebrows
  noFill();
  stroke("Black");
  strokeWeight(4);
  arc(195, 175, 35, 30, PI, 0);

  noFill();
  stroke("Black");
  strokeWeight(4);
  arc(295, 175, 35, 30, PI, 0);

  fill("pink");
  noStroke();
  square(200, 160, 30, 30);

  fill("pink");
  noStroke();
  square(255, 160, 30, 30);

  //Nose
  noStroke();
  fill(228, 160, 172);
  triangle(250, 240, 230, 290, 270, 290);

  //Smile
  noFill();
  stroke(228, 160, 172);
  strokeWeight(4);
  arc(250, 310, 90, 60, 0, PI);

  //Bangs
  fill("black");
  noStroke();
  arc(158, 144, 90, 30, 0, PI);

  noStroke();
  fill("black");
  quad(146, 148, 202, 147, 252, 78, 175, 82);

  fill("black");
  noStroke();
  arc(327, 144, 90, 30, 0, PI);

  noStroke();
  fill("black");
  quad(350, 148, 282, 146, 239, 80, 322, 82);

  //Please type your name
  textAlign(CENTER);
  fill("red");
  textSize(15);
  text("Please type your name", width / 2, 25);

  //Mouse Pressed
  if (mouseIsPressed === true) {
    image(img, 100, 50, 300, 400);
  } else {
    fill(255);
  }
}

function keyPressed() {
  textAlign(CENTER);
  fill("red");
  textSize(30);
  text("Nice to meet you!", width / 2, 470);
}
