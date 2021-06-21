"use strict";

const btn = document.querySelector('button'), 
overlay = document.querySelector('.overlay');

let i = 0;
const del = (e) => {
    console.log(e.currentTarget);
    console.log(type);
    i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', del)
    // }

};

btn.addEventListener('click', del);
overlay.addEventListener('click', del);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("You tube");
});


