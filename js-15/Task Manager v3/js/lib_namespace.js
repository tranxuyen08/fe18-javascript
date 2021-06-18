var myapp = myapp || {};

myapp.addNamespace = function(namespace) {
    var currentName;
    var parent = this;
    var names = namespace.split(".");

    for (var i in names) {
        currentName = names[i];
        parent[currentName] = parent[currentName] || {};
        parent = parent[currentName];
    }
    return this;
}.bind(myapp);

myapp.addNamespace("tasklist").addNamespace("utility.storage");