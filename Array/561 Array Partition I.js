var arrayPairSum = function(nums) {
  let sortedArray = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < sortedArray.length; i += 2) {
    result += Math.min(sortedArray[i], sortedArray[i + 1]);
  }
  return result;
};

// 2. array method
// var arrayPairSum = function(nums) {
//   return nums
//   .sort((a,b)=> a-b)
//   .reduce((sum, cur, index)=> (index % 2 === 0)? sum+=cur : sum, 0)
// };
