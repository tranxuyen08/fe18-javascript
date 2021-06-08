"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var tasks = [];

var displayTaskList = function () {
  var list = "";
  if (tasks.length === 0) {
    var storage = localStorage.tasks || "";
    if (storage.length > 0) {
      tasks = storage.split("|");
    }
  }

  if (tasks.length > 0) {
    tasks.sort();
    list = tasks.join("\n");
  }

  $("task_list").value = list;
  $("task").focus();
};

var addToTaskList = function () {
  var task = $("task").value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    tasks.push(task);
    localStorage.tasks = tasks.join("|");

    $("task").value = "";
    displayTaskList();
  }
};

var clearTaskList = function () {
  tasks.length = 0;
  localStorage.removeItem("tasks");
  $("task_list").value = "";
  $("task").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  displayTaskList();
};
