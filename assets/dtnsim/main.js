import Agent from "~/assets/dtnsim/agent.js";
import Graph from "~/assets/dtnsim/graph.js";
import { voronoi as d3Voronoi } from "d3-voronoi";

export default class Main {
  constructor(context, width, height, nodeCount = 10, agentCount = 3) {
    if (context == null) {
      throw new Error(`context: ${context}`);
    }
    if (width == null) {
      throw new Error(`width: ${width}`);
    }
    if (height == null) {
      throw new Error(`height: ${height}`);
    }

    this.context = context;
    this.width = width;
    this.height = height;
    this.nodeCount = nodeCount;
    this.agentCount = agentCount;

    // init nodes
    this.nodes = [...Array(this.nodeCount).keys()].map(_ => {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      return [x, y];
    });

    // init voronoi diagram
    const voronoi = d3Voronoi();
    voronoi.extent([[0, 0], [this.width, this.height]]);
    this.links = voronoi(this.nodes).links();
    const graph = new Graph(
      this.context,
      this.width,
      this.height,
      this.nodes,
      this.links
    );

    // init agents
    this.agents = [...Array(this.agentCount).keys()].map(
      _ => new Agent(this.context)
    );

    // display
    graph.draw();
    this.agents.forEach(agent => {
      const index = Math.floor(this.nodes.length * Math.random());
      const coordinate = this.nodes[index];
      agent.setCoordinate(coordinate);
      agent.draw();
    });
  }
}
