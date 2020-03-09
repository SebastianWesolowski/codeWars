function pattern(n) {
  const linePatern = n => {
    let collector = '';
    for (let i = 0; i < n; i += 1) {
      collector = collector + n;
    }
    return collector;
  };
  let consumer = [];
  for (let i = 1; i < n; i += 1) {
    consumer.push(linePatern(i));
  }

  return consumer.join('\n');
}

console.log(pattern(11));
