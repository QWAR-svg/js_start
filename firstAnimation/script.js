"use strict";

const btn = document.querySelector('.btn');
let i;
let time;

function IAnimation() {
    const element = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }
}

function deb() {
    const element = document.querySelector('.box');
    let x = 0;
    const id = setInterval(wou, 30);

    function wou() {
        x++;
        if (x > 50) {
            const one = setInterval(whi, 30);
        function whi() {
                if (x < 0) {
                    clearInterval(one);
                }    
                 x--;
                 element.style.top = x + "px";
            }
        } else {
            element.style.top = x + "px";
        }
    }
}

deb();

// btn.addEventListener('click', IAnimation);

// btn.addEventListener('click', () => {
    

//     time = setInterval(function () {
//         if (i == 3) {
//             clearInterval(time);
//         }
//         console.log("Hello");
//         i++;
//     }, 2000);
// });

// let id = setTimeout(function log() {
//     console.log("Hi");
//     id = setTimeout(log, 500);
// }, 500);









