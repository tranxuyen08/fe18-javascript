var sortTaskList = function (tasks) {
    console.log(this);
    var isArray = Array.isArray(tasks);
    if (isArray) {
        tasks.sort();
    }
    return isArray;
};

var displaySortedTaskList = function (tasks, divEle, deleteHandler, editHandler) {
    var html = "";
    var isArray = sortTaskList(tasks);
    if (isArray) {
        // build task list to display
        for (var i in tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' id='", i, "'>Delete</a>");
            html = html.concat("<a href='#' title='", i, "'>Edit</a>");
            html = html.concat(" " + tasks[i]);
            html = html.concat("</p>");
        }

        divEle.innerHTML = html;

        // add delete handler to delete link
        var deleteLinks = divEle.querySelectorAll("a[id]");
        var editLinks = divEle.querySelectorAll("a[title]");
        for (var i = 0; i < deleteLinks.length; i++) {
            deleteLinks[i].onclick = deleteHandler;
            editLinks[i].onclick = editHandler;
        }
    }
};
var editTask = function (tasks, i, newText) {
    if (Array.isArray(tasks)) {
        tasks[i] = newText;
    }
}
var deleteTask = function () {
    var isArray = sortTaskList(arguments[0]);
    if (isArray) {
        tasks.splice(arguments[1], 1); // remove task number i out of task list
    }
};

var capitalizeTask = function (task) {
    var first = task.substring(0, 1);
    return first.toUpperCase() + task.substring(1);
};