let deskModel; //桌子3d模型
let deskTex; //桌子材质
let floorTex; //地板材质

let easycam
  // state = {
  //   distance: 505,
  //   center: [0, 0, 0],
  //   rotation: [0.0, 0.1, 0.138, 1]
  // };

function preload() {
  f = loadFont('https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf');
  deskModel = loadModel('assets/models/desk.obj', true);

  deskTex = loadImage("assets/models/textures/deskTexture.jpg");
  floorTex = loadImage("assets/models/textures/white-texture.jpg")
  textureMode(NORMAL);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);   //创建canvas，参数是窗口的宽高
  canvas.style('display', 'block');
  canvas.parent('page-top');
  setAttributes('antialias', true); //抗锯齿美化

  easycam = createEasyCam();  //create a easycam object
  easycam.setRotationConstraint(true, false, false);

  // set initial camera state
  //easycam.setState(state, 1000); // animate to state in 1 second
  //easycam.state_reset = state;   // state to use on reset


}

function draw() {

  // BG
  background(32);

  // Allows movement around a 3D sketch
  //orbitControl();

  texture(deskTex);
  noStroke();
  lights();
  rotate(PI); 
  model(deskModel);
  translate(0, -110, 0);

  texture(floorTex);
  box(50000, 10, 50000);

  console.log(easycam.getState());

}

//Make Canvas Responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
