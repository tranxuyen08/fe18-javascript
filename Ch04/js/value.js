"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var fvcalculate = function() {
    var investment = $("investment").value;
    investment = parseFloat(investment);
    var rate = $("rate").value;
    rate = parseFloat(rate);
    var year = $("year").value;
    var isValid = true;

    if (investment == "") {
        $("investmentEr").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        if (investment <= 0) {
            $("investmentEr").firstChild.nodeValue = "Investment not Zero";
            isValid = false;
        } else if (isNaN(investment)) {
            $("investmentEr").firstChild.nodeValue = "Investment must be Numeric";
            isValid = false;
        } else {
            $("investmentEr").firstChild.nodeValue = "";
        }
    }

    if (rate == "") {
        $("rateError").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        if (rate <= 0) {
            $("rateEr").firstChild.nodeValue = "Rate not Zero";
            isValid = false;
        } else if (isNaN(rate)) {
            $("rateEr").firstChild.nodeValue = "Rate must be Numeric";
            isValid = false;
        } else {
            $("rateEr").firstChild.nodeValue = "";
        }
    }

    if (year == "") {
        $("yearEr").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        if (year <= 0) {
            $("yearEr").firstChild.nodeValue = "Year not Zero";
            isValid = false;
        } else if (isNaN(year)) {
            $("yearEr").firstChild.nodeValue = "Year must be Numeric";
            isValid = false;
        } else {
            $("yearEr").firstChild.nodeValue = "";
        }
    }

    if (isValid == true) {
        var futurevalue;
        var interest = rate * 0.01;
        futurevalue = investment;
        for (var i = 1; i <= year; i++) {
            futurevalue += futurevalue * interest;
        }
        $("future").value = futurevalue.toFixed(2);
    }
};

window.onload = function() {
    $("calculate").onclick = fvcalculate;
};