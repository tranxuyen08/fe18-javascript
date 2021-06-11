"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    try {
        var investment = $("investment").value;
        var rate = $("rate").value;
        var years = $("years").value;

        $("result").value = formatFV(calculate(investment, rate, years));
    } catch (e) {
        alert(e.message);
    }
};

// calulate future value
var calculate = function (investment, rate, years) {
    if (isNaN(investment) || investment <= 0 || investment > 100000 ||
        isNaN(rate) || rate <= 0 || rate > 15 ||
        isNaN(years) || years <= 0 || years > 1000) {
        throw new Error("Error in Future Value calculation");
    } else {
        investment = parseFloat(investment);
        rate = parseFloat(rate);
        years = parseFloat(years);
    }
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate) / 100;
        if (futureValue === Infinity) {
            throw new Error("Error in Future Value calculation");
        }
    }
    return futureValue.toFixed(2);
};

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
