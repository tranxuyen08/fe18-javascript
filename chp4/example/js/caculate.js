var $ = function(id){
    return document.getElementById(id);
}
var validateForm=function(){
  var  Miles = $('Miles').value;
   var gas = $("gas").value;
    console.log(Miles =='');
   var total = $("total");
   total.value ="";
   if (Miles!= '' && gas!= ''){
     var temp = parseFloat(Miles)/parseFloat(gas);
        temp = temp.toFixed(1);
        total.value =temp;
        total.dislabled;
    }
    else
    {
        
        alert('please fill out!');
    }
    
}
window.onload = function(){
    $("sub").onclick = validateForm;

   
}