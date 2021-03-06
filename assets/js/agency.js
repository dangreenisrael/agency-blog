/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Original work Copyright 2013-2016 Start Bootstrap
 * Changes Copyright 2016 Droplet Development
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

jQuery(document).ready(function () {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    var navMain = jQuery('#nav-main');
    var navHeight = parseInt(navMain.height());

    jQuery(function() {
        jQuery('a.page-scroll').bind('click', function(event) {
            var target = jQuery(jQuery(this).attr('href'));
            var targetTop = target.offset().top;
            jQuery('html, body').stop().animate({
                scrollTop: targetTop-navHeight
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    var body = jQuery('body');
    body.scrollspy({
        offset: navHeight
    });

// Highlight the top nav as scrolling occurs
    body.scrollspy({
        target: '.navbar-fixed-top'
    });

// Closes the Responsive Menu on Menu Item Click
    var navBox = navMain.find('.navbar-mobilized');
    var menuToggle = jQuery('#toggleMenu');
    var backdrop = jQuery('#backdrop');
    var showingMenu = false;
    var hideOnBody = function () {
        setTimeout(function () {
            jQuery('body').one('click', function () {
                navBox.removeClass('show');
                backdrop.modal('hide');
            })
        }, 200);
    };
    menuToggle.on('click',function() {
        if(!showingMenu){
            showingMenu = true;
            navBox.addClass('show');
            backdrop.modal('show');
            hideOnBody();
        } else{
            showingMenu = false;
            navBox.removeClass('show');
            backdrop.modal('hide');
        }
    });
    navBox.find('a').click(function () {
        var item = jQuery(this);
        item.addClass('active');
        setTimeout(function (){
            item.removeClass('active');
        }, 500);
    });
});
