const countLetters = (str) => {
  let obj = {};
  const newStr = str.split(' ').join('').toLowerCase();
  console.log(newStr);
  for (const letter in newStr) {
    obj[newStr[letter]] = newStr.split(newStr[letter]).length - 1;
  }
  return obj;
};
console.log(countLetters('lighthouse in the house'));
