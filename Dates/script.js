/* eslint-disable no-unused-vars */
'use strict';

const now = new Date();
// console.log(now.getFullYear());

// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());

console.log(now.setHours(18, 40));
console.log(now.getTimezoneOffset());

console.log(now.getTime());

const start = new Date();

for (let i = 0; i < 100000; i++) {
  const some = i ** 3;
}

const end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);
