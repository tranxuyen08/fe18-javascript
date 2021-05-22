var email = document.getElementById("email");
var re_email = document.getElementById("re-email");
var pasword = document.getElementById("Password");
var inf = document.getElementsByClassName("inf");
var check  =document.getElementsByClassName("btn");

check.onclick = function(){
    if(email!=re_email){
        inf.innerHTML = " hello";
        alert('no');
    }
};