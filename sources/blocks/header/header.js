$(function () {
  $(document).on(`click`, `.header__toggle-menu`, function () {
    $(this).toggleClass(`header__toggle-menu--open`);
    $(`.header__menu`).slideToggle(200);
  });
});