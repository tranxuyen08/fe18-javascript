"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

// the event handler for the click event of each h2 element
var toggle = function () {
  var a = this; // this refers to the clicked a tag
  var div = a.parentNode.nextElementSibling;
var h2= a.parentNode;
  // toggle + and - image by adding or removing class
  if (h2.className == "minus") {
    h2.className= "";
   
  } else {
    h2.className="minus";
  }

  // toggle div visibility
  if (div.hasAttribute("class")) {
    div.removeAttribute("class");
  } else {
    div.setAttribute("class", "open");
  }
};

window.onload = function () {
  var faqs = $("faqs");
  var aElements = faqs.getElementsByTagName("a");
  
  // attach event handler for each a tag
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = toggle;

  }

  // set focus on first a tag's a tag
  aElements[0].firstChild.focus();
};
