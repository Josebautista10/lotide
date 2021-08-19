import {assertArraysEqual} from './assertArraysEqual.js'

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = (array, cb) => {
  return array.slice(0, array.findIndex(cb));
};

console.log(assertArraysEqual(takeUntil(data1, (x) => x < 0), [ 1, 2, 5, 7, 2]));
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood']));

