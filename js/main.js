$(document).ready(function(){
    
    $(".header__text__span").click(function () {
        $('body, html').animate({scrollTop: $("header").height()+ 500}, 1500);
    });

    $(".mod").click(function () {
        $('body, html').animate({scrollTop: $("header").height()+ 3750}, 1500);
    });
 
    $(".header__href__img").click(function () {
        $('body, html').animate({scrollTop: $("header").height()+ 300}, 1500);
    });

    $(".services__info__text__span").click(function () {
        $(".service").addClass("services--nonactive");
        $(".open-service").removeClass("services--nonactive");
    });

    $(".services__info__text__span__strategy").click(function () {
        $(".open-services-2__text").text("Strategy.");
    });
    $(".services__info__text__span__branding").click(function () {
        $(".open-services-2__text").text("Branding.");
    });
    $(".services__info__text__span__design").click(function () {
        $(".open-services-2__text").text("Design.");
    });
    
    $(".open-services__back").click(function () {
        $(".service").removeClass("services--nonactive");
        $(".open-service").addClass("services--nonactive");
    });

    $(".portfolio__info__slides__text").click(function () {
        $(".portfolio__info").addClass("portfolio__info--nonactive");
        $(".portfolio__text").addClass("portfolio__text--nonactive");
        $(".portfolio__back").removeClass("portfolio__back--nonactive");
        $(".swiper-container-s1").removeClass("swiper-container-s1--before");
    });

    $(".portfolio__back").click(function () {
        $(".portfolio__info").removeClass("portfolio__info--nonactive");
        $(".portfolio__text").removeClass("portfolio__text--nonactive");
        $(".portfolio__back").addClass("portfolio__back--nonactive");
        $(".swiper-container-s1").addClass("swiper-container-s1--before");
    });

    $(".portfolio__project__back__text").click(function () {
        $(".portfolio-1").removeClass("portfolio-1--nonactive");
        $(".portfolio__project").addClass("portfolio__project--nonactive");
    });

    $(".portfolio__info__details__text").click(function () {
        $(".portfolio-1").addClass("portfolio-1--nonactive");
        $(".portfolio__project").removeClass("portfolio__project--nonactive");
    });

    $(document).scroll(function(){  //функция прокрутки страницы наверх
        if($(document).scrollTop() > 300) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });
    
    // плавная прокрутка кнопки наверх
    $('.scroll-top').click(function(){
        $('html').animate({scrollTop: 0}, 1000);
        $('body').animate({scrollTop: 0}, 1000);
        return false;
    });

     // создание слайдеров
     var mySwiper = new Swiper ('.swiper-container-s1', {
        loop: true,
        preloadImages: false,initialSlide: 2,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass:'swiper__pagination__img',            
            bulletActiveClass: 'swiper__pagination__img--active',
          },
    });

    var mySwiper1 = new Swiper ('.swiper-container-s2', {
        loop: true,
        preloadImages: false,
        lazy: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination1',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
    });

});