var TaskList;
myApp.$ = function(id){
   return document.getElementById(id);
}
myApp.addTask =function(){
    

    var taskTextBox = myApp.$("task");
    var task = new myApp.Task(taskTextBox.value);
  
    if(task.isValid()){
        message.innerHTML = "please enter your task!";
    }
    else{
        message.innerHTML="";
        TaskList.add( task.text);
        TaskList.display();
    }
    
}
myApp.clearTasks = ()=>{
    TaskList.clear();
    TaskList.display();
    message.innerHTML = "clear task list success!"
}
myApp.deleteClickHandler =function(){
    TaskList.delete(this.id);
    TaskList.save();
    TaskList.display();

}
myApp.editClickHandler =function(e){
    var taskTextBox = myApp.$("task");
    taskTextBox.value = Tasks[this.id.split("_")[1]];
    TaskList.delete(this.id.split("_")[1]);
    TaskList.save();
    TaskList.display();

    
}
window.onload =function(){

    divDisplay = myApp.$('display_task');
    TaskList = myApp.ListTasks(divDisplay,myApp.deleteClickHandler,myApp.editClickHandler);
    var message =  myApp.$('message');
    TaskList.load()
    TaskList.display();
    document.getElementById("add_task").onclick = myApp.addTask;
    myApp.$('task').focus();
    console.log(myApp)
}