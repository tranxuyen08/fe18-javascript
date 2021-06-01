"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    // get user entries
    var investment = $("investment").value;
    var rate = $("rate").value;
    var years = $("years").value;

    // create random data with invalid
    if (isNaN(investment) || investment <= 0) {
        investment = getRandomNumber(50000);
        $("investment").value = investment;
    }
    if (isNaN(rate) || rate <= 0) {
        rate = getRandomNumber(15);
        $("rate").value = rate;
    }
    if (isNaN(years) || years <= 0) {
        years = getRandomNumber(50);
        $("years").value = years;
    }

    var futureValue = calculate(parseFloat(investment), parseFloat(rate), parseFloat(years));
    if (futureValue !== undefined) {
        $("result").value = formatFV(futureValue);
    }
};

// calulate future value
var calculate = function (investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate) / 100;
        if (i === 1000 || futureValue === Infinity) {
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
    $("investment").focus();
};
