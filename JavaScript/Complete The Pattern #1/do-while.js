function pattern(n) {
  let counter = 0;
  let collector = [];
  do {
    counter += 1;
    let loopCollector = [];
    for (let i = 0; i < counter; i += 1) {
      loopCollector.push(String(counter));
    }
    if (collector.length !== n - 1) {
      loopCollector.push('\n');
    }
    collector.push(loopCollector.join(''));
  } while (collector.length !== n);

  return collector.join('');
}

console.log(pattern(11));
