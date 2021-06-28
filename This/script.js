"use strict";

// function show(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }



// show(4, 9);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

// }

// let sasha = new User('Sasha', 20);

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name = 'John'
// };

// sayName.call(user);
// sayName.apply(user);

function count(num) {
    return this*num;
}

const double = count.bind(2);

console.log(double(3));
 

// 1) Обычная функция: this - Window, "use strict" - undefined

// 2)  Контекст у методов обьекта это сам обьект.

// 3) this в конструкторах и классах - это новый экземпляр обьекта

// 4) Ручная привязка  this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     this.style.backgroundColor = "red";
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         }
//         say();
//     }
// }

// obj.sayNumber();

// const calc = (a) => a * 2;

console.log(0 % 2);