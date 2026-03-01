function setup() {
  createCanvas(600, 600);
    background('#FFB6C1');
}

function draw() {

  
// Purple face outline
  fill('#DAB1DA');
  noStroke(); 
// ellipse(x, y, width, height)
  ellipse(300, 300, 300, 450);
  
// White eyes 
  stroke('pink'); // Black outline for the eye boxes
  strokeWeight(2);
  fill(255); // White fill for the eye boxes
  rect(220, 200, 50, 60); // Left eye
  rect(320, 200, 50, 60); // Right eye
  
// Green pupil
  noStroke();
  fill ('green') // Green fill for pupils
  ellipse(245, 230, 40, 40) // Left eye
  ellipse(345, 230, 40, 40) // Right eye
  
  // Nose
  noStroke();
  fill ('#ADD8E6') // Green fill for pupils
  ellipse(295, 315, 40, 40) // nose
  
    // Mouth
   stroke('#DE3163');
  strokeWeight(8);
  line (220, 410, 380, 410);

  //please type your name
  noStroke();
  textAlign(CENTER);
  fill('orange');
  textSize(30);
  text('please type your name', width/2, 50);
}


function keyPressed() {
  noStroke();
  textAlign(CENTER);
  fill('red');
  textSize(32);
  text('nice to meet you', width/2, 550)
}
