"use strict";
// giu nguyen nhu cu
var toggle = function() {
    var h2 = this;
    var div = h2.nextElementSibling;

    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }

    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
};

// add new
var log = function(e) {
    console.log(e);
};

window.onload = function() {
    var faqs = $("faqs");
    var h2Element = faqs.getElementsByTagName("h2");

    for (var i=0; i < h2Element.length; i++) {
        var h2 = h2Element[i];
        var a = h2.firstChild;

        events.attach(h2, "click", toggle);
        events.attach(a, "click", events.preventDefault);
        // events.attach(a, "click", log);
        // events.attach(a, "focus", log);
        // events.attach(a, "mouseover", log);
        // events.attach(a, "dbclick", log);
    }

    h2Element[0].firstChild.focus();
};