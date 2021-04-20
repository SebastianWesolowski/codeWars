function duplicateCount(text){
  const arrayChar = text.toLowerCase().split('');
  const existChar = []
  const duplicateChar = []

  arrayChar.forEach((char)=>{
    if(existChar.includes(char) && !duplicateChar.includes(char)){
      duplicateChar.push(char)
    }
    existChar.push(char)
  })
  return duplicateChar.length
}
