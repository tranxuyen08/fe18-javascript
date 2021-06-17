var Task  = function(task,date){
    this.text =task;
    this.date = date;
}
Task.prototype.isValid = function(){
    return this.text ==="" 
}
Task.prototype.toString = function(){

    var str = this.text[0].toUpperCase() + this.text.substring(1);
    this.text = str;
    
}
Task.prototype.toJSON = function(){
     var s= new Date(this.date);
   
   return s.getDate()+"/"+ s.getMonth()+"/"+ s.getFullYear()+" - "+ this.text;
}
var ListTasks= function(divDisplay,deleteClickHandler,editClickHandler){
    Tasks= [],
    storage= getStorage("task"),
    getTasks= function(StorageString){
        var str = StorageString || "";
        return str==""? [] : JSON.parse(str);
    },
    setTasks= function(arr){
    
         return JSON.stringify(arr);
     
    }
    return {
        load: function(){
     
         
            Tasks=storage.get(getTasks);
        
                return this;
            },
            save: function(){
               storage.set(setTasks,Tasks);
                return this;
            },
            sort: function(){
                Tasks.sort();
                return this;
            },
            add: function(task){
                Tasks.push(task.toString())
                this.save();
                return this;
            },
            delete: function(i){
                this.sort();
               Tasks.splice(i,1);
                return this;
            },
            clear: function(){
              storage.clear();
                this.load();
                divDisplay.innerHTML = "";
                return this;
        
            },
            display: function(){
                this.load()
                
                var  html = "<div class='display_item'><a id = ";
                var  str ="";
                    for (var i=0;i<Tasks.length;i++){
                        str+=html
                        str+= i;
                        str+=" class='delete'>delete</a><a class='edit' id = 'edit_"+i+"'> edit</a><p class='task_name'>"
                      
                        str +=JSON.parse(Tasks[i]);
                        
                        str+= "</p></div>"
                    }
                
               divDisplay.innerHTML = str;
                linkDelete = divDisplay.getElementsByClassName('delete');
                linkEdit =   divDisplay.getElementsByClassName("edit");
        
                for (var i =0;i<Tasks.length;i++){
                    linkDelete[i].onclick = deleteClickHandler;
                    linkEdit[i].onclick = editClickHandler;
                }
            },
            
    }
    
}