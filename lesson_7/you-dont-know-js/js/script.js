'use strict';

let books = document.querySelector('.books'),
  book = document.querySelectorAll('.book'),
  body = document.querySelector('body'),
  book2 = book[0].querySelector('ul'),
  book5 = book[5].querySelector('ul'),
  book6 = book[2].querySelector('ul'),
  cloneLi = book6.children[0].cloneNode();

books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[3]);
books.appendChild(book[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

books.children[2].querySelector('a').textContent = 'Получится - "Книга 3. this и Прототипы Объектов"';

// body.removeChild(body.querySelector('.adv'));
body.querySelector('.adv').remove();

book2.insertBefore(book2.children[6], book2.children[4]);
book2.insertBefore(book2.children[8], book2.children[5]);
book2.insertBefore(book2.children[2], book2.children[10]);

book5.insertBefore(book5.children[9], book5.children[2]);
book5.insertBefore(book5.children[3], book5.children[6]);
book5.insertBefore(book5.children[6], book5.children[9]);

cloneLi.textContent = 'Глава 8: За пределами ES6';
book6.insertBefore(cloneLi, book6.children[9]);