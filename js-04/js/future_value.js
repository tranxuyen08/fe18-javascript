"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

function calculateFT(investment, rate, year) {
    var futureValue;
    futureValue = investment;
    for (var i=1; i <= year; i++) {
        futureValue += futureValue*rate/100;
    }
    return futureValue.toFixed(2);
};

function validateEntry() {
    var entry1_OK;
    var entry2_OK;
    var entry3_OK;
    var investment = parseFloat($("investment").value);
    var year = parseInt($("year").value);
    var rate = parseInt($("rate").value);

    // validate "Total Investment" input
    if (investment < 0 || isNaN(investment)) {
        $("investment-error").firstChild.nodeValue = ' Please insert the number greater than 0';    
    } else {
        $("investment-error").firstChild.nodeValue = '';
        entry1_OK = true;
    }

    // validate "Rate" input
    if (rate < 0 || isNaN(rate)) {
        $("rate-error").firstChild.nodeValue = ' Please insert the number greater than 0';
    } else {
        $("rate-error").firstChild.nodeValue = '';
        entry2_OK = true;
    }

    // validate "Year" input
    if (year < 1 || isNaN(year)) {
        $("year-error").firstChild.nodeValue = ' Please insert the number greater from 1';
    } else {
        $("year-error").firstChild.nodeValue = '';
        entry3_OK = true;
    }
    
    // calculate value for Future Value input
    if ((entry1_OK && entry2_OK && entry3_OK) == true) {
        $("future-value").value = calculateFT(investment, rate, year);
    }
}

// clear all entry
function clearValue() {
    $("form").reset();
    $("investment-error").firstChild.nodeValue = '*';
    $("year-error").firstChild.nodeValue = '*';
    $("rate-error").firstChild.nodeValue = '*';
    $("investment").focus();
};

window.onload = function() {
    $("calculate").onclick = validateEntry;
    $("clear-entries").onclick = clearValue;
    $("investment").focus();
};