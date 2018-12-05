export default class Agent {
  constructor(context) {
    this.size = 10;
    this.context = context;
  }
  setCoordinate(x, y) {
    this.x = x - this.size / 2;
    this.y = y - this.size / 2;
  }
  draw() {
    this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  }
}
