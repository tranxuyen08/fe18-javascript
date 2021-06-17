var $ = function(id) {
    return document.getElementById(id);
};

var addToTasklist = function() {
    var taskTextbox = $("task");
    var newTask = new Task(taskTextbox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask);
        tasklist.save();
        tasklist.display();
        taskTextbox.value = "";
    } else {
        alert("Please enter any task!");
    }
    taskTextbox.focus();
};

var clearTasklist = function() {
    tasklist.clear();
    $("task").focus();
};

var deleteTask = function() {
    tasklist.delete(this.title);
    tasklist.save();
    tasklist.display();
    $("task").focus();
};

window.onload = function() {
    $("add_task").onclick = addToTasklist;
    $("clear_task").onclick = clearTasklist;

    tasklist.deleteClickHandler = deleteTask;
    tasklist.displayDiv = $("tasks");

    tasklist.load();
    tasklist.display();
    $("task").focus();
};