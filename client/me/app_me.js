webpackJsonp([0],[,,,function(e,t,n){"use strict";function a(){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,n){"use strict";function a(e){function t(t){e.setAllowScrolling(!0),$("body").removeClass("scroll-stoped"),t.removeClass("section__post--open"),$(".section__close-post").removeClass("section__close-post--open")}function n(n){var a=this;e.setAllowScrolling(!1),$("body").addClass("scroll-stoped"),n.addClass("section__post--open"),$(".section__close-post").addClass("section__close-post--open"),l.on("close:all",function(){t.call(a,n)})}function a(e){var a=$(this).closest(".fp-tableCell").find(".section__post");a.hasClass("section__post--open")?t.call(this,a):n.call(this,a)}var l=window.mitt;$(function(){$(document).on("click",".section__open-post",a),$(document).on("click",".section__close-post",a)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,n){"use strict";function a(e){function t(){e.setAllowScrolling(!0),$("body").removeClass("scroll-stoped");var t=$(this).parent();t.find("iframe").attr("src",""),t.removeClass("section__video--open")}function n(t){e.setAllowScrolling(!1),$("body").addClass("scroll-stoped"),t.addClass("section__video--open");var n=t.find("iframe"),a=n.data("src");n.attr("src",a)}function a(e){var a=$(this).closest(".fp-tableCell").find(".section__video");a.hasClass("section__video--open")?t.call(this):n.call(this,a)}$(function(){$(document).on("click",".section__open-video",a)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,n){!function(t,a){var l=function(){a(t.lazySizes),t.removeEventListener("lazyunveilread",l,!0)};a=a.bind(null,t,t.document),"object"==typeof e&&e.exports?a(n(1)):t.lazySizes?l():t.addEventListener("lazyunveilread",l,!0)}(window,function(e,t,n){"use strict";if(e.addEventListener){var a=/\(|\)|'/,l={contain:1,cover:1},o=function(e){var t=n.gW(e,e.parentNode);return(!e._lazysizesWidth||t>e._lazysizesWidth)&&(e._lazysizesWidth=t),e._lazysizesWidth},s=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!l[t]&&l[e.style.backgroundSize]&&(t=e.style.backgroundSize),t},i=function(e,n,a){var l=t.createElement("picture"),o=n.getAttribute(lazySizesConfig.sizesAttr),s=n.getAttribute("data-ratio"),i=n.getAttribute("data-optimumx");n._lazybgset&&n._lazybgset.parentNode==n&&n.removeChild(n._lazybgset),Object.defineProperty(a,"_lazybgset",{value:n,writable:!0}),Object.defineProperty(n,"_lazybgset",{value:l,writable:!0}),e=e.replace(/\s+/g," ").split(/\s*\|\s+|\s+\|\s*/g),l.style.display="none",a.className=lazySizesConfig.lazyClass,1!=e.length||o||(o="auto"),e.forEach(function(e){var n=t.createElement("source");o&&"auto"!=o&&n.setAttribute("sizes",o),e.match(/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/)&&(n.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&n.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),l.appendChild(n)}),o&&(a.setAttribute(lazySizesConfig.sizesAttr,o),n.removeAttribute(lazySizesConfig.sizesAttr),n.removeAttribute("sizes")),i&&a.setAttribute("data-optimumx",i),s&&a.setAttribute("data-ratio",s),l.appendChild(a),n.appendChild(l)},d=function(e){if(e.target._lazybgset){var t=e.target,l=t._lazybgset,o=t.currentSrc||t.src;o&&(l.style.backgroundImage="url("+(a.test(o)?JSON.stringify(o):o)+")"),t._lazybgsetLoading&&(n.fire(l,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var a,l,o;!e.defaultPrevented&&(a=e.target.getAttribute("data-bgset"))&&(o=e.target,l=t.createElement("img"),l.alt="",l._lazybgsetLoading=!0,e.detail.firesLoad=!0,i(a,o,l),setTimeout(function(){n.loader.unveil(l),n.rAF(function(){n.fire(l,"_lazyloaded",{},!0,!0),l.complete&&d({target:l})})}))}),t.addEventListener("load",d,!0),e.addEventListener("lazybeforesizes",function(e){if(e.detail.instance==n&&e.target._lazybgset&&e.detail.dataAttr){var t=e.target._lazybgset,a=s(t);l[a]&&(e.target._lazysizesParentFit=a,n.rAF(function(){e.target.setAttribute("data-parent-fit",a),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),t.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==n&&(e.detail.width=o(e.target._lazybgset))})}})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(0),o=a(l);n(2),n(6),n(1);var s=n(4),i=a(s),d=n(5),r=a(d),c=n(3);a(c);window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.init=!1,(0,o.default)(function(){function e(){lazySizes.init()}function t(e,t,n){var a=t-1;(0,o.default)(".section:eq("+a+")").addClass("load-bgs")}function n(e,t){var n=t-1,a=(0,o.default)(".section:eq("+n+")"),l=a.data("story"),t=a.data("index"),s=(0,o.default)(".indicator");s.find(".indicator__story").text(l),s.find(".indicator__index").text(t),a.find(".bs-counter").length>0&&f.emit("runCounter")}function a(){o.default.fn.fullpage.moveSectionDown()}function l(){o.default.fn.fullpage.setAllowScrolling(!1),(0,o.default)("body").addClass("scroll-stoped"),(0,o.default)(".fullpage-nav").addClass("fullpage-nav--open"),(0,o.default)(".fullpage__menu").addClass("fullpage__menu--dark"),f.on("close:all",function(){s()})}function s(){o.default.fn.fullpage.setAllowScrolling(!0),(0,o.default)("body").removeClass("scroll-stoped"),(0,o.default)(".fullpage-nav").removeClass("fullpage-nav--open"),(0,o.default)(".fullpage__menu").removeClass("fullpage__menu--dark")}function d(){var e=(0,o.default)(".fullpage__menu__share > a"),t=e.parent().find("ul");t.hasClass("fullpage__menu__share--open")?(e.find("i").removeClass("ion-close-round"),t.removeClass("fullpage__menu__share--open")):(e.find("i").addClass("ion-close-round"),t.addClass("fullpage__menu__share--open"))}function c(){var e=(0,o.default)(this).data("content");(0,o.default)(".spot-content."+e).length>0&&(o.default.fn.fullpage.setAllowScrolling(!1),(0,o.default)("body").addClass("scroll-stoped"),(0,o.default)(".spot-content."+e).addClass("spot-content--open"),(0,o.default)(".section__close-spot-content").addClass("section__close-spot-content--open"))}function u(){o.default.fn.fullpage.setAllowScrolling(!0),(0,o.default)("body").removeClass("scroll-stoped");(0,o.default)(this).data("content");(0,o.default)(".spot-content").removeClass("spot-content--open"),(0,o.default)(".section__close-spot-content").removeClass("section__close-spot-content--open")}var f=window.mitt;(0,o.default)(".section__content").on("click",function(){return f.emit("close:all")}),(0,o.default)("#fullpage").fullpage({menu:"#fullpage-menu",recordHistory:!1,lazyLoading:!1,navigation:!0,afterRender:e,afterLoad:n,onLeave:t}),(0,i.default)(o.default.fn.fullpage),(0,r.default)(o.default.fn.fullpage),(0,o.default)(document).on("click",".section__down",a),(0,o.default)(".indicator").on("click",l),(0,o.default)(".fullpage-nav__close").on("click",s),(0,o.default)(".fullpage__menu__share > a").on("click",d),(0,o.default)(".map-points__spot").on("click",c),(0,o.default)(".section__close-spot-content").on("click",u)})}],[7]);