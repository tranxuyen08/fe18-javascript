var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    var number = parseFloat($("number").value);
    if (isNaN(number) || number <= 1) {
      alert("Please enter number");
    } else {
        var result = "";
        var count = 0;
        var isPrimeNumber = function (n) {
            var isPrime = true;
            for (var i = 2; i <= n / 2; i++) {
              if (n % i == 0) {
                isPrime = false;
                break;
              }
            }
            return isPrime;
          };
        for (var i = 2; i <= number; i++) {
            if (isPrimeNumber(i)) {
              result += " " + i;
              count=count+1;
            }
          }
      $("result").value = result;
      $("primecount").value = count;
    }
  };

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("number").focus();
};
