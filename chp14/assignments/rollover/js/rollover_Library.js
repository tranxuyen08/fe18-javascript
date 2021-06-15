var createRollover = function(imgTag,secondImg){

    var fistImg = imgTag.src;
    var mouseOver = function(){
        imgTag.src = secondImg;
       
    }
    var mouseOut = function(){
        imgTag.src = fistImg;
    }
   
    imgTag.addEventListener("mouseover",mouseOver);
    imgTag.onmouseout = mouseOut;
    
};
window.onload = function(){
    createRollover(document.getElementById("img1"),"./img/hero.jpg");
    createRollover(document.getElementById("img2"),"./img/hero.jpg");
}