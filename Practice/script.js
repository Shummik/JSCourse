'use strict';
let money;

function start() {
  do {
    money = +prompt('Ваш ежемесячный доход?', 'Введите ваш доход');
  } while (!money);
}
start();

let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  percentDeposit: 0,
  moneyDeposit: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 0,
  period: 3,
  asking: function () {

    if(confirm('Есть ли у вас дополнительный источник зароботка?')){
      let itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
      let cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у Вас депозит в банке?');

    let answer = 0,
      names = ['Еда', 'Машина'],
      question;
    for (let i = 0; i < 2; i++) {
      question = prompt('Какие обязательные ежемесячные расходы у вас есть?', names[i]);
      answer = +prompt('Во сколько это обойдется?');
      appData.expenses[question] = answer;
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getAccumulatedMonth: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    if (appData.budgetDay > 0) {
      return ('Доход в день: ' + appData.budgetDay);
    } else {
      return ('Что-то пошло не так');
    }
  },
  getTargetMonth: function () {
    appData.period = appData.mission / appData.budgetMonth;
    if (appData.budgetMonth > 0) {
      return ('Цель будет достигнута через: ' + Math.ceil(appData.period) + ' месяцев!');
    } else {
      return ('Цель не будет достигнута');
    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 800) {
      console.log('Высокий уровень дохода');
    } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
      console.log('Средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
      console.log('Низкий уровень дохода');
    } else if (appData.budgetDay < 0) {
      console.log('Что то пошло не так, дохода нет');
    }
  },
  getInfoDeposit: function(){
    if (appData.deposit){
      appData.percentDeposit = prompt('Какой годовой процент?', '10');
      appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};
console.log(appData);


appData.asking();
appData.getInfoDeposit();
appData.mission = +prompt('Сколько планируете накопить?', 5000);
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getStatusIncome();


function about() {
  console.log('Наша программа включает в себя данные: ');
  for (let key in appData) {
    console.log(key + '-' + appData[key]);
  }
}

console.log('Месячные расходы: ' + appData.expensesMonth > 0 ? appData.expensesMonth : 'Что то пошло не так');
console.log('Период накопления: ', appData.period > 0 ? (Math.ceil(appData.period)) +
  ' месяцев' : 'Цель не будет достигнута');
about();