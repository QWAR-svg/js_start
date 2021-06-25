"use strict";

// filter 

// const names = ['Sasha', 'Ann', 'Alex', 'Ksenia'];

// const shortNames = names.filter(function (name){
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['Sasha', 'ANN', 'BOb'];

// const res = answers.map(item => {
//     return item.toLowerCase();
// });

// console.log(res);

// every, some

const some = [4, 'helo', 'skmfkls'];

console.log(some.some(item => typeof(item) == 'number'));

console.log(some.every(item => typeof(item) == 'number'));

// reduce 

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current);

// const arr = ['apple', 'beer', 'bananas', 'potato', 'cherry', 'bluberries'];


// const result = arr.reduce((sum, current) => `${sum}  ${current}`);
// console.log(result);

const obj = {
    sasha: 'person',
    bob: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);