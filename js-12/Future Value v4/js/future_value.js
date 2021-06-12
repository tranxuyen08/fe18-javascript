"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

function calculateFT(investment, rate, year) {
    // Create options of errors for input entries
    if (investment <= 0 || rate <= 0 || year <= 0) {
        throw new Error("Please enter the valid number!");
    } else if (isNaN(investment) || isNaN(rate) || isNaN(year)) {
        throw new Error("Please enter a number!");
    }

    var futureValue;
    futureValue = investment;
    for (var i=1; i <= year; i++) {
        futureValue += futureValue*rate/100;
        // Create options of errors for output return
        if (futureValue == Infinity) {
            alert("Future Value = Infinity");
            break;
        } else if (futureValue > 999999999) {
            throw new Error("The Future value is too large!" + "\n" 
            + "Please make sure you enter the right number.");
        }
    }
    return futureValue.toLocaleString(undefined, {maximumFractionDigits:2});
};

function validateEntry() {
    try {
        var investment = parseFloat($("investment").value);
        var year = parseInt($("year").value);
        var rate = parseInt($("rate").value);

        $("future-value").value = calculateFT(investment, rate, year);
        $("date-time").firstChild.nodeValue = stringDate();
    } catch (error) {
        alert(error.message);
    }
    
}

// set time comment for p element
function stringDate() {
    var myDate = "";
    var myTime = "";
    var pString = "";
    var day, month, year;
    var hour, minute;
    var today = new Date();
    day = today.getDate().toString();
    if (today.getDate() < 10) { day = "0" + day; }
    month = (today.getMonth() + 1).toString();
    if (today.getMonth() < 10) { month = "0" + month; }
    year = today.getFullYear().toString();
    hour = today.getHours().toString();
    minute = today.getMinutes().toString();
    myDate = day + "/" + month + "/" + year;
    myTime = hour + ":" + minute;
    pString = pString.concat("Today is " + myDate + " at " + myTime + ".");
    return pString;
}

// random entry function
function randomEntry() {
    var random = [];
    var value = [];
    var max = [];
    max[1] = 50000;         // gia tri lon nhat cua investment
    max[2] = 15;            // gia tri lon nhat cua rate
    max[3] = 50;            // gia tri lon nhat cua year

    for (var i=1; i <= 3; i++) {
        random[i] = Math.random();
        random[i] = Math.floor(random[i] * max[i]);
        random[i] = random[i] + 1;
        value[i] = random[i];
    }
    $("investment").value = value[1];
    $("rate").value = value[2];
    $("year").value = value[3];
}

// clear all entry
function clearValue() {
    $("form").reset();
    // $("investment-error").firstChild.nodeValue = '*';
    // $("year-error").firstChild.nodeValue = '*';
    // $("rate-error").firstChild.nodeValue = '*';
    // $("date-time").firstChild.nodeValue = "";
    $("investment").focus();
};

window.onload = function() {
    $("calculate").onclick = validateEntry;
    $("random-value").onclick = randomEntry;
    $("clear-entries").onclick = clearValue;
    $("investment").focus();
};