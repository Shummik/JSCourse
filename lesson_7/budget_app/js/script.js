'use strict';

let calculate = document.getElementById('start'),

  plusIncome = document.getElementsByTagName('button')[0],
  plusExpenses = document.getElementsByTagName('button')[1],

  depositCheck = document.querySelector('#deposit-check'),

  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

  // budgetMonthValue = document.querySelector('.budget_month-value'),
  // budgetDayValue = document.querySelector('.budget_day-value'),
  // expensesMonthValue = document.querySelector('.expenses_month-value'),
  // additionalIncomeValue = document.querySelector('.additional_income-value'),
  // additionalExpensesValue = document.querySelector('.additional_expenses-value'),
  // incomePeriodValue = document.querySelector('.income_period-value'),
  // targetMonthValue = document.querySelector('.target_month-value'),
  budgetMonthValue = document.getElementsByClassName('.budget_month-value')[0],
  budgetDayValue = document.getElementsByClassName('.budget_day-value')[0],
  expensesMonthValue = document.getElementsByClassName('.expenses_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('.additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('.additional_expenses-value')[0],
  incomePeriodValue = document.getElementsByClassName('.income_period-value')[0],
  targetMonthValue = document.getElementsByClassName('.target_month-value')[0],

  // leftInputs = document.querySelector('.data').querySelectorAll('input[type="text"]'),
  //   salaryAmount = leftInputs[0],
  //   incomeTitle = leftInputs[1],
  //   incomeAmount = leftInputs[2],
  //   expensesTitle = leftInputs[5],
  //   expensesAmount = leftInputs[6],
  //   addExpensesItem = leftInputs[7],
  //   depositAmount = leftInputs[8],
  //   depositPercent = leftInputs[9],
  //   targetAmount = leftInputs[10];

  // salaryTitle = document.querySelector('.salary-title'),
  // salaryAmount = document.querySelector('.salary-amount'),
  // incomeTitle = document.querySelector('.income-title'),
  // incomeAmount = document.querySelector('.income-amount'),
  // expensesTitle = document.querySelector('.expenses-title'),
  // expensesAmount = document.querySelector('.expenses-amount'),
  // additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  // targetAmount = document.querySelector('.target-amount'),
  // periodSelect = document.querySelector('.period-select'),
  // periodAmount = document.querySelector('.period-amount'),
  
  
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesAmount = document.querySelector('.expenses-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select');

// cancel = document.querySelector('#cancel');



console.log('plusIncome: ', plusIncome);
console.log('plusExpenses: ', plusExpenses);