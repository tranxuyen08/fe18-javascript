"use strict";

function $(id) {
  return document.getElementById(id);
}

var processEntry = function () {
  var miles = parseFloat($("miles").value);
  var gallons = parseFloat($("gallons").value);
  // isNaN(gallons

  if (isNaN(miles)) {
    // alert("One or both entries are invalid");
    $("miles_vali").firstChild.nodeValue = 'miles must be numeric';
  } else if (miles<=0){
    $("miles_vali").firstChild.nodeValue = 'miles must be greater than zero';
  }
  if(isNaN(gallons)){
    $("gallons_vali").firstChild.nodeValue = 'gallons must be numeric';
  }
  else if(gallons<=0)
  {
    $("gallons_vali").firstChild.nodeValue = 'gallons must be greater than zero';
  }
    if(!isNaN(miles) && !isNaN(gallons) && gallons>0 && miles>0){
      calculate(miles,gallons)
    }
};

var calculate = function (miles, gallons) {
  var mpg = miles / gallons;
  mpg = mpg.toFixed(1);
  $("mpg_result").value = mpg;
};
function clearEntry(){
  $("gallons_vali").firstChild.nodeValue = '*';
  $("miles_vali").firstChild.nodeValue = '*';
  $("miles").value='';
  $("gallons").value=''
}
window.onload = function () {
  $("calculate").onclick = processEntry;
  $("clear").onclick = clearEntry;
  $("miles").focus();
};
