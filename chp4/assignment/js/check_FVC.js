var $ = function(id){
    return document.getElementById(id);
}
function calculateFV(){
    inMoney = $('inMoney');
    Rate =$('Rate');
    numberYears = $('numberYears');
    outMoney = $('outMoney');
    var temp = parseFloat(inMoney.value);
    for (var i = 0;i<parseInt(numberYears.value);i++){
        temp = temp + (temp * parseFloat(Rate.value)) / 100;
    }
    outMoney.value = temp.toFixed(2);
    
}
$("caculator").onclick = function(e){
    e.preventDefault();
    calculateFV();
}   
    inMoney = $('inMoney');
    Rate =$('Rate');
    numberYears = $('numberYears');
    outMoney = $('outMoney');
inMoney.onblur = function(){
        
    if (!(parseFloat(inMoney.value)>0 && parseFloat(inMoney.value)<=100000))
    {
        inMoney.nextElementSibling.innerHTML = "it's greater then zero and less then or equal 10000";
    }
    else{
        inMoney.nextElementSibling.innerHTML = "";
    }
}   
Rate.onblur = function(){
        
    if (!(parseFloat(Rate.value)>0 && parseFloat(Rate.value)<=15))
    {
        Rate.nextElementSibling.innerHTML = "it's greater then zero and less then or equal 15";
    }
    else{
        Rate.nextElementSibling.innerHTML = "";
    }
}   
numberYears.onblur = function(){
        
    if (!(parseFloat(numberYears.value)>0 && parseFloat(numberYears.value)<=50))
    {
        numberYears.nextElementSibling.innerHTML = "it's greater then zero and less then or equal 50";
    }
    else{
        numberYears.nextElementSibling.innerHTML = "";
    }
}   

