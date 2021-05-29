var $ = function (id) {
    return document.getElementById(id);
};
var calculateFV = function () {
    // get value
    var futureValue;
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
    } else if (years <= 0 || years > 50) {
        $("yearsError").firstChild.nodeValue = "Years must be greater than zero and <= 50";
        isValid = false;
    } else {
        $("yearsError").firstChild.nodeValue = "";
    }


    if (isValid) {
        investment = parseFloat(investment);
        rate = parseFloat(rate);
        years = parseInt(years);
        futureValue = investment;
        for (var i = 1; i <= years; i++) {
            futureValue = futureValue + (futureValue * rate) / 100;
        }
        $('future_value').value = parseInt(futureValue);
    }
};
window.onload = function () {
    $("calculate").onclick = calculateFV;
};
