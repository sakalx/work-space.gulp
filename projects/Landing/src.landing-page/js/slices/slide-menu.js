//Slide menu
$(document).ready(function() {
	$(".main-nav__hamburger").click(function () {
		$(".main-nav__links").slideToggle();
		return false;
	});
});
