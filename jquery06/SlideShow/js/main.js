"use strict";

$(function() {
    var image, count = 0, cache = [];
    // preload image list
    $("#image_list img").each(function() {
        image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        cache[count] = image;
        count++;
    });
    // slide start
    count = 0;
    var nextImage;
    function runSlide() {
        $("#image").fadeOut(600, function() {
            count = (count + 1) % cache.length;
            nextImage = cache[count];
            $("#image").attr("src", nextImage.src).fadeIn(600);
            $("#caption").text(nextImage.title).fadeIn(600);
        }); // end callback function
        $("#caption").fadeOut(600);
    }; // end runSlide

    // stop slide
    var timer = setInterval(runSlide, 2500);
    $("#image").click(function() {
        if (timer != null) {
            clearInterval(timer);
            timer = null;
        } else {
            timer = setInterval(runSlide, 2500);
        }
    });
}); // end ready