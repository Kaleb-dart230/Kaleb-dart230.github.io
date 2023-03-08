let r= 10;


let x,y;

function setup() {
  createCanvas(400, 400);
  
   x = width / 2;
  y = height;
}

function draw() {
  background(66, 135, 245);
  angleMode(DEGREES)
  fill(0,0,0);
  strokeWeight(3);
  
 fill(237, 204, 74)
 ellipse (x,y,50,50)
  y = y - 3;
  
   if (y < 0) {
    y = height;
  }
  
  
  
  
  
  stroke(0, 0, 0);
 fill(90,90,90)
 
   stroke(75, 75, 75);
fill(225,225,225)
  rect(-10,350,600,500,10);

  stroke (225,225,225)
fill(225,225,225)
  ellipse(0,325,100,100);
  
 stroke (225,225,225)
fill(225,225,225)
  ellipse(400,325,100,100);
  
   stroke (225,225,225)
fill(225,225,225)
  ellipse(0,255,80,80);
  
stroke(75, 75, 75);
fill(225,225,225)
  ellipse(400,255,80,80);
 
 
fill(225,225,225)
  rect(125, 180,160, 150, 5)
  
  fill(225,225,225)
  rect(170,140,70,160,8);
  
  
  
 
  
  
  fill(75, 75, 75)
   rect (180,170,50,30)
  
  
  
  
  push();
  fill(237, 87, 74);
  translate(193,180);
  rotate(r);
  rect (0, 0, 10,10);
  pop();
  
  r=r+8;
  
  push();
  fill(237, 87, 74);
  translate(220,180);
  rotate(r)
  rect (0, 0, 10,10);
  pop();
  
  r=r+8;
  //215
 
  
  fill(75,75,75)
  rect (190, 270, 30, 20)
  
  
  fill (225,225,225)
  rect (260, 250, 45, 125)
  
  fill(225,225,225)
  rect (100, 250, 45, 125)
  
  fill(225,225,225)
  rect (170,95,20,50)
  
  fill(225,225,225)
  rect(220,95,20,50)
  
 

}



