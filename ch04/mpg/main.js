var $ = function (id) {
  return document.getElementById(id);
};

var calculatormpg = function () {
  // get value
  var miles = $("miles").value;
  var gallons = $("gallons").value;
  var isValid = true;

  // data validation
  if (miles == "") {
    $("milesError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (miles <= 0) {
      $("milesError").firstChild.nodeValue = "Miles must be greater than Zero";
      isValid = false;
    } else if (isNaN(miles)) {
      $("milesError").firstChild.nodeValue = "Miles must be Numeric";
      isValid = false;
    } else {
      $("milesError").firstChild.nodeValue = "";
    }
  }

  if (gallons == "") {
    $("gallonError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (gallons <= 0) {
      $("gallonError").firstChild.nodeValue =
        "Gallons must be greater than Zero";
      isValid = false;
    } else if (isNaN(gallons)) {
      $("gallonError").firstChild.nodeValue = "Gallons must be Numeric";
      isValid = false;
    } else {
      $("gallonError").firstChild.nodeValue = "";
    }
  }

  if (isValid == true) {
    // $("mpgform").submit();
    var mpg = miles / gallons;
    mpg = parseInt(mpg);
    $("mpg").value = mpg;
  }
};

window.onload = function () {
  $("calculator").onclick = calculatormpg;
};
