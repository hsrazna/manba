$(function() {

	if($('.ah-catselect').length>0){

		$('.ah-catselect').selectpicker({
		  size: 4
		});

	}

	if($('.ah-sidebar-list').length>0){

		$('.ah-sidebar-list li').click(function(){
			// $(this).css("background","url(../img/ah-selarr1.png) right center no-repeat");
			$(this).find('.ah-sidebar-sublist').slideToggle(300);
			return false;
		});

	}

	if($("#progressbar").length>0){
		$( "#progressbar" ).progressbar({value: 85});
	}
});

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
