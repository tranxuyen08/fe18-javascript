"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var addToTaskList = function() {
    var taskTextbox = $("task");
    // var newTask = new Task(taskTextbox.value);
    var newTask = getTask(taskTextbox.value)
    if (newTask.isValid()) {
        // add task to tasklist
        // then save task list to local storage
        // then display tasklist on view
        taskList.add(newTask).save().display();
        taskTextbox.value = "";
    } else {
        alert("Please enter a task");
    }
    taskTextbox.focus();
};

var clearTaskList = function() {
    taskList.clear();
    $("task").focus();
};

var deleteFromTaskList = function() {
    taskList.delete(this.id).save().display(); // this => clicked link
    $("task").focus();
};

var editTaskListItem = function() {
    var entry = prompt('Enter new task:', this.nextSibling.nodeValue);
    if (typeof entry !== 'string') {
        return;
    }
    // var newTask = new Task(entry);
    var newTask = getTask(entry)
    if (newTask.isValid()) {
        taskList.edit(this.title, newTask).save().display(); // this => clicked link
    } else {
        alert("Please enter a task");
    }
    $("task").focus();
};

window.onload = function() {
    $('task_form').onsubmit = (ev) => {
        ev.preventDefault();
        addToTaskList();
    }
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    // set value for tasklist properties
    taskList.displayDiv = $("tasks");
    taskList.deleteClickHandler = deleteFromTaskList;
    taskList.editClickHandler = editTaskListItem;

    // load tasks and display
    taskList.load().display();
    $("task").focus();
};