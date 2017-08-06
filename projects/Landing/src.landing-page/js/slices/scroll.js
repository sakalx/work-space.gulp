/*add class with scroll*/

jQuery(document).ready(function($) {
	$(window).scroll(function() {
		var home 	= $(sc_home),
		services 	= $(sc_services),
		about    	= $(sc_about),
		work    	= $(sc_work),
		contact   	= $(sc_contact),

		posHome 	= home.offset(),
		posServices = services.offset(),
		posAbout    = about.offset(),
		posWork 	= work.offset(),
		posContact 	= contact.offset();

		/*changing bookmark Contact */
		/*changing bookmark Click */
		$('#sc_main-nav__home').click(function() {
			$('#sc_main-nav__home').addClass('s_sc_bounce_bottom');
		});
		/*changing bookmark Scrol */
		if ( ($(window).scrollTop() > posHome.top-250) && ($(window).scrollTop() < posServices.top-250) )
			$('#sc_main-nav__home').addClass('s_sc_bounce_bottom');
		else
			$('#sc_main-nav__home').removeClass('s_sc_bounce_bottom');


		/*changing bookmark Contact */
		/*changing bookmark Click */
		$('#sc_main-nav__serv').click(function() {
			$('#sc_main-nav__serv').addClass('s_sc_bounce_bottom');
		});
		/*changing bookmark Scrol */
		if ( ($(window).scrollTop() > posServices.top-250) && ($(window).scrollTop() < posAbout.top-250) )
			$('#sc_main-nav__serv').addClass('s_sc_bounce_bottom');
		else
			$('#sc_main-nav__serv').removeClass('s_sc_bounce_bottom');



		/*changing bookmark Contact */
		/*changing bookmark Click */
		$('#sc_main-nav__about').click(function() {
			$('#sc_main-nav__about').addClass('s_sc_bounce_bottom');
		});
		/*changing bookmark Scrol */
		if ( ($(window).scrollTop() > posAbout.top-250) && ($(window).scrollTop() < posWork.top-250) )
			$('#sc_main-nav__about').addClass('s_sc_bounce_bottom');
		else
			$('#sc_main-nav__about').removeClass('s_sc_bounce_bottom');


		/*changing bookmark Contact */
		/*changing bookmark Click */
		$('#sc_main-nav__work').click(function() {
			$('#sc_main-nav__work').addClass('s_sc_bounce_bottom');
		});
		/*changing bookmark Scrol */
		if ( ($(window).scrollTop() > posWork.top-250) && ($(window).scrollTop() < posContact.top-250) )
			$('#sc_main-nav__work').addClass('s_sc_bounce_bottom');
		else
			$('#sc_main-nav__work').removeClass('s_sc_bounce_bottom');


		/*changing bookmark Contact */
		/*changing bookmark Click */
		$('#sc_main-nav__cont').click(function() {
			$('#sc_main-nav__cont').addClass('s_sc_bounce_bottom');
		});
		/*changing bookmark Scrol */
		if ( $(window).scrollTop() > posContact.top-250)
			$('#sc_main-nav__cont').addClass('s_sc_bounce_bottom');
		else
			$('#sc_main-nav__cont').removeClass('s_sc_bounce_bottom');


		/*add animation for blocs */
		if ($(window).scrollTop() > posServices.top-150)
			$('.services__block').addClass('a_in-up').removeClass('a_out-up');
		else
			$('.services__block').removeClass('a_in-up').addClass('a_out-up');

		if ($(window).scrollTop() > posAbout.top-150) {
			$('#sc_about__blocks-r').addClass('a_in-right').removeClass('a_out-up');
			$('#sc_about__blocks-l').addClass('a_in-left').removeClass('a_out-up');
		}
		else {
			$('#sc_about__blocks-r').removeClass('a_in-right').addClass('a_out-up');
			$('#sc_about__blocks-l').removeClass('a_in-left').addClass('a_out-up');
		}
	});
});
