const eqArrays = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

const isObject = (obj) => {
  return (typeof obj === 'object' && !Array.isArray(obj))
}

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)


  if (keys1.length !== keys2.length) {
    return false 
  } 
  for (const key of keys1 ) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (isObject(object1[key]) && isObject(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) );

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));