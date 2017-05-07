$(function() {

	if($('.ah-catselect').length>0){

		$('.ah-catselect').selectpicker({
		  size: 4
		});

	}

	if($('.ah-catselect1').length>0){

		$('.ah-catselect1').selectpicker({
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

	if($('.ah-person-confid-title').length>0){

		$('.ah-person-confid-title').click(function(){
			$(this).siblings('.ah-person-confid-wrapp').slideToggle(600);
			return false;
		});

	}

	if($('.ah-history-span').length>0){

		$('.ah-history-span').click(function(){

			$(this).parent(".ah-history-rowtop").siblings(".ah-history-rowbottom").slideToggle(600);
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
	$( "#tabs2" ).tabs({ active: 0 });
	$( "#az-add-tabs" ).tabs({ active: 0 });

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

	jQuery("#az-slider").slider({
		min: parseInt($("input#minCost").val()),
		max: parseInt($("input#maxCost").val()),
		values: [parseInt($("input#startCost").val()),parseInt($("input#endCost").val())],
		range: true,
	    stop: function(event, ui) {
	    	jQuery(".ui-slider span:first").attr("data-price", jQuery("#az-slider").slider("values",0));
	    	jQuery(".ui-slider span:last").attr("data-price", jQuery("#az-slider").slider("values",1));
		},
		slide: function(event, ui){
	    	jQuery(".ui-slider span:first").attr("data-price", jQuery("#az-slider").slider("values",0));
	    	jQuery(".ui-slider span:last").attr("data-price", jQuery("#az-slider").slider("values",1));
		}
	}).draggable();

	jQuery(".ui-slider span:first").attr("data-price", jQuery("#az-slider").slider("values",0));
	jQuery(".ui-slider span:last").attr("data-price", jQuery("#az-slider").slider("values",1));

	$(".az-click").click(function(){
		$(this).toggleClass("on");
		var az_temp = $(this).siblings(".az-slide-block");
		if(az_temp.css("display") == "none"){
			az_temp.find(".az-filter-cat-more").removeClass("on").siblings(".az-slide-block").slideUp(0);
		}
		az_temp.slideToggle(300);

	});

	$(".az-filter-cat-more").click(function(){
		$(this).addClass("on");
		$(this).siblings(".az-slide-block").slideDown(0);
		return false;
	});

});
