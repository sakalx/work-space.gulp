/*add class with scroll for big screen*/
$(window).on('load resize', windowSize);
function windowSize() {
    if ($(window).width() >= '800') {

        var home = $(sc_home),
            about = $(sc_about),
            portfolio = $(sc_portfolio),
            features = $(sc_features),
            blog = $(sc_blog),
            shortcodes = $(sc_shortcodes),

            posHome = home.offset(),
            posAbout = about.offset(),
            posPortfolio = portfolio.offset(),
            posFeatures = features.offset(),
            posBlog = blog.offset(),
            posShortcodes = shortcodes.offset();

        // hide elements with animation
        $('#sc_anime-r').addClass('zoomOutRight');
        $('#sc_anime-l').addClass('zoomOutLeft');
        $('.portfolio__item').addClass('rotateOut');
        $('#sc_anime-f').addClass('fadeOutLeft');
        $('#sc_anime-l2').addClass('fadeOutLeft');
        $('#sc_anime-r2').addClass('fadeOutRight');

        $('#sc_main-menu__home').addClass('s_sc_arrow-bottom');

        $(window).scroll(function () {
            // changing bookmark when Scrol && add animation
            if (($(window).scrollTop() > posHome.top - 200) && ($(window).scrollTop() < posAbout.top - 500))
                $('#sc_main-menu__home').addClass('s_sc_arrow-bottom');
            else
                $('#sc_main-menu__home').removeClass('s_sc_arrow-bottom');
            /*_______________________________________________________*/
            // changing bookmark when Scrol && add animation
            if (($(window).scrollTop() > posAbout.top - 500) && ($(window).scrollTop() < posPortfolio.top - 200))
                $('#sc_main-menu__about').addClass('s_sc_arrow-bottom') &&
                $('#sc_anime-r').addClass('zoomInRight').removeClass('zoomOutRight') &&
                $('#sc_anime-l').addClass('zoomInLeft').removeClass('zoomOutLeft');
            else
                $('#sc_main-menu__about').removeClass('s_sc_arrow-bottom') &&
                $('#sc_anime-r').addClass('zoomOutRight').removeClass('zoomInRight') &&
                $('#sc_anime-l').addClass('zoomOutLeft').removeClass('zoomInLeft');
            /*_______________________________________________________*/
            // changing bookmark when Scrol && add animation
            if (($(window).scrollTop() > posPortfolio.top - 200) && ($(window).scrollTop() < posFeatures.top - 100))
                $('#sc_main-menu__portfolio').addClass('s_sc_arrow-bottom') &&
                $('.portfolio__item').addClass('rotateIn').removeClass('rotateOut');
            else
                $('#sc_main-menu__portfolio').removeClass('s_sc_arrow-bottom') &&
                $('.portfolio__item').addClass('rotateOut').removeClass('rotateIn');
            /*_______________________________________________________*/
            // changing bookmark when Scrol && add animation
            if (($(window).scrollTop() > posFeatures.top - 100) && ($(window).scrollTop() < posBlog.top - 100))
                $('#sc_main-menu__features').addClass('s_sc_arrow-bottom') &&
                $('#sc_anime-f').addClass('fadeInLeft').removeClass('fadeOutLeft');
            else
                $('#sc_main-menu__features').removeClass('s_sc_arrow-bottom') &&
                $('#sc_anime-f').addClass('fadeOutLeft').removeClass('fadeInLeft');
            /*_______________________________________________________*/
            // changing bookmark when Scrol && add animation
            if (($(window).scrollTop() > posBlog.top - 100) && ($(window).scrollTop() < posShortcodes.top + 300))
                $('#sc_main-menu__blog').addClass('s_sc_arrow-bottom');
            else
                $('#sc_main-menu__blog').removeClass('s_sc_arrow-bottom');
            /*_______________________________________________________*/
            // changing bookmark when Scrol && add animation
            if ($(window).scrollTop() > posShortcodes.top + 300)
                $('#sc_main-menu__shortcodes').addClass('s_sc_arrow-bottom') &&
                $('#sc_anime-l2').addClass('fadeInLeft').removeClass('fadeOutLeft') &&
                $('#sc_anime-r2').addClass('fadeInRight').removeClass('fadeOutRight');
            else
                $('#sc_main-menu__shortcodes').removeClass('s_sc_arrow-bottom') &&
                $('#sc_anime-l2').addClass('fadeOutLeft').removeClass('fadeInLeft') &&
                $('#sc_anime-r2').addClass('fadeOutRight').removeClass('fadeInRight');
        });
    }
}