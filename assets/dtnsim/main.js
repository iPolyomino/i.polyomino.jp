import Agent from "~/assets/dtnsim/agent.js";
import Graph from "~/assets/dtnsim/graph.js";
import Node from "~/assets/dtnsim/node.js";
import { voronoi as d3Voronoi } from "d3-voronoi";

export default class Main {
  constructor(context, width, height, nodeCount = 20, agentCount = 3) {
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
    this.nodes = [...Array(this.nodeCount).keys()].map(key => {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      return new Node(this.context, [x, y], key);
    });

    // init voronoi diagram
    const voronoi = d3Voronoi();
    voronoi.extent([[0, 0], [this.width, this.height]]);
    // data = [[x, y, id], ...]
    const data = this.nodes.map(node => [...node.coordinate, node.id]);
    this.links = voronoi(data).links();

    // node connectionNode update
    this.links.forEach(link => {
      const sourceIndex = link.source[2];
      const targetIndex = link.target[2];

      // append connectedNode to each other
      this.nodes[sourceIndex].appendConnectedNode(this.nodes[targetIndex]);
      this.nodes[targetIndex].appendConnectedNode(this.nodes[sourceIndex]);
    });

    this.graph = new Graph(
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

    this.agents.forEach((_, index) => {
      // agents start from node
      const startNode = this.nodes[
        Math.floor(this.nodes.length * Math.random())
      ];
      this.agents[index].initStartNode(startNode);
    });
    this.render();
  }
  render() {
    // prepare redraw
    this.context.clearRect(0, 0, this.width, this.height);

    // redraw
    this.graph.draw();
    this.agents.forEach(agent => {
      agent.move();
    });

    window.requestAnimationFrame(this.render.bind(this));
  }
}
