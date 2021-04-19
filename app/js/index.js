function snail (array) {

  const sizeMatrix = array[array.length-1][array[array.length-1].length-1] / array.length
  console.log(sizeMatrix, 'sizeMatrix')
  const topLeft = array[0][0]
  const topRight = array[0][array[0].length-1]
  const bottomRight = array[array.length-1][array[array.length-1].length-1]
  const bottomleft = array[array.length-1][0]

  console.log(topLeft, 'topLeft')
  console.log(topRight, 'topRight')
  console.log(bottomRight, 'bottomRight')
  console.log(bottomleft, 'bottomleft')
  return array
}

console.log('== refresh');
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));  // "-6,-3-1,3-5,7-11,14,15,17-20"
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