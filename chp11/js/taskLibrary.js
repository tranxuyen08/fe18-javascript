var Task  = function(task){
    this.text =task;
}
Task.prototype.isValid = function(){
    return this.text ==="" 
}
Task.prototype.toString = function(){

    var str = this.text[0].toUpperCase() + this.text.substring(1);
    this.text = str;
}

var ListTasks= {
    Tasks: [],
    storage: getStorage("task"),
    divDisplay:null,
    deleteClickHandler: null,
    editClickHandler:null,
    load: function(){
     
         
    this.Tasks=this.storage.get();

        return this;
    },
    save: function(){
        this.storage.set(this.Tasks);
        return this;
    },
    sort: function(){
        this.Tasks.sort();
        return this;
    },
    add: function(task){
        this.Tasks.push(task.toString())
        this.save();
        return this;
    },
    delete: function(i){
        this.sort();
        this.Tasks.splice(i,1);
        return this;
    },
    clear: function(){
        this.storage.clear();
        this.load();
        this.divDisplay.innerHTML = "";
        return this;

    },
    display: function(){
        var  html = "<div class='display_item'><a id = ";
        var  str ="";
            for (var i=0;i<this.Tasks.length;i++){
                str+=html
                str+= i;
                str+=" class='delete'>delete</a><a class='edit' id = 'edit_"+i+"'> edit</a><p class='task_name'>"
                str += this.Tasks[i];
                str+= "</p></div>"
            }

        this.divDisplay.innerHTML = str;
        linkDelete = this.divDisplay.getElementsByClassName('delete');
        linkEdit = this.divDisplay.getElementsByClassName("edit");

        for (var i =0;i<this.Tasks.length;i++){
            linkDelete[i].onclick = this.deleteClickHandler;
            linkEdit[i].onclick = this.editClickHandler;
        }
        return this;
    },
    
}