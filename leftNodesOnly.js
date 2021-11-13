const leftView = (root, level, map)=>{
   if(root == null){
     return;
   };
   if(!map[level]){
     map[level] = root.data;
   }
   leftView(root.left, level+1, map);
   leftView(root.right, level+1, map);
}

const leftNodesOnly = (root)=>{
    let map = [];
    leftView(root, 1, map);
    return map.slice(1, map.length);
}

module.exports={
  leftNodesOnly
}