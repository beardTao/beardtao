
    //封装运动函数原理
    function animate(obj,json,fn){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            //动画原理 对象当前属性值 加上步长
            var flag = true;//判断什么时候停止的间接参数
            for (attr in json){//遍历属性
                var current = 0 ;//存放当前属性值
                if (attr == 'opacity') {
                    current = parseInt(getStyle(obj,attr)*100);
                }
                else{
                    current = parseInt(getStyle(obj,attr));
                }
                //计算步长
                var step = (json[attr]- current)/10;
                step = step>0? Math.ceil(step): Math.floor(step);
                if (attr == "opacity") {
                    if (attr in obj.style) {
                        obj.style.opacity = ( current + step )/100;
                    }
                    else{
                        obj.style.filter = "alpha(opacity="+(current+step)+")";
                    }
                }else if (attr == "zIndex") {
                    obj.style.zIndex = json[attr] ;
                }else{
                    obj.style[attr] = current + step + 'px';
                }
                if (current != json[attr] ) {
                    flag = false;
                }
            }
            // console.log(1);
            if (flag) {
                clearInterval(obj.timer);
                //动画执行完毕后，执行回调函数，所以当停止定时器时就可以执行
                if (fn) {
                    fn();//如果有回调函数，就执行回调函数；
                }
            }
        },30);
    }
    function getStyle(obj,attr) {  //  谁的      那个属性
    if(obj.currentStyle)  // ie 等
    {
        return obj.currentStyle[attr];  // 返回传递过来的某个属性
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
    }
}

