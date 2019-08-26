let money = 100;
let income = 'freelance';
let addExpenses = '   Food , Taxi  , Room   ';
let deposit = true;
var mission = 500;
const period = 2;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.trim().split());
console.log(addExpenses.trim().toLowerCase().split());

let budgetDay = money/30;
console.log('Дневной бюджет = ', budgetDay);
console.log('Целая часть = ', Math.trunc(budgetDay) + ' + также остаток = ', money % 30);
