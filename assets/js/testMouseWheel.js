function setup() {
    // Create a canvas element and
    // assign it to cnv.
    let cnv = createCanvas(800, 800);
  
    background(200);
  
    // Call changeBackground() when the
    // mouse wheel moves.
    cnv.mouseWheel(changeBackground);
  
    describe('A gray square. When the mouse wheel scrolls over the square, it changes color and displays shapes.');
  }
  
  function changeBackground(event) {
    // Change the background color
    // based on deltaY.
    if (event.deltaY > 0) {
      background('deeppink');
    } else if (event.deltaY < 0) {
      background('cornflowerblue');
    } else {
      background(200);
    }
  
    // Draw a shape based on deltaX.
    if (event.deltaX > 0) {
      circle(50, 50, 20);
    } else if (event.deltaX < 0) {
      square(40, 40, 20);
    }
  }