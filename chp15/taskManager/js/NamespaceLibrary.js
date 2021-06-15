var myApp = myApp||{}
myApp.addNamespace = function(namespace){
    var currentName;
    var names = namespace.split(".");
    var parent = this;
    for (var i in names){
        currentName = names[i];
        
        parent[currentName] =  names[i+1] ||{};
        
        parent = parent[currentName];
    }
    return this;
}.bind(myApp);

