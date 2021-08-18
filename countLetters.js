const eqArrays = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const assertArraysEqual = (a, b) => {
  return eqArrays(a, b);
};


const letterPositions = (str) => {
  let obj = {};
  const newStr = str.split(' ').join('').toLowerCase().trim();

  for (let letter = 0; letter <= newStr.length - 1; letter++) {
    if (obj[newStr[letter]]) {
      obj[newStr[letter]].push(letter);
    } else {
      obj[newStr[letter]] = [letter];
    }
  }
  return obj;
};
assertArraysEqual(letterPositions('lighthouse in the house').l, [0]);
assertArraysEqual(letterPositions('lighthouse in the house').i, [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house').g, [2]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house').t, [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house').o, [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house').u, [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house').s, [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house').n, [12]);
