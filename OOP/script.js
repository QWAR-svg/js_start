"use strict";

let str = "some";

let strObj = new String(str);

console.log(typeof(str));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Helo');
    }
};

const john = Object.create(soldier);

const john = {
    health: 100
};

// john.__proto__ = soldier;  Old


// console.log(john.armor);

// john.sayHello();

// Object.setPrototypeOf(john, soldier);




