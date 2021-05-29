"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

// the event handler for the click event of each h2 element
var toggle = function () {
    var h2 = this.parentElement; // this refers to the clicked h2 tag
    var div = h2.nextElementSibling;

    // toggle + and - image by adding or removing class
    if (h2.hasAttribute("class")) {
        // h2.removeAttribute("class");
        h2.className = '';
    } else {
        // h2.setAttribute("class", "minus");
        h2.className = 'minus';
    }

    // toggle div visibility
    if (div.hasAttribute("class")) {
        // div.removeAttribute("class");
        div.className = '';
    } else {
        // div.setAttribute("class", "open");
        div.className = 'open';
    }

    /*h2.classList.toggle('minus');
    div.classList.toggle('open');*/
};

window.onload = function () {
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");

    // attach event handler for each a tag
    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = toggle;
    }

    // set focus on a tag
    aElements[0].focus();
};
