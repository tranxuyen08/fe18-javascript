myApp.addNamespace("Task")
myApp.Task  = function(task){
    this.text =task;
}
myApp.Task.prototype.isValid = function(){
    return this.text ==="" 
}
myApp.Task.prototype.toString = function(){

    var str = this.text[0].toUpperCase() + this.text.substring(1);
    this.text = str;
}
myApp.addNamespace("ListTasks")

myApp.ListTasks= function(divDisplay,deleteClickHandler,editClickHandler){
    Tasks= [],
    storage= myApp.utility.getStorage("task")
    
    return {
        load: function(){
     
         
            Tasks=storage.get();
        
                return this;
            },
            save: function(){
               storage.set(Tasks);
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
                var  html = "<div class='display_item'><a id = ";
                var  str ="";
                    for (var i=0;i<Tasks.length;i++){
                        str+=html
                        str+= i;
                        str+=" class='delete'>delete</a><a class='edit' id = 'edit_"+i+"'> edit</a><p class='task_name'>"
                        str += Tasks[i];
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
