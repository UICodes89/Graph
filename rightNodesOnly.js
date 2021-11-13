const rightView = (root, level, map)=>{
   if(root == null){
     return;
   };
   if(!map[level]){
     map[level] = root.data;
   }
   rightView(root.right, level+1, map);
   rightView(root.left, level+1, map);
}

const rightNodesOnly = (root)=>{
    let map = [];
    rightView(root, 1, map);
    return map.slice(1, map.length);
}

module.exports={
  rightNodesOnly
}