// 웨이브를 그리는 것: 각 간격을 가진 좌표를 만들어, 좌표의 Y 값을 아래위로 이동시키고, 각각 좌표를 하나의 선으로 연결
// Point.js: 좌표, this.max: 좌표의 max값
// update 함수를 실행하면 아래위로 움직임
// Point에 index 값을 넘겨줘서 현재 point가 몇 번째 point인지 정의해준다

export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
