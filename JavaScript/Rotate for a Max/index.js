function maxRot (n) {
  const numberToArray = (number) => {
    return number.toString().split('');
  };

  const rotateLeft = (number) => {
    let arrayNumbers = numberToArray(number);
    const firstNumber = arrayNumbers.shift();
    arrayNumbers.push(firstNumber);

    return arrayNumbers.join('');
  };

  const lockFirstNumber = (number) => {
    let arrayNumbers = numberToArray(number);

    const firstNumber = arrayNumbers.shift();
    lockNumbers.push(firstNumber);

    return arrayNumbers.join('');
  };

  const sortByHighestNumber = (array) => {
    return array.sort((a, b) => b - a);
  };

  const lockNumbers = [];
  const rotateNumbers = [n];
  let currentNumber = n;

  for (let i = 0; i < numberToArray(n).length - 1; i++) {
    currentNumber = rotateLeft(currentNumber);
    currentNumber = lockFirstNumber(currentNumber);
    rotateNumbers.push(parseInt(lockNumbers.join('') + currentNumber, 10));
  }

  return sortByHighestNumber(rotateNumbers)[0];
}