var tasklist ={
  tasks:[],
  storage : getTaskStorage("tasks"),
  displayDiv : null,
  deleteClickHandler : null,
  editClickHandler : null,
  load: function () {
        if (this.tasks.length == 0) {
            this.tasks = this.storage.get();
        }
        return this;
    },
  save : function(){
    this.storage.set(this.tasks);
    return this;
  },
  sort : function(){
    this.tasks.sort();
    return this;
  },
  add : function(task){
    this.tasks.push(task.toString());
    return this;
  },
  delete : function(i){
    this.sort();
    this.tasks.splice(i,1);
    return this;
  },
  edit : function(i,text){
    this.sort();
    this.tasks.splice(i,1,text);
    return this;
  },
  clear : function(){
    this.tasks.length= 0;
    this.storage.clear();
    this.displayDiv.innerHTML = "";
    return this;
  },
 
  display : function(){
    var html = "";
    this.sort;
   
    for (var i in this.tasks) {
      html = html.concat("<p>");
      html = html.concat("<a href='#' class ='del'id='", i, "'>Delete </a>");
      
      html = html.concat("<a href='#' class ='edit' title='", i, "' >Edit</a>");
      html = html.concat(" " + this.tasks[i]);
      html = html.concat("</p>");
    }
    this.displayDiv.innerHTML = html;

    // add delete handler to delete link
    var links = this.displayDiv.getElementsByClassName("del");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = this.deleteClickHandler;
    }
    var linksedit = this.displayDiv.getElementsByClassName("edit");
    for (var j = 0; j < linksedit.length; j++) {
      linksedit[j].onclick = this.editClickHandler;
    }
    return this;
  }
}