"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

// main function when click
function validateEntry() {
    var isValid = true;

    // get values for entries
    var email = $("email").value;
    var phone = $("mobile-phone").value;
    var country = $("country").value;
    var contact_me = "text";
    if ($("contact-email").checked) { contact_me = "email"; }
    if ($("contact-no").checked) { contact_me = "none"; }
    var term = $("term").checked;

    // validate all entries
    if (email == "") {
        $("email").nextElementSibling.firstChild.nodeValue = "Yêu cầu nhập thông tin email";
        isValid = false;
    } else {
        $("email").nextElementSibling.firstChild.nodeValue = "";
    }

    if (phone == "") {
        $("mobile-phone").nextElementSibling.firstChild.nodeValue = "Yêu cầu nhập thông tin số điện thoại";
        isValid = false;
    } else {
        $("mobile-phone").nextElementSibling.firstChild.nodeValue = "";
    }

    if (country == "") {
        $("country").nextElementSibling.firstChild.nodeValue = "Yêu cầu chọn quốc gia";
        isValid = false;
    } else {
        $("country").nextElementSibling.firstChild.nodeValue = "";
    }

    if (term == false) {
        $("term").nextElementSibling.firstChild.nodeValue = "Yêu cầu tích vào ô này";
        isValid = false;
    } else {
        $("term").nextElementSibling.firstChild.nodeValue = "";
    }

    // submit form
    if (isValid == true) {
        $("email-form").submit();
    }
};

// clear all entries
function clearValue() {
    $("email-form").reset();
    $("email-error").firstChild.nodeValue = '*';
    $("mobile-phone-error").firstChild.nodeValue = '*';
    $("country-error").firstChild.nodeValue = '*';
    $("term-error").firstChild.nodeValue = '*';
    $("email").focus();
};

window.onload = function() {
    $("register").onclick = validateEntry;
    $("reset").onclick = clearValue;
    $("email").focus();
};