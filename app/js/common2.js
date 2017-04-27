$(function() {
	$(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $('.az-menu-list').toggleClass("on");
      return false;
  });

	$( "#tabs" ).tabs({ active: 0 });
});
