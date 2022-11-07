class App {
  constructor() {
    // 캔버스 생성
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    // resize 이벤트 걸어주기
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // 애니메이션 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // resize 이벤트에서는 캔버스를 더블 사이즈로 지정 ->레티나 디스플레이에서도 잘 보일 수 있게 해준다
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    // 캔버스 클리어
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    requestAnimationFrame(this.animate.bind(this));
  }
}

// window가 로드 되면, App 생성
window.onload = () => {
  new App();
};
