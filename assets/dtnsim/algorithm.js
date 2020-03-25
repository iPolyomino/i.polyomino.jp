export const RandomSelect = (nodes) => {
  if (nodes.connectedNode.length < 1) {
    throw new Error("This node is independent.");
  }
  const index = Math.floor(nodes.connectedNode.length * Math.random());
  return nodes.connectedNode[index];
};
