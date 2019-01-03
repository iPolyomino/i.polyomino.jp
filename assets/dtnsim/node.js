export default class Node {
  constructor(context, coordinate, id) {
    if (coordinate.length != 2) {
      throw new Error("coordinate should set as [x, y]");
    }
    this.size = 10;
    this.color = "#555";
    this.context = context;
    this.coordinate = coordinate;
    this.id = id;
    this.connectedNode = [];
  }
  appendConnectedNode(node) {
    if (node.id === this.id) {
      console.error("cannot append self node.");
      return;
    }
    this.connectedNode.push(node);
  }
  isEqual(node) {
    if (node.id === this.id) {
      return true;
    }
    return false;
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
