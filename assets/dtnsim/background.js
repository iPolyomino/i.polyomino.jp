import { voronoi as d3Voronoi } from "d3-voronoi";
import Path from "./path.js";

export default class Background {
  constructor(context, width = 800, height = 600, nodes = []) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.nodes = nodes;
  }
  initNodeLinks() {
    const voronoi = d3Voronoi();
    voronoi.extent([[0, 0], [this.width, this.height]]);

    const links = voronoi(this.nodes).links();
    links.forEach(link => {
      const newPath = new Path(this.context, link.source, link.target);
      newPath.draw();
    });
  }
  draw() {
    this.context.fillStyle = "#222";
    this.context.fillRect(0, 0, this.width, this.height);
    this.initNodeLinks();
  }
}
