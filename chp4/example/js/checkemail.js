var $ = function(id){
    return document.getElementById(id);
}
// email = $('email');
// console.log(email);
// // onblur thoát khỏi input
// email.onblur = function(){
    
//     if (email.value==''){
//       console.log("vui long nhap truong nay"); 
//       $('e_email').innerHTML = "vui long nhap truong nay";
//         email.style.border = '2px solid red';
//     }   
//     else{
//         console.log(""); 
//       $('e_email').innerHTML = "";
//         email.style.border = '2px solid black';
//     }
// }
function isRequired(object,message){
    var check= false;
    if (object.value ==""){
      message.innerHTML = "fill out field!";
      object.style.border ="2px solid red";
        check = true;
     }
      else{
        console.log("!");
        message.innerHTML = "";
        object.style.border ="2px solid black";
      }
   return check;
}

function valid(){
    var check =true;
    var email = $('email');
    var re_email = $('re-email');
    var password = $("Password");
    var btn = document.getElementsByClassName("btn");
    email.onblur = function(){
        
        check = check && isRequired(email,$('e_email'));
    }
    re_email.onblur = function(){
        check = check &&  isRequired(re_email,$('e_re-email'));
    }
    password.onblur = function(){
        check = check && isRequired(password,$('e_password'));
    }
    return check;
    
}
var check = valid();

