"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var tasks;

var displayTasklist = function() {
    tasks = getTask();
    $("task_list").value = (tasks.display) ? tasks.display : "";

    $("task").focus();
};

var addToTasklist = function() {
    var taskTextbox = $("task");
    var taskDate = $("task_date");
    var d = new Date(taskDate.value);
    
    if (taskTextbox.value === "" || d === "" || d.toString() === "Invalid Date") {
        alert("Please enter a task and date!");
    } else {
        tasks.push({task: taskTextbox.value, date: d });
        setTasks(tasks);
        // localStorage.setItem("tasks_16", JSON.stringify(tasks));

        taskTextbox.value = "";
        taskDate.value = "";
        displayTasklist();
    }
    taskTextbox.focus();
};

var clearTasklist = function() {
    tasks.length = 0;
    // localStorage.setItem("tasks_16", "");
    clearTasks();
    displayTasklist();
    $("task").focus();
};

window.onload = function() {
    $("add_task").onclick = addToTasklist;
    $("clear_task").onclick = clearTasklist;

    displayTasklist();
    $("task").focus();
};