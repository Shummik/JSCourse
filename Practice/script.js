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
  mission: 50000,
  period: 3,
  asking: function () {

    if (confirm('Есть ли у вас дополнительный источник зароботка?')) {
      let itemIncome,
        cashIncome;

      do {
        itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
      } while (!itemIncome);
      do {
        cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
      } while (!cashIncome);

      appData.income[itemIncome] = cashIncome;
    }

    let arrayExpenses = [],
      addExpenses;
    do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    } while (!isNaN(addExpenses) || addExpenses == null);

    appData.addExpenses = addExpenses.toLowerCase().split(',');

    for (let key in appData.addExpenses) {
      let possibleExpenses = appData.addExpenses[key];
      possibleExpenses = possibleExpenses.trim();
      possibleExpenses = possibleExpenses[0].toUpperCase() + possibleExpenses.slice(1).toLowerCase();
      arrayExpenses.push(possibleExpenses);
    }
    appData.possibleExpenses = arrayExpenses.join(', ');

    appData.deposit = confirm('Есть ли у Вас депозит в банке?');

    let answer = 0,
      names = ['Еда', 'Машина'],
      question;
    for (let i = 0; i < 2; i++) {
      do{
        question = prompt('Какие обязательные ежемесячные расходы у вас есть?', names[i]);
    } while(!isNaN(question) || question == null);
    appData.expenses[question] = answer;
    do{
        answer = +prompt('Во сколько это обойдется?'); 
    } while (isNaN(answer) || answer == '' || answer == null);
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
  getInfoDeposit: function () {
    if (appData.deposit){
      do {
          appData.percentDeposit = prompt('Какой ваш годовой процент?', 10);
      } while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
      do{    
          appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
  }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getInfoDeposit();
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

console.log('Возможные расходы: ', appData.possibleExpenses);
console.log('Месячные расходы: ', appData.expensesMonth);
console.log('Накопления за период', appData.calcSavedMoney());
console.log('Месячные расходы: ' + (appData.expensesMonth > 0) ? appData.expensesMonth : 'Что то пошло не так');
console.log('Период накопления: ', appData.period > 0 ? (Math.ceil(appData.period)) +
  ' месяцев' : 'Цель не будет достигнута');
about();