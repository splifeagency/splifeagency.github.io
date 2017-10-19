$(function() {

    /* Products Filter
    -------------------------------------------------------*/
    $('.tovars-filter').on( 'click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $('.tovars-grid').isotope({ filter: filterValue });

        $('.tovars-filter a').removeClass('active');
        $(this).closest('a').addClass('active');

    });

    /* Products
    -------------------------------------------------------*/
    $('.tovars-grid').imagesLoaded( function() {
        $('.tovars-grid').isotope({
            itemSelector: '.tovar-item',
            layoutMode: 'fitRows',
            percentPosition: true
            /*masonry: { columnWidth: '.work-img' }*/
        });
    });

    /* Brands
    -------------------------------------------------------*/
    $('.brands').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items: 2
            },
            320:{
                items: 2
            },
            480:{
                items: 3
            },
            576:{
                items: 4
            },
            768:{
                items: 4
            },
            992:{
                items: 6
            },
            1200:{
                items: 6
            }

        }
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

    /* Mobile menu
    -------------------------------------------------------*/
    $("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black', 'fx-listitems-fade'],
        navbar: {
            title: '<img src="img/logo.png" alt="" />'
        },
        offCanvas: {
            position: 'left'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });

    /* Top button
    -------------------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        }
        else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0},'slow','swing');
    })

});