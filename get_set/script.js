'use strict';

const person = {
  name: 'Alex',
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  },
};

console.log((person.userAge = 5));
// console.log(person.userAge);
