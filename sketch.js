var d;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220,100,50);
}

function draw() {
  d = random(50,100)
  colorMode(HSB,360,100,100);
  fill(random(0,360),100,100);
  ellipse(mouseX, mouseY,d,d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
 
