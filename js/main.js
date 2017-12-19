;(function($) {
	"use strict";

		var teamSlider = $('.ba-slider');
		teamSlider.slick({
			variableWidth: true,
			slidesToShow: 1,
			slide: '.ba-slide',
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next'
		});
})(jQuery);

