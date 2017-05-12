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

	if($(".ah-cardprod-slider").length>0){

		$('.ah-cardprod-slider').owlCarousel({
	        items:1,
	        loop:false,
	        center:true,
	        margin:0,
	        nav: true,
	        navText:['<span class="arrow-left1"></span>','<span class="arrow-right1"></span>'],
	        URLhashListener:true,
	        autoplayHoverPause:true,
	        startPosition: 'URLHash'
	    });

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

	if($('.popup-with-move-anim').length>0){
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
	}

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

	$("body").on("keyup", ".az-prod-item-count", function(){
		$(this).siblings(".az-prod-item-notice").find(".az-prod-item-counted").text($(this).val().length);
	});

	$("#chooseGalleryImage").on('click', function(e) {
        e.preventDefault();
        $("#az-galary").find('.isNew').remove();
        var timestamp = new Date().valueOf();
        $("#az-galary").append('<input type="file" accept="image/*" name="village_photos[]" class="isNew" data-stamp="'+timestamp+'">');
        $("#az-galary").find('.isNew:last').on('change', function(e) {
            var fileList = e.target.files;
            if (fileList.length) {
                $("#az-galary").prepend(
                    '<div class="az-prod-photo">'+
                        '<img src="'+URL.createObjectURL(e.target.files[0])+'" alt="Фотогалерея">'+
                        '<a href="#" class="az-del-prod-photo delFileByStamp" data-stamp="'+timestamp+'">Удалить</a>'+
                    '</div>'
                );
                $(this).removeClass('isNew');
            }
        });
        $("#az-galary").find('.isNew:last').click();
    });

	$('#az-galary').on('click', '.delFileByStamp', function() {
        var timestamp = $(this).attr('data-stamp');
        if (timestamp) {
            $('input[data-stamp="'+timestamp+'"]').remove();
            $(this).parents(".az-prod-photo").remove();
        }
        return false;
    });

	$("#chooseGalleryImage2").on('click', function(e) {
        e.preventDefault();
        $("#az-galary2").find('.isNew').remove();
        var timestamp = new Date().valueOf();
        $("#az-galary2").append('<input type="file" accept="image/*" name="village_photos[]" class="isNew" data-stamp="'+timestamp+'">');
        $("#az-galary2").find('.isNew:last').on('change', function(e) {
            var fileList = e.target.files;
            if (fileList.length) {
                $("#az-galary2").prepend(
                    '<div class="az-prod-photo">'+
                        '<img src="'+URL.createObjectURL(e.target.files[0])+'" alt="Фотогалерея">'+
                        '<a href="#" class="az-del-prod-photo delFileByStamp" data-stamp="'+timestamp+'">Удалить</a>'+
                    '</div>'
                );
                $(this).removeClass('isNew');
            }
        });
        $("#az-galary2").find('.isNew:last').click();
    });

	$('#az-galary').on('click', '.delFileByStamp', function() {
        var timestamp = $(this).attr('data-stamp');
        if (timestamp) {
            $('input[data-stamp="'+timestamp+'"]').remove();
            $(this).parents(".az-prod-photo").remove();
        }
        return false;
    });



	;(function($){
		$.fn.datepicker.dates['ru'] = {
			days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
			daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
			daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			months: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
			monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			today: "Сегодня",
			clear: "Очистить",
			format: "dd.mm.yyyy",
			weekStart: 1,
	    monthsTitle: 'Месяцы'
		};
	}(jQuery));

	$('.datepicker').datepicker({
	    // startDate: '-3d',
	    language: 'ru',
	    leftArrow: '<span>asd</span>',
	    rightArrow: '<span>dsa</span>'
	});

	$("#addNewService").on('click', function(e) {
        e.preventDefault();
        $("#addNewServiceWrap").append(''+
		        						'<div class="az-new-service">'+
											'<div class="az-product-item">'+
												'<input type="text" placeholder="Название услуги*" maxlength="80" class="az-prod-item-count" name="newServiceName[]">'+
												'<span class="az-prod-item-notice">Ввели <span class="az-prod-item-counted">0</span> из 80 символов</span>'+
											'</div>'+
											'<div class="az-service-item">'+
												'<input type="text" value="50" name="newServiceValue[]">'+
												'<span>TJS</span>'+
												'<div class="az-order-select">'+
													'<select class="ah-catselect" name="newServicetime[]">'+
													  '<option>В час</option>'+
													  '<option>В день</option>'+
													  '<option>В неделю</option>'+
													'</select>'+
												'</div>'+
											'</div>'+
											'<a href="#" class="az-new-service-del az-bascet-del">Удалить услугу</a>'+
										'</div>'
							        );

        $('.ah-catselect').selectpicker({
		  size: 4
		});
    });

	$('#addNewServiceWrap').on('click', '.az-new-service-del', function(e) {
        e.preventDefault();
		$(this).parents(".az-new-service").remove();
	});

	// alert(1);
	$('.az-pp-slider').owlCarousel({
		items: 3,
		dots: false,
		margin: 10
	});
});
