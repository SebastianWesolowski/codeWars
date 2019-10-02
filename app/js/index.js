console.clear();
console.log('test');

function sumOfDifferences(arr) {
  let element = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    element += arr[i] - arr[i + 1];
  }
  return element * -1;
}

console.log(sumOfDifferences([1, 2, 10]));
