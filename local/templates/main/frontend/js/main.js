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
    if($(window).width() > 767) {
        $(".products-slider").owlCarousel({
            loop: true,
            items:1,
            nav:true,
            navText:[],
            dots:true,
            responsiveClass:false,
            animateIn: 'fadeIn', // add this
            animateOut: 'fadeOut' // and this
        });

    } else {
        $(".products-slider.owl-carousel").trigger('destroy.owl.carousel');
    }

    if($(window).width() < 1200){
        $('.expert').each(function (){

            $(this).find('.expert-text').appendTo($(this));

            /*let expImage     = $(this).find('.expert-image');
            let expWrapper   = $(this).find('.expert-wrapper');
            let expName      = $(this).find('.expert-name');
            let expInfo      = $(this).find('.expert-info');
            let expText      = $(this).find('.expert-text');

            let expNameInfoHeight = expName.height() + expInfo.height();

            let expMarginValue = expImage.height() - expNameInfoHeight + 30;

            expText.css('margin-top',expMarginValue);*/
        });
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
});