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
