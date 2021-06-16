"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var tasks = [];

var displayTasklist = function() {
    var storage = localStorage.getItem("tasks_16") || null;
    tasks = JSON.parse(storage) || [];

    var capitalized = tasks.map(function(value) {
        var first = value.task.substring(0,1);
        var remain = value.task.substring(1);
        return { task: first.toUpperCase() + remain,
        date: value.date };
    }); // capitalize is an array created from map method of tasks

    $("task_list").value = capitalized.reduce(function(prevValue, value) {
        return prevValue.concat(value.date, " - ", value.task, "\n");
    }, "");

    $("task").focus();
};

var addToTasklist = function() {
    var taskTextbox = $("task");
    var taskDate = $("task_date");
    var d = new Date(taskDate.value);
    // var newTask = new Task(taskTextbox.value);
    // if (newTask.isValid()) {
    //     tasklist.add(newTask);
    //     tasklist.save();
    //     tasklist.display();
    //     taskTextbox.value = "";
    // } else {
    //     alert("Please enter any task!");
    // }
    if (task.value === "" || d === "" || d.toDateString() === "Invalid Date") {
        alert("Please enter a task and date!");
    } else {
        tasks.push({task: task.value, date: d.toDateString()});
        localStorage.setItem("tasks_16", JSON.stringify(tasks));

        task.value = "";
        taskDate.value = "";
        displayTasklist();
    }
    taskTextbox.focus();
};

var clearTasklist = function() {
    // tasklist.clear();
    tasks.length = 0;
    localStorage.setItem("tasks_16", "");
    displayTasklist();
    $("task").focus();
};

window.onload = function() {
    $("add_task").onclick = addToTasklist;
    $("clear_task").onclick = clearTasklist;

    displayTasklist();
    $("task").focus();
};