function cleanString (s) {
  let arraySting = s.split('');

  const findFirstHashIndex = (array) => array.findIndex(char => char === '#');

  while (arraySting.includes('#')) {
    if (findFirstHashIndex(arraySting) === 0) {
      arraySting.splice(findFirstHashIndex(arraySting), 1);
      continue;
    }

    arraySting.splice(findFirstHashIndex(arraySting) - 1, 2);
  }

  return arraySting.join('');
}