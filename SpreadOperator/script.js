"use strict";

let a = 5, b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 1
};

const box = obj; // Baaad reference 

box.a = 33;
console.log(obj);  // a = 33


// Loop
let objCopy;
 let hello = (obj) => {
    objCopy = {};

    for (let key in obj) {
        objCopy[key] = obj[key];
    }

    return objCopy;
 };


 console.log(hello(obj));
 objCopy.a = 25;
 console.log(objCopy);
 console.log(obj);


 // Object assign

 const add = {
     
 }

 console.log(Object.assign(add, obj)); 

 const oldArr = [3, 643, 24, 654];

const newArray = oldArr.slice();  // Copy
console.log(newArray);

const width = ['video.com' , 'tiktok.com', 'youtube,com'];

const news = ['bbc', 'cnn'],
      internet = [...width, ...news];

console.log(internet);

function log(a, b, c){
    console.log()
}





