var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    // get value
    var number = $("number").value;

    // data validation
    if (number === '') {
        $('numberError').firstChild.nodeValue = 'This field is required';
        return;
    } else if (isNaN(number) || number < 2) {
        $('numberError').firstChild.nodeValue = 'Please enter a positive integer greater than or equal to 2';
        return;
    } else {
        $("numberError").firstChild.nodeValue = "";
    }
    getPrimeNumbers(number);
};

var isPrime = function (n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
var getPrimeNumbers = function (n) {
    var result = "";
    var count = 0;
    for (var i = 2; i <= n; i++) {
        if (isPrime(i)) {
            result += i + " ";
            count++;
        }
    }
    $('pCount').value = count;
    $('prime_numbers').value = result;
}
window.onload = function () {
    $("get_prime_list").onclick = processEntries;
};

