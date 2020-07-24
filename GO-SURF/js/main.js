$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/Shape.svg" alt="">', /*стрілка перемикання вправо*/
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/Shape Copy.svg" alt="">', /*стрілка перемикання вліво*/
        asNavFor: '.slider-dotshead', /*встановлення взаємозалежності між слайдерами*/
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider', /*встановлення взаємозалежності між слайдерами*/
        responsive: [ /*для адаптиву*/
            {
                breakpoint: 961, /*розширення, до якого буде спрацьовувати */
                settings: "unslick"
            },
        ]  
    });

    $('.serf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/Shape.svg" alt="">', /*стрілка перемикання вправо*/
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/Shape Copy.svg" alt="">', /*стрілка перемикання вліво*/
        asNavFor: '.slider-map',
        responsive: [ /*для адаптиву*/
            {
                breakpoint: 1210, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 3, /*3 слайди видно*/
                }
            },
            {
                breakpoint: 900, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 720, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                }
            },
            {
                breakpoint: 426, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 1, 
                    centerMode: false,
                }
            },
        ] 
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider', 
        focusOnSelect: true, /*при натисканні на елемент слайдера slider-map стає активним елемент слайдера serf-slider*/
        responsive: [ /*для адаптиву*/
            {
                breakpoint: 1103, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 3, /*3 слайди видно*/
                }
            },
            {
                breakpoint: 900, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 720, /*розширення, до якого буде спрацьовувати */
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/Shape.svg" alt="">', /*стрілка перемикання вправо*/
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/Shape Copy.svg" alt="">', /*стрілка перемикання вліво*/
        asNavFor: '.slider-dotshead', /*встановлення взаємозалежності між слайдерами*/
    });

    /*підрахунок днів та друзів*/
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/Minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function(){
        var spinner=$(this),
        input=spinner.find('input[type="number"]'),
        btnUp=spinner.find('.quantity-up'),
        btnDown=spinner.find('.quantity-down'),
        min=input.attr('min'),
        max=input.attr('max');
        btnUp.click(function(){
            var oldValue=parseFloat(input.val());
            if (oldValue>=max) {
                var newVal=oldValue;
            } else {
                var newVal=oldValue+1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.click(function(){
            var oldValue=parseFloat(input.val());
            if (oldValue<=min) {
                var newVal=oldValue;
            } else {
                var newVal=oldValue-1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    /*підрахунок днів та друзів*/

    /*рахування ціни*/
    $('.quantity-button').on('click', function(){
        var parents = $(this).parents('.holder-slider__info');
        let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * ($('.guests', parents).val()-1);
        $('.summ', parents).html('$' + summ);
    });
    let summ=$('.nights').val()*$('.summ').data('nights')+($('.guests').val()-1)*$('.summ').data('guests');
    $('.summ').html('$'+summ);
    /*рахування ціни*/

    $('.surfboard-box__circle').on('click', function(){ /*при натисканні стає - */
        $(this).toggleClass('active') /*додається клас active, який створює - */
    });

    $('.menu-btn').on('click', function(){ /*меню*/
        $('.menu').toggleClass('active')  
    });

    new WOW().init(); /*запуск режиму анімації*/
});