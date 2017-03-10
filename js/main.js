window.onload = function () {
	var open = document.getElementById('open');
	var body = document.getElementsByTagName('body')[0];
	var aboutme = document.getElementById("about");
	var dadachange = document.getElementById('dadachange');
	open.onclick = function(){
		body.classList.add("open");
	}
	var lis = document.getElementById('navbar').children[0].children;
	console.log(lis.length);
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick = function(){
			console.log(2);
			for (var i = 0; i < lis.length; i++) {
				lis[i].children[0].className = '';
				aboutme.className = '';
				dadachange.className = '';
			}
			this.children[0].classList.add('current');		
		}
	}
	lis[1].addEventListener('click',function () {
		
		aboutme.classList.add('showme');
		
	});
	lis[2].addEventListener('click',function () {
		
		dadachange.classList.add('dadachange');
		
	});
}