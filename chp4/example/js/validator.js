//ham valid

function Validator(options){
    formElement = document.querySelector(options.form); 
    var rulesOfElement = {};
    if (formElement){ 
        
        formElement.onsubmit = function(e){
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
               
                formElement.submit();
                    }
        }
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

//định nghĩa rules
//nguyen tac:
//1 khi co loi tra ve message

//2. khi ko co loi tra ve undefined

Validator.isRequired = function(selector){
    return {
        selector:selector,
        test: function (value){
          return value.trim() ? undefined : "vui lòng nhập trường này!";//trim() xoa bo cach 2 dau
        }
    };
}

Validator.isEmail = function(selector){
  return {
        selector:selector,
        test: function (value){
            
            reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return reg.test(value) ? undefined : "vui lòng nhập email!"
        }
    };
}
Validator.isPassword = function(selector,length=8){
    return {
        selector:selector,
        test: function (value){
            if (value.length<length){
                return "số ký tự phải lớn hơn " + length;
            }
            reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            return reg.test(value) ? undefined : "password bao gồm cả chữ,số và chữ in hoa";
            
        }
    };
}
Validator.isSamePassword = function(password,re_password){
    return {
        selector:re_password,
        test: function (value){
          
         return formElement.querySelector(password).value == value ?  undefined : "xác nhận password không chính xác!";
        }
    };
}   