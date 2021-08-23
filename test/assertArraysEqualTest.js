const assertArraysEqual = require('../assertArraysEqual.js');

console.log(`The input you entered is ${assertArraysEqual([1], [1])} ✅`);
console.log(`The input you entered is ${assertArraysEqual([1], [2])} ❌`);