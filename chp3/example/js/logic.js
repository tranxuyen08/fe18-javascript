function test(){
    var scores = [];
        var temp = 0;
        var average=0;
        do {
            temp = parseInt(prompt("nhap n: "));
            if (temp >=0 && temp<=100){
                scores.push(temp);
            }
            else if (temp!=999){
                alert('enter 999 to end entries');
            }
           
          
        }
        while(temp!=999)
        var sum = scores.reduce(function(a,b){return a+b},0);
        average = sum/scores.length;
        return average;
}
