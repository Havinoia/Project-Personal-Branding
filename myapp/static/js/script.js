$(window).on("load", function() {

    "use strict";

    //Clear URL On Page Refresh
    var loc = window.location.href,
        index = loc.indexOf('#');

    if (index > 0) {
        window.location = loc.substring(0, index);
    }

    /* ===================================
        Page Piling
    ====================================== */
    if ($(window).width() < 1580) {
        $('.pagedata').removeAttr('id');
        $('html, body').css('overflow-y', 'scroll');

    } else {
        $('#pagepiling').pagepiling({
            direction: 'vertical',
            sectionsColor: ['#171717', '#171717', '#171717', '#171717', '#171717', '#171717'],
            anchors: ['home', 'about', 'timeline', 'portfolio', 'testimonial', 'contact'],
            scrollingSpeed: 500,
            easing: 'linear',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'bulletsColor': '#535353',
                'position': 'right',
                'tooltips': ['Home', 'About', 'Career Timeline', 'Portfolio', 'Testimonials', 'Contact'],
            },
            //events
            onLeave: function(index, nextIndex, direction) {
                //reaching our First section? The one with our normal site?

                $('.navbar-top-default').fadeOut();
                $('.slider-footer').fadeOut();
                $('.slider-copyright').fadeOut();

                if (nextIndex == 1) {
                    $('#pp-nav').fadeOut();
                }
                //leaving our last section? The one with our normal site?
                if (index == 1) {
                    $('#pp-nav').fadeIn();
                }

                if (nextIndex == 1 || nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5 || nextIndex == 6 || nextIndex == 7 || nextIndex == 8 || nextIndex == 9 || nextIndex == 10) {
                    setTimeout(function() {
                        $('.navbar-top-default').fadeIn();
                        $('.slider-footer').fadeIn();
                        $('.slider-copyright').fadeIn();
                    }, 600);

                }
            },
            afterLoad: function(anchorLink, index) {},
            afterRender: function() {
                $('#pp-nav').hide();
            },
        });
    }

    /* ===================================
               Loading Timeout
        ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function() {
        $('.loader-bg').fadeToggle();

    }, 1500);

    // $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');
});

jQuery(function($) {

    "use strict";

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    $(".scroll").on("click", function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1200);
    });

    $(".slider-btn").on("click", function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1200);
    });

    /* ===================================
        Side Menu
    ====================================== */

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function() {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /*===================================
        Animated Progress Bar
    ====================================== */

    $(".progress-bar").each(function() {
        $(this).appear(function() {
            $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 2000)
        });
    });

    /* ===================================
        Fancy Box
   ====================================== */

    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

    /*===================================
        Owl Carousel
    ====================================== */

    /* Portfolio Classic */
    $(".team-classic.owl-team").owlCarousel({
        items: 3,
        margin: 30,
        dots: false,
        nav: false,
        loop: true,
        autoplay: false,
        smartSpeed: 500,
        navSpeed: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            992: {
                items: 4
            },
            600: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }
    });

    //Testimonial Owl
    $('#testimonial-carousal').owlCarousel({
        loop: true,
        margin: 120,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});




// ==========================================
// ANIMASI HOME
// ==========================================
TweenMax.from(".main-font span", 2, {
    delay: 0.5,
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut
})

TweenMax.from(".content-para", 2, {
        delay: 1,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    // ==========================================
    // ANIMASI HOME
    // ==========================================

// ==========================================
// ANIMASI COPYRIGHT
// ==========================================
TweenMax.from(".slider-copyright", 2, {
        delay: 2.5,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    })
    // ==========================================
    // ANIMASI COPYRIGHT
    // ==========================================

TweenMax.staggerFrom(".slider-footer ul li", 1.5, {
    delay: 5,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
}, 0.08)

/****/

TweenMax.staggerFrom(".side-footer ul li", 1.5, {
    delay: 3,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".side-footer p", 2, {
    delay: 4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

// slide

let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);

    } else {
        return slideUp(target, duration);
    }
}

// ====  

let speedAnimation = 400;
let targetId = document.getElementById("target");

let slideBtnClick = (id, sl) => document.getElementById(id).addEventListener('click', () => sl(targetId, speedAnimation));


slideBtnClick('triggerToggle', slideToggle);


// =========== old

//   document.getElementById("triggerUp").addEventListener('click', function() {
//   slideUp(document.getElementById("target"), 400);
// });
//   document.getElementById("triggerDown").addEventListener('click', function() {
//   slideDown(document.getElementById("target"), 400);
// });
//   document.getElementById("triggerToggle").addEventListener('click', function() {
//   slideToggle(document.getElementById("target"), 400);
// });