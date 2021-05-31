var $ = function (id) {
  return document.getElementById(id);
};
var clear = function () {
  $('numberError').firstChild.nodeValue = '';
};
function CheckPrime(num) {
  var result = false;
  var count = 0;
  if (num < 2) {
    count = 1;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count += 1;
    }
  }
  if (count === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

var calculator = function () {
  // get value
  clear();
  var number = $('number').value;
  var isValid = true;
  if (number === '') {
    $('numberError').firstChild.nodeValue = 'bad data type';
    isValid = false;
  }
  if (isNaN(number)) {
    $('numberError').firstChild.nodeValue = 'bad data type';
    isValid = false;
  }
  if (isValid === true) {
    var loop = 0;
    number = parseInt(number);
    var primelist = '';
    for (var i = 1; i <= number; i++) {
      if (CheckPrime(i) === true) {
        primelist += i + ' ';
        loop++;
      }
    }
    if (loop === 0) {
      primelist = 'Không có số nguyên tố nào';
    } else {
      $('count').value = loop;
      $('primenumber').value = primelist;
    }
    console.log(loop);
    console.log(primelist);
  }
};

window.onload = function () {
  $('calculate').onclick = calculator;
};
