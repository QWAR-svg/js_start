'use strict';

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script');
script.src = 'hi.js';
script.async = false;
document.body.append(script);
