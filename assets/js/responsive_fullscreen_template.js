

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);   //创建canvas，参数是窗口的宽高
  canvas.style('display', 'block');
  canvas.parent('page-top');
  setAttributes('antialias', true); //抗锯齿美化

  
}

function draw() {
  
}

//Make Canvas Responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
