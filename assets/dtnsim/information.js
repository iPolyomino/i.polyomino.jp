export default class Information {
  constructor(context, width = 800, height = 600, time = 0) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.time = time;
  }
  draw() {
    const infoWidth = 160;
    const infoHeight = 90;
    this.context.fillStyle = "hsla(0, 100%, 100%, 0.7)";
    this.context.fillRect(this.width - infoWidth, 0, infoWidth, infoHeight);
    this.context.fillStyle = "#000";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.font = "2rem 'Noto Sans Japanese', sans-serif";
    this.context.fillText(
      this.time,
      this.width - infoWidth / 2,
      infoHeight / 2,
      infoWidth
    );
  }
}
