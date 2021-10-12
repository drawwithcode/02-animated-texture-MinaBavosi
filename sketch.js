var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noiseDetail(2, 1);
}
var iterator = 0;

function draw() {
  background("black");
  noStroke();

  translate(width / 2, height / 2);

  var space = 1.5;

  for (var i = 0; i < 360; i += space) {
    var xoff = map(cos(i), -1, 1, 0, 4);
    var yoff = map(sin(i), -1, 1, 0, 4);

    var n = noise(xoff + start, yoff + start);

    var h = map(n, 0, 0.8, -150, 150);
    var k = map(n, 0, 0.8, 150, -150);
    var r = map(sin(i), -1, 1, 100, 200);
    var g = map(h, -150, 150, 0, 150);
    var b = map(n, 0, 1, 150, 255);

    rotate(space);

    fill(r, g, b);

    rect(180, 0, h, 1);
    rect(180, 0, k, 1);
    ellipse(180, 0, k, 2.5);
    rect(360, 0, h, 1);
    rect(360, 0, k, 1);
    ellipse(360, 0, k, 2.5);
    rect(540, 0, h, 1);
    rect(540, 0, k, 1);
    ellipse(540, 0, k, 2.5);
    rect(720, 0, h, 1);
    rect(720, 0, k, 1);
    ellipse(720, 0, k, 2.5);
  }

  start += 0.01;
}
