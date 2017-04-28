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

	
});
