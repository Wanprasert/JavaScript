/*
numberSplit(4) -> [2,2]
numberSplit(10) -> [5,5]
numberSplit(11) -> [5,6]
numberSplit(-9) -> [-5,-4] 
*/

function numberSplit(n) {
  if (n % 2 === 0) {
      return [n/2, n/2];
  } else {
      let first = Math.floor(n/2);
      let second = first + 1;
      if (n < 0) {
          first = -first;
          second = -second;
      }
      return [first, second];
  }
}

console.log(numberSplit(4)); // [2, 2]
console.log(numberSplit(10)); // [5, 5]
console.log(numberSplit(11)); // [5, 6]
console.log(numberSplit(-9)); // [-5, -4]
