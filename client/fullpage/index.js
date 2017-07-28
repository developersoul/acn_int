import $ from "jquery";
import "fullpage.js";
import "lazysizes/plugins/bgset/ls.bgset";
import "lazysizes";
import slidePost from  "./slide_post";
import slideVideo from "./slide_video";
import slideMap from "./slider_map";
import nav from "./nav";
import menu from "./menu";
import modal from "./modal";

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false;
window.lazySizesConfig.loadMode = 1;

$(function DOMLoaded() {

  const emmiter = window.mitt;

  $(".section__content").on("click", () => emmiter.emit("close:all"));

  $(document).keyup(function(e) {
    if (e.keyCode === 27) emmiter.emit("close:esc");   // esc
  });

  function handleAfterRender() {
    lazySizes.init();
  }

  function handleLeave(index, nextIndex, direction) {
    var next = nextIndex - 1;
    var $section = $(".section:eq(" + next + ")");
  }

  function handleAfterLoad(section, index) {
    let next = index - 1;
    let $section = $(".section:eq(" + next + ")");
    let story = $section.data("story");
    let slideIndex = $section.data("index");
    let redirectUrl = $section.data("redirect");
    let $indicator = $(".indicator");
    let title = fp_options["titles"].filter(title => title.story == story);

    $indicator.find(".indicator__story").text(story);
    $indicator.find(".indicator__index").text(slideIndex);

    if(title[0] && title[0].title) {
      $indicator.find(".indicator__title").text(title[0].title);
    }

    if(redirectUrl && redirectUrl.length > 0) window.location = redirectUrl;

    if( $section.find(".bs-counter").length > 0 ) emmiter.emit("runCounter");
  }

  $("#fullpage").fullpage({
    menu: "#fullpage-menu",
    recordHistory: false,
    lazyLoading: false,
    navigation: false,
    normalScrollElements: ".section__post__content, .spot-content__container, .nineveh-general-content__container, .section__modal__content",
    afterRender: handleAfterRender,
    afterLoad: handleAfterLoad,
    onLeave: handleLeave
  });

  const $fp = $.fn.fullpage;

  slidePost($fp);
  slideVideo($fp);
  slideMap($fp);
  nav($fp);
  modal($fp);
  menu();

  function goDown() {
    $.fn.fullpage.moveSectionDown();
  }

  $(document).on("click", ".section__down", goDown);

});
