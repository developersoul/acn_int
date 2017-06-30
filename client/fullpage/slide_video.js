function closeVideo() {
  var $videoSection = $(this).parent();
  var $iframe = $videoSection.find("iframe");
  $.fn.fullpage.setAllowScrolling(true);
  $iframe.attr("src", "");
  $videoSection.removeClass("section__video--open");
}

function openVideo($videoSection) {
  $.fn.fullpage.setAllowScrolling(false);
  $videoSection.addClass("section__video--open");
  var $iframe = $videoSection.find("iframe");
  var src = $iframe.data("src");
  $iframe.attr("src", src);
}

function handleToggleVideo(e) {
  var $videoSection = $(this).closest(".fp-tableCell").find(".section__video");

  if ($videoSection.hasClass("section__video--open")) {
    closeVideo.call(this);
  } else {
    openVideo.call(this, $videoSection);
  }
}

$(function() {
	$(document).on("click", ".section__open-video", handleToggleVideo);
})

