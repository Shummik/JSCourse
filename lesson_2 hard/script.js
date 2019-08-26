let num = 266219, 
    output = [], /* Делаем массив из начального числа */
    sNumber = num.toString(),/* переводим число в строку */
    len = sNumber.length,/* задаем размер числа(получившейся строки) */
    mult = 1;

for (var i = 0; i < len; i += 1) {
    output.push(+sNumber.charAt(i)); 
    /* Получаем символ, который занимает позицию i, также можно это сделать с помощью квадратных скобок: [i].
     И затем добавляем push его в массив(знак +sNumer для целочисленного отображения элемента массива */
    mult *=sNumber[i]; 
    console.log(output); /* console log можно вынести за цикл(сделано было для удобства отображения) */
}
console.log('Произведение чисел равно : ', mult);
// console.log(output);
// mult=output.reduce((a,b)=>a*b); /* Перемножаем все элементы массива */
// console.log(mult);

console.log('Math.pow(mult,3): ', Math.pow(mult,3));
