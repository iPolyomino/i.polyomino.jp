export default class Path {
  constructor(context, start, end) {
    this.context = context;
    this.start = start;
    this.end = end;
  }
  draw() {
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "#aaa";
    this.context.moveTo(this.start.x, this.start.y);
    this.context.lineTo(this.end.x, this.end.y);
    this.context.stroke();
  }
}
