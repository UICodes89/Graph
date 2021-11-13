const fiboRecursive = (num, memo={}) =>{
  if(num in memo) return memo[num];
  if(num <= 1) return 1;
  memo[num]  = fiboRecursive(num -1, memo) + fiboRecursive(num - 2, memo);
  return memo[num];
}

module.exports ={
  fiboRecursive
}