 window.onload = function(){
    //获取元素
    function $(id){return document.getElementById(id)}
    var js_slider = $('js_slider');//获取最大的盒子
    var silider_main = $('silider_main');
    var imgs = slider_main.children;//每个图片单独运动
    var slider_ctrl = $('slider_ctrl');
    var iNow = 0;//控制图片播放张数 
    //操作元素
    for (var i = 0; i < imgs.length; i++) {
        var span = document.createElement('span');//必须写在循环里面
        span.innerHTML = imgs.length-i;//当作索引号，必须添加
        span.className = 'slider-ctrl-con';
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);//倒着插入
    }
    var spans = document.getElementsByTagName('span');
    var scrollWidth = js_slider.clientWidth;//client 不包含border
    spans[1].className = 'slider-ctrl-con current';//给第一个控制span的按钮改样式
    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left = scrollWidth + 'px';  //除了第一张图片，所有图片都叠到右边
    }

    for(var k in spans){ 
        spans[k].onclick = function(){
            if (this.className == 'slider-ctrl-prev') {
                // alert(1);
                //原理：当前这张图片缓慢走到右边，上一张图片快速回到左侧（-310）。然后再走到中间
                animate(imgs[iNow],{left:scrollWidth});
                iNow--;
                // console.log(iNow);
                if (iNow<0) {
                    iNow = imgs.length-1;
                }
                imgs[iNow].style.left = -scrollWidth + "px" ;// 下一张图片快速回到左边
                animate(imgs[iNow],{left:0});
                setSquare()           
            }
            else if (this.className == 'slider-ctrl-next') {
                // alert(2);
                //原理：当前这张图片缓慢走到右边，上一张图片快速回到右侧（310）。然后再走到中间
                autoPlay()
            }
            else{//========================================难点================================
                // alert(3);
                var that = this.innerHTML - 1;
                if (that>iNow) {
                    //做法等同于右边按钮
                    animate(imgs[iNow],{left:-scrollWidth});
                    imgs[that].style.left = scrollWidth + "px";
                    
                }else if (that < iNow) {
                    animate(imgs[iNow],{left:scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px" ;
                    
                }
                iNow = that;
                animate(imgs[iNow],{left:0})
                setSquare()
            }
        }

    }
    function setSquare(){
        for (var i = 1; i < spans.length-1; i++) {
            spans[i].className = 'slider-ctrl-con';
        }
        spans[iNow+1].className = 'slider-ctrl-con current';
        // console.log(1);
    }
    var timer = null;
    timer = setInterval(autoPlay,2000);
    function autoPlay(){
                animate(imgs[iNow],{left:-scrollWidth});
                iNow++;
                if (iNow>imgs.length-1) {
                    iNow = 0;
                }
                imgs[iNow].style.left = scrollWidth + "px" ;// 下一张图片快速回到右边
                animate(imgs[iNow],{left:0});//慢慢走到中间
                setSquare()        
    }
    js_slider.onmouseover = function(){
        clearInterval(timer);
    }
    js_slider.onmouseout = function(){
        clearInterval(timer);
        timer = setInterval(autoPlay,2000);
    }
}
