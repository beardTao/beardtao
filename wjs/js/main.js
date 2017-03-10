/**
 * Created by lintao on 2017/3/6.
 */
$(function(){
	function resize(){
		var windowWidth = $(window).width();
		// console.log(2);
		var isSmallScreen = windowWidth < 768;
		$("#main_ad > .carousel-inner > .item").each(function(index,item){
			var $item = $(item);
			var imgSrc =
        isSmallScreen ? $item.data('img-sm') : $item.data('img-lg');
			/*console.log($item.data("img-sm") )
			console.log($item.data("img-lg") )
			console.log(imgSrc);*/
			$item.css('backgroundImage', 'url("' + imgSrc + '")');
			if (isSmallScreen) {
				$item.html('<img src="'+imgSrc +'" alt=""/>');
			}
			else{
				$item.empty();
			}

		})
		$nav_tab = $("#nav_tab");
	var width = 30;
	// console.log($nav_tab.width());
	$nav_tab.children().each(function(index,ele){
		width += $(ele).width();
	})
	if (width > $nav_tab.parent().width()) {
		$nav_tab
		.css("width",width)
		.parent().css("overflow-x","scroll")
	}else{
		$nav_tab
		.css("width","auto")
		.parent().css("overflow-x","hidden")
	}

	}
	$(window).on("resize",resize).trigger("resize");
	//初始化tooltip插件
	 $('[data-toggle="tooltip"]').tooltip();
	
	
});