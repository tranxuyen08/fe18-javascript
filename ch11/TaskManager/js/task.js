"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
tasklist.deleteClickHandler=function(){
  tasklist.delete(this.id).save().display();
  $("task").focus();
}
tasklist.editClickHandler=function(){
  var text = prompt('Enter new task:');
  tasklist.edit(this.title, text).save().display();
  $("task").focus();
}
var displayTaskList = function () {
  tasklist.displayDiv=$('tasks');
  tasklist.load().display();
 
};

var addToTaskList = function () {
  var task = $("task").value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    tasklist.add(task).save();
    displayTaskList();
    // clear task list text
    $("task").value = "";
  }
};

var clearTaskList = function () {
  tasklist.clear();
};


window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  // display tasks string and set focus on task text box
  displayTaskList();
  $("task").focus();
};
