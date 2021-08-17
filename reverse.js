const reverse = (arg) => {
  let newStr = '';
  for (let i = arg.length - 1; i >= 0; i--) {
    newStr += arg[i];
  }
  return newStr;
};
// console.log(reverse(process.argv));
let arguments = process.argv.slice(2)
for (let i = 0; i < arguments.length; i++) {
  console.log(reverse(arguments[i]));
}


