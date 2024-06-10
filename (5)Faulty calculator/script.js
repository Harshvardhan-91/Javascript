// Create a faulty calculator using javascipt

/* 
1. it takes two numbers as input from user
2. It performs wrong operations:

+ ----> -
* ----> +
- ----> /
/ ---->**

It performs wrong operations 10% of the times
*/

let random = Math.random();
let a = prompt("Enter first number:- ");
let b = prompt("Enter second number:- ");
let c = prompt("Enter operation:- ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
