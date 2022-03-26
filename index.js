function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
// increments
n = 10.55;
function increment(n) {
  return (n += 1);
}
function decrement(n) {
  return (n -= 1);
}
// number = 10;
// function add5() {
//   return (number += 5);
// }
// function divideBy3() {
//   return (number /= 3);
// }

// console.log(divideBy3());
// console.log(add5());

// function add5() {
//   return (number += 5);
// }
// function divideBy3() {
//   return (number /= 3);
// }
// console.log(add5());
// console.log(divideBy3());

// using parseINT and parseFLOAT

function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
