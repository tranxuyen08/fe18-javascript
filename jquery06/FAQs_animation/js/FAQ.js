"use strict";

$(function() {
    $("#faqs h2").click(function() {
        $(this).toggleClass("minus");
        // if ($(this).attr("class") != "minus") {
        //     $(this).next().fadeOut(650);
        // } else {
        //     $(this).next().slideDown(650);
        // }
        $(this).next().slideToggle(650);
    });
    $("#faqs h1").animate(
        {
            fontSize: "200%",
            left: 0
        }, 1500
    );
});