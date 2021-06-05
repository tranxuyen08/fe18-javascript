"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

// determine Discount percent
function discountPercent(customerType, subtotal) {
    var percentD = 0;
    switch (customerType) {
        case "1": {
            if (subtotal < 100) {
                percentD = 0;
            } else if (subtotal >= 100 && subtotal < 250) {
                percentD = 10;
            } else if (subtotal >= 250 && subtotal < 500) {
                percentD = 25;
            } else if (subtotal > 500) {
                percentD = 30;
            }
            break;
        }            
        case "2": {
            percentD = 35;
            break;
        }            
        case "3": {
            percentD = (subtotal < 500) ? 40 : 50;
            break;
        }            
    }
    return percentD;
};

// Main function
function validateEntry() {
    var entry1_ok = false;
    var entry2_ok = false;
    var customerType = $("type").value;
    var subtotal = parseFloat($("subtotal").value);

    // validate 2 input
    if (customerType == "") {
        $("type-error").firstChild.nodeValue = "Please select an option below";
    } else {
        $("type-error").firstChild.nodeValue = "";
        entry1_ok = true;
    }

    if (subtotal < 0 || isNaN(subtotal)) {
        $("subtotal-error").firstChild.nodeValue = "Please enter the number greater than 0";
    } else {
        $("subtotal-error").firstChild.nodeValue = "";
        entry2_ok = true;
    }

    var percentD, amount, total;
        percentD = discountPercent(customerType, subtotal);
        amount = (subtotal * percentD)/100;
        total = subtotal - amount;

    // call the main function
    if ((entry1_ok && entry2_ok) == true) {        
        $("percent").value = percentD.toFixed(1);
        $("amount").value = amount.toFixed(1);
        $("total").value = total.toFixed(1);

        $("type").focus();
    }
}

// random entry
function randomEntry() {
    var random;
    var max = 500000;
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    $("subtotal").value = random;
}

// clear all entry
function clearValue() {
    $("form").reset();
    $("type-error").firstChild.nodeValue = '*';
    $("subtotal-error").firstChild.nodeValue = '*';
    $("type").focus();
};

window.onload = function() {
    $("calculate").onclick = validateEntry;
    $("random-value").onclick = randomEntry;
    $("clear-entries").onclick = clearValue;
    $("type").focus();
};