export default class Path {
  constructor(context, source, target) {
    this.context = context;
    this.source = source;
    this.target = target;
  }
  draw() {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "#aaa";
    this.context.moveTo(this.source[0], this.source[1]);
    this.context.lineTo(this.target[0], this.target[1]);
    this.context.stroke();
  }
}
