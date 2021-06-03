"use strict";

var $ = function(id){
    return document.getElementById(id);
}
var calculateFV = function(){
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);
    var isValid = true;

    if(isNaN(investment) || investment<=0){
        $("investment").nextElementSibling.firstChild.nodeValue = "Investment must be numeric and greater than zero";
        isValid = false;
    }
    else{
        $("investment").nextElementSibling.firstChild.nodeValue = "";
    }
    if(isNaN(rate) || rate<=0){
        $("rate").nextElementSibling.firstChild.nodeValue = "Interest rate must be numeric and greater than zero";
        isValid = false;
    }
    else{
        $("rate").nextElementSibling.firstChild.nodeValue = "";
    }
    if(isNaN(years) || years<0 || years>15){
        $("years").nextElementSibling.firstChild.nodeValue = "Years must be numeric and 0 < years <15";
        isValid = false;
    }
    else{
        $("years").nextElementSibling.firstChild.nodeValue = "";
    }


    var futureValue = investment;

    if(isValid==true){
    for(var i=1; i<=years; i++){
        futureValue = futureValue + (futureValue*rate*0.01);
        futureValue.toFixed(2);
    }
    $("result").value = futureValue;
}
    
};

window.onload = function(){
    $("calculate").onclick = calculateFV;
}