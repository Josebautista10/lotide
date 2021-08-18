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

const middle = (arr) => {
  let middle = arr[Math.floor((arr.length - 1) / 2)];
  let middleLeft = arr.length / 2 - 1;
  let middleRight = arr.length / 2;
  let newArr = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      newArr.push(arr[middleLeft]) && newArr.push(arr[middleRight]);
    } else {
      return [middle];
    }
  } else {
    return newArr;
  }
  return newArr;
};

console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2], [])));
console.log(middle([1, 2, 3])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
