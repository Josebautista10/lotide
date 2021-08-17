const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual([1, 2, 3], [1, 2, 3]); // => true
assertEqual([1, 2, 3], [3, 2, 1]);