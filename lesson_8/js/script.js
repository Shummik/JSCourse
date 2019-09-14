'use strict';
// 1) Переписать метод getIncome аналогично getExpenses
// 2) Создать метод addIncomeBlock аналогичный addExpensesBlock
// 3) Округлить вывод дневного бюджета
// 4) Число под полоской (range) должно меняться в зависимости от позиции range
// 5) Добавить обработчик события внутри метода showResult, который будет отслеживать период и 
//  сразу менять значение в поле “Накопления за период”
// 6) Блокировать все input[type=text] с левой стороны после нажатия кнопки рассчитать, после этого кнопка Рассчитать 
//  пропадает и появляется кнопка Сбросить (есть в верстке) на кнопку сбросить пока ничего не навешиваем
// 7) Вместо проверки поля Месячный доход в методе Start, запретить нажатие кнопки Рассчитать 
//  пока поле Месячный доход пустой

let calculate = document.getElementById('start'),
  cancel = document.querySelector('#cancel'),
  plusIncome = document.getElementsByTagName('button')[0],
  plusExpenses = document.getElementsByTagName('button')[1],
  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  budgetMonthValue = document.querySelector('.budget_month-value'),
  budgetDayValue = document.querySelector('.budget_day-value'),
  expensesMonthValue = document.querySelector('.expenses_month-value'),
  additionalIncomeValue = document.querySelector('.additional_income-value'),
  additionalExpensesValue = document.querySelector('.additional_expenses-value'),
  incomePeriodValue = document.querySelector('.income_period-value'),
  targetMonthValue = document.querySelector('.target_month-value'),
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  incomeItems = document.querySelectorAll('.income-items'),
  data = document.querySelector('.data'),
  dataInput = data.querySelectorAll('input[type=text]'),
  placeHolderName = data.querySelectorAll('input[placeholder=Наименование]'),
  placeHolderSum = data.querySelectorAll('input[placeholder=Сумма]');

let appData = {
  income: {},
  incomeMonth: 0,
  mission: 500000,
  period: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  expenses: {},
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  addExpenses: [],
  addIncome: [],
  possibleExpenses: [],
  start: function () {
    // 7)
    if (salaryAmount.value === '' || isNaN(salaryAmount.value)) {
      calculate.readOnly = true;
      return;
    }
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getIncome();
    appData.blockInput();
    appData.showResult();

    calculate.style.display = 'none';
    cancel.style.display = 'block';
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.children[0].value = '';
    cloneExpensesItem.children[1].value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      plusExpenses.style.display = 'none';
    }
  },
  // 2) 
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.children[0].value = '';
    cloneIncomeItem.children[1].value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusIncome);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      plusIncome.style.display = 'none';
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value,
        cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  // 1)
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value,
        cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.calcPeriod();
    // 5) Расчет “Накопления за период” сразу при изменении значении в ползунке
    periodSelect.addEventListener('input', function () {
      periodAmount.textContent = periodSelect.value;
      incomePeriodValue.value = appData.calcPeriod();
    });

  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  // 3)
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 800) {
      console.log('Высокий уровень дохода');
    } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
      console.log('Средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
      console.log('Низкий уровень дохода');
    } else if (appData.budgetDay < 0) {
      console.log('Что то пошло не так');
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой ваш годовой процент?', 10);
      } while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
    }
  },
  calcPeriod: function () {
    return appData.budgetMonth * periodSelect.value;
  },
  // 6) Блокирует инпуты после расчета 
  blockInput: function () {
    dataInput.forEach(function (item) {
      item.readOnly = true;
    });
  }
};


// Отслеживает и не дает вводить в инут [placeholder=Наименование] ничего кроме кирилицы
placeHolderName.forEach(function (item) {
  item.addEventListener('input', function (event) {
    event.target.value = event.target.value.replace(/[^а-яА-ЯёЁ .?!,]/i, '');
  });
});

// Отслеживает и не дает вводить в инут [placeholder=Сумма] ничего кроме цифр
placeHolderSum.forEach(function (item) {
  item.addEventListener('input', function (event) {
    event.target.value = event.target.value.replace(/[\D]/i, '');
  });
});

// 4) Отслеживаем изменения ползунка и передаем значение в periodAmount
periodSelect.addEventListener('input', function () { 
  periodAmount.textContent = periodSelect.value;
});

calculate.addEventListener('click', appData.start);
plusExpenses.addEventListener('click', appData.addExpensesBlock);
plusIncome.addEventListener('click', appData.addIncomeBlock);