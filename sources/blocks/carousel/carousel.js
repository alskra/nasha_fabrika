$(function () {
  $('.carousel__inner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    fade: false,
    cssEase: 'linear',
    slidesToShow: 2,
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
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1329,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  }).on('lazyLoaded', function (event, slick, image, imageSource) {
    $(image).closest('.carousel__item').removeClass('loading');
  });
});