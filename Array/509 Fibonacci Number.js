var vib = function(int) {
  if (int === 0) {
    return 0;
  } else if (int === 1) {
    return 1;
  } else {
    return fibonacci(int - 1) + fibonacci(int - 2);
  }
};

// 2. save cache

// let cacheSet = new Map();
// var fib = function(int) {
//     if(cacheSet.has(int)){
//         return cacheSet.get(int)
//     }
//     if(int==0){
//         cacheSet.set(int, 0)
//     }else if(int==1){
//         cacheSet.set(int, 1)
//     }else{
//         cacheSet.set(int, fib(int- 1) + fib(int - 2))
//     }
//     return cacheSet.get(int)
// };
