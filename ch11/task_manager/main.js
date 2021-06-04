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
    displaySortedTaskList(
      tasks,
      $('list-task'),
      deleteFromTaskList,
      editTaskManager
    );
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
  displaySortedTaskList(
    tasks,
    $('list-task'),
    deleteFromTaskList,
    editTaskManager
  );
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
var sortList = function () {
  sortTaskList(tasks);
  displayTaskList();
};
var filterTaskList = function (keyword) {
  var arr = tasks.filter(function (item) {
    return item.trim().toLowerCase() === keyword.trim().toLowerCase();
  });
  return arr;
};
var filtertList = function () {
  var task = $('task').value;
  if (task === '') {
    displaySortedTaskList(
      tasks,
      $('list-task'),
      deleteFromTaskList,
      editTaskManager
    );
  } else {
    var arr = filterTaskList(task);
    if (arr.length > 0) {
      displaySortedTaskList(
        arr,
        $('list-task'),
        deleteFromTaskList,
        editTaskManager
      );
      $('task').value = '';
    } else {
      $(
        'list-task'
      ).innerHTML = `<p>Không tìm thấy ${task} (Nhận lại nút filter task để show toàn bộ task)</p>`;
      $('task').value = '';
    }
  }
};
var editTaskManager = function () {
  var tasktext = prompt('Nhập nội dung: ');
  if (tasktext === '') {
    alert('please enter value!');
  } else {
    editTask(tasks, this.id, tasktext);
    // update storage
    setStorageItem(taskName, tasks);
    // re-display tasks
    displayTaskList();
    $('task').focus();
  }
};
window.onload = function () {
  $('add-task').onclick = addlocal;
  $('clear-task').onclick = clearTask;
  $('task').focus();
};
