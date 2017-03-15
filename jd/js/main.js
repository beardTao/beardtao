window.onload = function() {
	//header news
	var jd_close =document.getElementById('jd_close');
    var topbanener=document.getElementById('topbanner');
    jd_close.onclick=function(){
        topbanner.style.display='none';
    }
	//lists
        var ul = document.getElementById('jd-serve-ul');
        var is = ul.getElementsByTagName('i');
        for (i = 0; i < is.length; i++) {
            is[i].style.backgroundPosition ="0  " + (-i * 25) + "px";
        }
      //二级菜单
      // var items1 = document.getElementsByClassName('itmes1');
      // for (var i = 0; i < items1.length; i++) {
      //       items1[i].onmouseover = function(){
                  
      //       }
      // }
      //carousel
      // 1.动态创建控制小点
      var slider = document.getElementById('slider');
      var circle = document.getElementById('circle');
      var lis = slider.children[0].children;
      for (var i = 0; i < lis.length; i++) {
      	var li = document.createElement('li');
      	li.innerHTML = i+1;
      	circle.children[0].append(li);
      }
      var circle_lis = circle.children[0].children;
      circle_lis[0].classList.add('current');

      //轮播效果
      var arrow_l = document.getElementById('arrow_l');
      var arrow_r = document.getElementById('arrow_r');
      var iNow = 0 ;
      var timer = null;
      timer = setInterval(autoplay,3000);
      function autoplay(){

      	iNow++;
      	if (iNow > lis.length -1  ) {
      		iNow = 0 ;
      		for (var i = 0; i < lis.length; i++) {
      			lis[i].classList.remove('current');
      			circle_lis[i].classList.remove('current');
      		}
      		lis[iNow].classList.add('current');
      		circle_lis[iNow].classList.add('current');
      	}	      	
      	else{
      		for (var i = 0; i < lis.length; i++) {
      			lis[i].classList.remove('current');
      			circle_lis[i].classList.remove('current');
      		}
      		lis[iNow].classList.add('current');
      		circle_lis[iNow].classList.add('current');
      	}	
    }

      // arrow_r.onclick = function(){
      // 	if (iNow<4) {
      // 		for (var i = 0; i < lis.length; i++) {
      // 		lis[i].classList.remove('current');
      // 		circle_lis[i].classList.remove('current');
      // 	}
      // 	iNow++;
      // 	lis[iNow].classList.add('current');
      // 	circle_lis[iNow].classList.add('current');
      // 	}
      // 	else{
      // 		iNow = 0 ;
      // 		for (var i = 0; i < lis.length; i++) {
      // 		lis[i].classList.remove('current');
      // 		circle_lis[i].classList.remove('current');
      // 	}
      	
      // 	lis[iNow].classList.add('current');
      // 	circle_lis[iNow].classList.add('current');
      // 	}
      // 	}
      arrow_r.onclick = function(){
      	autoplay();
      }
      arrow_l.onclick = function(){
      	iNow--;
        if (iNow < 0  ) {
      		iNow = 4 ;
      		for (var i = 0; i < lis.length; i++) {
      			lis[i].classList.remove('current');
      			circle_lis[i].classList.remove('current');
      		}
      		lis[iNow].classList.add('current');
      		circle_lis[iNow].classList.add('current');
      	}	      	
      	else{
      		for (var i = 0; i < lis.length; i++) {
      			lis[i].classList.remove('current');
      			circle_lis[i].classList.remove('current');
      		}
      		lis[iNow].classList.add('current');
      		circle_lis[iNow].classList.add('current');
      	}	
      }
      for (var i = 0; i < circle_lis.length; i++) {
      	circle_lis[i].onclick = function(){
      		for (var i = 0; i < lis.length; i++) {
      			lis[i].classList.remove('current');
      			circle_lis[i].classList.remove('current');
      		}
      		iNow = this.innerHTML - 1;
      		lis[iNow].classList.add('current');
      		circle_lis[iNow].classList.add('current');
      	}
      }
      slider.onmouseover = function(){
      	clearInterval(timer);
      }
      slider.onmouseout = function(){
      	clearInterval(timer)
      	timer = setInterval(autoplay,3000);
 	}
}

