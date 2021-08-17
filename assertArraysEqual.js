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

console.log(`The input you entered is ${assertArraysEqual([1],[1])} ✅`);
