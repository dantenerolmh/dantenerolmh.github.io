

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);   //创建canvas，参数是窗口的宽高
  canvas.style('display', 'block');
  canvas.parent('page-top');

  createEasyCam();
}

function draw() {
  background(0);
	lights();
	box(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
