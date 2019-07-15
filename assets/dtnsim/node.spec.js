import Node from "../../assets/dtnsim/node";

describe("node property test", () => {
  test("make node object", () => {
    const node = new Node(null, [10, 20], "exampleId");
    expect(node.coordinate[0]).toBe(10);
    expect(node.coordinate[1]).toBe(20);
    expect(node.id).toBe("exampleId");
  });
});
