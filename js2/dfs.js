import TreeNode from "./treeNodeClass";

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


