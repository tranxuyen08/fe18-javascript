"use strict";

var $ = function (id) {
    return document.getElementById(id);
};
var log = function (e) {
    console.log(e);
};
// the event handler for the click event of each h2 element
var toggle = function (ev) {
    log(ev);
    ev.preventDefault();
    var h2 = this.parentElement; // this refers to the clicked h2 tag
    var div = h2.nextElementSibling;
    h2.classList.toggle('minus');
    div.classList.toggle('open');
};

window.onload = function () {
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");
    for (var i = 0; i < aElements.length; i++) {
        aElements[i].addEventListener('click', toggle);
        aElements[i].addEventListener('mouseover', log);
    }
    aElements[0].focus();
};
