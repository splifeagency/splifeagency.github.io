$(function() {

    /* Portfolio
    -------------------------------------------------------*/
    $('.portfolio-items').owlCarousel({
        loop: true,
        margin: 0,
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
                items: 4
            }

        }
    })


    /* Portfolio
    -------------------------------------------------------*/
    $('.clients-items').owlCarousel({
        loop: true,
        margin: 19,
        nav: false,
        dots: true,
        smartSpeed: 700,
        //navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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


})


jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});