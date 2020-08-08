$(document).ready(function(){
    $(".header__href").click(function (event) {
        $('body, html').animate({scrollTop: $("header").height()+ 300}, 1500);
    });

    $(document).scroll(function(){  //функция прокрутки страницы наверх
        if($(document).scrollTop() > 70) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });
    
    // плавная прокрутка кнопки наверх
    $('.scroll-top').click(function(){
        $('html').animate({scrollTop: 0}, 1000);
        $('body').animate({scrollTop: 0}, 1000);
        // console.log($('body').scrollTop);
        return false;
    });

});