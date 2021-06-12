function Slider(slider){
    slideShow = document.querySelector(slider);
    if (slideShow){
        links = slideShow.getElementsByTagName("a");
        var imageCache = [];
        var img;
      
        for(var i=0;i<links.length;i++){
            
            img = new Image();
            img.src =links[i].getAttribute("href");
            img.title =links[i].getAttribute("title");
            imageCache.push(img);
        }
       console.log(imageCache)
       var timeDelay = 2000;
        var countImg =0;
        var timer = setInterval(function(){
            countImg = (countImg+1)%imageCache.length;
            img = imageCache[countImg];
            slideShow.querySelector('#image').src = img.src;
            slideShow.querySelector('#caption').innerHTML = img.title;
        },timeDelay);
         var timeDelayNew = prompt("current  speed in" + timeDelay+ "milliseconds \n"
                +"please enter a new speed.");
       if (timeDelayNew!=timeDelay){
           clearInterval(timer);
           timer = setInterval(function(){
            countImg = (countImg+1)%imageCache.length;
            img = imageCache[countImg];
            slideShow.querySelector('#image').src = img.src;
            slideShow.querySelector('#caption').innerHTML = img.title;
        },timeDelay);
       }
        
    }
}
window.onload = function()
{
    Slider('.slide-show');
}