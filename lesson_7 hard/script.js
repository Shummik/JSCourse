'use strict';

let date = new Date(),
  newline = '\r\n',
  time = document.querySelector('.time');

function formatDate() {
  let timeFormat = {
    yyyy: date.getFullYear(),
    mm: ('0' + (date.getMonth() + 1)).slice(-2),
    dd: ('0' + date.getDay()).slice(-2),
    hh: ('0' + date.getHours()).slice(-2),
    Mm: ('0' + date.getMinutes()).slice(-2),
    ss: ('0' + date.getSeconds()).slice(-2),
    tz: ('0' + date.getTimezoneOffset()/60).slice(-2)
  };
  return 'Местное время ' + timeFormat.hh + ':' + timeFormat.Mm + ':' + timeFormat.ss + ' ' +
    timeFormat.dd + '/' + timeFormat.mm + '/' + timeFormat.yyyy + newline +
     'Разница между местным и UTC-временем '+ timeFormat.tz;
}
time.textContent = formatDate();

// setTimeout(function () {
//   location.reload();
// }, 1000);
 /* Немного топорно, но до Vue еще не до конца добрался) */