function diamond (n) {
  if (n % 2 === 0 || n <= 0) {
    return null;
  }

  const maxLength = n;
  const arrayLine = Array.from({ length: n });

  const crateChar = (char, length) => {
    const arrayChar = [];
    for (let i = 0; i < length; i++) {
      arrayChar.push(char);
    }
    return arrayChar.join('');
  };

  let counter = 1;
  const diamond = arrayLine.map((line, index) => {
    const increment = index + 1 < maxLength / 2 ? true : false;
    const spaceBetween = (maxLength - counter) / 2;
    const lineDiamond = `${crateChar(' ', spaceBetween)}${crateChar('*', counter)}\n`;

    counter = counter + (increment ? +2 : -2);

    return lineDiamond;
  });

  return diamond.join('');
}