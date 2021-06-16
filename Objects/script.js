"use strict";

const obj = new Object(); // Do not use

const block = {
    name: 'Bob',
    width: 256,
    height: 512, 
    colors: {
        border: '1px',
        color: 'blue'
    },

    make: function() {
        console.log("Method");
    }
};

// console.log(block.name);

console.log(Object.keys(block).length);

// delete block.name;
// let counter = 0;
// for (let key in block) { // for objects
//     if (typeof(block[key]) === 'object') {
//         for ( let i in block[key]) {
//             console.log(`${i} : ${block[key][i]}`);
//         }
//         counter++;
//     }
//     else {
//         console.log(`${key} : ${block[key]}`);
//         counter++;
//     }
// }

block.make();

const {border, color} = block.colors;
console.log(border);