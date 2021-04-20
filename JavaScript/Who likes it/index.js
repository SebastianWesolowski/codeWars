function likes (names) {
  const countLike = names.length;
  let likesText;

  switch (true) {
    case (countLike >= 4):
      likesText = `${names[0]}, ${names[1]} and ${countLike - 2} others like this`;
      break;
    case countLike === 3:
      likesText = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case countLike === 2:
      likesText = `${names[0]} and ${names[1]} like this`;
      break;
    case countLike === 1:
      likesText = `${names[0]} likes this`;
      break;
    default:
      likesText = 'no one likes this';
  }

  return likesText;
}