const findKey = (obj, cb) => {
  // const values = Object.values(obj)
  // return Object.keys(obj)[values.findIndex(cb)]
 let keysArr = Object.keys(obj);;
 console.log(keysArr.find(e => obj[e] === {stars: 2}));
 console.log(Object.values(obj['noma']));

}


console.log(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) 
);
