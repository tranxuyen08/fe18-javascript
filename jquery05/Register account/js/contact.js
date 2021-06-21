"use strict";

$(function() { // Object ready
    var email = $("#email").val();
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var zipcode = $("#zipcode").val();
    var phone = $("#phone").val();
    var card_number = $("#card_number").val();
    var date = $("#date").val();

    $("#register").click(function() {
        
        var isValid = true;
        //validate email
        if (email === "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        //validate password
        if (password === "") {
            $("#password").next().text("This field is required.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        //validate repassword
        if (repassword === "") {
            $("#repassword").next().text("This field is required.");
            isValid = false;
        } else if (repassword !== password) {
            $("#repassword").next().text("This field is not matched.");
            isValid = false;
        } else {
            $("#repassword").next().text("");
        }
        //validate first name
        if (first_name === "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        //validate last name
        if (last_name === "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        //validate zipcode
        if (zipcode === "") {
            $("#zipcode").next().text("This field is required.");
            isValid = false;
        } else {
            $("#zipcode").next().text("");
        }
        //validate phone
        if (phone === "") {
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        //validate card number
        if (card_number === "") {
            $("#card_number").next().text("This field is required.");
            isValid = false;
        } else {
            $("#card_number").next().text("");
        }
        //validate date
        if (date === "") {
            $("#date").next().text("This field is required.");
            isValid = false;
        } else {
            $("#date").next().text("");
        }

        // submit form
        if (isValid) {
            $("#email_form").submit();
        }
        $("#email").focus();
    }); // end click register
    $("#reset").click(function() {
        $("#email_form").trigger("reset");
        $("input").next().text("");
        $("#email").focus();
    }); // end click reset
});