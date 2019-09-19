function sc(floor) {
  if (floor <= 1) {
    return '';
  }

  let scream = '';
  if (floor >= 2) {
    for (let i = 2; i <= floor; i++) {
      scream += 'Aa~ ';
    }
  }

  scream += 'Pa!';

  if (floor <= 6) {
    scream += ' Aa!';
  }
  return scream;
}
