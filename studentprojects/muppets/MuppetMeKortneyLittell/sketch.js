let img;

function preload() {
gif = loadImage('kermit.gif');
}

function setup() {
  createCanvas(500, 500);
        background('rgba(219,100,130,0.66)');

  
}

function draw() {
  
muppet(); 



  textAlign(CENTER);
  fill('purple');
  textSize(30);
  text('please type your name', width/2, 75);
  
  
}

function keyPressed() {
      fill('rgb(121,83,56)');
   circle(250, 257, 250);
  
  fill('rgb(121,83,56)');
  rect(125, 257, 250, 300);
    
   fill('rgb(121,83,56)');
  rect(185, 199, 40, 5);
  
    fill('rgb(121,83,56)');
  rect(270, 199, 40, 5);
  textAlign(CENTER);
  fill('red');
  textSize(32);
  text('nice to meet you', width/2, 450); 
    image(gif, width/2, height/2);
}

function muppet() {


  
  noStroke();
  fill('rgb(252,217,234)');
   circle(250, 250, 200);
  
  
  fill('#F7D570');
   triangle(250, 237, 235, 277, 265, 277);
  
  fill('rgb(243,172,193)');
  circle(243, 297, 20);
  
    fill('rgb(243,172,193)');
  circle(257, 297, 20);
  
  fill('rgb(243,172,193)');
  ellipse(250, 308, 35, 20);
  
   fill('rgb(250,239,242)');
  ellipse(210, 227, 35, 20);
  
   fill('rgb(250,239,242)');
  ellipse(285, 227, 35, 20);
  
  fill('black');
  circle(210, 227, 9);
  
   fill('black');
  circle(285, 227, 9);
  
  fill('#FCC0DD');
  ellipse(315, 253, 35, 20);
  
    fill('#FCC0DD');
  ellipse(182, 253, 35, 20);

}