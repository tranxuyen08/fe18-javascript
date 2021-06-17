"use strict";
var $ = function (id) {
    return document.getElementById(id);
};
var tasks = [];
var sortDirection = 'ASC';


var displayTaskList = function () {
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
        if (sortDirection === 'ASC') {
            tasks.sort();
        } else {
            tasks.sort(function (taskA, taskB) {
                if (taskA > taskB) {
                    return -1;
                }
                if (taskB > taskA) {
                    return 1;
                }
                return 0;
            })
        }
        list = tasks.join("\n");
    }

    var user = sessionStorage.user || '';
    // display tasks string and set focus on task text box
    if (user) {
        $('name').innerText = user + "'s";
    }
    $("task_list").value = list;
    $("task").focus();
};

var importantTasks = function (element) {
    if (element.toLowerCase().indexOf('important!') !== -1) {
        return true;
    }
    return false;
}
var addToTaskList = function () {
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

var clearTaskList = function () {
    var confirm = window.confirm('Are you sure you want to delete all tasks?');
    if (!confirm) {
        return;
    }
    tasks.length = 0;
    localStorage.removeItem("tasks");
    $("task_list").value = "";
    $("task").focus();
};

var deleteTask = function () {
    if (tasks.length === 0) {
        alert('Task list not exist!!!')
        return;
    }

    var taskID = prompt('Enter the order number of the task to be deleted:');

    if (isNaN(taskID) || taskID <= 0 || taskID > tasks.length) {
        alert("Please enter number from 1 to " + tasks.length);
        return;
    }
    var confirm = window.confirm(`Are you sure you want to remove tasks #${taskID}?`);
    if (!confirm) {
        return;
    }
    tasks.splice(taskID - 1, 1);
    localStorage.tasks = tasks.join("|");
    // clear task list text and re-display tasks
    $("task").value = "";
    displayTaskList();
}
var toggleSort = function () {
    sortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC';
    displayTaskList();
}
var setName = function () {
    var user = prompt('User Name:');
    if (user !== null && user !== '') {
        sessionStorage.user = user;
    }
    displayTaskList();
}
var filterTasks = function () {
    var filter = tasks.filter(function (task) {
        return importantTasks(task)
    });
    $("task_list").value = filter.join("\n");
}
window.onload = function () {
    $('task_form').onsubmit = function (e) {
        e.preventDefault();
        addToTaskList();
    }
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;
    $('delete_task').onclick = deleteTask;
    $('toggle_sort').onclick = toggleSort;
    $('set_name').onclick = setName;
    $('filter_tasks').onclick = filterTasks;
    displayTaskList();
};