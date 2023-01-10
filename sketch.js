// キャンバスを用意
// 蛇を用意
// 蛇を動かす
// 果物を用意
// 蛇が果物を食べる
// 果物が動く
// 蛇が大きくなる
// ゲーム終了

let snake;
const size = 30;

function setup(){
  createCanvas(600, 600);
  frameRate(5);
  snake.move();
  snake = new Snake();
}

function draw(){
  background('gray');
  snake.show();
}

function keyPressed() {
  if ()
}

class Snake {
  constructor() {
    this.body = createVector(0, 0);
    this.xDirection = 1;
    this.yDirection = 0;

  }

  move() {
    this.body.x += this.xDirection * size;
    this.body.y += this.yDirection * size;


  }

  show() {
    fill('black');
    rect(this.body.x, this.body.y, size, size);
  }

}
