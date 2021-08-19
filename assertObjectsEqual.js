const eqArrays = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const eqObjects = (object1, object2) => {
  let arr1 = Object.entries(object1).flat(10).sort();
  let arr2 = Object.entries(object2).flat(10).sort();

  return eqArrays(arr1, arr2);
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(
      expected
    )}`;
  }
  return `❌❌❌ Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`;
};

console.log(
  assertObjectsEqual({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' })
);
