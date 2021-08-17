// const eqArrays = (a, b) => {
//   return (
//     Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index])
//   );
// };

// const assertArraysEqual = (a, b) => {
//   return eqArrays(a, b);
// };

const flatten = (arr) => arr.flat();

console.log(flatten([1, 2, [3, 4], 5, [6]]));
