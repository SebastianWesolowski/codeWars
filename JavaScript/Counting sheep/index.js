function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.map(item => (item ? (counter += 1) : ''));
  return counter;
}
