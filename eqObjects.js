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

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
console.log(eqObjects(cd, dc));

const cd2 = { c: '1', d: ['2', 3, 4] };
console.log(eqObjects(cd, cd2));
