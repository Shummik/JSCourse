'use strict'; /* Строгий режим */

let a = 5;
// console.log('a: ', a);
// let question = confirm('Тебе есть 18 лет?');
// let question2 = +prompt('Сколько тебе лет?', '18');
// console.log('question: ', question);
// console.log(question2);
// console.log(typeof question2);

// console.log(5 + '5');
// console.log(typeof(5 + '5'));

// console.log(5 - '5');
// console.log(5 * '5');
// console.log('js' / '5');

// console.log(5 == '5');

// console.log(Boolean(5));
// console.log(!!'js');

// console.log(String([1,2,3]));
// console.log(typeof(10+''));
// console.log(typeof(10 .toString()));

// console.log(typeof Number('33'));

// console.log(typeof +'10');

// let n = '10';
// n *= 1;
// console.log(typeof n);

// console.log(parseInt('10 px'));
// console.log(parseFloat('10.5 px'));

// if (true) console.log('Истина');
// if (false) console.log('Этот код не выполнится');
let n = 3;
if (n === 5){
  console.log('command 1');
  console.log('command 2');
} else {
  console.log('nope');
}

switch (3) {
  case '3':
  case 4:
  case 5:
    console.log('3-5');
    break;
  case 6:
    console.log(6);  
    break; 
  default:
    console.log('wrong');     
}

let result = n === 3 ? 'right' : 'wrong';
console.log('result: ', result);