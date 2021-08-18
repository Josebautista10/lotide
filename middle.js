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

// const middle = (arr) => {
//   let middle = arr[Math.floor((arr.length - 1) / 2)];
//   let middleLeft = arr.length / 2 - 1;
//   let middleRight = arr.length / 2;
//   let newArr = [];
//   if (arr.length > 2) {
//     if (arr.length % 2 === 0) {
//       newArr.push(arr[middleLeft]) && newArr.push(arr[middleRight]);
//     } else {
//       return [middle];
//     }
//   } else {
//     return newArr;
//   }
//   return newArr;
// };

const middle = (arr) => {
  const length = arr.length;
  const middleLength = parseInt(length / 2);
  let middleArray = [];
  switch (true) {
  case length <= 2:
    return middleArray;
  case length % 2 !== 0:
    return middleArray.push(arr[middleLength]);
  default:
    middleArray.push(arr[middleLength - 1]);
    middleArray.push(arr[middleLength]);
    return middleArray;
  }
};

console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(middle([1, 2, 3])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
