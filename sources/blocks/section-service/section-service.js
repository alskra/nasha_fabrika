$(function () {
  $('.section-service__slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    fade: false,
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
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }).on('lazyLoaded', function (event, slick, image, imageSource) {
    $(image).closest('.slick-slide').removeClass('loading');
  });
});