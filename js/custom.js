$(document).ready(function () {

    
    $(window).scroll(function(){
        var Scrolling = $(this).scrollTop();
        console.log(Scrolling);
        if(Scrolling > 150){
            $("nav").addClass("menufixed");
        }
        else{
            $("nav").removeClass("menufixed");
        }
    });


    $('.banner-slide').slick({
        arrows: false,
        autoplay: true,
    });

    $('.service-slide').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    lightbox.option({
        disableScrolling: true,
        positionFromTop: 200,
    });

    $(".toptoup").click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    });
});