var localStoragePrototype = {
    get: function(){
        return localStorage.getItem(this.key);
    },
  set : function (str){
    localStorage.setItem(this.key,str);
    },
    clear : function(){
       localStorage.setItem(this.key,"");
    }
}
var StringArrayStoragePrototype = Object.create(localStoragePrototype);
//override

StringArrayStoragePrototype.get = function(){
    var str = localStoragePrototype.get.call(this) || "";
    return str==""? [] : str.split("|")
}
StringArrayStoragePrototype.set =function (arr){
    if (Array.isArray(arr))
        localStoragePrototype.set.call(this,arr.join("|"));
}
StringArrayStoragePrototype.clear = function(){
    localStoragePrototype.clear.call(this);
}
var getStorage = function(key){
    var storage =  Object.create(StringArrayStoragePrototype);
    storage.key = key;
    return storage;
}
