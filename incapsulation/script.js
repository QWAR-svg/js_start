'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
    this.surname = 'Bob';
  }

  say() {
    console.log(`Name user: ${this.name}, age: ${this._age}`);
  }

  get name() {
    return this.surname;
  }

  set name(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Bad');
    }
  }
}

const alex = new User('Alex', 15);

// console.log(alex.getAge());
// alex.setAge(20);
// console.log(alex.getAge());
console.log(alex.name);
