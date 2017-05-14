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
	$( ".az-tabs-product" ).tabs({ active: 0 });

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

	$('.az-pp-slider').owlCarousel({
		items: 2,
		dots: false,
		margin: 10,
		autoWidth:true
	});

	$(".az-pp-slide-link").click(function(){
		$(this).parents(".az-pp-item").toggleClass("on").find(".az-pp-slide").slideToggle(300);
		return false;
	});

	$(".az-pm-user-item").click(function(){
		if(window.matchMedia( "(min-width: 991px)" ).matches){
			$(".az-pm-user-item").removeClass("active");
			$(this).addClass("active");
		} else {
			$(".az-user-message").addClass("on");
		}
		return false;
	});

	$(".az-user-message-go-back").click(function(){
		$(".az-user-message").removeClass("on");
		return false;
	})

	$(".az-send-message textarea").keyup(function(e){
		$(this).height(5);
		$(this).height($(this).prop("scrollHeight") - parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")));
	});
	
	var az_textarea = $(".az-send-message textarea");

	az_textarea.height(az_textarea.prop("scrollHeight") - parseInt(az_textarea.css("padding-top")) - parseInt(az_textarea.css("padding-bottom")));

	$('.az-user-scroll').jScrollPane({
		autoReinitialise: true
	});

	var mess_scroll = $('.az-message-scroll');

	mess_scroll.jScrollPane({
		autoReinitialise: true,
		animateScroll: true
	});

	var jsp = mess_scroll.data('jsp');

	$('.scroll-pane').bind('jsp-initialised', function(event, isScrollable){
					jsp.scrollToY($(".az-message-list").height())
				}
			);

	$(".az-send-message form").submit(function(){
		var az_time = new Date();
		$(".az-message-list").append('<li class="az-message-item self">' +
					'<p>' + $(this).find("textarea").val() + '</p>' +
					'<time>' + az_time.getHours() + ':' + ((az_time.getMinutes()<10)?'0'+az_time.getMinutes():az_time.getMinutes()) + '</time>' +
				'</li>');
		az_textarea.val("").trigger("keyup");
		return false;
	});



});
