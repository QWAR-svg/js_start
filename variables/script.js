/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict'; // Useful thing

let number = 5;
const leftBorder = 14; // CamelCase

number = 10;
console.log(number);

const obj = {
  a: 50,
};

obj.a = 3;
console.log(obj);

{
  const result = 50;
}
// var result -> no Error

console.log(result); // Is not defined
