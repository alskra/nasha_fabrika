$(function () {
  $('.form-order').each(function () {
    $(this).parsley().on('field:validated', function () {
      let ok = $('.parsley-error').length === 0;
    }).on('form:submit', function (el) {
      let $form = el.$element,
        responseMsg = 'Ваше сообщение успешно отправлено, мы&nbsp;с&nbsp;Вами свяжемся!',
        data = $form.serialize();
      //console.log('Serialize data: ' + data);
      $form.find('.form-order__btn').prop('disabled', true);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: data,
        success: function (data, textStatus, jqXHR) {
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error('Ошибка отправки: ' + jqXHR.status);
          responseMsg = 'Ошибка отправки: ' + jqXHR.statusText;
        },
        complete: function (jqXHR, textStatus) {
          $form.find('.form-order__btn').prop('disabled', false).end().find('.field').val('').end().find('.checkbox__input[name="yur"]').prop('checked', false);
          let $formInfo = $(`.form-order__info`);
          $formInfo.append(`&nbsp;&nbsp;<strong class="form-order__info-inner">${responseMsg}</strong>`);
          setTimeout(function () {
            $formInfo.find(`.form-order__info-inner`).fadeOut(500, function () {
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