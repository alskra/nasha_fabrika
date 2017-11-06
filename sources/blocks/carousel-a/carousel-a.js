$(function () {
  $('.carousel-a__inner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: '<button type="button" class="slick-prev icon-angle-l"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-l"></button>',
    autoplay: false,
    autoplaySpeed: 5000,
    zIndex: 1,
    lazyLoad: 'ondemand',
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  }).on('lazyLoaded', function (event, slick, image, imageSource) {
    $(image).closest('.carousel-a__img-wrap').removeClass('loading');
  });
});