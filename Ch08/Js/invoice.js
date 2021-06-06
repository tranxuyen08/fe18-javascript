"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var calculateDiscount = function(customer, subtotal) {
    var discount = 0;
    switch (customer) {
        case "r":
            {
                if (subtotal < 100) {
                    discount = 0.1;
                } else if (subtotal >= 100 && subtotal < 250) {
                    discount = 0.2;
                } else if (subtotal >= 250 && subtotal < 500) {
                    discount = 0.25;
                } else if (subtotal >= 500 && subtotal < 1000) {
                    discount = 0.3;
                } else if (subtotal >= 1000) {
                    discount = 0.4;
                }
                break;
            }
        case "l":
            {
                discount = 0.3;
                break;
            }
        case "h":
            {
                discount = subtotal < 500 ? 0.4 : 0.5;
                break;
            }
        case "e":
            {
                discount = 0.5;
                break;
            }
    }
    return discount;
};

var processEntries = function() {
    // get value
    var type = $("type").value;
    var subtotal = parseFloat($("subtotal").value);
    if (isNaN(subtotal)) {
        alert("Please enter valid subtotal value!");
        return;
    }
    var discount = calculateDiscount(type, subtotal);

    // set value for UI
    $("subtotal").value = subtotal.toFixed(2);
    $("percent").value = (discount * 100).toFixed(2);
    $("amount").value = (subtotal * discount).toFixed(2);
    $("total").value = (subtotal - subtotal * discount).toFixed(2);

    $("type").focus();
};

window.onload = function() {
    //1. attach event handler for Calculate button
    $("calculate").onclick = processEntries;
    $("type").focus();
};