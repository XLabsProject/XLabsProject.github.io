(function ($) {
	"use strict";

	$(function () {
		var header = $(".start-style");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Animation

	$(document).ready(function () {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover

	$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
		if ($(window).width() > 750) {
			var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
			setTimeout(function () {
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			}, 1);
		}}
	);
	
	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});
	


	// Cleanup Menus
	
	$(".iw4x-menu").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".iw6x-menu").on('click', function () {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".s1x-menu").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".guides").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	});
	
	$(".socials").on('click', function () {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
	});

	// Clean up hover menus

	$('.iw4x-menu').mouseover(function() {
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });

	$('.iw6x-menu').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });
	  
	$('.s1x-menu').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });
	  
	$('.guides').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".socials").removeClass("open");
		$(".socials").removeClass("show");
	  });
	  
	$('.socials').mouseover(function() {
		$(".iw4x-menu").removeClass("open");
		$(".iw4x-menu").removeClass("show");
		$(".iw6x-menu").removeClass("open");
		$(".iw6x-menu").removeClass("show");
		$(".s1x-menu").removeClass("open");
		$(".s1x-menu").removeClass("show");
		$(".guides").removeClass("open");
		$(".guides").removeClass("show");
	  });

})(jQuery); 