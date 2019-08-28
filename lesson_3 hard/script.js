'use strict';
//  1.
let lang = 'ru'/* en */;
let arr;
// a)
if (lang == 'ru') {
   arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
   console.log('Неделя: ', arr);
}
else if (lang == 'en') {
  arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  console.log('if: ', arr);
}
else{
  console.log('Язык не опознан');
}
// b)
switch(lang){
  case 'ru':
    arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    console.log('switch-case: ', arr);
    break;
  case 'en' :
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    console.log('switch-case: ', arr);
    break;
}
// c)
let arr2 = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log('многомерный массив', arr2[lang]);

// 2.
let namePerson = 'Артем';
let position  = (namePerson === 'Артем') ? 'Директор' :
                (namePerson === 'Максим') ? 'Преподаватель':
                'Студент';
console.log(position);
