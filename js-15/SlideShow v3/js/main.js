"use strict";

window.onload = function() {
    var $ = function(id) {
        return document.getElementById(id);
    };
    var slides = [
        {href: "images/dusk.jpg", title: "Night on Lake"},
        {href: "images/gear.jpg", title: "All my Gear"},
        {href: "images/hero.jpg", title: "Hero of Us"},
        {href: "images/lunch.jpg", title: "Lunch Time"},
        {href: "images/plane.jpg", title: "My Plane Start"},
        {href: "images/release.jpg", title: "Release rewards"}
    ];
    
    myapp.slideshow.loadImage(slides).startSlideshow($("image"), $("caption"));
    
    $("play_pause").onclick = myapp.slideshow.pauseToggleHandler();
    $("fast").onclick = function() {
        var msg = "Current speed is ".concat(myapp.slideshow.slideSpeed, " milliseconds.\n",
        "Please enter new speed to set (must be from 200-" + myapp.slideshow.slideSpeed + ").");
        var fast = prompt(msg, 2000);
        myapp.slideshow.changeSpeed(fast).startSlideshow();
    };
    $("slow").onclick = function() {
        var msg = "Current speed is ".concat(myapp.slideshow.slideSpeed, " milliseconds.\n",
        "Please enter new speed to set (must be > " + myapp.slideshow.slideSpeed + ").");
        var slow = prompt(msg, 2000);
        myapp.slideshow.changeSpeed(slow).startSlideshow();
    };
};