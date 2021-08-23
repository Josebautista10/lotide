const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  return object1Keys.every((key) => {
    const value1Type = typeof (object1[key]);
    
    if (value1Type !== typeof(object2[key])) return false;

    switch (value1Type) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return object1[key] === object2[key];
    default:
      return JSON.stringify(object1[key]) === JSON.stringify(object2[key]);
    }
  });
};

module.exports = eqObjects;

