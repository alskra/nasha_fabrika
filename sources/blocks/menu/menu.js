$(function () {
  let $menuItem = $(`.menu__item`),
    $sectionItem = $(`.sect-menu`), scrollFlag = false;

  $(document).on(`click`, `a`, function (e) {
    let href = $(this).attr(`href`);
    if ($(href).length) {
      e.preventDefault();
      location.hash !== href ? history.pushState(null, document.title, href) : null;
      if ($(e.target).closest(`.menu__item`).length) {
        scrollFlag = true;
        $menuItem.not($(e.target).closest(`.menu__item`).addClass(`menu__item--current`)).removeClass(`menu__item--current`);
        $(`.header__toggle-menu`).removeClass(`header__toggle-menu--open`);
        $(`.header__menu`).slideUp(200);
      }
      $(`html, body`).stop().animate({scrollTop: $(href).offset().top - $(`.header`).outerHeight()}, 500, function () {
        setTimeout(function () {
          scrollFlag = false;
        }, 100);
      });
    }
  });

  $(window).on(`scroll.Menu`, function () {
    if (!scrollFlag) {
      let sectionCurrent = ``;
      $sectionItem.each(function () {
        if ($(window).scrollTop() + $(`.header`).outerHeight() >= $(this).offset().top) {
          sectionCurrent = $(this).attr(`id`);
        }
      });
      $menuItem.not($(`.menu__item[href="#${sectionCurrent}"]`).addClass(`menu__item--current`)).removeClass(`menu__item--current`);
    }
  }).triggerHandler(`scroll.Menu`);
});