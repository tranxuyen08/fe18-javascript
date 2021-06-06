'use strict';
var $ = function (id) {
  return document.getElementById(id);
};
var taskName = 'task';
var tasks = [];
var displayTaskList = function () {
  if (tasks.length === 0) {
    // get in storage
    tasks = getStorageItem(taskName);
  }
  // sort and display tasks
  if (tasks.length >= 0) {
    displaySortedTaskList(tasks, $('list-task'), deleteFromTaskList);
  }
};
function addlocal() {
  var task = $('task').value;
  if (task === '') {
    alert('please enter value!');
  } else {
    tasks.push(task);
    setStorageItem(taskName, tasks);
    // var tasklocal = tasks.join('|');
    // localStorage.setItem('task', tasklocal);
    // showlocal();
    displayTaskList();
    $('task').value = '';
  }
}
function clearTask() {
  clearStorageItem(taskName);
  tasks.length = 0;
  displaySortedTaskList(tasks, $('list-task'), deleteFromTaskList);
}
var deleteFromTaskList = function () {
  // remove item out of tasks
  deleteTask(tasks, this.id); // this => clicked link
  // update storage
  setStorageItem(taskName, tasks);
  // re-display tasks
  displayTaskList();
  $('task').focus();
};

// function showlocal() {
//   var html = '';
//   if (tasks.length === 0) {
//     $('list-task').value = '';
//   }
//   if (tasks.length > 0) {
//     var getlocal = localStorage.getItem('task');
//     var arrlocal = getlocal.split('|');
//     for (var i in arrlocal) {
//       html += '<p>';
//       html += `<a href='#' id="${i}"><i class="far fa-trash-alt"></i></a>`;
//       html += `<a href='#' id="${i}"><i class="fas fa-edit"></i></a>`;
//       html += arrlocal[i];
//       html += '</p>';
//     }
//     // var display = arrlocal.join('\n');
//     $('list-task').innerHTML = html;
//   }
// }
var sortList = function () {
  sortTaskList(tasks);
  setStorageItem(taskName, tasks);
  // re-display tasks
  displayTaskList();
  $('task').focus();
};
var filterTaskList = function (keyword) {
  var arr = tasks.filter(function (item) {
    return (
      item.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1
    );
    // item.trim().toLowerCase() === keyword.trim().toLowerCase()
  });
  return arr;
};
var filtertList = function () {
  var task = $('task').value;
  if (task === '') {
    displaySortedTaskList(tasks, $('list-task'), deleteFromTaskList);
  } else {
    var arr = filterTaskList(task);
    if (arr.length > 0) {
      displaySortedTaskList(arr, $('list-task'), deleteFromTaskList);
      $('task').value = '';
    } else {
      $(
        'list-task'
      ).innerHTML = `<p>Không tìm thấy ${task} (Nhận lại nút filter task để show toàn bộ task)</p>`;
      $('task').value = '';
    }
  }
};
var deletaTask = function () {
  var taskID = prompt('Nhập id task cần xoá! (ex: 1,2,3,4...)');
  if (taskID === '') {
    alert('please enter value!');
  } else {
    if (taskID <= tasks.length - 1 && taskID >= 0) {
      deleteTask(tasks, taskID);
      // update storage
      setStorageItem(taskName, tasks);
      // re-display tasks
      displayTaskList();
      $('task').focus();
    } else {
      alert('Task ID không tìm thấy');
    }
  }
};
function setName() {
  var text = prompt('Nhập name cần sửa!');
  if (text) {
    sessionStorage.setItem('name', text);
    let data = sessionStorage.getItem('name');
    $('name').innerText = data;
  }
}

window.onload = function () {
  // let data = sessionStorage.getItem('name');
  // if (data) {
  //   $('name').innerText = data;
  // }
  $('add-task').onclick = addlocal;
  $('clear-task').onclick = clearTask;
  $('toggle-sort').onclick = sortList;
  $('delete-task').onclick = deletaTask;
  $('filter-task').onclick = filtertList;
  $('set-name').onclick = setName;
  $('task').focus();
};
