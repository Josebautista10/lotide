const words = ['ground', 'control', 'to', 'major', 'tom'];

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

const map = (arr, cb) => {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));