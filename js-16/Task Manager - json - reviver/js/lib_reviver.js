var getTask = function() {
    var reviver = function(key, value) {
        if (key === "") {
            value.sort(function(a, b) { return a.date - b.date; });
            value.display = value.reduce(function(prevValue, value) {
                return prevValue.concat(value.date.short, " - ", value.task, "\n");
            }, "");
            return value;
        } else {
            var dt = new Date(value);
            if (dt.toDateString() === "Invalid Date") {
                return value;
            } else {
                var m = dt.getMonth() + 1;
                dt.short = dt.getDate() + "/" + m + "/" + dt.getFullYear();
                return dt;
            }
        }
    };

    var storage = localStorage.getItem("tasks_16") || "";
    return (storage === "") ? [] : JSON.parse(storage, reviver);
};

var setTasks = function(tasks) {
    var replacer = function(key, value) {
        if (key === "") {
            return value;
        }
        if (typeof value === "string") {
            var first = value.substring(0,1).toUpperCase();
            var remain = value.substring(1);
            return first + remain;
        } else {
            return value;
        }
    };

    var json = JSON.stringify(tasks, replacer);
    localStorage.setItem("tasks_16", json);
};

var clearTasks = function() {
    localStorage.setItem("tasks_16", "");
};