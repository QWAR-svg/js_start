'use strict';

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.item());

// console.log(btns[0].classList.toggle('red'));

// if (btns[0].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //     btns[1].classList.add('red');
  // } else {
  //     btns[1].classList.remove('red');
  // }

  btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', e => {
  if (e.target && e.target.matches('button.red')) {
    console.log('Button');
  }
});

const btn = document.createElement('button');

btn.classList.add('red');
wrapper.append(btn);

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Hello');
  });
});
