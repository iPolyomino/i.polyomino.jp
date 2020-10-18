export default class Information {
  constructor(context, width = 800, height = 600) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.time = 0;
    this.endTime = null;
    this.deliverd = 0;
  }
  draw() {
    let infoText = [`time : ${this.time}`];
    if (this.endTime === null) {
      infoText.push(`deliverd : ${this.deliverd}`);
    } else {
      infoText.push(`end time : ${this.endTime}`);
    }

    const lineHight = 32;
    const infoWidth = 200;
    const infoHeight = infoText.length * lineHight;
    this.context.fillStyle = "hsla(0, 100%, 100%, 0.7)";
    this.context.fillRect(this.width - infoWidth, 0, infoWidth, infoHeight);
    this.context.fillStyle = "#000";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.font = "1.5rem 'Noto Sans Japanese', sans-serif";

    for (let i = 0; i < infoText.length; i++) {
      this.context.fillText(
        infoText[i],
        this.width - infoWidth / 2,
        infoHeight / infoText.length + lineHight * (i - 0.5),
        infoWidth
      );
    }
  }
  end() {
    this.endTime = this.time;
  }
}
