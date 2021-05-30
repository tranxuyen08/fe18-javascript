var $ = function(element){
    return document.querySelector(element);
}
function Valid(options){
    var rulesElement = {};
    formElement = $(options.form);
    resetForm = formElement.querySelector(options.reset);
    Submit =  formElement.querySelector(options.submit);
    if (resetForm){
        resetForm.onclick =function(e){
            e.preventDefault();
            formElement.reset();
            options.rules.forEach (function(rule) {
                inputElement = formElement.querySelector(rule.element);
                inputElement.style.border = "2px solid black";    
                inputElement.nextElementSibling.innerHTML =''
            });
            check_accept=formElement.querySelector('#check-accept');
            check_accept.nextElementSibling.innerHTML='';
            
        }
      
    }
    if (Submit){
        
        Submit.onclick =function(e){
            var check =false;
            e.preventDefault();
            options.rules.forEach (function(rule) {
                inputElement = formElement.querySelector(rule.element);
                for (var i=0 ;i<rulesElement[rule.element].length;i++){
                    messageElement = rulesElement[rule.element][i](inputElement.value);
                    if (messageElement){
                        inputElement.nextElementSibling.innerHTML =messageElement
                        inputElement.style.border = "2px solid red";

                        check =true;
                        break;
                    }

                 }
            });
            check_accept=formElement.querySelector('#check-accept');
            check_accept.onclick = function(){
                formElement.querySelector('#check-accept').nextElementSibling.innerHTML='';
            }
           
            if (!check_accept.checked){
                check = true;
                formElement.querySelector('#check-accept').nextElementSibling.innerHTML='you can accept Terms of Service!';
            }
            else
            {
         
                formElement.querySelector('#check-accept').nextElementSibling.innerHTML='';
            }
            if(check==false)
                formElement.submit();
        }
    }
    if (formElement){
        options.rules.forEach (function(rule) {
            if (!Array.isArray(rulesElement[rule.element])){
                rulesElement[rule.element] =new Array(rule.test);
            }
            else{
                rulesElement[rule.element].push(rule.test);
            }
            inputElement = formElement.querySelector(rule.element);
            inputElement.onblur = function(){
                 for (var i=0 ;i<rulesElement[rule.element].length;i++){
                    messageElement = rulesElement[rule.element][i](this.value);
                    if (messageElement){
                        this.nextElementSibling.innerHTML =messageElement
                        this.style.border = "2px solid red";
                        break;
                    }

                 }
            }
            inputElement.onfocus = function(){
                         this.style.border = "2px solid black";    
                        this.nextElementSibling.innerHTML =''    
                    }
        });

        
    }
}
Valid.isRequried = function(element){
    return {
        element:element,
        test: function(value){  
            return  value.trim() ? undefined : "fill out this field!"
        }
    }
}
Valid.isEmail = function(element){
    return {
        element:element,
        test: function(value){
            reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return reg.test(value) ? undefined : "this field is email!"
       
        }
    }
}