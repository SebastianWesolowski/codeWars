const moveZeros = function (arr) {
  const zeroNumbers= []
  const nonZeroNumber= []

  arr.forEach( (item, index) =>{
    if(item === 0){
      zeroNumbers.push(arr[index])
    }else{
      nonZeroNumber.unshift(arr[index])
    }
  })

  return nonZeroNumber.reverse().concat(zeroNumbers)
}