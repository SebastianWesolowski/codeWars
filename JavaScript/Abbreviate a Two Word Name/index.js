function abbrevName (name) {
  const getFirstLetter = (element) => {
    return new String(element)[0];
  };

  const arrayName = name.split(' ').map(getFirstLetter);

  return arrayName.join('.').toUpperCase();
}