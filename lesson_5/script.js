'use strict';

// ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 
// 1) Переписать функцию start циклом do while
// 2) Добавить валидацию (проверку) на данные которые мы получаем 
// на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
// 3) Если getTargetMonth возвращает нам отрицательное значение 
// то вместо “Цель будет достигнута”, необходимо выводить “Цель не будет достигнута”
// 4) Если budgetDay отрицательное значение то вместо уровня дохода пусть выводится сообщение “Что то пошло не так”

let money;
let deposit = confirm('Есть ли у Вас депозит в банке?');
// let period = 12;

let start = function () {
  let sum = 0;
  do {
    money = +prompt('Ваш ежемесячный доход?', 'Введите ваш доход');
    sum += money; /* На будущее) */
  } while (!money);
  return sum;
};
let income = start();

function getExpensesMonth() {
  let sum = 0,
    expenses = 0,
    question;
  do {
    question = prompt('Какие обязательные ежемесячные расходы у вас есть? Если нет, пропустите этот пункт');
    expenses = +prompt('Во сколько это обойдется? Если нет, пропустите этот пункт');
    sum += expenses;
  } while (!!question || !!expenses);
  return sum;
}
let expenses = getExpensesMonth();

let mission = +prompt('Сколько планируете накопить?');

function getAccumulatedMonth(money, expenses) {
  /*Накопления за месяц  */
  return money - expenses;
}
let accumulatedMonth = getAccumulatedMonth(income, expenses);

function getBudgetDay(){
  let budgetDay = Math.floor(accumulatedMonth/30);
  if (budgetDay > 0){
    console.log('Доход в день: '+ budgetDay );
      return budgetDay;
  }else {
      return console.log('Что-то пошло не так');
  }
}
let budgetDay = getBudgetDay();




function getTargetMonth() {
  /*За какой период будет достигнута цель  */
  if (accumulatedMonth > 0){
    return console.log('Цель будет достигнута через: ' + Math.ceil(mission / accumulatedMonth) + ' месяцев!');
  } else {
    return console.log('Цель не будет достигнута');
  }  
}
getTargetMonth();

function showTypeof(data) { // выводим тип данных
  console.log(data, typeof (data));
}

function getStatusIncome() {
  if (budgetDay >= 800) {
    return ("Высокий уровень дохода");
  } else if (budgetDay >= 300 && budgetDay < 800) {
    return ("Средний уровень дохода");
  } else if (budgetDay >= 0 && budgetDay < 300) {
    return ("Низкий уровень дохода");
  } else if (budgetDay < 0) {
    return ("Что то пошло не так");
  }
}

// console.clear();
showTypeof(money);
showTypeof(income);
showTypeof(deposit);
console.log(getStatusIncome());
console.log('Накоплено за период: ' + accumulatedMonth);