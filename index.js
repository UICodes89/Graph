const graph = {
 a: ["c", "b"],
 b: ["d"],
 c:["e"],
 d:["f"],
 e:[],
 f:[]
};
//without recussion
const depthFirstSearch = (g, start) => {
  const result = [];
  const stack = [start];
  while(stack.length > 0){
    let current = stack.pop();
    result.push(current);
    for(let neighbor of graph[current]){
      stack.push(neighbor)
    }
  }
  return result.toString('')
}

//recusrsion
const depthFirstSearchRec = (graph, start, memo=[])=>{
  memo.push(start);
  for(let neighbor of graph[start]){
    depthFirstSearchRec(graph, neighbor, memo)
  }
  return memo.toString('');
}

console.log(depthFirstSearch(graph, "a"));
console.log(depthFirstSearchRec(graph, "a"))
