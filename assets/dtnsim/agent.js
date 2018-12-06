export default class Agent {
  constructor(context) {
    this.size = 10;
    this.color = "#2f3fef";
    this.context = context;
    this.x = 0;
    this.y = 0;
  }
  setCoordinate(x, y) {
    this.x = x - this.size / 2;
    this.y = y - this.size / 2;
  }
  setColor(color) {
    this.color = color;
  }
  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.context.fill();
  }
  move(x, y) {
    setCoordinate(x, y);
    draw();
  }
}
