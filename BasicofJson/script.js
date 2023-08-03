'use strict';

const person = {
  name: 'Alex',
  tel: '+34632',
  parent: {
    mother: 'Annie',
    dad: 'Bob',
  },
};

const clone = JSON.parse(JSON.stringify(person));
clone.parent.mother = 'Jake';
console.log(clone);
console.log(person);
