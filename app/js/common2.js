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



});
