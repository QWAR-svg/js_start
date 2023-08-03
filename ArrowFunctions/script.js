/* eslint-disable no-unused-vars */
'use strict';

const num = 20;

function func(string) {
  console.log(string);
  const num = 20;
}

func('Hello');
// console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 6));

// Function expression

const log = function () {
  //Do something
};

log();

// Arrow functions

const example = argument => {
  console.log(argument);
};

example(2);
