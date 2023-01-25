
/*numberSplit(4) -> [2,2]
numberSplit(10) -> [5,5]
numberSplit(11) -> [5,6]
numberSplit(-9) -> [-5,-4] */

function numberSplit(n) {
  if (n < 0) {
      return [-Math.ceil(n/2), -Math.floor(n/2)];
  } else {
      return [Math.floor(n/2), Math.ceil(n/2)];
  }
}

console.log(numberSplit(4)); // [2, 2]
console.log(numberSplit(10)); // [5, 5]
console.log(numberSplit(11)); // [5, 6]
console.log(numberSplit(-9)); // [-5, -4]
