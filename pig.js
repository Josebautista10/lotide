// const regularToPigLatin = (str) => `${str[0].substring(1)}${str[0]}ay`;

const regularToPigLatin = (arg) => {
  const arrToStr = arg.toString();
  return `${arrToStr.substring(1)}${arrToStr[0]}ay`;
};

let final = '';
let elem = process.argv.slice(2);
for (let i = 0; i < elem.length; i++) {
  final += `${regularToPigLatin(elem[i])} `;
}
console.log(final.trim());

// let arg = process.argv.slice(2);
// const arrToStr = arg.toString();
// let newStr = '';
// let l = `${arrToStr.substring(1)}${arrToStr[0]}ay`;
// for (let i = 0; i < arg.length; i++) {
//   newStr += arg[i]
// };




