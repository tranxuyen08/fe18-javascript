function Valid(options){
    formElement = document.querySelector(options.form);
   
    var rulesOfElement = {};
    var Miles  = document.querySelector('#Miles');
    var Gallons = document.querySelector('#Gallons');
    sub = document.querySelector('.btn-submit');
    clear =document.querySelector('.btn-clear');
    result = document.querySelector('#Per-Gallon');
    sub.onclick = function(e){
        var check = false;
            var index = undefined;
            var errorMessage;
            e.preventDefault();
            options.rules.forEach(function (rule) {
                var inputElement =  formElement.querySelector(rule.selector);
               
                for (var i= 0;i< rulesOfElement[rule.selector].length;i++){
                    errorMessage = rulesOfElement[rule.selector][i](inputElement.value)
                    if (errorMessage!=undefined){
                                    if (index==undefined){
                                        index = inputElement;
                                    }
                                    check =true;
                                parentElement= inputElement.parentElement;//the cha cua chung parentElement
                                parentElement.querySelector('.error').innerHTML = errorMessage;
                                inputElement.style.border = "2px solid red";
                                  break;
                            }      
                }
                    
            });
            if (!check){
               
                result.value = parseFloat(parseInt(Miles.value)/parseInt(Gallons.value)).toFixed(1);
                    }
    }
  
    clear.onclick = function(e){//clear 
        e.preventDefault();
       formElement.reset();
       options.rules.forEach(function (rule) {

        var inputElement =  formElement.querySelector(rule.selector);
        inputElement.style.border = "2px solid black";
        inputElement.nextElementSibling.innerHTML ='';
       });
    }
    if (formElement){
        
        options.rules.forEach(function (rule)  {//forEach tra ve cac phan tu trong mang
            var inputElement =  formElement.querySelector(rule.selector);
            
            if (!Array.isArray(rulesOfElement[rule.selector])){
                rulesOfElement[rule.selector] = new Array(rule.test);
                
            }
            else{
                rulesOfElement[rule.selector].push(rule.test);
            }
            
            if (inputElement){
                inputElement.onfocus = function(){
                parentElement= inputElement.parentElement;//the cha cua chung parentElement
                parentElement.querySelector('.error').innerHTML = '';
                inputElement.style.border = "2px solid black";
            } ;
            inputElement.onblur = function(){  //blur ra hien thi infor error

                var errorMessage;
                for (var i= 0;i< rulesOfElement[rule.selector].length;i++){
                    errorMessage = rulesOfElement[rule.selector][i](inputElement.value)
                    if (errorMessage!=undefined)
                        break;
                }
              
                if(errorMessage!=undefined){
                    
                    parentElement= inputElement.parentElement;//the cha cua chung parentElement
                    parentElement.querySelector('.error').innerHTML = errorMessage;
                    inputElement.style.border = "2px solid red";
                 
                }
                else{
                    parentElement= inputElement.parentElement;
                    parentElement.querySelector('.error').innerHTML = '';
                    inputElement.style.border = "1px solid gray";
               
                    
                }
            }
            
        }
    });
}

}

Valid.isNumeric = function(selector){

    return {
        selector:selector,
        test: function(value){
            return Number.isInteger(parseInt(value))? undefined:"must be numeric";
        }
    }
}

Valid.isGreatThanZero = function(selector){
    return {
        selector:selector,
        test:function(value){
            return value>0 ? undefined:"must be  greater than zero";
        }
    }
}