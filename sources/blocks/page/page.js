$(function () {
  $(window).on(`scroll.Page`, function () {
    $(`.page__header`).toggleClass(`page__header--fixed`, $(this).scrollTop() > 0);
  }).triggerHandler(`scroll.Page`);
});