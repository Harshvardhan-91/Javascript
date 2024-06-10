//Map method------------------------------->
let arr = [1, 3, 5, 7, 11];
let newArr = arr.map((e) => {
  return e ** 2;
});
console.log(newArr);

//Filter method---------------------------->
const greaterThanseven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(newArr.filter(greaterThanseven));

//Reduce method----------------------------->
const add = (a, b) => {
  return a + b;
};
let sum = arr.reduce(add);
console.log(sum);
