//footer menu
$(document).ready(function() {
	$(".myButton").click(function () {

		var effect	= 'slide',
		options		= { direction: 'left' },
		duration 	= 500;
		$('#myDiv').toggle(effect, options, duration);

	});

});
