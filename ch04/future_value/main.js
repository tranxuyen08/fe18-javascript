var $ = function (id) {
  return document.getElementById(id);
};

var calculatormpg = function () {
  // get value
  var investment = $("investment").value;
  investment = parseFloat(investment);
  var rate = $("rate").value;
  rate = parseFloat(rate);
  var year = $("year").value;
  $("futurevalue").value = "";
  var isValid = true;

  // data validation
  if (investment == "") {
    $("investmentError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (investment <= 0) {
      $("investmentError").firstChild.nodeValue =
        "Investment must be greater than Zero";
      isValid = false;
    } else if (isNaN(investment)) {
      $("investmentError").firstChild.nodeValue = "Investment must be Numeric";
      isValid = false;
    } else {
      $("investmentError").firstChild.nodeValue = "";
    }
  }

  if (rate == "") {
    $("rateError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (rate <= 0) {
      $("rateError").firstChild.nodeValue = "Rate must be greater than Zero";
      isValid = false;
    } else if (isNaN(rate)) {
      $("rateError").firstChild.nodeValue = "Rate must be Numeric";
      isValid = false;
    } else {
      $("rateError").firstChild.nodeValue = "";
    }
  }

  if (year == "") {
    $("yearError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (year <= 0) {
      $("yearError").firstChild.nodeValue = "Year must be greater than Zero";
      isValid = false;
    } else if (isNaN(year)) {
      $("yearError").firstChild.nodeValue = "Year must be Numeric";
      isValid = false;
    } else if (Number.isInteger(year)) {
      $("yearError").firstChild.nodeValue = "Year must be Integer";
      isValid = false;
    } else {
      $("yearError").firstChild.nodeValue = "";
    }
  }

  if (isValid == true) {
    var FutureValue;
    var Rateper = rate * 0.01;
    FutureValue = investment;
    for (var i = 1; i <= year; i++) {
      FutureValue += FutureValue * Rateper;
    }
    $("futurevalue").value = FutureValue.toFixed(2);
  }
};

window.onload = function () {
  $("calculator").onclick = calculatormpg;
};
