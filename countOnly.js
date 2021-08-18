// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countOnly = function (allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false
});

console.log(assertEqual(result1['Jason'], 1));
console.log(assertEqual(result1['Karima'], undefined));
console.log(assertEqual(result1['Fang'], 2));
console.log(assertEqual(result1['Agouhanna'], undefined));
