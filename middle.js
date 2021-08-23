const middle = (arr) => {
  const length = arr.length;
  const middleLength = parseInt(length / 2);
  let middleArray = [];
  switch (true) {
  case length <= 2:
    return middleArray;
  case length % 2 !== 0:
    middleArray.push(arr[middleLength]);
    return middleArray;
  default:
    middleArray.push(arr[middleLength - 1]);
    middleArray.push(arr[middleLength]);
    return middleArray;
  }
};

module.exports = middle;
