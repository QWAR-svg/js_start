"use stric";

// Primitive types :
// Numbers, Strings, Boolean, null, undefined, Symbol, BigInt

// Special Objects 
// Arrays, Functions, Date objects, error

let number = 4.6;

console.log(2 / 0); //Infinity
console.log(9 * 'string'); // Nan

const person = "Name: Sasha";
console.log(person);

const bool = true;
console.log(bool);

// console.log(hello); // Reference error (null)

let box;
console.log(box); // Undefined

const obj = {
    name: "Bob",
    age: 24
}

console.log(obj.name);
console.log("Object:" , typeof(obj));