function squareSum(numbers) {
  if (numbers === null || numbers.length === 0) {
    return 0;
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  numbers = numbers.map(x => Math.pow(x, 2));
  numbers = numbers.reduce(reducer);

  return numbers;
}
