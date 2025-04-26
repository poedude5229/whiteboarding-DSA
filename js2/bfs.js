const TreeNode = require("./treeNodeClass");

const bfs = (node) => {
  const queue = [node];
  const visited = new Set();
  while (queue.length > 0) {
    let currentNode = queue.pop();
    if (visited.has(currentNode)) continue;
    visited.add(currentNode.value);
    console.log(currentNode.value);

    for (let child of currentNode.children) {
      if (!visited.has(child.value)) queue.unshift(child);
    }
  }
};
