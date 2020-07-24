$(function () {
	/*постіне верхнє меню при прокрутці*/
	let header = $("#header");
	let intro = $("#intro");
	let introH; 
	let scrollPos = $(window).scrollTop(); /*позиція прокручування вікна*/
	$(window).on("scroll load resize", function() { /*слідкування за прокручуванням вікна і здійснення дій*/
		introH = intro.innerHeight(); /*висота блоку intro*/
		scrollPos = $(this).scrollTop(); /*оновлення поточної позиції вікна*/
		if (scrollPos > introH) {
			header.addClass("fixed"); /*додати до header клас fixed*/
		} else {
			header.removeClass("fixed"); /*забрати до header клас fixed*/
		}
	});

	/*клацання на пункт меню і перехід в потрібне місце*/
	$("[data-scroll]").on("click", function(event) { /*вибірка елементів з атрибутом data-scroll по кліку*/
		event.preventDefault(); /*відміна стандартної поведінки адреси*/
		let elementId = $(this).data('scroll'); /*назва змінної, через яку відбувається перенесення*/
		let elementOffset = $(elementId).offset().top; /*отримання відступу offset елемента elementId від верху top*/
		nav.removeClass("show"); /*зникнення випадаючого меню після кліку по ньому*/
		$("html, body").animate({ /*плавне перенесення*/
			scrollTop: elementOffset-70
		}, 700); /*час спрацювання 700 мс*/
	});

	/*випадаюче меню з бургера*/
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	navToggle.on("click", function(event) { /*вибірка елементів по id navToggle по кліку*/
		event.preventDefault(); /*відміна стандартної поведінки*/
		nav.toggleClass("show"); /*показувати меню*/
	});
		
	/*слайдер*/
	let slider = $("#reviewsSlider");
	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
});