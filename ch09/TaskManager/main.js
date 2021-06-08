'use strict';
var $ = function (id) {
  return document.getElementById(id);
};
var tasks=[];
var deleteFromTaskList = function(){
  deleteTask(tasks, this.id);
  setStorageItem('tuyet', tasks);
  displaySortedTaskList(tasks,$('list-task'),deleteFromTaskList)
}
var addlocal = function(){
  var taskitem =$('task').value;
  if(taskitem == ''){
    alert("khong duoc rong");
  }
  else
  {
      tasks.push(taskitem);
      
      setStorageItem('tuyet', tasks);
      tasks = getStorageItem('tuyet');
      displaySortedTaskList(tasks,$('list-task'),deleteFromTaskList);
  }

}
var clearTask = function(){
  clearStorageItem("tuyet");
  tasks.length = 0;
  displaySortedTaskList(tasks, $('list-task'), deleteFromTaskList);

}
var sortList = function(){
  sortTaskList(tasks);
  setStorageItem('tuyet', tasks);
  displaySortedTaskList(tasks, $('list-task'), deleteFromTaskList);
};

var deletaTask = function(){
  var taskID = prompt('Nhập id task cần xoá! (ex: 1,2,3,4...)');
  taskID=parseInt(taskID);
  if (taskID === '') {
    alert('please enter value!');
  } else {
    deleteTask(tasks,taskID)
  }
  sortList();
}
var setName = function(){
  var taskname = prompt('Nhập Name task cần sửa! ');
  var tasknameN = prompt('Nhập Name mới! ');
  for (var item in tasks ){
    if(taskname == tasks[item]){
      tasks.splice(item,1,tasknameN);
    }
  }
  sortList();
}
var filtertask = function(){
  var taskname = prompt('Nhập Name');
  for (var item in tasks ){
    if(taskname == tasks[item]){
      var arraynew = [taskname];
      displaySortedTaskList(arraynew, $('list-task'), deleteFromTaskList);
    }
  }
}
window.onload = function () {

  $('add-task').onclick = addlocal;
  $('clear-task').onclick = clearTask;
  $('toggle-sort').onclick = sortList;
  $('delete-task').onclick = deletaTask;
 
  $('set-name').onclick = setName;
  $('filter-task').onclick = filtertask;
  $('task').focus();
};