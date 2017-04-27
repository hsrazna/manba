$(function() {

	if($('.ah-catselect').length>0){

		$('.ah-catselect').selectpicker({
		  size: 4
		});

	}



});

$(function() {
	$(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $('.az-menu-list').toggleClass("on");
      return false;
  });

	$( "#tabs" ).tabs({ active: 0 });
});
