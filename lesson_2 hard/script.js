'use strict';
let num = 266219, 
    output = [], /* Делаем массив из начального числа */
    mult = 1;

for (let i = 0; i < num.toString().length; i ++) {
    output.push(+num.toString().charAt(i)); 
    /* Получаем символ, который занимает позицию i, также можно это сделать с помощью квадратных скобок: [i].
     И затем добавляем push его в массив(знак +sNumer для целочисленного отображения элемента массива */
    mult *=num.toString()[i]; 
    console.log(output); /* console log можно вынести за цикл(сделано было для удобства отображения) */
}
console.log('Произведение чисел = : ', mult);
// console.log(output);
// mult=output.reduce((a,b)=>a*b); /* Перемножаем все элементы массива */
// console.log(mult);

  mult **= 3; //С помощью нового метода возводим в степень
console.log('Произведение в кубе = ',mult);

let sMult = mult.toString();
console.log('Первые 2 цифры полученного числа: ', sMult.slice(0,2));
// document.write('Первые 2 цифры полученного числа: ', sMult.slice(0,2));

var elem = document.createElement("p");
      elem.innerHTML = "Первые 2 цифры полученного числа: "+sMult.slice(0,2);
      document.body.appendChild(elem); 
      /* В отладчике выдает ошибку 'ReferenceError: window is not defined' ?(  но все работает*/