import Path from "./path.js";

export default class Background {
  constructor(context, width = 800, height = 600) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.nodes = [];
  }
  initNodePath() {
    this.nodes = [...Array(10).keys()].map(_ => {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      return { x: x, y: y };
    });

    this.paths = this.nodes.map(node => {
      const index = Math.floor(Math.random() * this.nodes.length);
      const endNode = this.nodes[index];
      return {
        start: node,
        end: endNode
      };
    });
    this.paths.forEach(path => {
      const newPath = new Path(this.context, path.start, path.end);
      newPath.draw();
    });
  }
  draw() {
    this.context.fillStyle = "#222";
    this.context.fillRect(0, 0, this.width, this.height);
    this.initNodePath();
  }
}
