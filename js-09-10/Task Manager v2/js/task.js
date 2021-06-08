"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var tasks = [];
var TASKS = "tasks";

var displayTaskList = function () {
  var list = "";
  if (tasks.length === 0) {
    tasks = getStorageItem(TASKS);
  }

  if (tasks.length > 0) {
    displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList);
  }
};

var addToTaskList = function () {
  var task = $("task").value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    tasks.push(capitalizeTask(task));
    setStorageItem(TASKS, tasks);
    
    displayTaskList();
    
    $("task").value = "";
  }
};

var clearTaskList = function () {
  tasks.length = 0;
  clearStorageItem(TASKS);
  $("tasks").innerHTML = "";
  $("task").focus();
};

var deleteFromTaskList = function () {
  deleteTask(tasks, this.id);
  setStorageItem(TASKS, tasks);
  displayTaskList();
  $("task").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  displayTaskList();
  $("task").focus();
};
