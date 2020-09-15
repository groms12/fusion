$(document).ready(function(){
    
    $(".header__href").click(function () {
        $('body, html').animate({scrollTop: $("header").height()+ 300}, 1500);
    });

    $(".header__text__span").click(function () {
        $('body, html').animate({scrollTop: $("header").height()+ 500}, 1500);
    });

    $(".mod").click(function () {
        $('body, html').animate({scrollTop: $("header").height()+ 3550}, 1500);
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