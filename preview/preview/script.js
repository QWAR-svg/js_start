'use strict';

const btn = document.querySelector('button'),
  overlay = document.querySelector('.overlay');

const del = e => {
  console.log(e.currentTarget);
};

btn.addEventListener('click', del);

overlay.addEventListener('click', del);

const link = document.querySelector('a');

link.addEventListener('click', e => {
  e.preventDefault();

  console.log('You tube');
});
