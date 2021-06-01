var $ = function (id) {
  return document.getElementById(id);
};
var clear = function () {
  $('investmentError').firstChild.nodeValue = '';
  $('rateError').firstChild.nodeValue = '';
  $('yearError').firstChild.nodeValue = '';
};
var getRandom = function (max) {
  var random;
  if (!isNaN(max)) {
    random = Math.floor(Math.random() * max) + 1;
  }
  return random;
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
  // get value
  clear();
  var investment = $('investment').value;
  var rate = $('rate').value;
  var year = $('year').value;
  $('futurevalue').value = '';
  var isValid = true;
  if (investment === '' && rate === '' && year === '') {
    investment = getRandom(50000);
    rate = getRandom(15);
    year = getRandom(50);
  }
  if (investment === '') {
    $('investmentError').firstChild.nodeValue = 'bad data type';
    isValid = false;
  } else {
    if (isNaN(investment)) {
      $('investmentError').firstChild.nodeValue = 'bad data type';
      isValid = false;
    } else {
      investment = parseFloat(investment);
      if (investment <= 0) {
        $('investmentError').firstChild.nodeValue = 'bad data type';
        isValid = false;
      } else {
        isValid = true;
      }
    }
  }
  if (rate === '') {
    $('rateError').firstChild.nodeValue = 'bad data type';
    isValid = false;
  } else {
    if (isNaN(rate)) {
      $('rateError').firstChild.nodeValue = 'bad data type';
      isValid = false;
    } else {
      rate = parseFloat(rate);
      if (rate <= 0) {
        $('rateError').firstChild.nodeValue = 'bad data type';
        isValid = false;
      } else {
        isValid = true;
      }
    }
  }
  if (year === '') {
    $('yearError').firstChild.nodeValue = 'bad data type';
    isValid = false;
  } else {
    if (isNaN(year)) {
      $('yearError').firstChild.nodeValue = 'bad data type';
      isValid = false;
    } else {
      year = parseFloat(year);
      if (year <= 0) {
        console.log('lỗi');
        $('yearError').firstChild.nodeValue = 'bad data type';
        isValid = false;
      } else {
        isValid = true;
      }
    }
  }
  if (isValid === true) {
    investment = parseFloat(investment);
    rate = parseFloat(rate);
    year = parseInt(year);
    var FutureValue;
    var Rateper = rate * 0.01;
    FutureValue = investment;
    for (var i = 1; i <= year; i++) {
      if (FutureValue === Infinity) {
        alert('Future value = ' + Infinity + '\n' + 'i = ' + i);
        break;
      } else {
        FutureValue += FutureValue * Rateper;
      }
    }
    console.log(FutureValue);
    if (FutureValue !== '') {
      FutureValue = FutureValue.toFixed(2);
    }
    var fmfuture = format(FutureValue);
    console.log(fmfuture);
    $('futurevalue').value = fmfuture;
  }
};

window.onload = function () {
  $('calculator').onclick = calculator;
  $('date').textContent = getday();
};
