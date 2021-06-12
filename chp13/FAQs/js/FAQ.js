
 var changeStatus =function(){
     if (this.className==='hiddent'){
          this.className='show';
          this.nextElementSibling.style.display = "block";
   }
     else{
          this.className= 'hiddent';
          this.nextElementSibling.style.display = "none";
     }
 }
 function FAQs()
 {
          checkElement = document.querySelectorAll('a');
          for(var i =0;i<checkElement.length;i++)
               {
               checkElement[i].onclick = changeStatus;
               }
           
 }
 var log = function(e){
      console.log(e);
 }
window.onload =function(){
  FAQs();
  
   
}

