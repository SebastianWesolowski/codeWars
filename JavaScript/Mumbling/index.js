function accum(s) {
  const value = s.split('');
  let all = '';
  value.forEach((element, index) => {
    let otherLetter = '';
    let firstLetter = element.toUpperCase();
    if (index >= 1) {
      firstLetter = element.toUpperCase();
      for (let i = 0; i < index; i++) {
        otherLetter += element.toLowerCase();
      }
    }
    all += firstLetter + otherLetter + '-';
    return all;
  });
  return all.substring(0, all.length - 1);
}
