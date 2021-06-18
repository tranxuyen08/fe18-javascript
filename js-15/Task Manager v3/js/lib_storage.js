
myapp.utility.storage.get = function(key) {
    var storage = localStorage.getItem(key) || "";
    if (storage === "") {
        return [];
    } else {
        return storage.split("|");
    }
};

myapp.utility.storage.set = function(key, arr) {
    if (Array.isArray(arr)) {
        var storageString = arr.join("|");
        localStorage.setItem(key, storageString);
    }
};

myapp.utility.storage.clear = function(key) {
    localStorage.setItem(key, "");
};