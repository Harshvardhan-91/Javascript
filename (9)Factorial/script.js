//Factorial using reduce and for loops
let a = 6;
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys()); //array method
  let c = arr.slice(1).reduce((a, b) => a * b);
  console.log(c);
}
factorial(a);
