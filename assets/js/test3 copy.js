let angleX = 0;
let angleY = 0;
let positionX = 0;
let positionY = 0;
let positionZ = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);

  // 设置透视视图
  perspective(PI / 3, width / height, 0.1, 1000);

  // 设置相机位置和方向
  camera(positionX, positionY, positionZ, positionX + cos(angleY) * cos(angleX), positionY + sin(angleX), positionZ + sin(angleY) * cos(angleX), 0, 1, 0);

  // 绘制一个简单的立方体
  rotateX(angleX);
  rotateY(angleY);
  box(50);

  // 更新相机位置
  positionX += cos(angleY) * 5;
  positionY += sin(angleX) * 5;
  positionZ += sin(angleY) * 5;
}

function keyPressed() {
  // 键盘控制相机的移动
  if (keyCode === UP_ARROW) {
    positionX += cos(angleY) * 5;
    positionY += sin(angleX) * 5;
    positionZ += sin(angleY) * 5;
  } else if (keyCode === DOWN_ARROW) {
    positionX -= cos(angleY) * 5;
    positionY -= sin(angleX) * 5;
    positionZ -= sin(angleY) * 5;
  } else if (keyCode === RIGHT_ARROW) {
    angleY += 0.1;
  } else if (keyCode === LEFT_ARROW) {
    angleY -= 0.1;
  }
}
