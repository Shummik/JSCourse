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
  budgetMonthValue = document.getElementsByClassName('.budget_month-value'),
  budgetDayValue = document.getElementsByClassName('.budget_day-value'),
  expensesMonthValue = document.getElementsByClassName('.expenses_month-value'),
  additionalIncomeValue = document.getElementsByClassName('.additional_income-value'),
  additionalExpensesValue = document.getElementsByClassName('.additional_expenses-value'),
  incomePeriodValue = document.getElementsByClassName('.income_period-value'),
  targetMonthValue = document.getElementsByClassName('.target_month-value'),

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