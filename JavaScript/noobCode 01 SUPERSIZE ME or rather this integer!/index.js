function superSize(num) {
  num = num.toString().split('');
  return parseInt(
    num
      .sort(function(a, b) {
        return b - a;
      })
      .join(''),
    10
  );
}

console.log(superSize(414));
console.log(441);
