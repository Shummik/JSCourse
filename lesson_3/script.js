'use strict'; /* Строгий режим */

let money = +prompt('Ваш месячный доход?', '0');
console.log('money: ', money);
if (money == 0){
  alert('Ваш доход 0? попробуйте снова');
  document.location.reload(true);
} else {

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses: ', addExpenses);
// console.log(addExpenses.trim()); Trim так и не работает
console.log('addExpenses', addExpenses.split(','));

let deposit = confirm('Есть ли у вас депозит в банке?');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let expenseArr1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let spend1 = +prompt('Во сколько это обойдется?');

let expenseArr2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let spend2 = +prompt('Во сколько это обойдется?');
// можно сделать цикл пока пользователь вводит данные они записываются в массив, как только пустое значение - дальше
let budgetMonth = money-(spend1+spend2);
console.log('Доход за месяц: '+ budgetMonth);

let mission = +prompt('Сколько вы планируете накопить?');

console.log(Math.ceil( mission / budgetMonth) + ' <- столько нужно месяцев для достижения цели');

console.log('Ваш реальный бюджет на месяц ' + Math.floor(budgetMonth));

if (budgetMonth >= 800) {
  console.log('Высокий уровень дохода');
} else if (budgetMonth >= 300 && budgetMonth < 800) {
  console.log('Средний уровень дохода');
} else if (budgetMonth >= 0 && budgetMonth < 300) {
  console.log('Низкий уровень дохода');
} else if (budgetMonth < 0) {
  console.log('Что то пошло не так');
}

}

