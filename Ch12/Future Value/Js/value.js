"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var calculate = function() {
    var message = "";
    try {
        var investment = parseFloat($("investment").value);
        var rate = parseFloat($("rate").value);
        var years = parseFloat($("years").value);

        $("futureValue").value =
            calculateFutureValue(investment, rate, years);
    } catch (error) {
        alert(error.message);
    }

};
var calculateFutureValue = function(investment, rate, years) {
    if (investment <= 0 || isNaN(investment) || investment > 10000 ||
        rate < 0 || isNaN(rate) || rate > 15 ||
        years < 0 || years > 100 || isNaN(years)) {

        throw new Error("Error Mesage = " + "futureValue is not defined." + "\n" +
            "Error Name = " + "ReferenceError.");

    }
    var futurevalue;
    var interest = rate * 0.01;
    futurevalue = investment;

    for (var i = 1; i <= years; i++) {
        futurevalue += futurevalue * interest;
        $("future").value = futurevalue.toFixed(2);
        if (futurevalue == Infinity) {
            throw new Error("Error in Future value caculation");

        }
        return futurevalue;
    };


}
var getDate = function() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var Day = 'Today is ' + month + '/' + day + '/' + year;
    Day += ' at ' + hours + ':' + minutes + ':' + seconds;
    return Day;
};

window.onload = function() {
    $("today").innerText = getDate();
    $("calculate").onclick = calculate;


};