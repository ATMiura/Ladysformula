/* wow js */
$(document).ready(function (){
    new WOW().init();

    $(".comments-slider").owlCarousel({
        loop: true,
        items:1,
        nav:true,
        navText:[],
        dots:true,
        responsiveClass:false,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });

    $(".other-products__slider").owlCarousel({
        loop: true,
        items:3,
        nav:true,
        navText:[],
        dots:false,
        responsiveClass:false
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        items:1,
        nav:true,
        navText:[],
        dots:true,
        responsiveClass:false,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
    });
    if($(window).width() > 420) {
        $(".products-slider").owlCarousel({
            loop: true,
            items:1,
            nav:true,
            navText:[],
            dots:true,
            responsiveClass:false
        });

    } else {
        $(".products-slider.owl-carousel").trigger('destroy.owl.carousel');
    }
})

$(document).on('click','[data-modal-name]', function(e){
    e.preventDefault();

    var modalName = $(this).data('modal-name');

    $('.modal[data-modal="'+modalName+'"]').toggleClass('open');
    $('body').toggleClass('modalopen');
});

$(document).on('click', '.modal-overlay', function(){
    $('.modal').removeClass('open');
    $('body').removeClass('modalopen');
})

/* бургер */
$(document).on('click', '.burger-wrapper', function(){
    $('#menu').toggleClass('active');
})

$(document).click(function(event) {
    var $target = $(event.target);
    if(!$target.closest('.header-nav__burger').length &&
        $('#menu').is(":visible")) {
        $('#menu').removeClass('active');
    }
});

$(document).on('click','.rating-opener', function (){
    $('.section-efficiency').fadeToggle('fast');
    //$(this).parents('.rating-info').find('.rating-sub-text').fadeToggle('fast');
})