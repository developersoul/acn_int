const setMenuMobile = function() {
  const $menu = $('.menu--mobile');
  const currentLang = $('.menu--mobile .current-lang > a');
  $('.menu--mobile .current-lang').addClass('dropdown');
  $('.menu--mobile .current-lang').append('<ul class="menu--mobile__langs"></ul>');

  const langs = $('.menu--mobile .lang-item').not($('.current-lang'));
  const $dropdown = $menu.find('.menu--mobile__langs');

  langs.each(function() {
    $dropdown.append($(this).html());
    $(this).remove();
  });

  const newText = `${currentLang.text()}  <i class="ion-chevron-right"></i>`;
  currentLang.html(newText);

  currentLang.on('click', e => {
    e.preventDefault();


    if ($dropdown.hasClass('menu--mobile__langs--open')) {
      $dropdown.removeClass('menu--mobile__langs--open');
    } else {
      $dropdown.addClass('menu--mobile__langs--open');
    }

  });

  const $mainLinks = $('.menu--mobile .menu-item-has-children > a');

  $mainLinks.each(function() {
      const itemWithIcon = `${$(this).text()}  <i class="ion-chevron-right"></i>`;
      $(this).html(itemWithIcon);
  });

  $mainLinks.on('click', function(e) {
    e.preventDefault();
    console.log(e);
    const $submenu = $(this).find('.sub-menu');
    $submenu.toggleClass( "sub-menu--open" );
  });

  $(".open-menu").on("click", () => {
    if ($(".menu--mobile").hasClass("menu--mobile--open")) {
      $(document.body).removeClass("menu-open");
      $(".menu--mobile").removeClass("menu--mobile--open");
    } else {
      $(document.body).addClass("menu-open");
      $(".menu--mobile").addClass("menu--mobile--open");
    }
  });

  $(".close-menu").on("click", (e) => {
    $(document.body).removeClass("menu-open");
    $(".menu--mobile").removeClass("menu--mobile--open");
  });

};

export default setMenuMobile;
