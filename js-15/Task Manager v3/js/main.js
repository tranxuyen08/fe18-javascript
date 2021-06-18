"use strict";

myapp.utility.$ = function(id) {
    return document.getElementById(id);
};

(function() {
    var tasks = [];
    var TASKS = "tasks";

    var tasklist = myapp.tasklist;
    var u = myapp.utility;

    var displayTasklist = function() {
        if (task.length === 0) {
            tasks = u.storage.get(TASKS);
        }
        if (tasks.length > 0) {
            tasklist.display(tasks, u.$("tasks"), deleteTask);
        }
    };
    var addToTasklist = function() {
        var task = u.$("task").value;
        if (task == "") {
            alert("Please enter any task!");
        } else {
            tasks.push(tasklist.capitalise(task));
            u.storage.set(TASKS, tasks);
            displayTasklist();
            u.$("task").value = "";
        }
        u.$("task").focus();
    };
    
    var clearTasklist = function() {
        tasks.length = 0;
        u.storage.clear(TASKS);
        u.$("tasks").innerHTML = ""; //div element
        u.$("task").focus(); //input element
    };
    
    var deleteTask = function() {
        tasklist.delete(tasks, this.id);
        u.storage.set(TASKS, tasks);
        displayTasklist();
        u.$("task").focus();
    };
    
    window.onload = function() {
        u.$("add_task").onclick = addToTasklist;
        u.$("clear_task").onclick = clearTasklist;
        displayTasklist();
        u.$("task").focus();
    };
})(); //IIFE

