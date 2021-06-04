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
  displayTaskList();
};
var filterTaskList = function (keyword) {
  var arr = tasks.filter(function (item) {
    return item === keyword;
  });

  return arr;
};
var filtertList = function () {
  var task = $('task').value;
  if (task === '') {
    displaySortedTaskList(tasks, $('list-task'), deleteFromTaskList);
  } else {
    var arr = filterTaskList(task);
    displaySortedTaskList(arr, $('list-task'), deleteFromTaskList);
    $('task').value = '';
  }
};
window.onload = function () {
  $('add-task').onclick = addlocal;
  $('clear-task').onclick = clearTask;
  $('toggle-sort').onclick = sortList;
  $('filter-task').onclick = filtertList;
  $('task').focus();
};
