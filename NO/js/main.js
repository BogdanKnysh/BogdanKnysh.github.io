$(function(){
    $('.girl1__slider').slick({
        arrows: false,
        vertical: true,
        dots: true, 
        loop: false,
        dotsClass: 'header-dots',
        asNavFor: '.circle__slider',
    });
    $('.circle__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.girl1__slider',
        focusOnSelect: true, 
    });
    $('.girl2__slider').slick({
        arrows: false,
        vertical: true,
        dots: true, 
        loop: false,
        dotsClass: 'header-dots',
        asNavFor: '.circle1__slider',
    });
    $('.circle1__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.girl2__slider',
        focusOnSelect: true, 
    });
    $('.girl3__slider').slick({
        arrows: false,
        vertical: true,
        dots: true, 
        loop: false,
        dotsClass: 'header-dots',
    });
    $('.men3__slider').slick({
        arrows: false,
        vertical: true,
        dots: true, 
        loop: false,
        dotsClass: 'header-dots1',
        asNavFor: '.circle3__slider',
    });
    $('.circle3__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.men3__slider',
        focusOnSelect: true, 
    });
    new WOW().init();
});