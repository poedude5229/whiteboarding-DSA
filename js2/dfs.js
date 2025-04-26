const TreeNode = require("./treeNodeClass");

const A = new TreeNode("A");
const B = new TreeNode("B");
const C = new TreeNode("C");
const D = new TreeNode("D");
const E = new TreeNode("E");
const F = new TreeNode("F");

A.addChild(B);
A.addChild(C);
A.addChild(D);
C.addChild(E);
D.addChild(F);

/*
Tree Structure:
      A
    / | \
   B  C  D
      |   \
      E    F

*/

const dfs = (node) => {
  const stack = [node];
  const visited = new Set();
  while (stack.length > 0) {
    let currentNode = stack.pop();
    if (visited.has(currentNode)) continue;
    visited.add(currentNode.value);
    console.log(currentNode.value);

    for (let child of currentNode.children) {
      if (!visited.has(child)) stack.push(child);
    }
  }
};

dfs(A);
