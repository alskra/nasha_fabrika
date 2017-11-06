$(function() {
  $(window).on('scroll.Page', function() {
    $('.page__header').toggleClass('page__header--fixed', $(this).scrollTop() > 0);
  }).triggerHandler('scroll.Page');
});
$(function() {
  $(document).on('click', '.header__toggle-menu', function() {
    $(this).toggleClass('header__toggle-menu--open');
    $('.header__menu').slideToggle(200);
  });
});
$(function() {
  var $menuItem = $('.menu__item'),
    $sectionItem = $('.sect-menu'),
    scrollFlag = false;

  $(document).on('click', 'a', function(e) {
    var href = $(this).attr('href');
    if ($(href).length) {
      e.preventDefault();
      location.hash !== href ? history.pushState(null, document.title, href) : null;
      if ($(e.target).closest('.menu__item').length) {
        scrollFlag = true;
        $menuItem.not($(e.target).closest('.menu__item').addClass('menu__item--current')).removeClass('menu__item--current');
        $('.header__toggle-menu').removeClass('header__toggle-menu--open');
        $('.header__menu').slideUp(200);
      }
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top - $('.header').outerHeight()
      }, 500, function() {
        setTimeout(function() {
          scrollFlag = false;
        }, 100);
      });
    }
  });

  $(window).on('scroll.Menu', function() {
    if (!scrollFlag) {
      var sectionCurrent = '';
      $sectionItem.each(function() {
        if ($(window).scrollTop() + $('.header').outerHeight() >= $(this).offset().top) {
          sectionCurrent = $(this).attr('id');
        }
      });
      $menuItem.not($('.menu__item[href="#' + sectionCurrent + '"]').addClass('menu__item--current')).removeClass('menu__item--current');
    }
  }).triggerHandler('scroll.Menu');
});

$(function() {
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
    responsive: [{
      breakpoint: 575,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 1329,
      settings: {
        slidesToShow: 5
      }
    }]
  }).on('lazyLoaded', function(event, slick, image, imageSource) {
    $(image).closest('.carousel__item').removeClass('loading');
  });
});
$(function() {
  $('.form-order').each(function() {
    $(this).parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    }).on('form:submit', function(el) {
      var $form = el.$element,
        responseMsg = 'Ваше сообщение успешно отправлено, мы&nbsp;с&nbsp;Вами свяжемся!',
        data = $form.serialize();
      //console.log('Serialize data: ' + data);
      $form.find('.form-order__btn').prop('disabled', true);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: data,
        success: function success(data, textStatus, jqXHR) {},
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error('Ошибка отправки: ' + jqXHR.status);
          responseMsg = 'Ошибка отправки: ' + jqXHR.statusText;
        },
        complete: function complete(jqXHR, textStatus) {
          $form.find('.form-order__btn').prop('disabled', false).end().find('.field').val('').end().find('.checkbox__input[name="yur"]').prop('checked', false);
          var $formInfo = $('.form-order__info');
          $formInfo.append('&nbsp;&nbsp;<strong class="form-order__info-inner">' + responseMsg + '</strong>');
          setTimeout(function() {
            $formInfo.find('.form-order__info-inner').fadeOut(500, function() {
              $(this).remove();
            });
          }, 3000);
          /*$.fancybox.close();
          $.fancybox.open('<div class="modal">' +
            '<h4 class="modal__title mb-0">' + responseMsg + '</h4>' +
            '<button class="btn modal__btn-close d-none" data-fancybox-close>Закрыть</button>' +
            '</div>');*/
        }
      });
      return false;
    });
  });
});
$(function() {
  $(document).on('blur.field', '.field', function() {
    $(this).toggleClass('field--has-value', $(this).val() !== '');
  }).triggerHandler('blur.field');
});
$(function() {
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
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  }).on('lazyLoaded', function(event, slick, image, imageSource) {
    $(image).closest('.carousel-a__img-wrap').removeClass('loading');
  });
});
//# sourceMappingURL=blocks.js.map
