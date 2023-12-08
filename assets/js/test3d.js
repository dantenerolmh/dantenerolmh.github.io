var easycam, 
    state = {
      distance: 208,
      center: [5, 3, -13],
      rotation: [0.3, -0.4, -0.1, 0.85] //set a particular state for specific camera orientation
};

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);   //创建canvas，参数是窗口的宽高
  canvas.style('display', 'block');
  canvas.parent('page-top');

  easycam = createEasyCam();

  // set initial camera state
  easycam.setState(state, 1000); // animate to state in 1 second
  easycam.state_reset = state;   // double click reset to defined state
}

function draw() {
  background(0);
  lights();
  torus(30, 15);
}

//Make Canvas Responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
