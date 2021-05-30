var $ = function (id) {
  return document.getElementById(id);
};

var calculator = function () {
  // get value
  var toan = parseFloat($("toan").value);
  var ly = parseFloat($("ly").value);
  var hoa = parseFloat($("hoa").value);
  var isValid = true;

  // data validation
  if (toan == "") {
    $("toanError").firstChild.nodeValue = "Không được để trống";
    isValid = false;
  } else {
    if (toan <= 0 || toan > 10) {
      $("toanError").firstChild.nodeValue = "Điểm Toán từ 0->10đ";
      isValid = false;
    } else if (isNaN(toan)) {
      $("toanError").firstChild.nodeValue = "Điểm Toán phải là số";
      isValid = false;
    } else {
      $("toanError").firstChild.nodeValue = "";
    }
  }

  if (ly == "") {
    $("lyError").firstChild.nodeValue = "Không được để trống";
    isValid = false;
  } else {
    if (ly <= 0 || ly > 10) {
      $("lyError").firstChild.nodeValue = "Điểm Lý từ 0->10đ";
      isValid = false;
    } else if (isNaN(ly)) {
      $("lyError").firstChild.nodeValue = "Điểm Lý phải là số";
      isValid = false;
    } else {
      $("lyError").firstChild.nodeValue = "";
    }
  }

  if (hoa == "") {
    $("hoaError").firstChild.nodeValue = "Không được để trống";
    isValid = false;
  } else {
    if (hoa <= 0 || hoa > 10) {
      $("hoaError").firstChild.nodeValue = "Điểm Hoá từ 0->10đ";
      isValid = false;
    } else if (isNaN(hoa)) {
      $("hoaError").firstChild.nodeValue = "Điểm Hoá phải là số";
      isValid = false;
    } else {
      $("hoaError").firstChild.nodeValue = "";
    }
  }
  if (isValid == true) {
    var rank;
    var average = (toan + hoa + ly) / 3;
    average = parseFloat(average);
    if (average >= 8) {
      rank = "A";
    } else if (average >= 6.5) {
      rank = "B";
    } else if (average >= 5) {
      rank = "C";
    } else {
      rank = "D";
    }
    $("average").value = average.toFixed(2);
    $("rank").value = rank;
  }
};

window.onload = function () {
  $("calculator").onclick = calculator;
};
