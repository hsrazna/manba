$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$('.az-menu-list').toggleClass("on");
		return false;
	});

	$('.az-carousel').owlCarousel({
		items: 1,
		dots: true,
		margin: 10
	});
	
	$( "#tabs" ).tabs({ active: 0 });

	$(window).click(function(){
		$(".az-cat>li").removeClass("active");
	});

	$(".az-cat>li").click(function(event){
		event.stopPropagation();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		} else {
			$(".az-cat>li").removeClass("active");
			$(this).addClass("active");
		}
		return false;
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$("body").on("mousedown", ".az-order-input-wrap.password span", function(){
		if($(this).siblings("input[type=password]").length>0){
			$(this).siblings("input[type=password]").attr("type", "text");
		}else{
			// $(this).siblings("input").attr("type", "password");
		}
	});

	$("body").on("mouseup", ".az-order-input-wrap.password span", function(){
		if($(this).siblings("input[type=password]").length>0){
			// $(this).siblings("input[type=password]").attr("type", "text");
		}else{
			$(this).siblings("input").attr("type", "password");
		}
	});

	$("body").on("mouseout", ".az-order-input-wrap.password span", function(){
		if($(this).siblings("input[type=password]").length>0){
			// $(this).siblings("input[type=password]").attr("type", "text");
		}else{
			$(this).siblings("input").attr("type", "password");
		}
	});

	$(".az-order-input-wrap.password input").keyup(function(){
		if($(this).val().length>0){
			$(this).after("<span></span>");
		}else{
			$(this).siblings("span").remove();
		}
	});

});
