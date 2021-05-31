"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

// the event handler for the click event of each h2 element
var toggle = function() {
    var h2 = this.parentElement;
    var div = h2.nextElementSibling;


    if (h2.hasAttribute("class")) {

        h2.className = '';
    } else {

        h2.className = 'minus';
    }


    if (div.hasAttribute("class")) {

        div.className = '';
    } else {

        div.className = 'open';
    }


};

window.onload = function() {
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");

    // attach event handler for each a tag
    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = toggle;
    }

    // set focus on a tag
    aElements[0].firstChild.focus();
};