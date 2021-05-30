checkElement = document.querySelectorAll('a');
 
for(var i =0;i<checkElement.length;i++)
{
    checkElement[i].onclick  = function(){
       if (this.className==='hiddent'){
            this.className='show';
            this.nextElementSibling.style.display = "block";
     }
       else{
            this.className= 'hiddent';
            this.nextElementSibling.style.display = "none";
       }
    }
}

