"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
    var slides = [
        {href: "images/dusk.jpg", title: "Night on Lake"},
        {href: "images/gear.jpg", title: "All my Gear"},
        {href: "images/hero.jpg", title: "Hero of Us"},
        {href: "images/lunch.jpg", title: "Lunch Time"},
        {href: "images/plane.jpg", title: "My Plane Start"},
        {href: "images/release.jpg", title: "Release rewards"}
    ];
    var slideshow = createSlideshow();
    
    slideshow.loadImage(slides).startSlideshow($("image"), $("caption"));
    $("play_pause").onclick = slideshow.pauseToggleHandler();
    $("fast").onclick = slideshow.fastToggleHandler();
    $("slow").onclick = slideshow.slowToggleHandler();
};