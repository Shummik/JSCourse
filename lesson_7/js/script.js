'use strict';

let collect = document.querySelector('.books'),
  elem = document.querySelectorAll('.book');

collect.insertBefore(elem[1], elem[0]);
collect.insertBefore(elem[4], elem[3]);
collect.appendChild(elem[2]);

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';