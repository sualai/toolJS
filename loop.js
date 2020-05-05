
 var banner = document.getElementsByClassName('banner')[0];
        var ulBox = banner.getElementsByTagName('ul')[0]
        var items = ulBox.getElementsByTagName('li');
        var left = document.getElementsByClassName('left')[0]
        var right = document.getElementsByClassName('right')[0];
        var point = document.getElementsByClassName('point')[0]
        var pointItems = point.getElementsByTagName('li');
        var width = items[0].offsetWidth;
        var picIndex = 0;
        var pointsIndex = 0;
        var pointLen = pointItems.length;
        var picLen = items.length
        function autoPlay(){
            picIndex ++;
            pointsIndex++;
            if(picIndex >picLen -1){
                picIndex = 1;
                ulBox.style.marginLeft = 0;
            }
            if(pointsIndex > pointLen -1){
                pointsIndex = 0;
            }
            heightLight(pointsIndex);
            animate(ulBox,{marginLeft:-(picIndex * width)})
        }
     function heightLight(index){
        for(var i =0 ; i < pointLen; i++){
            pointItems[i].classList.remove('active');
        }
        pointItems[index].classList.add('active');
    }
    function animate(dom,option){
        clearInterval(dom.timer);
        dom.timer = setInterval(function(){
            var flag = true;
            for(var k in option){
                var current = parseInt(getComputedStyle(dom,null)[k]);
                var target = parseInt(option[k]);
                var speed = (target - current)/5;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                if(current != target){
                    flag = false
                }
                dom.style[k] = current + speed +'px'; 
            }
            if(flag){
             clearInterval(dom.timer);
            return ;
         }         
        },30)       
    }
    var timer = setInterval(autoPlay,1000)
    banner.onmouseenter = function(){      
        clearInterval(timer);
    }
    banner.onmouseleave = function(){
        clearInterval(timer)
        timer = setInterval(autoPlay,1000)
    }
    for(var i = 0 ; i < pointLen ; i ++){
        this.index =i 
        pointItems[i].onclick = function(){
            picIndex = this.index;
            pointsIndex = this.index;
            heightLight(pointsIndex)
            animate(ulBox,{marginLeft:-(picIndex)*width});
        }
    }
