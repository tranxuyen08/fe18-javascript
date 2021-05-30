var $ = function (id) {
  return document.getElementById(id);
};

var calculator = function () {
  // get value
  var soa = parseFloat($("soa").value);
  var sob = parseFloat($("sob").value);
  var isValid = true;

  // data validation
  if (isNaN(soa)) {
    $("soaError").firstChild.nodeValue = "phải là số";
    isValid = false;
  } else {
    $("soaError").firstChild.nodeValue = "";
  }

  if (isNaN(sob)) {
    $("sobError").firstChild.nodeValue = "phải là số";
    isValid = false;
  } else {
    $("sobError").firstChild.nodeValue = "";
  }

  if (isValid == true) {
    var result;
    if (soa == 0) {
      if (sob == 0) {
        result = "Phuong trinh co vo so nghiem";
      } else {
        result = "Phuong trinh vo nghiem";
      }
    } else {
      result = -sob / soa;
      result = parseFloat(result).toFixed(2);
    }
    console.log(result);
    $("result").value = result;
  }
};

window.onload = function () {
  $("calculator").onclick = calculator;
};
