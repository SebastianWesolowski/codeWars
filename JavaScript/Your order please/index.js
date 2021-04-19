function order (words) {
  let rightOrder = [];
  const regExp = /\d+/;
  const arrayWords = words.split(' ');

  arrayWords.map(value => {
    const numberInSting = value.match(regExp);
    const indexPosition = numberInSting ? numberInSting - 1 : 0;
    rightOrder[indexPosition] = value;
  });
  return rightOrder.join(' ')
}