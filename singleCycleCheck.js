const singleCycleCheck = (array)=>{
  //[26,3,1,-4,-4,2]
  let numElementVisited = 0;
  let startIdx = 0
  let currentIdx = startIdx;
  while(numElementVisited < array.length){
    if(numElementVisited > 0 && currentIdx === startIdx) return false;
    currentIdx = (currentIdx + array[currentIdx]) % array.length;
    currentIdx = currentIdx > 0 ? currentIdx:array.length  + currentIdx;
    numElementVisited++;
  }
  return currentIdx == startIdx ? true : false;

}

module.exports = {
  singleCycleCheck
};