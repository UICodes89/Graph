const dfs = require('./depthFirstSearch');
const bfs = require('./breadthFirstSearch');
const scc = require('./singleCycleCheck');
const fibo = require('./fiboRecursive');
const tree = require('./leftNodesOnly');
const tree1 = require('./rightNodesOnly')

const graph = {
 a: ["c", "b"],
 b: ["d"],
 c:["e"],
 d:["f"],
 e:[],
 f:[]
};

console.log('depthFirstSearch',dfs.depthFirstSearch(graph, "a"));
console.log('depthFirstSearchRecursive', dfs.depthFirstSearchRec(graph, "a"))
console.log('breadthFirstSearch', bfs.breadthFirstSearch(graph, "a"));

//Single cycle check test
console.log(scc.singleCycleCheck([2,3,-2,-4,-4,2,90]));
console.log("=======")
console.log(fibo.fiboRecursive(50));


console.log("Binary tree");
class Node{
	constructor(item) {
		this.left = null;
		this.right = null;
		this.data = item;
		}
	}
console.log("===Print Left side of binary tree");
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);
root.right.left.left = new Node(9);

console.log(tree.leftNodesOnly(root));
console.log("===Print Right side of binary tree");
console.log(tree1.rightNodesOnly(root));