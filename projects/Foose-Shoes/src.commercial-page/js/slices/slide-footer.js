//footer menu
$(document).ready(function() {
	$("#sc_footer-add__btn").click(function () {

		var effect	= 'slide',
		options		= { direction: 'left' },
		duration 	= 500;
		$('.footer-add').toggle(effect, options, duration);

	});

});
