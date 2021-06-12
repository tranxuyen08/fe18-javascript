"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var TASKS = 'task';
var tasks = [];

var displayTaskList = function() {
    var list = ""; // contains task list
    if (tasks.length === 0) {
        // get in storage
        var storage = localStorage.tasks || "";
        if (storage.length > 0) {
            tasks = storage.split("|");
        }
    }

    // sort and create tasks string
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }

    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();
};


var addToTaskList = function() {
    var task = $("task").value;
    if (task === "") {
        alert("Please enter a task");
    } else {
        // add task to localstorage and tasks array
        tasks.push(task);
        localStorage.tasks = tasks.join("|");

        // clear task list text and re-display tasks
        $("task").value = "";
        displayTaskList();
    }
};

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.removeItem("tasks");
    $("task_list").value = "";
    $("task").focus();
};
var deleteTaskList = function() {
    var taskID = prompt('Nhập id task cần xoá!');
    if (taskID === '') {
        alert('Nhập giá trị');
    } else {
        taskID = parseInt(taskID);
        tasks.splice(taskID, 1);

    }
    localStorage.tasks = tasks.join("|");
    // clear task list text and re-display tasks
    $("task").value = "";
    displayTaskList();
};

var toggleSort = function() {
    var tasks = [];
    tasks.sort();
    localStorage.tasks = tasks.join("|");
    // clear task list text and re-display tasks
    $("task").value = "";
    displayTaskList();

};

var setName = function() {
    var text = prompt("Nhập tên  cần sửa!");
    if (text) {
        sessionStorage.setItem("name", text);
        let data = sessionStorage.getItem("name");
        $("name").innerText = data;
    }
};

var fillerTask = function() {

};




window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;
    $("deletel_task").onclick = deleteTaskList;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    displayTaskList();
};