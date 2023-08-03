/* eslint-disable no-constant-condition */
'use strict';

// Conditions

if (4 === 5) {
  console.log('true');
} else {
  console.log('false');
}

const number = 100;

if (number < 99) {
  console.log('Less than 100');
} else {
  console.log('Bigger than 100 or equal');
}

let num = 50;
num === 50 ? console.log('cool') : console.log('bad');

switch (num) {
case 50:
  console.log('Woo');
  break;
}

// Loops

while (num === 50) {
  console.log('50');
  num++;
}

do {
  console.log('50');
  num++;
} while (num < 45);

for (let i = 0; i < 8; i++) {
  console.log(i);
}

console.log('Hello');
