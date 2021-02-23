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
    if($(window).width() > 767) {
        $(".other-products__slider").owlCarousel({
            loop: true,
            items:3,
            nav:true,
            navText:[],
            dots:false,
            responsiveClass:false
        });

    } else {
        $(".other-products__slider").trigger('destroy.owl.carousel');
    }

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

    $('.question-button').on('click', function(e){
        e.preventDefault()
        $('.modal').toggleClass('open');
        $('body').toggleClass('modalopen');
        $('.modal-overlay').on('click', function(){
            $('.modal').removeClass('open');
            $('body').removeClass('modalopen');
        })
    })
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