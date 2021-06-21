"use strict";

$(function() {
    
    $("#image_list img").each(function() {
        // preload images in list
        var oldURL = $(this).attr("src");
        var newURL = $(this).attr("id");

        var hoverImage = new Image();
        hoverImage.src = newURL;

        $(this).hover(  // hover method has two callbacks: hover-enter and hover-out
            function() {
                $(this).attr("src", newURL); // when hover-enter picture
            },
            function() {
                $(this).attr("src", oldURL); // when hover-out picture
            }
        ); // end hover
    }); // end each    
}); // end ready