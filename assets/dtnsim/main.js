import Agent from "~/assets/dtnsim/agent.js";
import Background from "~/assets/dtnsim/background.js";

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

    // init agents
    this.agents = [...Array(this.agentCount).keys()].map(
      _ => new Agent(this.context)
    );

    // init nodes
    this.nodes = [...Array(this.nodeCount).keys()].map(agent => {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      return [x, y];
    });

    // display
    const background = new Background(
      this.context,
      this.width,
      this.height,
      this.nodes
    );
    background.draw();

    this.agents.forEach(agent => {
      const index = Math.floor(this.nodes.length * Math.random());
      const coordinate = this.nodes[index];
      agent.setCoordinate(coordinate);
      agent.draw();
    });
  }
}
