function greatestCommonDivisor(a, b) {
  if (a === 0 || b === 0) {
    return a + b;
  }
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}
function getResult() {
  var a, b;
  var again;
  do {
    a = prompt('Enter number one', 18);
    b = prompt('Enter number two', 12);
    if (isNaN(a) || isNaN(b)) {
      alert('error');
    } else {
      a = parseInt(a);
      b = parseInt(b);
      show = greatestCommonDivisor(a, b);
      alert('result =' + show);
    }
    again = prompt('Enter again (y/n)', 'y');
  } while (again === 'y');
}
window.onload = function () {
  getResult();
};
