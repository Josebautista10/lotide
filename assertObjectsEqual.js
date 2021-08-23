const { eqObjects } = require('./index.js');

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
  assertObjectsEqual(
    eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }),
    true
  )
);
