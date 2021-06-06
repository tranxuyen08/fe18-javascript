"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var caculate = function() {
    var number = $("number").value;
    number = parseFloat(number);


    if (number == "") {
        $("NumberError").firstChild.nodeValue = "This field is required";

    } else {
        if (number <= 1) {
            $("NumberError").firstChild.nodeValue = "Number 1 not prime";
            alert("Number 1 not prime");
        } else if (isNaN(number) || number < 2) {
            $("NumberError").firstChild.nodeValue = "Number must be Numeric";
        } else {
            $("NumberError").firstChild.nodeValue = "";
        }
        pnumbers(number);
    }

};
var Prime = function(number) {
    if (number % 2 == 0 && number != 2) {
        return false;
    }

    for (var i = 3; i <= Math.sqrt(number); i = i + 2) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
};
var pnumbers = function(number) {
    var result = "";
    var count = 0;
    for (var i = 2; i <= number; i = i + 1) {
        if (Prime(i)) {
            result = result + i + "  ";
            count = count + 1;
        }
    }
    $("prime").value = count;
    $("pnumbers").value = result;
}
window.onload = function() {
    $("calculate").onclick = caculate;
};