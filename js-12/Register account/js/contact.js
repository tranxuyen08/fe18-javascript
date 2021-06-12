"use strict";

var registerForm;

window.onload = function() {
    registerForm = new RegisterForm();
    registerForm.resetForm();

    $("register").onclick = function() {
        if (registerForm.validateForm() ) {
            $("email-form").submit();
        }
    };

    $("reset").onclick = function() {
        registerForm.resetForm();
    };
};