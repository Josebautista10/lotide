const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅  Assertion Passed: ${actual} === ${expected}`
    : `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
};
const eqArrays = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

// TEST CODE

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3]));