
function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);


}




function draw() {


  resizeCanvas(windowWidth, windowHeight);
  background(0);

  translate(width / 2, height / 2);
  rotate(-90);

  var hr = hour();
  var sec = second();
  var min = minute();

  stroke(255, 51, 51);
  strokeWeight(12);
  noFill();

  let end = map(sec, 0, 60, 0, 360);
  arc(0, 0, 500, 500, 0, end);

  push();
  rotate(end);
  // line(0, 0, 180, 0);
  pop();

  stroke(178, 255, 102);


  let end2 = map(min, 0, 60, 0, 360);
  arc(0, 0, 470, 470, 0, end2);

  push();
  rotate(end2);
  line(0, 0, 150, 0);
  pop();


  stroke(51, 51, 255);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 440, 440, 0, end3);

  push();
  rotate(end3);
  line(0, 0, 100, 0);
  pop();

  stroke(0, 255, 255);
  point(0, 0);

}

