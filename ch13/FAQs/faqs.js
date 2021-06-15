'use strict';

var $ = function (id) {
  return document.getElementById(id);
};

var log = function (e) {
  console.log(e);
};

// the event handler for the click event of each h2 element
var toggle = function () {
  var h4 = this; // this refers to the clicked h2 tag
  var div = h4.nextElementSibling;

  // toggle + and - image by adding or removing class
  if (h4.querySelector('i').getAttribute('class') === 'fas fa-plus') {
    this.querySelector('i').setAttribute('class', 'fas fa-angle-down');
  } else {
    this.querySelector('i').setAttribute('class', 'fas fa-plus');
  }

  // toggle div visibility
  if (div.hasAttribute('class')) {
    div.removeAttribute('class');
  } else {
    div.setAttribute('class', 'active');
  }
};

window.onload = function () {
  var h4Elements = document.getElementsByTagName('h4');
  // attach event handler for each h2 tag
  for (var i = 0; i < h4Elements.length; i++) {
    // h2Elements[i].onclick = toggle;
    var h4 = h4Elements[i];
    var a = h4Elements[i].querySelector('a');
    evt.attach(h4, 'click', toggle);
    // cancel default action of the <a> tag
    evt.attach(a, 'click', evt.preventDefault);
    // log events of a tag
    evt.attach(a, 'click', log);
    evt.attach(a, 'focus', log);
    evt.attach(a, 'mouseover', log);
  }
  h4Elements[0].querySelector('a').focus();
};
