/*=====================================================
	* Template Name    :  Digitum | Digital Marketplace Bootstrap Template
	* Author           		 :  themetum team
	* Version          		 :  1.0.0
	* Created          		 :  10 Oct, 2021
	* File Description 	 :  Main JS file	
======================================================*/

(function ($) {
	"use strict";
	
// preloader
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
});

$(document).ready(function() {
  $('.video-play-btn').magnificPopup({
	  type:'video',
	  });
	  
});

// ------------------------------------------------------------------------------ //
// Toggle Search
// ------------------------------------------------------------------------------ //
$(".header-transparent.sticky .icon-set").each(function(){  
	$("a.search", this).on("click", function(e){
		e.preventDefault();
		$(".top-search").slideToggle();
	});
});
$(".input-group-addon.close-search").on("click", function(){
	$(".top-search").slideUp();
});
			
//Mobile Menu 

/*=====| 2. Responsive Menu |=====*/

	  // main menu 
	  $('.main-menu-icon').click(function() {
		$('.menu').toggleClass('menu-open');
		$('.main-menu-icon').toggleClass('icon-cross');
		$('.menu ul').slideToggle();
		$('ul ul').css('display', 'none');
	  });
	  // Submenu
	  $('.menu ul li.has-children').click(function() {
		$(this).find('ul').slideToggle();
		$(this).siblings().find('ul').slideUp();
	  });

	  $(window).resize(function() {
		if($(window).width() > 1199) {
			$('ul').removeAttr('style');
		}
	  });



// scroll effect

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-transparent").removeClass("sticky-bar");
	} else {
		$(".header-transparent").addClass("sticky-bar");
	}
});


//testimonial		
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:2,
            nav:true
        }
    }
});

/* ==================================================
	# Fun Factor Init
===============================================*/
	
	$('.counter_area').appear(function() {
		$('.timer').countTo();
	}, {
		accY: -100
	});
		
	
// -----------------------------------------------------
	// ------------------   CURSOR    ----------------------
	// -----------------------------------------------------

	/*------------------------
	   Scroll to top
	-------------------------- */
	$(function () {
			$(window).on('scroll', function(){
				if ($(this).scrollTop() > 400) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			});
			
	$('#back-to-top').on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	

})(jQuery)	

	
	
	
	
	
	
	
	