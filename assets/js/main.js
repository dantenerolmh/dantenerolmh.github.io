let canvasIndex = 0;
let canvases = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvases.push(drawCanvas1);
  canvases.push(drawCanvas2);
}

function draw() {
  background(220);
  canvases[canvasIndex]();
}

function drawCanvas1() {
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 100, 100);
  text('Canvas 1', width / 2, height - 20);
}

function drawCanvas2() {
  fill(0, 0, 255);
  rect(width / 4, height / 4, width / 2, height / 2);
  text('Canvas 2', width / 2, height - 20);
}

function mouseWheel(event) {
  let delta = event.delta;
  if (delta > 0) {
    // 向下滚动
    canvasIndex = (canvasIndex + 1) % canvases.length;
  } else {
    // 向上滚动
    canvasIndex = (canvasIndex - 1 + canvases.length) % canvases.length;
  }
  return false; // 防止页面滚动
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
