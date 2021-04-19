function findMissingLetter (array) {
  let ALPHABET_INPUT = 'abcdefghijklmnopqrstuvwxyz';
  const firstLetter = array[0];

  if (firstLetter === firstLetter.toUpperCase()) {
    ALPHABET_INPUT = ALPHABET_INPUT.toUpperCase();
  }

  const ALPHABET = ALPHABET_INPUT.split('');
  const firstLetterIndex = ALPHABET.findIndex((char) => char === firstLetter);
  const correctArrayChar = ALPHABET.slice(firstLetterIndex, firstLetterIndex + array.length + 1);

  let extraChar = '';
  correctArrayChar.forEach((char) => {
    if (!array.includes(char)) {
      extraChar = char;
    }
  });

  return extraChar;
}
