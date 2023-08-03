'use strict';

const box = document.querySelector('.box'),
  btn = document.querySelector('button');

const width = box.offsetWidth;
const height = box.scrollHeight;

console.log(width, height);

// let i = 0;
// btn.addEventListener('click', () => {
//     if (i == 0) {
//         box.style.height = box.scrollHeight + 'px';
//         i++;
//     } else {
//         box.style.height = 450 + 'px';
//         i--;
//     }
// });

btn.addEventListener('click', () => {
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);

// window.scrollBy()
