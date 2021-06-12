var taskList = {
    tasks: [],
    storage: getTaskStorage("tasks"),
    displayDiv: null,
    deleteClickHandler: null,
    editClickHandler: null,
    load: function() {
        if (this.tasks.length == 0) {
            this.tasks = this.storage.get();
        }
    },
    save: function() {
        this.storage.set(this.tasks);
    },
    sort: function() {
        this.tasks.sort();
    },
    add: function(task) {
        this.tasks.push(task.toString());
    },
    delete: function(i) {
        this.sort();
        this.tasks.splice(i, 1);
    },
    edit: function(i, newTask) {
        this.tasks[i] = newTask.toString();

    },
    clear: function() {
        this.tasks.length = 0;
        this.storage.clear();
        this.displayDiv.innerHTML = "";
    },
    display: function() {
        var html = "";
        this.sort();
        // build task list to display
        for (var i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' class='delete' id='", i, "'>Delete</a>");
            html = html.concat("  ")
            html = html.concat("<a href='#' class='edit' id='", i, "'>Edit</a>");
            html = html.concat(" " + this.tasks[i]);
            html = html.concat("</p>");
        }
        this.displayDiv.innerHTML = html;

        // add delete handler to delete link
        var links = this.displayDiv.querySelectorAll(".delete");
        var link = this.displayDiv.querySelectorAll(".edit");
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = this.deleteClickHandler;
            link[i].onclick = this.editClickHandler;
        }
    },
};