var $ = function (id) {
  return document.getElementById(id);
};
var resultElement = $('result');
var arraylist = $('array');
var arr = new Array(10);
for (var i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1;
}

function printArray(arr) {
  var result = '';
  result = arr.join(' - ');
  return result;
}
function searchArray(arr, keyword) {
  var result;
  if (arr.includes(keyword)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
function search() {
  var keyword;
  var result = '';
  var isCheck = true;
  do {
    keyword = prompt('Nhập số cần tìm kiếm', 1);
    if (isNaN(keyword) || keyword === '') {
      isCheck = false;
      break;
    } else {
      keyword = parseInt(keyword);
      break;
    }
  } while (true);

  if (isCheck) {
    if (searchArray(arr, keyword)) {
      result = keyword + ' có trong mảng';
    } else {
      result = keyword + ' không có trong mảng';
    }
  } else {
    result = 'nhập sai dữ liệu đầu vào';
  }
  return result;
}
function maxArray(arr) {
  var maxTemp = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxTemp) {
      maxTemp = arr[i];
    }
  }
  return maxTemp;
}
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return 'Tổng của mảng là : ' + sum;
}
function sortArray(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
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
        arraylist.innerText = printArray(arr);
        resultElement.innerText = printArray(arr);
        break;
      case 2:
        arraylist.innerText = printArray(arr);
        resultElement.innerText = search();
        break;
      case 3:
        arraylist.innerText = printArray(arr);
        resultElement.innerText = maxArray(arr);
        break;
      case 4:
        arraylist.innerText = printArray(arr);
        resultElement.innerText = sumArray(arr);
        break;
      case 5:
        arraylist.innerText = printArray(arr);
        resultElement.innerText = sortArray(arr);
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
