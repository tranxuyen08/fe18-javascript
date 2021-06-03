"use strict";

var $ = function (id) {
  return document.getElementById(id);
};


var result = "";

function isPrimenumber(n){
    var isPrime = true;
    for(var i = 2;i<=n/2 ;i++){
        if( n % i ==0){
            isPrime=false;
            break;
        }
        
    }
    return isPrime;

}
var count=0;
function caculator(){
    var enternumber = $('enternumber').value;
        enternumber=parseInt(enternumber);
        if(isNaN(enternumber)){
            $('number-err').innerText="must be number"
        }
        else if(enternumber<0){
            $('number-err').innerText=" must be than 0";
        }
        else if(enternumber < 2)
            alert('there are no prime numbers ');
        else{
            for (var i = 2 ; i<= enternumber ; i++){
                if(isPrimenumber(i)){
                    result +=" "+ i;
                    count=count + 1;
                }
            }
            $('primenumber').value=result;
            $('primecount').value=count;
        }

    
}

window.onload = function () {
    
   $("calculate").onclick = caculator;
  };
  