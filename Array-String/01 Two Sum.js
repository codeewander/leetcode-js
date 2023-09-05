//1. two head solution

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if(i !== j){
//         if (nums[i] + nums[j] === target) {
//           return [i, j]
//         }
//       }
//     }
//   }
// }

//2. one head solution

// var twoSum = function(nums, target) {
//   for(let i = 0; i< nums.length; i++ ){
//       let index = nums.indexOf(target - nums[i])
//       if(index !== -1 && i !== index){
//           return [i, index]
//       }
//   }
// }

// 3. hashmap
// var twoSum = function (nums, target) {
//   let obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (target - nums[i] in obj) {
//       return [obj[target - nums[i]], i]
//     } else {
//       obj[nums[i]] = i;
//     }
//   }
// };

// 4. map

var twoSum = function(nums, target) {
  const map = new Map();
  let result;
  nums.forEach((item, index) => {
    let indexValue = target - item;
    if (map.has(indexValue)) {
      result = [map.get(indexValue), index];
    }
    map.set(item, index);
  });
  return result;
};
