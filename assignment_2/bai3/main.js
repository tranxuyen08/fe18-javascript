var $ = function (id) {
  return document.getElementById(id);
};
var arrayUser = [];
var result = $('result');
var printArray = function (arr) {
  var html = '';
  for (let i = 0; i < arr.length; i++) {
    html += `${arr[i]} <br />`;
  }
  return html;
};
var sortArray = function (arr) {
  arr.sort(function (a, b) {
    return a.localeCompare(b);
  });
  var result = printArray(arr);
  return result;
};
var addUser = function (e) {
  e.preventDefault();
  var user = $('name').value;
  if (user.trim().length === 0 || !isNaN(parseInt(user.trim()))) {
    alert('Không được để trống dữ liệu hoặc không đúng kiểu chuổi!');
  } else {
    arrayUser.push(user);
    var arrayTemp = [...arrayUser];
    var output = sortArray(arrayTemp);
    result.innerHTML = output;
    $('name').value = '';
  }
};
var clearUser = function () {
  arrayUser.length = 0;
  var html = printArray(arrayUser);
  result.innerHTML = html;
  $('name').value = '';
};
window.onload = function () {
  $('add').onclick = addUser;
  $('clear').onclick = clearUser;
};
