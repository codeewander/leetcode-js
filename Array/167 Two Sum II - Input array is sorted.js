var twoSum = function(numbers, target) {
  let startPoint = 0;
  let endPoint = numbers.length - 1;
  for (i = 0; i < numbers.length; i++) {
    if (target !== numbers[startPoint] + numbers[endPoint]) {
      target > numbers[startPoint] + numbers[endPoint]
        ? startPoint++
        : endPoint--;
    }
  }
  return [startPoint + 1, endPoint + 1];
};
