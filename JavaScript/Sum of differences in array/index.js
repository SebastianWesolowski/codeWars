function sumOfDifferences(arr) {
  arr.sort((a, b) => {
    return b - a;
  });
  let element = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    element += arr[i] - arr[i + 1];
  }
  return element;
}

console.log(sumOfDifferences([1, 2, 10]));
