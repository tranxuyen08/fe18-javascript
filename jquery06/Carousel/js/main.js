"use strict";

$(function() {
    var slider = $("#book_list");
    var leftSide, newLeftSide;
    // click right button
    $("#right").click(function() {
        leftSide = parseInt(slider.css("left"));
        if ((leftSide - 300) <= -900) {
            newLeftSide = 0;
        } else {
            newLeftSide = leftSide - 300;
        }

        slider.animate({left: newLeftSide}, 800);
    });

    $("#left").click(function() {
        leftSide = parseInt(slider.css("left"));
        if (leftSide < 0) {
            newLeftSide = leftSide + 300;
        } else {
            newLeftSide = 0;
        }

        slider.animate({left: newLeftSide}, 800);
    });
});