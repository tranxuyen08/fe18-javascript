
myApp.addNamespace("utility.storage")
myApp.utility.storage.get = function(){
   var storage = localStorage.getItem(myApp.utility.storage.key)||"";
   return storage!=""?storage.split("|") : [];
}

myApp.utility.storage.set = function(arr){
    var stringArray;
    if (Array.isArray(arr)){
        stringArray = arr.join("|");
    }
    else{
        stringArray = arr;

    }
    localStorage.setItem(myApp.utility.storage.key,stringArray);
}

myApp.utility.storage.clear = function(){
    localStorage.setItem(myApp.utility.storage.key,"");
}
myApp.utility.getStorage = function(key){
    var storage =  Object.create(myApp.utility.storage);
    myApp.utility.storage.key = key;
    return storage;
}

