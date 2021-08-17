const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    switch (true) {
    case i % (multiples[0] * multiples[1]) === 0:
      console.log(words.join(''));
      break;
    case i % multiples[0] === 0:
      console.log(words[0]);
      break;
    case i % multiples[1] === 0:
      console.log(words[1]);
      break;
    default:
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);