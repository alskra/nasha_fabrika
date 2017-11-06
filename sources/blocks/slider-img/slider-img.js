$(function () {
  $('.slider-img').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: false,
    autoplaySpeed: 5000,
    zIndex: 1,
    lazyLoad: 'ondemand',
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false,
    responsive: [

    ]
  }).on('lazyLoaded', function (event, slick, image, imageSource) {
    $(image).closest('.slick-slide').removeClass('loading');
  });
});