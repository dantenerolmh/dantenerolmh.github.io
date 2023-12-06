
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);   //创建canvas，参数是窗口的宽高
  canvas.style('display', 'block');
  canvas.parent('page-top');


}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
