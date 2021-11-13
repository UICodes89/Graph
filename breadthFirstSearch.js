
// there are no recursice wauy possible for this
 const breadthFirstSearch = (graph, start)=>{
 const queue = [start];
 const result = [];
  while(queue.length > 0){
   let current = queue.shift();
   result.push(current);
   for(let neighbor of graph[current]){
     queue.push(neighbor);
   }
 }
 return result.toString('');
}

module.exports={
  breadthFirstSearch
};