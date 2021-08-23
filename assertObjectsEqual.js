const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  return object1Keys.every((key) => {
    const value1Type = typeof (object1[key]);
    
    if (value1Type !== typeof(object2[key])) { return false }

    switch (value1Type) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
      return object1[key] === object2[key]
      default:
        return JSON.stringify(object1[key]) === JSON.stringify(object2[key])
    }
  })
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
console.log(JSON.stringify({two:2,three: 3}) === JSON.stringify({three: 3, two:2}));

// console.log(
//   assertObjectsEqual(
//     eqObjects({ c: '1', d: [2, 3] }, { c: ['2', 3], d: '1' }),
//     true
//   )
// );

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) );
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));

console.log(
  assertObjectsEqual(
    eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }),
    true
  )
);
