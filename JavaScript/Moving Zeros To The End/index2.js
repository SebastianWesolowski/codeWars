const moveZeros = function (arr) {
  const zeroNumbers = arr.filter((value)=>value === 0)
  const nonZeroNumber = arr.filter((value)=>value !== 0)

  return nonZeroNumber.concat(zeroNumbers)
}
