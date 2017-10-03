(function($){
	"use strict";

	$(window).load(function() {

		// Preloader
		$('.loader').fadeOut();
		$('.loader-mask').delay(350).fadeOut('slow');

		$(window).trigger("resize");

	});

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

	$(document).ready(function(){

		$(window).trigger("resize");
		initOwlCarousel();
		initTextrotator();
		initMasonry();

	});

	$('.match-height').matchHeight();

	/* Sticky Navigation
	-------------------------------------------------------*/
	$(window).scroll(function(){
		if ($(window).scrollTop() > 1 && $('.navbar-toggle').is(":hidden")){
			$('.navigation-overlay, .navigation, .nav-type-2').addClass("sticky");
			$('.logo-wrap').addClass("shrink");
		} else {
			$('.navigation-overlay, .navigation, .nav-type-2').removeClass("sticky");
			$('.logo-wrap').removeClass("shrink");
		}
	});


	/* Full Height Container / Dropdowns
	-------------------------------------------------------*/       
  
	$(window).resize(function(){
		
		container_full_height_init();
		initMasonry();

		var windowWidth = $(window).width();
		if (windowWidth <= 974) {
			$('.dropdown-toggle').attr('data-toggle', 'dropdown');
			$('.navigation').removeClass("sticky offset scrolling");
			$('.nav-type-2').removeClass("sticky");
		}
		if (windowWidth > 974) {
			$('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
			$('.dropdown').removeClass('open');
		}

		/* Mobile Menu Resize
		-------------------------------------------------------*/
		$(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
		
	});


	// Closes the Responsive Menu on Menu Item Click        
	$('.navigation-overlay').on('click','.navbar-collapse ul li a', function() {
		$(".navbar-collapse").collapse('hide');
	});


	// Smooth Scroll Navigation
	$('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});

	/* Search
	-------------------------------------------------------*/

	$('.search-trigger').on('click',function(e){
		e.preventDefault();
		$('.search-wrap').animate({opacity: 'toggle'},500);
		$('.nav-search').addClass("open");
		$('.search-wrap .form-control').focus();
	});

	$('.search-close').on('click',function(e){
		e.preventDefault();
		$('.search-wrap').animate({opacity: 'toggle'},500);
		$('.nav-search').removeClass("open");
	});

	function closeSearch(){
	  $('.search-wrap').fadeOut(200);
	  $('.nav-search').removeClass("open");
	}
	  
	$(document.body).on('click',function(e) {
		closeSearch();
	});

	$(".search-wrap, .search-trigger").on('click',function(e) {
		e.stopPropagation();
	});


	/* Bootstrap Dropdown Navigation
	-------------------------------------------------------*/
	"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.$element=a(b),this.$main=this.$element.closest(".dropdown, .dropup, .btn-group"),this.$menu=this.$element.parent(),this.$drop=this.$menu.parent().parent(),this.$menus=this.$menu.siblings(".dropdown-submenu");var d=this.$menu.find("> .dropdown-menu > "+c);this.$submenus=d.filter(".dropdown-submenu"),this.$items=d.not(".dropdown-submenu"),this.init()}var c=":not(.disabled, .divider, .dropdown-header)";return b.prototype={init:function(){this.$element.on({"click.bs.dropdown":this.click.bind(this),keydown:this.keydown.bind(this)}),this.$menu.on("hide.bs.submenu",this.hide.bind(this)),this.$items.on("keydown",this.item_keydown.bind(this)),this.$menu.nextAll(c+":first:not(.dropdown-submenu)").children("a").on("keydown",this.next_keydown.bind(this))},click:function(a){a.stopPropagation(),this.toggle()},toggle:function(){this.$menu.hasClass("open")?this.close():(this.$menu.addClass("open"),this.$menus.trigger("hide.bs.submenu"))},hide:function(a){a.stopPropagation(),this.close()},close:function(){this.$menu.removeClass("open"),this.$submenus.trigger("hide.bs.submenu")},keydown:function(a){if(/^(32|38|40)$/.test(a.keyCode)&&a.preventDefault(),/^(13|32)$/.test(a.keyCode))this.toggle();else if(/^(27|38|40)$/.test(a.keyCode))if(a.stopPropagation(),27==a.keyCode)this.$menu.hasClass("open")?this.close():(this.$menus.trigger("hide.bs.submenu"),this.$drop.removeClass("open").children("a").trigger("focus"));else{var b=this.$main.find("li:not(.disabled):visible > a"),c=b.index(a.target);if(38==a.keyCode&&0!==c)c--;else{if(40!=a.keyCode||c===b.length-1)return;c++}b.eq(c).trigger("focus")}},item_keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.$element.trigger("focus"))},next_keydown:function(a){if(38==a.keyCode){a.preventDefault(),a.stopPropagation();var b=this.$drop.find("li:not(.disabled):visible > a"),c=b.index(a.target);b.eq(c-1).trigger("focus")}}},a.fn.submenupicker=function(c){var d=this instanceof a?this:a(c);return d.each(function(){var c=a.data(this,"bs.submenu");c||(c=new b(this),a.data(this,"bs.submenu",c))})}});
	$('.dropdown-submenu > a').submenupicker();

	/* Mobile Navigation 
	-------------------------------------------------------*/
	$('.dropdown-toggle').on('click', function(e){
		e.preventDefault();
	});


	/* IE Detect
	-------------------------------------------------------*/
	if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }


	/* Text Rotator
	-------------------------------------------------------*/
	function initTextrotator(){

		$(".rotate").textrotator({
			animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
			separator: ",",
			speed: 3000 
		});
	}


	/* Mobile Detect
	-------------------------------------------------------*/
	if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
	   $("html").addClass("mobile");
	   $('.dropdown-toggle').attr('data-toggle', 'dropdown');
	}
	else {
		$("html").removeClass("mobile");
	}


	/* Isotope Filter
	-------------------------------------------------------*/
	$('.portfolio-filter').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });

		$('.portfolio-filter a').removeClass('active');
		$(this).closest('a').addClass('active');

	});


	/* Portfolio
	-------------------------------------------------------*/
	var $container = $('.works-grid');
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.work-item',
			layoutMode: 'fitRows',
			percentPosition: true,
			masonry: { columnWidth: '.work-img' }
		});
	});


	/* Masonry
	-------------------------------------------------------*/

	function initMasonry(){

		var $masonry = $('.masonry-grid');
		$masonry.imagesLoaded( function() {
			$masonry.isotope({
				itemSelector: '.work-item',
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: '.work-item.quarter'
				}
			});        
		});
	}


	/* Counters
	-------------------------------------------------------*/
	$('.statistic').appear(function() {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});


	/* Progress Bars
	-------------------------------------------------------*/
	var $section = $('#animated-skills').appear(function() {
	
		function loadDaBars() {
			var bar = $('.progress-bar');
			var bar_width = $(this);
			$(function(){
			  $(bar).each(function(){
				bar_width = $(this).attr('aria-valuenow');
				$(this).width(bar_width + '%');
			  });
			});
		}
		loadDaBars();
	});


	/* Pie Charts
	-------------------------------------------------------*/
	$(function() {
		$('.chart').appear(function() {

			$('.chart').easyPieChart({

				animate:{
				duration:1500,
				enabled:true
				},
				scaleColor:false,
				trackColor:'#f7f9fa',
				lineWidth: 5,
				size: 180,
				lineCap: 'square',

				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
			var chart = window.chart = $('.chart').data('easyPieChart');
			$('.js_update').on('click', function() {
				chart.update(Math.random()*200-100);
			});
		});
	});


	/* Accordion
	-------------------------------------------------------*/
	function toggleChevron(e) {
		$(e.target)
			.prev('.panel-heading')
			.find("a")
			.toggleClass('plus minus');
	}
	$('#accordion').on('hide.bs.collapse', toggleChevron);
	$('#accordion').on('show.bs.collapse', toggleChevron);

  	/* Tabs
  	-------------------------------------------------------*/
  	$('.tabs__link').on('click', function(e) {
	    var currentAttrValue = $(this).attr('href');
	    $('.tabs__content ' + currentAttrValue).stop().fadeIn(1000).siblings().hide();
	    $(this).parent('li').addClass('active').siblings().removeClass('active');
	    e.preventDefault();
  	});

	/* Lightbox popup
	-------------------------------------------------------*/

	$('.lightbox-gallery').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			titleSrc: 'title',
			verticalFit: true
		}
	});

	$(".lightbox-video").magnificPopup();
	

	/* Owl Carousel
	-------------------------------------------------------*/
	function initOwlCarousel(){
		(function($){
			"use strict";

			$("#owl-partners").owlCarousel({

				autoPlay: 3000,
				pagination: false,
				itemsCustom: [
				  [0, 2],      
				  [450, 2],
				  [700, 3],
				  [1000, 3],
				  [1200, 4],
				  [1400, 5],
				  [1600, 6]
				],

			})

			$("#owl-featured-works").owlCarousel({

				pagination: false,
				itemsCustom: [
				  [0, 1],      
				  [550, 2],
				  [700, 2],
				  [850, 3],
				  [1000, 3],
				  [1200, 4],
				  [1600, 5]
				],

			})

			// Owl Single
			$("#owl-single").owlCarousel({

				slideSpeed: 300,
				singleItem: true,
				paginationSpeed: 200,
				pagination: true,
				paginationNumbers: true

			});

			// Promo Section
			var owlPromo = $("#owl-promo");
			owlPromo.owlCarousel({
		 
				slideSpeed: 300,
				pagination: false,
				paginationSpeed: 400,
				singleItem: true
		 
			});

			// Blog Gallery Post
			var owlBlog = $("#owl-blog");
			owlBlog.owlCarousel({
			
				slideSpeed: 300,
				pagination: false,
				paginationSpeed: 400,
				itemsCustom: [
				  [0, 1],      
				  [450, 1],
				  [1200, 2],
				],
			
			});


			var owlRelated = $("#owl-related-works"); 
			owlRelated.owlCarousel({

			  slideSpeed: 300,
			  paginationSpeed: 400,
			  items: 3,
			  itemsDesktop: [1199,3],
			  itemsDesktopSmall: [979,3],
			  pagination: false

			});

			// Custom Navigation Events
			$(".next").on('click',function(){
				owlPromo.trigger('owl.next');
				owlBlog.trigger('owl.next');
				owlRelated.trigger('owl.next');
			})
			$(".prev").on('click',function(){
				owlPromo.trigger('owl.prev');
				owlBlog.trigger('owl.prev');
				owlRelated.trigger('owl.prev');
			});
			

			// Testimonials
			$("#owl-testimonials").owlCarousel({
		 
				navigation: false,
				slideSpeed: 300,
				pagination: true,
				paginationSpeed: 400,
				singleItem: true,
				autoPlay: false,
				stopOnHover: true
		 
			});

			// Owl Hero Slider
			//$("#owl-slider-one-img").owlCarousel({
			$(".info-tab-slider").owlCarousel({

				transitionStyle: "fadeUp",
				autoHeight: true,
				navigation: true,
				slideSpeed: 300,
				singleItem: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		 
			});


		})(jQuery);
	};


	/* Flexslider / Blog Masonry
	-------------------------------------------------------*/

	$('#one-img-slide').flexslider({
		animation: "slide",
		directionNav: true,
		touch: true,
		slideshow: false,
		prevText: ["<i class='fa fa-angle-left'></i>"],
		nextText: ["<i class='fa fa-angle-right'></i>"],
		start: function(){
			var $container = $('.masonry');
			$container.imagesLoaded( function() {
				$container.isotope({
					itemSelector: '.masonry-item',
					layoutMode: 'masonry'
				});
			});
		}
	});


	/* Full Height Container
	-------------------------------------------------------*/

	function container_full_height_init(){
		(function($){
			$(".container-full-height").height($(window).height());
		})(jQuery);
	}


	/* Wow Animations
	-------------------------------------------------------*/

	var wow = new WOW({
		offset: 50,
		mobile: false
	});

	wow.init();


	/* FitVIds
	-------------------------------------------------------*/
	$(".video-wrap").fitVids();


	/* ---------------------------------------------------------------------- */
	/*  Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit-message'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});


	/* Scroll to Top
	-------------------------------------------------------*/
	(function() {

		didScroll = false;
		document.querySelector( '#back-to-top' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 50 );
				}
			}, false );
		}
	});

	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$("#back-to-top").addClass("show");
		} else {
			$("#back-to-top").removeClass("show");
		}
	});

	$('a[href="#top"]').on('click',function(){
		$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
	});

})(jQuery);