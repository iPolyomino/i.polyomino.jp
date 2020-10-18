import Path from "~/assets/dtnsim/path.js";

export default class Graph {
  constructor(context, width = 800, height = 600, nodes = [], links = []) {
    if (nodes == null || nodes.length < 2) {
      throw new Error(`nodes: ${nodes}`);
    }
    this.context = context;
    this.width = width;
    this.height = height;

    this.nodes = nodes;
    this.links = links;
  }
  draw() {
    this.context.fillStyle = "#222";
    this.context.fillRect(0, 0, this.width, this.height);
    this.links.forEach((link) => {
      const newPath = new Path(this.context, link.source, link.target);
      newPath.draw();
    });
    this.nodes.forEach((node) => {
      node.draw();
    });
  }
}
