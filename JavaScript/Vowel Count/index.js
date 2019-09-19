function getCount(str) {
  var vowelsCount = 0;
  const arrVowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.split('');
  str.forEach(letter => {
    arrVowels.forEach(element => {
      if (letter.indexOf(element) >= 0) {
        vowelsCount++;
      }
    });
  });
  return vowelsCount;
}
