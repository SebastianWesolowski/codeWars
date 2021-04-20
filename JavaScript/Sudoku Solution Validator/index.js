function validSolution (board) {
  const flattenDeep = (arr1) => {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  };

  const checkLine = (line) => {
    let numbersToCheck = Array.from({ length: 9 }, (_, i) => i + 1);
    const isNumberExist = (element) => {
      if (numbersToCheck.includes(element)) {
        numbersToCheck = numbersToCheck.filter(value => value !== element);
        return true;
      }
      return false;
    };

    return line.every(isNumberExist);
  };

  const passedLineTest = board.map(line => checkLine(line));

  let currentGrid = [];
  let allGrid = [];

  while (board.length) {
    board.forEach((oneLine) => {
      if (!oneLine.length) {
        board.splice(0, 1);
        return;
      }
      const partGrid = oneLine.splice(0, 3);
      currentGrid.push(partGrid);
      if (currentGrid.length === 3) {



        allGrid.push(flattenDeep(currentGrid));
        currentGrid = [];
      }
    });
  }
  const passedGridTest = allGrid.map(line => checkLine(line));

  return (passedGridTest.every((test) => test) && passedLineTest.every((test) => test));
}