var $ = function (id) {
  return document.getElementById(id);
};

var calculator = function () {
  // get value
  var soa = parseFloat($("soa").value);
  var sob = parseFloat($("sob").value);
  var soc = parseFloat($("soc").value);
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
  if (isNaN(soc)) {
    $("socError").firstChild.nodeValue = "phải là số";
    isValid = false;
  } else {
    $("socError").firstChild.nodeValue = "";
  }
  if (isValid == true) {
    var result;
    var delta = sob * sob - 4 * soa * soc;
    if (delta < 0) {
      result = "Phương trình vô nghiệm";
    } else if (delta == 0) {
      result = -sob / (2 * soa);
      result = "Phương trình có nghiệm kép X1 = " + result + " X2 = " + result;
    } else {
      delta = Math.sqrt(delta);
      result =
        "Phương trình có 2 nghiệm phân biệt X1 = " +
        (-sob + delta) / (2 * soa) +
        " X2 = " +
        (-sob - delta) / (2 * soa);
    }
    console.log(result);
    $("result").textContent = result;
  }
};

window.onload = function () {
  $("calculator").onclick = calculator;
};
