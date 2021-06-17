var TaskList;
var $ = function(id){
   return document.getElementById(id);
}
var addTask =function(){
    

    var taskTextBox = document.getElementById("task");
    var task = new Task(taskTextBox.value);
    var dateTextBox = document.getElementById("date");
    var dt = new Date((dateTextBox.value))||"Invalid Date";
   
    if(task.isValid() || dt==="Invalid Date"){
        message.innerHTML = "please enter your task and due time!";
    }
    else{
   
        message.innerHTML="";
        TaskList.add( JSON.stringify({task:task.text,d:dt}));
        TaskList.display();
    }
    
}
var clearTasks = ()=>{
    TaskList.clear();
    TaskList.display();
    message.innerHTML = "clear task list success!"
}
var deleteClickHandler =function(){
    TaskList.delete(this.id);
    TaskList.save();
    TaskList.display();

}
var editClickHandler =function(e){
    var taskTextBox = document.getElementById("task");
    taskTextBox.value = Tasks[this.id.split("_")[1]];
    TaskList.delete(this.id.split("_")[1]);
    TaskList.save();
    TaskList.display();

    
}
window.onload =function(){

    divDisplay = document.getElementById('display_task');
    TaskList = ListTasks(divDisplay,deleteClickHandler,editClickHandler);
    var message = document.getElementById('message');
    TaskList.load()
    TaskList.display();
    document.getElementById("add_task").onclick = addTask;
    $('task').focus();
}