let desk;

function preload() {
    desk = loadModel('assets/models/desk.obj', true);
  }

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight,WEBGL);   //创建canvas，参数是窗口的宽高
    canvas.style('display', 'block');
    canvas.parent('page-top');

}

function draw() {
    background(0);
    normalMaterial(); // For effect
    model(desk);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
