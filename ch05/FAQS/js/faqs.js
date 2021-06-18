"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

// the event handler for the click event of each h2 element
var toggle = function () {
  var a = this; // this refers to the clicked h2 tag
  var h2 = a.parentNode;
  var div = h2.nextElementSibling;

  // toggle + and - image by adding or removing class
  if (h2.hasAttribute("class")) {
    // h2.removeAttribute("class");
    h2.className="";
  } else {
    // h2.setAttribute("class", "minus");
    h2.className="minus";
  }

  // toggle div visibility
  if (div.hasAttribute("class")) {
    // div.removeAttribute("class");
    div.className="";
  } else {
    // div.setAttribute("class", "open");
    div.className="open";
  }
};

window.onload = function () {
  var faqs = $("faqs");
  var aElements = faqs.getElementsByTagName("a");

  // attach event handler for each h2 tag
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = toggle;
  }

  // set focus on first h2 tag's a tag
  h2Elements[0].firstChild.focus();
};
