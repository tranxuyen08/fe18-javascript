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
StringArrayStoragePrototype.get = function(callback){
    var storage = localStoragePrototype.get.call(this);
    if (callback && typeof callback =="function"){
        return callback(storage);
    }
    else{
        return storage;
    }

}
StringArrayStoragePrototype.set = function(callback,storage){
 var StringStorage;
 if (callback && typeof callback =="function"){
     StringStorage = callback(storage);

 }
 else{
     StringStorage = storage.toString();
 }
 localStoragePrototype.set.call(this,StringStorage);
};

StringArrayStoragePrototype.clear = function(){
    localStoragePrototype.clear.call(this);
}
var getStorage = function(key){
    var storage =  Object.create(StringArrayStoragePrototype);
    storage.key = key;
    return storage;
}
