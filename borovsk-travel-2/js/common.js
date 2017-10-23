$(function() {

    /* Preloader
    -------------------------------------------------------*/
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');

    /* Sticky Navigation
    -------------------------------------------------------*/
    $(window).scroll(function(){
        if ($(window).scrollTop() > 1) {
            $('.top-line').addClass("sticky");
        } else {
            $('.top-line').removeClass("sticky");
        }
    });

    /* Mobile Menu
    -------------------------------------------------------*/
    $(".mobile-menu-icon").click(function() {
        $(".navigation-modal").fadeToggle("slow");
        $('.hamburger').toggleClass('is-active');
    });
    $(".navigation-modal a").click(function() {
        $(".navigation-modal").fadeToggle("slow");
        $('.hamburger').toggleClass('is-active');
    });



    /* Carousels
    -------------------------------------------------------*/
    $(".carousel-single").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: true,
        smartSpeed: 700,
        animateOut: 'zoomOut',
        animateIn: 'fadeIn',
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    $(".carousel-testimonials").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 700
    });

    /* Tabs
    -------------------------------------------------------*/
    $(".information-tab-title a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".information-tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    /* Smooth Scroll Navigation
    -------------------------------------------------------*/
    $('.local-scroll').localScroll({
        offset: {top: -20},
        duration: 800
    });
    function scrollActiveMenu(){
        var scroll_top = $(document).scrollTop();
        $(".nav a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if ( (target.position().top - 30 <= scroll_top) && (target.position().top + target.outerHeight() - 30 > scroll_top) ) {
                $(".nav li.active").parent().removeClass("active");
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });
    }
    $(document).on("scroll", scrollActiveMenu);

    /* Top Scroll Navigation
    -------------------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.back-to-top').addClass('active');
        }
        else {
            $('.back-to-top').removeClass('active');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').stop().animate({scrollTop: 0},'slow','swing');
    })

    /* Callback
    -------------------------------------------------------*/
    $("a[href='#callback']").magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    /* Wow Animations
    -------------------------------------------------------*/
    var wow = new WOW({
        offset: 50,
        mobile: false
    });
    wow.init();

});