webpackJsonp([0],[,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ScrollStop=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?(e.setAllowScrolling(!1),$("body").addClass("scroll-stoped")):(e.setAllowScrolling(!0),$("body").removeClass("scroll-stoped"))}},,function(e,t,n){"use strict";function o(){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(){function e(){var e=$(".fullpage__menu__share > a"),t=e.parent().find("ul");t.hasClass("fullpage__menu__share--open")?(e.find("i").removeClass("ion-close-round"),t.removeClass("fullpage__menu__share--open")):(e.find("i").addClass("ion-close-round"),t.addClass("fullpage__menu__share--open"))}$(".fullpage__menu__share > a").on("click",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){function t(t){t&&t.preventDefault(),(0,a.ScrollStop)(e,!0),$(".fullpage-nav").addClass("fullpage-nav--open"),$(".fullpage__menu").addClass("fullpage__menu--dark"),o.off("close:all",function(){return n()}),o.off("close:esc",function(){return n()}),o.on("close:all",function(){return n()}),o.on("close:esc",function(){return n()})}function n(t){t&&t.preventDefault(),(0,a.ScrollStop)(e,!1),$(".fullpage-nav").removeClass("fullpage-nav--open"),$(".fullpage__menu").removeClass("fullpage__menu--dark")}var o=window.mitt;$(".indicator").on("click",t),$(".fullpage-nav__close").on("click",n)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default=o},function(e,t,n){"use strict";function o(e){function t(t){(0,a.ScrollStop)(e,!1),t.removeClass("section__post--open"),$(".section__close-post").removeClass("section__close-post--open")}function n(n){var o=this;(0,a.ScrollStop)(e,!0),n.addClass("section__post--open"),$(".section__close-post").addClass("section__close-post--open"),l.off("close:esc",function(){return t.call(o,n)}),l.off("close:all",function(){return t.call(o,n)}),l.on("close:esc",function(){return t.call(o,n)}),l.on("close:all",function(){return t.call(o,n)})}function o(e){var o=$(this).closest(".fp-tableCell").find(".section__post");o.hasClass("section__post--open")?t.call(this,o):n.call(this,o)}var l=window.mitt;$(function(){$(document).on("click",".section__open-post",o),$(document).on("click",".section__close-post",o)})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default=o},function(e,t,n){"use strict";function o(e){function t(t){(0,a.ScrollStop)(e,!1),t.find("iframe").attr("src",""),t.removeClass("section__video--open"),console.log("close video",t)}function n(n){(0,a.ScrollStop)(e,!0),n.addClass("section__video--open");var o=n.find("iframe"),i=o.data("src");o.attr("src",i),l.off("close:esc",function(){return t(n)}),l.on("close:esc",function(){return t(n)})}function o(e){e&&e.preventDefault();var o=$(this).closest(".fp-tableCell").find(".section__video");o.hasClass("section__video--open")?t(o):n(o)}var l=window.mitt;$(document).on("click",".section__open-video",o)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default=o},function(e,t,n){"use strict";function o(e){function t(){$(".map-points").attr("width",$(window).width()),$(".map-points").attr("height",$(window).height()),($(window).width()<767||$(window).width()<991)&&($(".map-points").attr("viewBox","250 0 1920 1080"),$(".map-points__spots").attr("transform","translate(-40, 100)"))}function n(t){t&&t.preventDefault();var n=$(this).data("content");$(".spot-content."+n).length>0&&((0,a.ScrollStop)(e,!0),$(".spot-content."+n).addClass("spot-content--open"),$(".section__close-spot-content").addClass("section__close-spot-content--open"),$(document).on("click",".spot-content."+n,function(e){e.preventDefault(),$(e.target).attr("class")=="spot-content "+n+" spot-content--open"&&o()}))}function o(t){t&&t.preventDefault(),(0,a.ScrollStop)(e,!1);$(this).data("content");$(".spot-content").removeClass("spot-content--open"),$(".section__close-spot-content").removeClass("section__close-spot-content--open")}function l(t){t&&t.preventDefault(),(0,a.ScrollStop)(e,!0),$(".section__close-nineveh-general").addClass("section__close-nineveh-general--open"),$(".nineveh-general-content").addClass("nineveh-general-content--open")}function i(t){t&&t.preventDefault(),(0,a.ScrollStop)(e,!1),$(".section__close-nineveh-general").removeClass("section__close-nineveh-general--open"),$(".nineveh-general-content").removeClass("nineveh-general-content--open")}t(),$(window).on("resize",function(){t(),e.reBuild()}),$(".map-points__spot").on("click",n),$(".section__close-spot-content").on("click",o),$(".nineveh-general-point").on("click",l),$(".section__close-nineveh-general").on("click",i)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default=o},function(e,t,n){!function(t,o){var a=function(){o(t.lazySizes),t.removeEventListener("lazyunveilread",a,!0)};o=o.bind(null,t,t.document),"object"==typeof e&&e.exports?o(n(1)):t.lazySizes?a():t.addEventListener("lazyunveilread",a,!0)}(window,function(e,t,n){"use strict";if(e.addEventListener){var o=/\(|\)|'/,a={contain:1,cover:1},l=function(e){var t=n.gW(e,e.parentNode);return(!e._lazysizesWidth||t>e._lazysizesWidth)&&(e._lazysizesWidth=t),e._lazysizesWidth},i=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!a[t]&&a[e.style.backgroundSize]&&(t=e.style.backgroundSize),t},s=function(e,n,o){var a=t.createElement("picture"),l=n.getAttribute(lazySizesConfig.sizesAttr),i=n.getAttribute("data-ratio"),s=n.getAttribute("data-optimumx");n._lazybgset&&n._lazybgset.parentNode==n&&n.removeChild(n._lazybgset),Object.defineProperty(o,"_lazybgset",{value:n,writable:!0}),Object.defineProperty(n,"_lazybgset",{value:a,writable:!0}),e=e.replace(/\s+/g," ").split(/\s*\|\s+|\s+\|\s*/g),a.style.display="none",o.className=lazySizesConfig.lazyClass,1!=e.length||l||(l="auto"),e.forEach(function(e){var n=t.createElement("source");l&&"auto"!=l&&n.setAttribute("sizes",l),e.match(/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/)&&(n.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&n.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),a.appendChild(n)}),l&&(o.setAttribute(lazySizesConfig.sizesAttr,l),n.removeAttribute(lazySizesConfig.sizesAttr),n.removeAttribute("sizes")),s&&o.setAttribute("data-optimumx",s),i&&o.setAttribute("data-ratio",i),a.appendChild(o),n.appendChild(a)},c=function(e){if(e.target._lazybgset){var t=e.target,a=t._lazybgset,l=t.currentSrc||t.src;l&&(a.style.backgroundImage="url("+(o.test(l)?JSON.stringify(l):l)+")"),t._lazybgsetLoading&&(n.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var o,a,l;!e.defaultPrevented&&(o=e.target.getAttribute("data-bgset"))&&(l=e.target,a=t.createElement("img"),a.alt="",a._lazybgsetLoading=!0,e.detail.firesLoad=!0,s(o,l,a),setTimeout(function(){n.loader.unveil(a),n.rAF(function(){n.fire(a,"_lazyloaded",{},!0,!0),a.complete&&c({target:a})})}))}),t.addEventListener("load",c,!0),e.addEventListener("lazybeforesizes",function(e){if(e.detail.instance==n&&e.target._lazybgset&&e.detail.dataAttr){var t=e.target._lazybgset,o=i(t);a[o]&&(e.target._lazysizesParentFit=o,n.rAF(function(){e.target.setAttribute("data-parent-fit",o),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),t.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==n&&(e.detail.width=l(e.target._lazybgset))})}})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(0),l=o(a);n(3),n(10),n(1);var i=n(7),s=o(i),c=n(8),r=o(c),u=n(4),d=(o(u),n(9)),f=o(d),p=n(6),_=o(p),g=n(5),v=o(g);window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.init=!1,(0,l.default)(function(){function e(){lazySizes.init()}function t(e,t,n){var o=t-1;(0,l.default)(".section:eq("+o+")").addClass("load-bgs")}function n(e,t){var n=t-1,o=(0,l.default)(".section:eq("+n+")"),i=o.data("story"),s=o.data("index"),c=o.data("redirect"),r=(0,l.default)(".indicator"),u=fp_options.titles.filter(function(e){return e.story==i});r.find(".indicator__story").text(i),r.find(".indicator__index").text(s),u[0]&&u[0].title&&r.find(".indicator__title").text(u[0].title),c&&c.length>0&&(window.location=c),o.find(".bs-counter").length>0&&a.emit("runCounter")}function o(){l.default.fn.fullpage.moveSectionDown()}var a=window.mitt;(0,l.default)(".section__content").on("click",function(){return a.emit("close:all")}),(0,l.default)(document).keyup(function(e){27===e.keyCode&&a.emit("close:esc")}),(0,l.default)("#fullpage").fullpage({menu:"#fullpage-menu",recordHistory:!1,lazyLoading:!1,navigation:!1,afterRender:e,afterLoad:n,onLeave:t}),(0,s.default)(l.default.fn.fullpage),(0,r.default)(l.default.fn.fullpage),(0,f.default)(l.default.fn.fullpage),(0,_.default)(l.default.fn.fullpage),(0,v.default)(),(0,l.default)(document).on("click",".section__down",o)})}],[11]);