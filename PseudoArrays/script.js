"use strict";

const arr = [1, 5, 6, 634, 856,];

arr.pop(); // Delete last element from the array
arr.push(5); //

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let elem of arr) {
    console.log(elem);
}

arr.forEach( (item) => {
    console.log(item);
});

const list = prompt("", "");
const prod = list.split(" ");
console.log(prod);

