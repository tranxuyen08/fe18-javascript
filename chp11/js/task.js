
var addTask =function(){
    

    var taskTextBox = document.getElementById("task");
    var task = new Task(taskTextBox.value);
  
    if(task.isValid()){
        message.innerHTML = "please enter your task!";
    }
    else{
        message.innerHTML="";
        ListTasks.add( task.text);
        ListTasks.display();
    }
    
}
var clearTasks = ()=>{
    ListTasks.clear();
    ListTasks.display();
    message.innerHTML = "clear task list success!"
}
var deleteClickHandler =function(){
    ListTasks.Tasks.splice(this.id,1);
    ListTasks.save();
    ListTasks.display();

}
var editClickHandler =function(e){
    var taskTextBox = document.getElementById("task");
    taskTextBox.value = ListTasks.Tasks[this.id.split("_")[1]];
    ListTasks.Tasks.splice(this.id.split("_")[1],1)
    ListTasks.save();
    ListTasks.display();
    
}
window.onload =function(){
    
    var message = document.getElementById('message');
    ListTasks.divDisplay = document.getElementById('display_task');
    ListTasks.deleteClickHandler=deleteClickHandler;
    ListTasks.editClickHandler = editClickHandler;
    ListTasks.load().display();
    document.getElementById("add_task").onclick = addTask;
    
}