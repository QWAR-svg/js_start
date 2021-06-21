'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');

// const oneHeart = document.querySelector('.heart');

// console.dir(box);

// box.style.backgroundColor = 'purple';

// box.addEventListener('click', ()=> {
//     box.style.backgroundColor = 'purple';
//     box.style.width = '125px';
// });

box.style.backgroundColor = 'blue';

// box.addEventListener('click', ()=> {
//     if (box.style.backgroundColor == 'blue') {
//         box.style.backgroundColor = 'red';
//     } else {
//         box.style.backgroundColor = 'blue';
//     }
// });


// hearts.forEach((item) => {
//     item.addEventListener('click', () => {
//         if (item.style.backgroundColor == 'red') {
//             item.style.backgroundColor = 'green';
//         } else {
//             item.style.backgroundColor = 'red';
//         }
//     })
// });

// let i = 1;
// box.addEventListener('click', ()=> {
//         if (i == 1) {
//             box.style.backgroundColor = 'red';
//             i--;
//         } else if (i == 0) {
//             box.style.backgroundColor = 'blue';
//             i++;
//         } 
// });

const div =document.createElement('div');
const text = document.createTextNode('Hellou');

div.classList.add('black');

document.body.append(div);

let x = 1;
box.addEventListener('click', () =>{
    if (x == 1) {
        document.querySelector('.wrapper').prepend(div);
        x--;
    } else {
        document.querySelector('.wrapper').append(div);
        x++;
    }
    

});
// document.querySelector('.wrapper').prepend(div);

div.innerHTML = "Hello World";
div.textContent = "Hello"; //Only text

div.insertAdjacentHTML("afterend", '<h3>Hello<h3>');



