function int32ToIp (int32) {
  const octetArray = [];
  let binary = int32.toString(2);

  if (binary.length < 32) {
    const additionNumber = '0'.repeat(32 - binary.length);
    binary = additionNumber + binary;
  }
  binary = binary.split('');

  while (binary.length) {
    const oneOctet = binary.splice(0, 8);
    octetArray.push(oneOctet);
  }

  const convertedIp = octetArray.map(oneOctet => parseInt(oneOctet.join(''), 2))

  return convertedIp.join('.');
}
