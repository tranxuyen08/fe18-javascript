"use strict"
var Task = Object.create({
    isValid: function () {
        return !this.text.empty();
    },
    toString: function () {
        return this.text.capitalize();
    },
});

var getTask = function (text) {
    var task = Object.create(Task);
    task.text = text;
    return task;
}
// Task is new object
/*
var Task = function (task) {
  this.text = task;
};
Task.prototype.isValid = function () {
  if (this.text === "") return false;
  return true;
};

Task.prototype.toString = function () {
  // capitalize the first letter
  return this.text.capitalize();
};
 */
