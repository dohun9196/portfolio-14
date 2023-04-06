$(function () {

    // { 슬라이드
    $('.mainVisual .visual_slide').slick({
        dots: true,
        autoplay: true,
        arrows: true,

        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    $('.bu_content .bu_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        asNavFor: '.bu_content .bu_nav'
    });
    $('.bu_content .bu_nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.bu_content .bu_sl',
    });

    // 슬라이드 }

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });


    $('.top_btn a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $("#top_btn").scrollTop(0);

    $('.popup .pop_right .pop_arrow').on('click', function () {
        $(this).toggleClass('on');
        $('.popup').toggleClass('on');
    })

    //쿠키설정    

    // $('.popup .pop_left .close').on('click', function () {
    //     $('.popup .pop_left').hide();
    // });

    // var getCookie = $.cookie('.popup .pop_left');

    // if (!getCookie) {
    //     $('.popup .pop_left').show();
    // }
    // $('.popup .pop_left input').on('change', function () {
    //     $.cookie('popup .pop_left', 'value', { expires: 1 });
    //     $('.popup .pop_left').hide();
    // });
});
