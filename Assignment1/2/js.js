var $ = function (id) {
  return document.getElementById(id);
};
var calculatorAverage = function () {
  //  get value

  var marth = parseFloat($("marth").value);
  var physics = parseFloat($("physics").value);
  var chemistry = parseFloat($("chemistry").value);
  var isValid = true;
  // data validation
  if (marth == "") {
    $("marthError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (marth <= 0 || marth > 10) {
      $("marthError").firstChild.nodeValue = "Marth 0=>10 ";
      isValid = false;
    } else if (isNaN(marth)) {
      $("marthError").firstChild.nodeValue = "Marth must be Numeric";
      isValid = false;
    } else {
      $("marthError").firstChild.nodeValue = "";
    }
  }

  if (physics == "") {
    $("physicsError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (physics <= 0 || physics > 10) {
      $("physicsError").firstChild.nodeValue = "Physics 0=>10";
      isValid = false;
    } else if (isNaN(physics)) {
      $("physicsError").firstChild.nodeValue = "Physics must be Numeric";
      isValid = false;
    } else {
      $("physicsError").firstChild.nodeValue = "";
    }
  }
  if (chemistry == "") {
    $("chemistryError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (chemistry <= 0 || chemistry > 10) {
      $("chemistryError").firstChild.nodeValue = "Chemistry 0=>10";
      isValid = false;
    } else if (isNaN(physics)) {
      $("chemistryError").firstChild.nodeValue = "Chemistry must be Numeric";
      isValid = false;
    } else {
      $("chemistryError").firstChild.nodeValue = "";
    }
  }
  if (isValid == true) {
    var rank;
    var average = (marth + physics + chemistry) / 3;
    average = parseFloat(average);
    $("average").value = average.toFixed(2);

    if (average >= 8) {
      rank = "A";
    } else if (average >= 6.5) {
      rank = "B";
    } else if (average >= 5) {
      rank = "C";
    } else {
      rank = "D";
    }

    $("rank").value = rank;
  }
};
window.onload = function () {
  $("calculator").onclick = calculatorAverage;
};
