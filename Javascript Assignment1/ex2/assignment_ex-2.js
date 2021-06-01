const $ = (id) => document.getElementById(id)

calculator = () => {
 
 let toan = parseFloat($('toan').value)
 let hoa = parseFloat($('hoa').value)
 let ly = parseFloat($('ly').value)
 let isValid = true
 
 if (toan == '') {
  $('toanError').innerHTML='Vui lòng nhập số điểm';
  isValid = false
 } else if (toan <= 0 || toan >10) {
  $('toanError').innerHTML='Vui lòng nhập dưới 10 điểm';
 } else if (isNaN(toan)) {
  $('toanError').innerHTML='Trường này phải là số';
 } else {
  $('toanError').innerHTML='';
 }

 if (hoa == '') {
  $('hoaError').innerHTML='Vui lòng nhập số điểm';
  isValid = false
 } else if (hoa <= 0 || hoa >10) {
  $('hoaError').innerHTML='Vui lòng nhập dưới 10 điểm';
 } else if (isNaN(hoa)) {
  $('hoaError').innerHTML='Trường này phải là số';
 } else {
  $('hoaError').innerHTML='';
 }

 if (ly == '') {
  $('lyError').innerHTML='Vui lòng nhập số điểm';
  isValid = false
 } else if (ly <= 0 || ly >10) {
  $('lyError').innerHTML='Vui lòng nhập dưới 10 điểm';
 } else if (isNaN(ly)) {
  $('lyError').innerHTML='Trường này phải là số';
 } else {
  $('lyError').innerHTML='';
 }

 if (isValid == true) {
  let rank;
  let average = (toan + hoa + ly) / 3;
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
