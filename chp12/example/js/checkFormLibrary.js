function Validator(options){

    var formElement = document.querySelector(options.form);
   
    var listElementValid ={}
    if (formElement){
        ///////////////////////////////register
        var register = formElement.querySelector(options.register);
        if (register){
            register.onclick =function(){
                var message = undefined;
               check= true;
               for( var i in listElementValid){
                var inputElement = formElement.querySelector(i);
                message =listElementValid[i][0](inputElement.value);
                if (message!==undefined)
                        {
                            inputElement.nextElementSibling.innerHTML = message;
                        check =false;
                        }
               }
              
               if (check==true){
                   formElement.submit();
               }
            }
        }
        /////////////Reset form
        var reset_form = formElement.querySelector(options.reset_form);
        if(reset_form){
            reset_form.onclick = function(){
                formElement.reset();
                MessageElements=formElement.getElementsByTagName("span");
               for (var i =0;i<MessageElements.length;i++)
                {
                    MessageElements[i].innerHTML ="*"
                }
                 formElement.querySelector('#card_type_error').innerHTML = ""   
            }
           
        }
       
        ////////////////////////////////////////////////////////
        options.rules.forEach(rule => {
            if(!Array.isArray(listElementValid[rule.element])){
                listElementValid[rule.element] = [rule.check]
            }
            else{
                listElementValid[rule.element].push(rule.check);
            }
            var inputElement = formElement.querySelector(rule.element);
            inputElement.onblur = function(){
                var Message =undefined;
                listElementValid[rule.element].forEach(ruleElement=>{
                   
                    if(ruleElement(this.value)!=undefined && Message ==undefined)
                   {    
                       Message =ruleElement(this.value);
                   }
                  
                });
                if(Message)
                    this.nextElementSibling.innerHTML = Message;
                else{
                    this.nextElementSibling.innerHTML = "";
                }
                
               
            }
        });
    }
  
}
///define rules 
Validator.isRequired = function(element,mes ="fill out this field!"){
    return {
        element:element,
        check: function(value){
            return value.trim()? undefined : mes;
        }
    }
}
Validator.isEmail =function(element){
    return{
        element:element,
        check: function(value){
            patternEmail =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

            return patternEmail.test(value)? undefined: "This field is email!";
        }
    }
}
Validator.isPassword =function(element){
    return{
        element: element,
        check: function(value){
            patternPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            return patternPassword.test(value)? undefined: "Password containing at least 8 characters, 1 number, 1 upper and 1 lowercase";
        }
    }
}
Validator.isSamePassword = function(element,Password){
    return{
        element: element,
        check: function(value){
            pass = document.querySelector(Password).value;
            return pass == value ? undefined : "Password and re-password not same!"
        }
    }
}
Validator.isZip =function (element){
    return{
        element: element,
        check: function(value){
            patternZip = /^\d{5}$|^\d{5}-\d{5}$/
            return patternZip.test(value) ?undefined: "Zip code have to 5 digital!"
        }
    }
}
Validator.isCardNumber =function(element){
    return{
        element:element,
        check: function(value){
            patternCard=/^\d{4}-\d{4}-\d{4}-\d{4}$/;
            return patternCard.test(value) ?undefined: "card number have type 9999-9999-9999-9999!"
        }
    }
}
Validator.isDate =function(element){
    return{
        element:element,
        check: function(value){
            patternDate =/^0[1-9]\/\d{4}|1[0-2]\/\d{4}$/
            return patternDate.test(value) ?undefined: "date have type mm/yyyy!"
        }
    }
}