var $ = function (id) {
  return document.getElementById(id);
};
var resultElement = $('result');
var arraylist = $('array');
var array = [];
function createArray(row, col) {
  var rowarr = [];
  var item;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      item = prompt('Nhập phần tử hàng ' + (i + 1) + ' cột ' + (j + 1) + ' : ');
      rowarr.push(item);
    }
    array.push(rowarr);
    rowarr = [];
  }
  return array;
}
function arrayCR() {
  var row, col;
  var result = '';
  var isCheck = true;
  do {
    row = prompt('Nhập hàng', 1);
    col = prompt('Nhập cột', 1);
    if (isNaN(row) || row === '' || isNaN(col) || col === '') {
      isCheck = false;
      break;
    } else {
      row = parseInt(row);
      col = parseInt(col);
      break;
    }
  } while (true);

  if (isCheck) {
    createArray(row, col);
  } else {
    result = 'nhập sai dữ liệu đầu vào';
  }
  return result;
}
function printArray(arr) {
  var result = '';
  var html = '';
  for (let i = 0; i < arr.length; i++) {
    result = arr[i].join(' - ');
    html += `${result} <br />`;
  }
  return html;
}
function sumArray(arr) {
  var result = 0;
  var temparr;
  for (let i = 0; i < arr.length; i++) {
    temparr = arr[i];
    for (let j = 0; j < temparr.length; j++) {
      result += parseInt(temparr[j]);
    }
  }
  return result;
}
function search(arr, keyword) {
  var result = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(keyword)) {
      result = true;
      break;
    }
  }
  return result;
}
function searchArray(arr) {
  var keyword;
  var result = '';
  var isCheck = true;
  do {
    keyword = prompt('Nhập số cần tìm kiếm', 1);
    if (isNaN(keyword) || keyword === '') {
      isCheck = false;
      break;
    } else {
      break;
    }
  } while (true);

  if (isCheck) {
    if (search(arr, keyword)) {
      result = keyword + ' có trong mảng';
    } else {
      result = keyword + ' không có trong mảng';
    }
  } else {
    result = 'nhập sai dữ liệu đầu vào';
  }
  return result;
}
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort(function (a, b) {
      return a - b;
    });
  }
  var result = printArray(arr);
  return result;
}
function menu() {
  var keyword;
  var isCheck = true;
  do {
    keyword = prompt('Nhập lựa chọn muốn thực hiện', 1);
    if (isNaN(keyword) || keyword === '') {
      isCheck = false;
    } else {
      keyword = parseInt(keyword);
    }
  } while (keyword <= 0 || keyword >= 6);

  if (isCheck) {
    switch (keyword) {
      case 1:
        array = [];
        arrayCR();
        break;
      case 2:
        arraylist.innerHTML = printArray(array);
        resultElement.innerHTML = printArray(array);
        break;
      case 3:
        arraylist.innerHTML = printArray(array);
        resultElement.innerText = searchArray(array);
        break;
      case 4:
        arraylist.innerHTML = printArray(array);
        resultElement.innerText = sumArray(array);
        break;
      case 5:
        arraylist.innerHTML = printArray(array);
        resultElement.innerHTML = sortArray(array);
        break;
      default:
        break;
    }
  } else {
    resultElement.innerText = 'Nhập sai dự liệu đầu vào';
  }
}
window.onload = function () {
  $('choice').onclick = menu;
};
