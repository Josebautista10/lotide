const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// TEST CODE
console.log(assertEqual(([1, 2, 3], [1, 2, 3]), true));
