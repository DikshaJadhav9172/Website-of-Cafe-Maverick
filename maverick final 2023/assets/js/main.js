/*
*
* JS Script
* @ThemeEaster
*/

(function($){ "use strict";

    // Preloader
    $(window).on('load', function() {
        $('body').addClass('loaded');

         //Simple Parallax
        var image = document.getElementsByClassName('delivery-boy');
        new simpleParallax(image, {
            overflow: true,
            orientation: "right"
        });

    });

    $(document).ready(function() {

        var primaryHeader = $('.primary-header'),
            headerClone = primaryHeader.clone();
        $('.header').after('<div class="sticky-header"></div>');
        $('.sticky-header').html(headerClone);
        var headerSelector = document.querySelector(".sticky-header");
        var triggerPoint = $('.header').height();
        var yOffset = 0;

        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
                $('.sticky-header').addClass('sticky-fixed-top');
            } else {
                $('.sticky-header').removeClass('sticky-fixed-top');
            }
        });

        if ($('.primary-header').length) {
            $('.header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.header .header-menu-wrap').slideToggle(300);
            });

            $('.sticky-header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.sticky-header .header-menu-wrap').slideToggle(300);
            });
        }

        $('.header-menu-wrap ul li:has(ul)').each(function () {
            $(this).append('<span class="dropdown-plus"></span>');
            $(this).addClass('dropdown_menu');
        });

        $('.header-menu-wrap .dropdown-plus').on("click", function () {
            $(this).prev('ul').slideToggle(300);
            $(this,).toggleClass('dropdown-open');
            $('.header-menu-wrap ul li:has(ul)').toggleClass('dropdown-open');
        });

        $('.header-menu-wrap .dropdown_menu a').append('<span></span>');

        // Responsive Classes
        function responsiveClasses() {
            var body = $('body');
            if ($(window).width() < 992) {
                body.removeClass('viewport-lg');
                body.addClass('viewport-sm');
            } else {
                body.removeClass('viewport-sm');
                body.addClass('viewport-lg');
            }
        }

        //responsiveClasses();
        $(window).on("resize", function () {
            responsiveClasses();
        }).resize();

        // Popup Search Box
        $(function () {
            $('#popup-search-box').removeClass('toggled');

            $('.dl-search-icon').on('click', function (e) {
                e.stopPropagation();
                $('#popup-search-box').toggleClass('toggled');
                $("#popup-search").focus();
            });

            $('#popup-search-box input').on('click', function (e) {
                e.stopPropagation();
            });

            $('#popup-search-box, body').on('click', function () {
                $('#popup-search-box').removeClass('toggled');
            });
        });

        // Main Slider
        $('#main-slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('div.single-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        $('#main-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                  var $animatingElements = $('div.single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                  doAnimations($animatingElements);
        });
        $('#main-slider').slick({
           autoplay: false,
           autoplaySpeed: 10000,
           dots: true,
           fade: true,
           prevArrow: '<div class="slick-prev"><i class="las la-long-arrow-alt-left"></i></div>',
                nextArrow: '<div class="slick-next"><i class="las la-long-arrow-alt-right"></i></div>'
        });
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationDuration = $this.data('duration');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                    'animation-duration': $animationDuration,
                    '-webkit-animation-duration': $animationDuration
                });
                $this.addClass($animationType+' element').one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Spliting Js Active
        Splitting();

        //Food Carousel
        const foodCarousel = document.querySelector(".food-carousel");
        const swiperOptions = {
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            grabCursor: true,
            speed: 500,
            spaceBetween: 10,
            mousewheel: false,
            initialSlide: 2,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '.dl-slider-button-next',
                prevEl: '.dl-slider-button-prev'
            },
            pagination: {
                el: '.dl-swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'+'<svg class="dl-circle-loader" width="20" height="20" viewBox="0 0 20 20">'+
                      '<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
                      'stroke-opacity="1" stroke-width="2px"></circle>'+
                      '<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
                      '</svg></span>';
                }
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 0
                },
                // when window width is >= 767px
                767: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                }
            }
        };

        const swiper = new Swiper( foodCarousel, swiperOptions );

        //Testimonial Carousel
        const testimonialCarousel = document.querySelector(".testimonial-carousel");
        const testimonialOptions = {
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            grabCursor: true,
            speed: 500,
            spaceBetween: 10,
            mousewheel: false,
            initialSlide: 2,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '.dl-slider-button-next',
                prevEl: '.dl-slider-button-prev'
            },
            pagination: {
                el: '.dl-swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'+'<svg class="dl-circle-loader" width="20" height="20" viewBox="0 0 20 20">'+
                      '<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
                      'stroke-opacity="1" stroke-width="2px"></circle>'+
                      '<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
                      '</svg></span>';
                }
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 0
                },
                // when window width is >= 767px
                767: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                }
            }
        };

        const testimonialSwiper = new Swiper( testimonialCarousel, testimonialOptions );

        //ISOtop Active
        $('.product-items').imagesLoaded( function() {

             // Add isotope click function
            $('.food-menu-filter li').on( 'click', function(){
                $(".food-menu-filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-filter');
                $(".product-items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });

            $(".product-items").isotope({
                itemSelector: '.isotop-grid',
                layoutMode: 'masonry',
            });
        });

        // Venobox Active
        new VenoBox({
            selector: '.video-popup, .img-popup',
            bgcolor: 'transparent',
            numeration: true,
            infinigall: true,
            spinner: 'plane',
        });

        // Wow JS Active
        new WOW().init();


        // Scrool To Top
        var scrollTop = $("#scroll-top");
        $(window).on('scroll', function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $('#scrollup').removeClass('hide');
                $('#scrollup').addClass('show');

            } else {
                $('#scrollup').removeClass('show');
                $('#scrollup').addClass('hide');
            }
        });

        $(scrollTop).on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
            return false;
        });

        // Current Year
        var currentYear  = new Date().getFullYear();
        $('#currentYear').append(currentYear);

     });

})(jQuery);
