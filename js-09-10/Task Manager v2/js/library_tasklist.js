var sortTaskList = function (tasks) {
  var isArray = Array.isArray(tasks);
  if (isArray) {
    tasks.sort();
  }
  return isArray;
};

var displaySortedTaskList = function (tasks, divEle, deleteHandler) {
  var html = "";
  var isArray = sortTaskList(tasks);
  if (isArray) {
    for (var i in tasks) {
      html = html.concat("<p>");
      html = html.concat("<a href='#' id='", i, "'>Delete</a>");
      html = html.concat(" " + tasks[i]);
      html = html.concat("</p>");
    }

    divEle.innerHTML = html;

   
    var links = divEle.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = deleteHandler;
    }
  }
};

var deleteTask = function (tasks, i) {
  var isArray = sortTaskList(tasks);
  if (isArray) {
    tasks.splice(i, 1);
  }
};

var capitalizeTask = function (task) {
  var first = task.substring(0, 1);
  return first.toUpperCase() + task.substring(1);
};
