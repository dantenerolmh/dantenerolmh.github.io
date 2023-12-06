//用鼠标滚轮上下左右滚动触发事件的示例

function setup() {
    // Create a canvas element and
    // assign it to cnv.
    let cvs = createCanvas(800, 800);
  
    background(200);
  
    // Call changeBackground() when the
    // mouse wheel moves.
    cvs.mouseWheel(changeBackground);
  
    describe('A gray square. When the mouse wheel scrolls over the square, it changes color and displays shapes.');
  }
  
  function changeBackground(event) {
    // Change the background color
    // based on deltaY.
    if (event.deltaY > 0) { //滚轮往↓滚是+
      background('deeppink');
    } else if (event.deltaY < 0) {  //滚轮往↑滚是-
      background('cornflowerblue');
    } else {
      background(200);
    }
  
    // Draw a shape based on deltaX.
    if (event.deltaX > 0) { //滚轮往→滚是+
      circle(50, 50, 20);
    } else if (event.deltaX < 0) {  //滚轮往←滚是-
      square(40, 40, 20);
    }
  }