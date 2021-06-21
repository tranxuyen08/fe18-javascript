"use strict";

$(function() {
    // preload images in list
    $("#image_list a").each(function() {
        var activeImage = new Image();
        activeImage.src = $(this).attr("href");
    }); // end load image
    $("#image_list a").click(function(evt) {
        var imageShow = $(this).attr("href");
        $("#image").attr("src", imageShow);

        var caption = $(this).attr("title");
        $("#caption").text(caption);

        evt.preventDefault();
    }); // end click image
    $("li:first-child a").focus();
});