var gimme = function(inputArray) {
  const cloneArray = [...inputArray];
  const searchItem = cloneArray.sort((a, b) => {
    return a - b;
  });
  return inputArray.indexOf(searchItem[1]);
};

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));
