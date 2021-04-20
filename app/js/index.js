function likes (names) {
  const countLike = names.length;
  let likesText = '';

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

console.log('== refresh');
console.log(likes(['Alex']));
console.log(likes(['Alex', 'Jacob']));
console.log(likes(['Alex', 'Jacob', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes([]));

Expected: 'Jacob and Alex like this', instead;
got: 'Jacob and Alex likes this';

//
// 1 2 3 4 5 6 7 8 9
// 2 3 1 5 6 4 8 9 7
// 3 1 2 6 4 5 9 7 8
// 4 5 6 7 8 9 1 2 3
// 5 6 4 8 9 7 2 3 1
// 6 4 5 9 7 8 3 1 2
// 7 8 9 1 2 3 4 5 6
// 8 9 7 2 3 1 5 6 4
// 9 7 8 3 1 2 6 4 5

// [
//  *
// ***
//  *
// ]

//
// Test.assertEquals(diamond(1), "*\n")
// Test.assertEquals(diamond(3), " *\n***\n *\n")
// Test.assertEquals(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
// Test.assertEquals(diamond(2), null)
// Test.assertEquals(diamond(-3), null)
// Test.assertEquals(diamond(0), null)