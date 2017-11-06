$(function () {
  $(document).on('blur.field', '.field', function () {
    $(this).toggleClass('field--has-value', $(this).val() !== '');
  }).triggerHandler('blur.field');
});