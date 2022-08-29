let d;
let r = 30;
let mX = 0;
let mY = 0;
let easing = 0.05;
let s;
let m = 50;
let xText, sizeText, sizeSubText, yText;
let t;
let a = 255;
let b = 255;
let font1 = "BelledeMai4.0-Regular.otf", belleDeMai;

function setup() {
   belleDeMai = loadFont(font1);
  createCanvas(window.innerWidth, window.innerHeight);
  g = createGraphics(width, height);
  background(b);
 
}

function mousePressed() {
  if (mouseButton == CENTER) {
    saveCanvas("mesmerator", "png");
  }
}

function draw() {
  //background(0);

  xText = map(width, 300, 1000, 20, 40);
  sizeText = map(width, 300, 1000, 40, 80);
  sizeSubText = map(width, 300, 1000, 16, 24);
  yText = map(width, 300, 1000, 0.7, 1);

  push();
  g.noStroke();
  g.background(0, 0);
  g.textSize(60);
  g.fill(255, a);
  g.textFont(belleDeMai);
  g.textAlign(LEFT, TOP);
  g.text("Mesmerator", 30, 20);
  g.textSize(sizeSubText);
  g.textAlign(LEFT, TOP);
  //g.text("Click to Draw", xText, 98 * yText);
  // g.s = line(0, 115 * yText, width, 115 * yText);
  // g.s.strokeWeight(1);
  // g.s.stroke(255);
  pop();
  t = image(g, 0, 0);

  background(0, 0);

  if (mouseIsPressed == true) {
    r = min(r + 10, 250);
  } else {
    r = max(r - 10, 100);
  }

  mX = mX + (mouseX - mX) * easing;
  mY = mY + (mouseY - mY) * easing;

  for (var x = 0; x <= width + 25; x += m) {
    for (var y = 0; y <= height + 25; y += m) {
      d = dist(x, y, mX, mY);
      sz = map(d, 0, r, 200, 25);
      ellipse(x, y, max(sz, 0));
    }
  }

  push();
  blendMode(EXCLUSION);
  t = image(g, 0, 0);
  pop();
}

//makes the canvas responsive
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  a = 0;
  background(b);
}
