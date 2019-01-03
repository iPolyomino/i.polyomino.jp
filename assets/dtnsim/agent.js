import { RandomSelect } from "~/assets/dtnsim/algorithm.js";

export default class Agent {
  constructor(context) {
    this.size = 10;
    this.color = "#2f3fef";
    this.context = context;
    this.coordinate = [0, 0];
    this.sourceNode = null;
    this.targetNode = null;
    this.unitVector = null;
  }
  initStartNode(startNode) {
    this.sourceNode = startNode;
    this.coordinate = startNode.coordinate;
  }
  setColor(color) {
    this.color = color;
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
      this.coordinate[1] + this.unitVector[1]
    ];

    this.coordinate = newCoordinate;
    this.draw();
  }
  selectNextNode() {
    if (this.sourceNode === null) {
      throw new Error("sourceNode is not initialized.");
    }
    this.targetNode = RandomSelect(this.sourceNode);
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
    this.context.beginPath();
    this.context.fillStyle = this.color;
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
