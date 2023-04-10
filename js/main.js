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
        arrows: false,
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

    $('.popup .pop_right .pop_arrow').on('click', function () {
        $(this).toggleClass('on');
        $('.popup').toggleClass('on');
    })


    $('.header .bar').on('click', function () {$(function () {$(function () {

    // { 슬라이드
    $('.mainVisual .visual_slide').slick({
        dots: true,
        autoplay: true,
        arrows: true,

        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    $('.bu_content .bu_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        // asNavFor: '.bu_content .bu_nav'
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

    $('.popup .pop_right .pop_arrow').on('click', function () {
        $(this).toggleClass('on');
        $('.popup').toggleClass('on');
    })


    $('.header .bar').on('click', function () {
        $('.header, .header .bar').toggleClass('on');
    });

    $('.header .gnb>ul>li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');

    });

    $('.gnb').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

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

});


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
        arrows: false,
        dots: false,
        infinite: true,
        // asNavFor: '.bu_content .bu_nav'
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

    $('.popup .pop_right .pop_arrow').on('click', function () {
        $(this).toggleClass('on');
        $('.popup').toggleClass('on');
    })


    $('.header .bar').on('click', function () {
        $('.header, .header .bar').toggleClass('on');
    });

    $('.header .gnb>ul>li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');

    });



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

});

        $('.header, .header .bar').toggleClass('on');
    });

    $('.header .gnb>ul>li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');

    });



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

});
