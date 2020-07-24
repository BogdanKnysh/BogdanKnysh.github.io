$(function(){
	
	$('.slider__inner, .news__slider-inner').slick({ /*підключення slider*/
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false /*заборона на зациклення*/
});

$('select').styler(); /*підключення значка випадаючого списку*/

$('.header__btn-menu').on('click', function(){ /*для бургера*/
	$('.menu ul').slideToggle();
});

}); 