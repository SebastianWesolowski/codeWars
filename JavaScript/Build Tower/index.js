function towerBuilder (nFloors) {
  const maxLength = nFloors * 2 - 1;
  const array = Array(nFloors).fill('');
  let counter = 1;

  const crateChar = (char, length) => {
    const arrayChar = [];
    for (let i = 0; i < length; i++) {
      arrayChar.push(char);
    }
    return arrayChar.join('');
  };

  const tree = array.map(() => {
    const spaceAround = (maxLength - counter) / 2;
    const lineTree = `${crateChar(' ', spaceAround)}${crateChar('*', counter)}${crateChar(' ', spaceAround)}`;
    counter = counter + 2;
    return lineTree;
  });

  return tree;
}