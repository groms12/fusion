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

});