"use strict";
var $ = function (id) {
    return document.getElementById(id);
};
var tasks = [];
var TASKS = "tasks";

var displayTaskList = function () {
    var list = ""; // contains task list
    if (tasks.length === 0) {
        // get in storage
        tasks = getStorageItem(TASKS);
    }

    // sort and display tasks
    if (tasks.length > 0) {
        displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList, editTaskListItem);
    } else {
        $("tasks").innerHTML = "";
    }
};

var addToTaskList = function () {
    var task = $("task").value;
    if (task === "") {
        alert("Please enter a task");
    } else {
        // add task to tasks array
        tasks.push(capitalizeTask(task));
        // update local storage
        setStorageItem(TASKS, tasks);
        // re-display tasks
        displayTaskList();
        // clear task list text
        $("task").value = "";
        $("task").focus();
    }
};
var editTaskListItem = function () {
    var newText = prompt('Enter new task to edit:');
    if (newText !== null || newText !== '') {
        editTask(tasks, this.title, newText);
        // update storage
        setStorageItem(TASKS, tasks);
        // re-display tasks
        displayTaskList();
        $("task").focus();
    }
}
var clearTaskList = function () {
    // clear task array
    tasks.length = 0;
    // clear storage
    clearStorageItem(TASKS);
    // clear UI
    $("tasks").innerHTML = "";
    $("task").focus();
};

var deleteFromTaskList = function () {
    // remove item out of tasks
    deleteTask(tasks, this.id); // this => clicked link
    // update storage
    setStorageItem(TASKS, tasks);
    // re-display tasks
    displayTaskList();
    $("task").focus();
};

window.onload = function () {
    $("add_task").onclick = addToTaskList;
    $('task_form').onsubmit = function (e) {
        e.preventDefault();
        addToTaskList();
    };
    $("clear_tasks").onclick = clearTaskList;

    // display tasks string and set focus on task text box
    displayTaskList();
    $("task").focus();
};