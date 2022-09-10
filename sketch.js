let arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < int((width / 600 + 1) * (height / 600 + 1)); i++) 
    arr.push(new Rects(random(width), random(height), width / 20, height / 20));
}

function draw() {
  background("#0F081A20");
  for(let i = 0; i < arr.length; i++) arr[i].display();
}

class Rects {
  constructor(xPos, yPos, w, h) {
    this.xpos = xPos;
    this.ypos = yPos;
    this.w1 = w;
    this.h1 = h;

    this.xvelo = random(-width / 500, width / 500);
    this.yvelo = random(-width / 500, width / 500);
  }
  
  display() {
    this.move();
    noStroke();
    fill(color("#3B3B98"));
    rect(this.xpos, this.ypos, this.w1, this.h1);
  }
  
  move() {
    if(this.xpos <= 0) this.xvelo = random(width / 1000, width / 500);
    else if(this.xpos >= (width - this.w1)) this.xvelo = random(-width / 500, -width / 1000);
    
    if(this.ypos <= 0)this.yvelo = random(width / 1000, width / 500);
    else if(this.ypos >= (height - this.h1)) this.yvelo = random(-width / 500, -width / 1000);
    
    this.xpos += this.xvelo;
    this.ypos += this.yvelo;
  }
}