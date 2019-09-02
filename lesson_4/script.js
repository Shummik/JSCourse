'use strict';

// ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
// 1) Создать следующие функции:
// — функция  getExpensesMonth. Функция возвращает сумму всех расходов за месяц
// — функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
// Результат сохранить в переменную accumulatedMonth
// — функция  getTargetMonth. Подсчитывает за какой период будет достигнута цель,
//    зная результат месячного накопления и возвращает результат

// 2) Все консоль логи которые были до этого почистить и вывести в консоль:
// — Оставить функции showTypeof и getStatusIncome, которые написали в уроке 
// — Накопления за период
// — Cрок достижения цели в месяцах (значение округлить в меньшую сторону)

let money = +prompt('Ваш ежемесячный доход?');
let deposit = confirm('Есть ли у Вас депозит в банке?');
let income = '15';

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  expenses1 = +prompt('Во сколько это обойдется?'),
  question2 = prompt('Какие обязательные ежемесячные расходы еще у вас есть?'),
  expenses2 = +prompt('Во сколько это обойдется?');

let mission = +prompt('Сколько планируете накопить?');

let budgetMonth = money - (expenses1 + expenses2);
let budgetDay = Math.floor(budgetMonth / 30);

let getExpensesMonth = function () {
  /*сумма всех расходов за месяц  */
  return expenses1 + expenses2;
};

let expenses = getExpensesMonth();

function getAccumulatedMonth() {
  /*Накопления за месяц  */
  return money - expenses;
}
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  /*За какой период будет достигнута цель  */
  return Math.ceil(mission / accumulatedMonth);
}
let monthPlan = getTargetMonth();

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


console.log('expenses: ', expenses);
console.log('profit: ', accumulatedMonth);
console.log('monthPlan: ', monthPlan);

console.clear();
showTypeof(money);
showTypeof(income);
showTypeof(deposit);
console.log(getStatusIncome());
console.log('Накоплено за период: ' + accumulatedMonth);
console.log('Цель будет достигнута через: ' + monthPlan + ' месяцев!');