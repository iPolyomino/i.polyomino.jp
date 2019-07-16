import Node from "../../assets/dtnsim/node";

describe("node property test", () => {
  const node = new Node(null, [10, 20], "exampleId");

  test("make node object", () => {
    expect(node.coordinate[0]).toBe(10);
    expect(node.coordinate[1]).toBe(20);
    expect(node.id).toBe("exampleId");
  });

  test("append connected Node", () => {
    const connectedNode = new Node(null, [30, 40], "connectedNodeId");
    node.appendConnectedNode(connectedNode);
    expect(node.connectedNode.length).toBe(1);
    expect(node.connectedNode[0].id).toBe("connectedNodeId");

    // error case
    expect(() => node.appendConnectedNode(node)).toThrow(Error);
    expect(node.connectedNode.length).toBe(1);
  });
});
