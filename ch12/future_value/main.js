var $ = function (id) {
  return document.getElementById(id);
};
var format = function (futurevalue) {
  futurevalue = futurevalue.toString();
  var dotlocation = futurevalue.indexOf('.');
  var cents = futurevalue.substring(dotlocation + 1, dotlocation + 3);
  var hundred = futurevalue.substring(dotlocation - 3, dotlocation);
  var thousand = '';
  var millions = '';
  if (dotlocation < 6) {
    thousand = futurevalue.substring(0, dotlocation - 3);
    millions = '';
  } else {
    thousand = futurevalue.substring(dotlocation - 6, dotlocation - 3);
    millions = futurevalue.substring(0, dotlocation - 6);
  }
  var formatFuture = '';
  if (dotlocation >= 7) {
    formatFuture =
      '$ ' + millions + ',' + thousand + ',' + hundred + '.' + cents;
  } else if (dotlocation > 3) {
    formatFuture = '$ ' + thousand + ',' + hundred + '.' + cents;
  } else if (dotlocation > 0) {
    formatFuture = '$ ' + hundred + '.' + cents;
  } else if (dotlocation === 0) {
    formatFuture = '$ ' + '0' + '.' + cents;
  }
  return formatFuture;
};
//có thế format thế này
// var formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
// });
var getday = function () {
  var currentDay = new Date();
  var month = currentDay.getMonth() + 1;
  var day = currentDay.getDate();
  var year = currentDay.getFullYear();
  var hours = currentDay.getHours();
  var minutes = currentDay.getMinutes();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var Daystr = 'Today is ' + month + '/' + day + '/' + year;
  Daystr += ' at ' + hours + ':' + minutes;
  return Daystr;
};
var calculator = function () {
  var investment = $('investment').value;
  var rate = $('rate').value;
  var year = $('year').value;
  $('futurevalue').value = '';
  var isValid = true;
  if (
    isNaN(investment) ||
    investment <= 0 ||
    investment > 10000000000 ||
    isNaN(rate) ||
    rate <= 0 ||
    rate > 25 ||
    isNaN(year) ||
    year <= 0 ||
    year > 100
  ) {
    isValid = false;
    alert('sai dữ liệu đầu vào');
    throw new Error('sai dữ liệu đầu vào');
  } else {
    investment = parseFloat(investment);
    rate = parseFloat(rate);
    year = parseFloat(year);
  }
  if (isValid === true) {
    var FutureValue;
    var Rateper = rate * 0.01;
    FutureValue = investment;
    for (var i = 1; i <= year; i++) {
      if (FutureValue === Infinity) {
        alert('Future value is not defind');
        throw new Error('Không thể tính được futuvalue');
        break;
      } else {
        FutureValue += FutureValue * Rateper;
      }
    }
    if (FutureValue !== '') {
      FutureValue = FutureValue.toFixed(2);
    }
    var fmfuture = format(FutureValue);
    $('futurevalue').value = fmfuture;
  }
};

window.onload = function () {
  $('calculator').onclick = calculator;
  $('date').textContent = getday();
};
