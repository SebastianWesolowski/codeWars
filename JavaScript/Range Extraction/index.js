function solution (list) {
  let currentRange = [];
  let correctRange = [];
  const allRange = [];
  let isRange = false;

  list.forEach((number, index) => {
    if (number + 1 === list[index + 1]) {
      isRange = true;
      currentRange.push(number);
    } else if (isRange && number - 1 === list[index - 1]) {
      currentRange.push(number);
      allRange.push(currentRange);
      currentRange = [];
      isRange = false;
    } else {
      allRange.push(number);
    }
  });

  allRange.forEach(range => {
    if (range.length >= 3) {
      correctRange.push(`${range[0]}-${range[range.length - 1]}`);
    } else {
      correctRange.push(range);
    }
  });

  return correctRange.join(',');
}