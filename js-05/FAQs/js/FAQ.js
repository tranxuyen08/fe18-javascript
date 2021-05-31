
"use strict";

var $ = function(id) {
    return document.getElementById(id);
};
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

window.onload = function() {
    var faqs = $("faqs");
    var h2Element = faqs.getElementsByTagName("h2");
    for (var i=0; i < h2Element.length; i++) {
        h2Element[i].onclick = toggle;
    }
    h2Element[0].firstChild.focus();
};