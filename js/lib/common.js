/* Common JS */
$(document).ready(function() {

    //for IE9
    svg4everybody();

    // detect phone/tablet
    var md = new MobileDetect(window.navigator.userAgent);
    console.log(md.phone());
    console.log(md.tablet());

    // check orientation device
    function isPortrait() {
        return window.innerHeight > window.innerWidth;
    };

    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        if (isPortrait()) {
            // code here
        }
    }, false);

    // Clear placeholder
    (function() {
        var el = $('input, textarea');
        el.focus(function() {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function() {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }());

    // wow js

    wow = new WOW({
        mobile: false
    })
    wow.init();

    // slider
    $('.js-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
    });

    // video popup

    (function() {
        var videoBtn = $('.js-about-video'),
            videoPopup = $('.js-about-popup'),
            closeBtn = $('.js-about-close');

        videoPopup.on('click', function(e) {
            if (!$(e.target).hasClass('about__popup-video')) {
                $('body').removeClass('is-active');
                $(this).find('video').get(0).pause();
                $(this).fadeOut();
            }
        });

        videoBtn.on('click', function() {
            $('body').addClass('is-active');
            $(this).siblings(videoPopup).fadeIn().find('video').get(0).play();
        });

        closeBtn.on('click', function() {
            $('body').removeClass('is-active');
            $(this).siblings('video').get(0).pause();
            $(this).closest(videoPopup).fadeOut();
        });
    })();

    // actions popup

    (function() {
        var actionBtn = $('.js-actions-btn'),
            actionsPopup = $('.js-actions-popup'),
            closeBtn = $('.js-actions-close');

        actionBtn.on('click', function() {
            $(this).next(actionsPopup).fadeIn();
        });
    
        closeBtn.on('click', function() {
            $(this).closest(actionsPopup).fadeOut();
        });

    })();


    // team counter

    $(function() {
        if ($('body').is('.main-page')) {
            var show = true;
            var countbox = ".team";
            $(window).on("scroll load resize", function() {

                if (!show) return false;

                var w_top = $(window).scrollTop();
                var e_top = $(countbox).offset().top;

                var w_height = $(window).height();
                var d_height = $(document).height();

                var e_height = $(countbox).outerHeight();

                if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $(".js-number").spincrement({
                        duration: 1500,
                        thousandSeparator: false
                    });

                    show = false;
                }
            });
        };
    });
});

// navigation

$('.js-hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('.header__nav').toggleClass('is-active');
});

// range slider

$(function() {
    $("#range").slider({
        // orientation: "vertical",
        step: 5,
        min: 0,
        max: 500,
        values: [180],
        slide: function(event, ui) {
            $("#area").val(ui.values[0]);
        }
    });
    $("#area").val($("#range").slider("values", 0));

    $("input#area").change(function() {
        var value = $("input#area").val();

        $("input#area").val(value);

        $("#range").slider("values", 0, value);
    });

    jQuery('#area').keypress(function(event) {
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);

        if (!/\d/.test(keyChar)) return false;

    });

});