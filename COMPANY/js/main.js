$(function(){
    $('.car__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left wow fadeInLeft" data-wow-offset="400" src="img/Arrow6.svg" alt="">', /*стрілка перемикання вправо*/
        nextArrow: '<img class="slider-arrows slider-arrows__right wow fadeInRight" data-wow-offset="100" src="img/Arrow9.svg" alt="">', /*стрілка перемикання вліво*/
        
    });    
    $('.nav__btn').on('click', function(){ 
        $('.nav__menu').slideToggle();
    });
    new WOW().init();
});