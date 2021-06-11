"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    // get user entries
    var investment = $("investment").value;
    var rate = $("rate").value;
    var years = $("years").value;
    var isValid = true;

    // data validation
    if (isNaN(investment) || investment == '') {
        $("investmentError").firstChild.nodeValue = "Investment must be numeric";
        isValid = false;
    } else if (investment <= 0 || investment > 100000) {
        $("investmentError").firstChild.nodeValue = "Investment must be greater than zero and <= 100000";
        isValid = false;
    } else {
        $("investmentError").firstChild.nodeValue = "";
    }

    if (isNaN(rate) || rate == '') {
        $("rateError").firstChild.nodeValue = "Rate must be numeric";
        isValid = false;
    } else if (rate <= 0 || rate > 15) {
        $("rateError").firstChild.nodeValue = "Rate must be greater than zero and <= 15";
        isValid = false;
    } else {
        $("rateError").firstChild.nodeValue = "";
    }

    if (isNaN(years) || years == '') {
        $("yearsError").firstChild.nodeValue = "Years must be numeric";
        isValid = false;
    } else if (years <= 0) {
        $("yearsError").firstChild.nodeValue = "Years must be greater than zero";
        isValid = false;
    } else {
        $("yearsError").firstChild.nodeValue = "";
    }

    if (isValid) {
        var futureValue = calculate(parseFloat(investment), parseFloat(rate), parseFloat(years));
        if (futureValue !== undefined) {
            $("result").value = formatFV(futureValue);
        }
    }
};
var random = function () {
    var investment = getRandomNumber(50000);
    var rate = getRandomNumber(15);
    var years = getRandomNumber(50);
    var futureValue = calculate(investment, rate, years);
    if (futureValue !== undefined) {
        $("investment").value = investment;
        $("investmentError").firstChild.nodeValue = "";
        $("rateError").firstChild.nodeValue = "";
        $("yearsError").firstChild.nodeValue = "";
        $("rate").value = rate;
        $("years").value = years;
        $("result").value = formatFV(futureValue);
    }
}
// calulate future value
var calculate = function (investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate) / 100;
        if (futureValue === Infinity) {
            alert('Future value = ' + futureValue.toFixed(2) + "\ni = " + i);
            $("investment").focus();
            return;
        }
    }
    return futureValue.toFixed(2);
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function formatFV(fValue) {
    var beforeDecimalPoint = fValue.substring(0, fValue.indexOf('.'));
    var afterDecimalPoint = fValue.substring(fValue.indexOf('.'));
    var fmFV = '';
    while (beforeDecimalPoint.length > 0) {
        fmFV = beforeDecimalPoint.substring(beforeDecimalPoint.length - 3) + fmFV;
        if (beforeDecimalPoint.length > 3) {
            fmFV = ',' + fmFV;
        }
        beforeDecimalPoint = beforeDecimalPoint.substring(0, beforeDecimalPoint.length - 3);
    }
    return '$' + fmFV + afterDecimalPoint;
}

function getDate() {
    var today = new Date();
    var day = today.getDay().toString().padStart(2, '0');
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var year = today.getFullYear();
    var hour = today.getHours().toString().padStart(2, '0');
    var min = today.getMinutes().toString().padStart(2, '0');
    return `To day is ${month}/${day}/${year} at ${hour}:${min}`;
}

window.onload = function () {
    $('today').innerText = getDate();
    $("calculate").onclick = processEntries;
    $('ramdom').onclick = random;
    $("investment").focus();
};
