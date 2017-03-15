window.onload = function(){
	var header = document.getElementById('jd_header');
	var gotop = document.getElementById('gotop');
	//顶部搜索框颜色变化
	window.onscroll = function(event){
		event = event || window.event;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTo ||  window.pageYOffset;
		// console.log(scrollTop);
		if (scrollTop >jd_slider.offsetHeight ) {
			header.children[0].style.backgroundColor = "rgba(201,21,35,0.85)";
			gotop.style.display = 'block';
		}
		else{
			header.children[0].style.backgroundColor = "transparent";
			gotop.style.display = 'none';
		}
	}
	// 动态生成轮播图小li
	var jd_slider = document.getElementById('jd_slider');
	var lis = jd_slider.children[0].children;
	for (var i = 0; i < lis.length; i++) {
		var li = document.createElement('li');
		jd_slider.children[1].append(li);
	}
	var ul2 = jd_slider.children[1];
	ul2.children[0].classList.add('active');
	function resize(){
		jd_slider.children[0].style.height = jd_slider.children[0].children[0].offsetHeight + 'px';
	}
	window.onresize = function(){
		resize();
	}
	resize();
	var inow = 0;
	function change(){
		for (var i = 0; i < lis.length; i++) {
				for (var i = 0; i < lis.length; i++) {
					lis[i].classList.remove('active');
					ul2.children[i].classList.remove('active');
				}
				lis[inow].classList.add('active');
				ul2.children[inow].classList.add('active');
			}	
	}
	setInterval(function(){
		inow ++ ;
		if (inow<8) {
			change()
		}else{
			inow = 0;
			change()
		}
	},2000)
	
	var num = 0; //控制左侧值  left
    var timer = null;  // 定时器

	 function startmove(){
	 	
	 	timer = setInterval(scrollup,50);
	 }
	 function scrollup(){
	 	num--;
	 	if (num%30==0) {
	 		clearInterval(timer);
	 		setTimeout(startmove,2000);
	 	}
	 	else{
	 		num <= -90 ? num = 0 : num ;
	 		lunbo.style.top = num+"px";

	 	}
	 }
	setTimeout(startmove,2000);
}