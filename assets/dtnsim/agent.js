import { RandomSelect } from "~/assets/dtnsim/algorithm.js";

export default class Agent {
  constructor(context, { range = 40, algorithm = RandomSelect } = {}) {
    this.context = context;
    this.range = range;
    this.algorithm = algorithm;
    this.size = 10;
    this.coordinate = [0, 0];
    this.sourceNode = null;
    this.targetNode = null;
    this.unitVector = null;
    this.isDelivered = false;
  }
  initStartNode(startNode) {
    this.sourceNode = startNode;
    this.coordinate = startNode.coordinate;
  }
  move() {
    if (this.unitVector === null || this.targetNode === null) {
      this.selectNextNode();
    }

    // This agent move unit vector every loop.
    // This algorithm has large amount of calculation.
    const xRemainingCoordinate =
      this.targetNode.coordinate[0] - this.coordinate[0];
    const yRemainingCoordinate =
      this.targetNode.coordinate[1] - this.coordinate[1];
    const distance = Math.sqrt(
      Math.pow(xRemainingCoordinate, 2) + Math.pow(yRemainingCoordinate, 2)
    );

    if (distance < 1) {
      this.coordinate = this.targetNode.coordinate;
      this.sourceNode = this.targetNode;
      this.selectNextNode();
    }
    const newCoordinate = [
      this.coordinate[0] + this.unitVector[0],
      this.coordinate[1] + this.unitVector[1],
    ];

    this.coordinate = newCoordinate;
    this.draw();
  }
  selectNextNode() {
    if (this.sourceNode === null) {
      throw new Error("sourceNode is not initialized.");
    }
    this.targetNode = this.algorithm(this.sourceNode);
    this.calcVector();
  }
  calcVector() {
    const xDiff = this.targetNode.coordinate[0] - this.sourceNode.coordinate[0];
    const yDiff = this.targetNode.coordinate[1] - this.sourceNode.coordinate[1];
    // |\vec{a}|
    const vecA = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    this.unitVector = [xDiff / vecA, yDiff / vecA];
  }
  draw() {
    // range
    this.context.beginPath();
    this.context.fillStyle = "hsla(200, 70%, 70%, 0.6)";
    this.context.arc(
      this.coordinate[0],
      this.coordinate[1],
      this.range,
      0,
      Math.PI * 2
    );
    this.context.fill();

    // body
    this.context.beginPath();
    this.context.fillStyle = "hsl(60, 100%, 50%)";
    if (this.isDelivered) {
      this.context.fillStyle = "hsl(230, 100%, 50%)";
    }
    this.context.arc(
      this.coordinate[0],
      this.coordinate[1],
      this.size,
      0,
      Math.PI * 2
    );
    this.context.fill();
  }
}
