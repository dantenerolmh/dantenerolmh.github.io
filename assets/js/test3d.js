var easycam,
  state = {
    distance: 208,
    center: [5, 3, -13],
    rotation: [0.3, -0.4, -0.1, 0.85] //set a particular state for specific camera orientation
  },
  f, x = 20, y = 20;;

function preload() {
  f = loadFont('https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);   //创建canvas，参数是窗口的宽高
  canvas.style('display', 'block');
  canvas.parent('page-top');

  setAttributes('antialias', true); //抗锯齿美化

  easycam = createEasyCam();  //create a easycam object

  // set initial camera state
  easycam.setState(state, 1000); // animate to state in 1 second
  easycam.state_reset = state;   // double click reset to defined state

  // use the loaded font
  textFont(f);
  textSize(16);
  stroke(50,50,52);
  strokeWeight(0.5);
}

function draw() {
  background(0);
  lights();
  box(100);

    // 2D screen-aligned rendering section
    easycam.beginHUD();
      noLights();
      let state = easycam.getState();
    
      // Render the background box for the HUD
      noStroke();
      fill(0,255,0);
      rect(x,y,20,100);
      fill(50,50,52, 200); // a bit of transparency
      rect(x+20,y,380,100);
      sphere(40);

      // Render the labels
      fill(69,161,255);
      text("Distance:",x+35,y+25);
      text("Center:  ",x+35,y+25+20);
      text("Rotation:",x+35,y+25+40);
      text("Framerate:",x+35,y+25+60);

      // Render the state numbers
      fill(69,161,255);
      text(nfs(state.distance, 1, 2),x+125,y+25);
      text(nfs(state.center,   1, 2),x+125,y+25+20);
      text(nfs(state.rotation, 1, 3),x+125,y+25+40);
      text(nfs(frameRate(),    1, 2),x+125,y+25+60);
    easycam.endHUD();
}

//Make Canvas Responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
