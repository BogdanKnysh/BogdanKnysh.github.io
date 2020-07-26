$(function(){
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true, /*підключення кнопок перемикання*/
        dotsClass: 'header-dots', /*авторський клас кнопок перемикання*/
        autoplay: 2000 /*через 2с перемикається слайдер*/
    });
    $('.menu__btn').on('click', function(){ /*клацання на бургер menu__btn і випадання меню*/
        $('.menu__list').slideToggle();
    });
});