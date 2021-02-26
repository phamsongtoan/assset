// $(function() {
//     $('#ChangeToggle').click(function() {
//         $('#navbar-hamburger').toggleClass('hidden');
//         $('#navbar-close').toggleClass('hidden');
//     });
// });




// NAV
$(document).ready(function() {


    if ($('#anchor2').rangeSlider) {
        $('#anchor2').rangeSlider({
            settings: false,
            skin: 'red',
            type: 'interval',
            scale: true,
        });
    }
    // //NAV HIDEN AND SHOW
    // $(".burger").click(function() {
    //     $(this).find("i:nth-child(1)").toggleClass("d-none");
    //     $(this).find("i:nth-child(2)").toggleClass("d-none");
    //     $(".search-icon").toggleClass("d-none")
    // });

    // $("a[href^=\"#about\"]").click(function(e) {
    //     e.preventDefault();
    //     const _id = $(this).attr('href'); // lay duoc id : #about
    //     if (_id) {
    //         const offset = $(_id).offset().top - 90;

    //         $("html, body").animate({
    //             scrollTop: offset
    //         }, 1000)
    //     }
    // });


    //BANNER
    $('.banner-main').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: false,
    });


    //PREVIEW 
    $('.preview-inner__main').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: true,
        prevArrow: $(".button-prev"),
        nextArrow: $(".button-next"),
    });

    //IMG PROJECT DETAIL

    $('.buy-detail-slide__inner').slick({
        autoplay: false,
        autoplaySpeed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: true,
        prevArrow: $(".button-prev-blue"),
        nextArrow: $(".button-next-blue"),
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });

    //IMG PROJECT DETAIL 2

    $('.buy-detail-nav__slide--inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        fade: false,
        arrows: true,
        prevArrow: $(".button-prev"),
        nextArrow: $(".button-next"),
        focusOnSelect: true
    });

    //SLIDE APARTMENT
    $('.project-detail-apartment__slide').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        fade: false,
        arrows: true,
        prevArrow: $(".button-prev-blue-add"),
        nextArrow: $(".button-next-blue-add"),
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });
    //SERVICES WHY
    $('.services-support-slide__inner').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: false,
    });

    // $('.barrier-main__slide-2').slick({
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: false,
    //     fade: false,
    //     arrows: false,
    //     asNavFor: '.barrier-main__slide-1',

    // });

    // //MEDIA NEWS

    // $('.media-news-img').slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     dots: false,
    //     fade: false,
    //     arrows: false,
    // });
    //FIXED HEADER
    $(window).scroll(function(e) {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 100) {
            $(".header-services").addClass("sticky")
        } else {
            $(".header-services").removeClass("sticky")
        }
    });
    //FIXED PROJECT DETAIL
    $(window).scroll(function() {
        var sticky = $('.test-menu'),
            scroll = $(window).scrollTop();
        if (scroll >= 500) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


    // const topOffset = $(".detail-nav__main").offset().top +
    //     $(".detail-nav__main").height();

    // $(window).scroll(function(e) {
    //     const topSection = $('.detail-nav__main');
    //     const scrollTop = $(this).scrollTop();
    //     if (scrollTop > topOffset) {
    //         topSection.addClass('fixed');
    //         console.log('add')
    //     } else {
    //         topSection.removeClass('fixed');
    //         console.log('remove')
    //     }
    // });

    //FIXED HEADER OF MAIN

    // //NAV
    $(".navbar-toggler").click(function() {
        $(this).find("i:nth-child(1)").toggleClass("d-none");
        $(this).find("i:nth-child(2)").toggleClass("d-none");
    });

    // //STICKY
    // $(window).scroll(function(e) {
    //     const scrollTop = $(this).scrollTop();
    //     if (scrollTop > 350) {
    //         $('.sticky-up').removeClass("hidden")
    //     } else {
    //         $('.sticky-up').addClass("hidden")
    //     }
    // });

    // $(".sticky-up").click(function(e) {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     })
    // })


});

// $(function() {

//     // Initiate Slider
//     $('#slider-range').slider({
//       range: true,
//       min: 10000,
//       max: 110000,
//       step: 100,
//       values: [45000, 75000]
//     });

//     // Move the range wrapper into the generated divs
//     $('.ui-slider-range').append($('.range-wrapper'));

//     // Apply initial values to the range container
//     $('.range').html('<span class="range-value"><sup>$</sup>' + $('#slider-range').slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span><span class="range-divider"></span><span class="range-value"><sup>$</sup>' + $("#slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span>');

//     // Show the gears on press of the handles
//     $('.ui-slider-handle, .ui-slider-range').on('mousedown', function() {
//       $('.gear-large').addClass('active');
//     });

//     // Hide the gears when the mouse is released
//     // Done on document just incase the user hovers off of the handle
//     $(document).on('mouseup', function() {
//       if ($('.gear-large').hasClass('active')) {
//         $('.gear-large').removeClass('active');
//       }
//     });

//     // Rotate the gears
//     var gearOneAngle = 0,
//       gearTwoAngle = 0,
//       rangeWidth = $('.ui-slider-range').css('width');

//     $('.gear-one').css('transform', 'rotate(' + gearOneAngle + 'deg)');
//     $('.gear-two').css('transform', 'rotate(' + gearTwoAngle + 'deg)');

//     $('#slider-range').slider({
//       slide: function(event, ui) {

//         // Update the range container values upon sliding

//         $('.range').html('<span class="range-value"><sup>$</sup>' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span><span class="range-divider"></span><span class="range-value"><sup>$</sup>' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span>');

//         // Get old value
//         var previousVal = parseInt($(this).data('value'));

//         // Save new value
//         $(this).data({
//           'value': parseInt(ui.value)
//         });

//         // Figure out which handle is being used
//         if (ui.values[0] == ui.value) {

//           // Left handle
//           if (previousVal > parseInt(ui.value)) {
//             // value decreased
//             gearOneAngle -= 7;
//             $('.gear-one').css('transform', 'rotate(' + gearOneAngle + 'deg)');
//           } else {
//             // value increased
//             gearOneAngle += 7;
//             $('.gear-one').css('transform', 'rotate(' + gearOneAngle + 'deg)');
//           }

//         } else {

//           // Right handle
//           if (previousVal > parseInt(ui.value)) {
//             // value decreased
//             gearOneAngle -= 7;
//             $('.gear-two').css('transform', 'rotate(' + gearOneAngle + 'deg)');
//           } else {
//             // value increased
//             gearOneAngle += 7;
//             $('.gear-two').css('transform', 'rotate(' + gearOneAngle + 'deg)');
//           }

//         }

//         if (ui.values[1] === 110000) {
//           if (!$('.range-alert').hasClass('active')) {
//             $('.range-alert').addClass('active');
//           }
//         } else {
//           if ($('.range-alert').hasClass('active')) {
//             $('.range-alert').removeClass('active');
//           }
//         }
//       }
//     });

//     // Prevent the range container from moving the slider
//     $('.range, .range-alert').on('mousedown', function(event) {
//       event.stopPropagation();
//     });

//   });