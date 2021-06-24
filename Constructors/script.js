"use strict";

const num = new Function(3);

console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.cool = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Bye ${this.name}`);
} 

const sasha = new User("Sasha", 19);

const bob = new User("Bob", 20);

sasha.exit();

