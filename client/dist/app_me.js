webpackJsonp([0],[,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(2),l=o(i);n(0),n(1),n(6),n(8);var a=n(9),s=o(a),r=n(10),c=o(r),u=n(11),d=o(u),f=n(12),p=o(f),g=n(13),_=o(g),m=n(14),v=o(m);n(15);window.fp_options=window.fp_options||{},window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.init=!1,(0,l.default)(document).ready(function(){function e(){lazySizes.init()}function t(e,t,n){var o=t-1;(0,l.default)(".section:eq("+o+")")}function n(e,t){var n=t-1,o=(0,l.default)(".section:eq("+n+")"),i=o.data("story"),a=o.data("index"),s=(o.data("redirect"),(0,l.default)(".indicator")),r=fp_options.titles.filter(function(e){return e.story==i});s.find(".indicator__story").text(i),s.find(".indicator__index").text(a),r[0]&&r[0].title&&s.find(".indicator__title").text(r[0].title)}function o(e){var t=(e.category,e.action,e.label,e.value),n=void 0===t?0:t;console.log(ga),"function"==typeof ga?ga("send","event","CLICK","DONATE","CLICKDONATE_SP",n,{hitCallback:function(){return resolve()}}):console.log("ga error")}function i(){l.default.fn.fullpage.moveSectionDown()}function a(){(0,l.default)(".intro").addClass("intro--close")}var r=window.mitt;(0,l.default)(".section__content").on("click",function(){return r.emit("close:all")}),(0,l.default)(document).on("click",function(e){return r.emit("click:document",e)}),(0,l.default)(document).keyup(function(e){27===e.keyCode&&r.emit("close:esc")});var u=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),f=u?".section__post__content, .spot-content__container, .nineveh-general-content__container, .section__modal__content":"";if(navigator.userAgent.match(/(IEMobile)/),(0,l.default)("#fullpage").fullpage({menu:"#fullpage-menu",lazyLoading:!1,navigation:!1,scrollingSpeed:1e3,normalScrollElements:f,afterRender:e,afterLoad:n,onLeave:t,fadingEffect:!0}),(0,l.default)("#fullpage").length>0){var g=l.default.fn.fullpage;r.on("stop:scroll",function(){console.log("stop:scroll"),(0,l.default)("body").addClass("scroll-stoped"),l.default.fn.fullpage.setAllowScrolling(!1)}),r.on("allow:scroll",function(){console.log("allow:scroll"),(0,l.default)("body").removeClass("scroll-stoped"),l.default.fn.fullpage.setAllowScrolling(!0)}),(0,s.default)(g),(0,c.default)(g),(0,d.default)(g),(0,p.default)(g),(0,v.default)(g),(0,_.default)()}(0,l.default)(document).on("click",".fullpage-donate.bs-donate",function(e){o({category:"CLICK",action:"DONATE",label:"CLICKDONATE_SP"})}),(0,l.default)(document).on("click","a.ray-link",function(){o({category:"SUBSCRIBE",action:"SUBSCRIBE_PRAY",label:"PRAY_ES"})}),(0,l.default)(document).on("click",".section__down",i),""!==window.location.hash&&a(),setTimeout(function(){a()},fp_options.introDelay)})},function(e,t,n){!function(t,o){var i=function(){o(t.lazySizes),t.removeEventListener("lazyunveilread",i,!0)};o=o.bind(null,t,t.document),"object"==typeof e&&e.exports?o(n(0),n(7)):t.lazySizes?i():t.addEventListener("lazyunveilread",i,!0)}(window,function(e,t,n){"use strict";var o,i=n&&n.cfg||e.lazySizesConfig,l=t.createElement("img"),a="sizes"in l&&"srcset"in l,s=/\s+\d+h/g,r=function(){var e=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,n=Array.prototype.forEach;return function(o){var i=t.createElement("img"),l=function(t){var n,o=t.getAttribute(lazySizesConfig.srcsetAttr);o&&(o.match(e)&&(n="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1)&&t.setAttribute("data-aspectratio",n),t.setAttribute(lazySizesConfig.srcsetAttr,o.replace(s,"")))},a=function(e){var t=e.target.parentNode;t&&"PICTURE"==t.nodeName&&n.call(t.getElementsByTagName("source"),l),l(e.target)},r=function(){i.currentSrc&&t.removeEventListener("lazybeforeunveil",a)};o[1]&&(t.addEventListener("lazybeforeunveil",a),i.onload=r,i.onerror=r,i.srcset="data:,a 1w 1h",i.complete&&r())}}();if(i||(i={},e.lazySizesConfig=i),i.supportsType||(i.supportsType=function(e){return!e}),!e.picturefill&&!i.pf){if(e.HTMLPictureElement&&a)return t.msElementsFromPoint&&r(navigator.userAgent.match(/Edge\/(\d+)/)),void(i.pf=function(){});i.pf=function(t){var n,i;if(!e.picturefill)for(n=0,i=t.elements.length;n<i;n++)o(t.elements[n])},o=function(){var l=function(e,t){return e.w-t.w},r=/^\s*\d+\.*\d*px\s*$/,c=function(e){var t,n,o=e.length,i=e[o-1],l=0;for(l;l<o;l++)if(i=e[l],i.d=i.w/e.w,i.d>=e.d){!i.cached&&(t=e[l-1])&&t.d>e.d-.13*Math.pow(e.d,2.2)&&(n=Math.pow(t.d-.6,1.6),t.cached&&(t.d+=.15*n),t.d+(i.d-e.d)*n>e.d&&(i=t));break}return i},u=function(){var e,t=/(([^,\s].[^\s]+)\s+(\d+)w)/g,n=/\s/,o=function(t,n,o,i){e.push({c:n,u:o,w:1*i})};return function(i){return e=[],i=i.trim(),i.replace(s,"").replace(t,o),e.length||!i||n.test(i)||e.push({c:i,u:i,w:99}),e}}(),d=function(){d.init||(d.init=!0,addEventListener("resize",function(){var e,n=t.getElementsByClassName("lazymatchmedia"),i=function(){var e,t;for(e=0,t=n.length;e<t;e++)o(n[e])};return function(){clearTimeout(e),e=setTimeout(i,66)}}()))},f=function(t,o){var l,a=t.getAttribute("srcset")||t.getAttribute(i.srcsetAttr);!a&&o&&(a=t._lazypolyfill?t._lazypolyfill._set:t.getAttribute(i.srcAttr)||t.getAttribute("src")),t._lazypolyfill&&t._lazypolyfill._set==a||(l=u(a||""),o&&t.parentNode&&(l.isPicture="PICTURE"==t.parentNode.nodeName.toUpperCase(),l.isPicture&&e.matchMedia&&(n.aC(t,"lazymatchmedia"),d())),l._set=a,Object.defineProperty(t,"_lazypolyfill",{value:l,writable:!0}))},p=function(t){var o=e.devicePixelRatio||1,i=n.getX&&n.getX(t);return Math.min(i||o,2.5,o)},g=function(t){return e.matchMedia?(g=function(e){return!e||(matchMedia(e)||{}).matches})(t):!t},_=function(e){var t,o,a,s,u,d,_;if(s=e,f(s,!0),u=s._lazypolyfill,u.isPicture)for(o=0,t=e.parentNode.getElementsByTagName("source"),a=t.length;o<a;o++)if(i.supportsType(t[o].getAttribute("type"),e)&&g(t[o].getAttribute("media"))){s=t[o],f(s),u=s._lazypolyfill;break}return u.length>1?(_=s.getAttribute("sizes")||"",_=r.test(_)&&parseInt(_,10)||n.gW(e,e.parentNode),u.d=p(e),!u.src||!u.w||u.w<_?(u.w=_,d=c(u.sort(l)),u.src=d):d=u.src):d=u[0],d},m=function(e){if(!a||!e.parentNode||"PICTURE"==e.parentNode.nodeName.toUpperCase()){var t=_(e);t&&t.u&&e._lazypolyfill.cur!=t.u&&(e._lazypolyfill.cur=t.u,t.cached=!0,e.setAttribute(i.srcAttr,t.u),e.setAttribute("src",t.u))}};return m.parse=u,m}(),i.loadedClass&&i.loadingClass&&function(){var e=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(t){e.push(t+i.loadedClass),e.push(t+i.loadingClass)}),i.pf({elements:t.querySelectorAll(e.join(", "))})}()}})},function(e,t,n){!function(t,o){var i=function(){o(t.lazySizes),t.removeEventListener("lazyunveilread",i,!0)};o=o.bind(null,t,t.document),"object"==typeof e&&e.exports?o(n(0)):t.lazySizes?i():t.addEventListener("lazyunveilread",i,!0)}(window,function(e,t,n){"use strict";var o,i=t.createElement("img");!("srcset"in i)||"sizes"in i||e.HTMLPictureElement||(o=/^picture$/i,t.addEventListener("lazybeforeunveil",function(e){if(e.detail.instance==n){var i,l,a,s,r,c,u;!e.defaultPrevented&&!lazySizesConfig.noIOSFix&&(i=e.target)&&(a=i.getAttribute(lazySizesConfig.srcsetAttr))&&(l=i.parentNode)&&((r=o.test(l.nodeName||""))||(s=i.getAttribute("sizes")||i.getAttribute(lazySizesConfig.sizesAttr)))&&(c=r?l:t.createElement("picture"),i._lazyImgSrc||Object.defineProperty(i,"_lazyImgSrc",{value:t.createElement("source"),writable:!0}),u=i._lazyImgSrc,s&&u.setAttribute("sizes",s),u.setAttribute(lazySizesConfig.srcsetAttr,a),i.setAttribute("data-pfsrcset",a),i.removeAttribute(lazySizesConfig.srcsetAttr),r||(l.insertBefore(c,i),c.appendChild(i)),c.insertBefore(u,i))}}))})},function(e,t,n){!function(t,o){var i=function(){o(t.lazySizes),t.removeEventListener("lazyunveilread",i,!0)};o=o.bind(null,t,t.document),"object"==typeof e&&e.exports?o(n(0)):t.lazySizes?i():t.addEventListener("lazyunveilread",i,!0)}(window,function(e,t,n){"use strict";if(e.addEventListener){var o=/\s+/g,i=/\s*\|\s+|\s+\|\s*/g,l=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,a=/\(|\)|'/,s={contain:1,cover:1},r=function(e){var t=n.gW(e,e.parentNode);return(!e._lazysizesWidth||t>e._lazysizesWidth)&&(e._lazysizesWidth=t),e._lazysizesWidth},c=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!s[t]&&s[e.style.backgroundSize]&&(t=e.style.backgroundSize),t},u=function(e,n,a){var s=t.createElement("picture"),r=n.getAttribute(lazySizesConfig.sizesAttr),c=n.getAttribute("data-ratio"),u=n.getAttribute("data-optimumx");n._lazybgset&&n._lazybgset.parentNode==n&&n.removeChild(n._lazybgset),Object.defineProperty(a,"_lazybgset",{value:n,writable:!0}),Object.defineProperty(n,"_lazybgset",{value:s,writable:!0}),e=e.replace(o," ").split(i),s.style.display="none",a.className=lazySizesConfig.lazyClass,1!=e.length||r||(r="auto"),e.forEach(function(e){var n=t.createElement("source");r&&"auto"!=r&&n.setAttribute("sizes",r),e.match(l)&&(n.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&n.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),s.appendChild(n)}),r&&(a.setAttribute(lazySizesConfig.sizesAttr,r),n.removeAttribute(lazySizesConfig.sizesAttr),n.removeAttribute("sizes")),u&&a.setAttribute("data-optimumx",u),c&&a.setAttribute("data-ratio",c),s.appendChild(a),n.appendChild(s)},d=function(e){if(e.target._lazybgset){var t=e.target,o=t._lazybgset,i=t.currentSrc||t.src;i&&(o.style.backgroundImage="url("+(a.test(i)?JSON.stringify(i):i)+")"),t._lazybgsetLoading&&(n.fire(o,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var o,i,l;!e.defaultPrevented&&(o=e.target.getAttribute("data-bgset"))&&(l=e.target,i=t.createElement("img"),i.alt="",i._lazybgsetLoading=!0,e.detail.firesLoad=!0,u(o,l,i),setTimeout(function(){n.loader.unveil(i),n.rAF(function(){n.fire(i,"_lazyloaded",{},!0,!0),i.complete&&d({target:i})})}))}),t.addEventListener("load",d,!0),e.addEventListener("lazybeforesizes",function(e){if(e.detail.instance==n&&e.target._lazybgset&&e.detail.dataAttr){var t=e.target._lazybgset,o=c(t);s[o]&&(e.target._lazysizesParentFit=o,n.rAF(function(){e.target.setAttribute("data-parent-fit",o),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),t.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==n&&(e.detail.width=r(e.target._lazybgset))})}})},function(e,t,n){"use strict";function o(e){function t(){$(".section__post--open").length>0&&(l.emit("allow:scroll"),$(".section__post--open").removeClass("section__post--open"),$(".section__close-post").removeClass("section__close-post--open"))}function n(e){l.emit("stop:scroll"),e.addClass("section__post--open"),$(".section__close-post").addClass("section__close-post--open")}function o(e){a=$(this).closest(".fp-tableCell").find(".section__post"),a.hasClass("section__post--open")?t.call(this,a,e):n.call(this,a,e)}function i(e){$(e.target).is(a)&&(console.log("post close outside"),t(a))}var l=window.mitt,a=void 0;$(document).on("click",".section__open-post",o),$(document).on("click",".section__close-post",o),l.on("close:esc",t),l.on("click:document",i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){function t(e){if(e.length>0){i.emit("allow:scroll");e.find("iframe").attr("src",""),e.removeClass("section__video--open")}}function n(e){i.emit("stop:scroll"),e.addClass("section__video--open");var n=e.find("iframe"),o=n.data("src");n.attr("src",o),i.off("close:esc",function(){return t(e)}),i.on("close:esc",function(){return t(e)})}function o(e){e&&e.preventDefault();var o=$(this).closest(".fp-tableCell").find(".section__video");o.hasClass("section__video--open")?t(o):n(o)}var i=window.mitt;$(document).on("click",".section__open-video",o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){function t(){$(".map-points").attr("width",$(window).width()),$(".map-points").attr("height",$(window).height()),($(window).width()<767||$(window).width()<991)&&($(".map-points").attr("viewBox","250 0 1920 1080"),$(".map-points__spots").attr("transform","translate(-40, 100)")),e.reBuild()}function n(e){e&&e.preventDefault();var t=$(this).data("content");$(".spot-content."+t).length>0&&(r.emit("stop:scroll"),c=$(".spot-content."+t),$(".spot-content."+t).addClass("spot-content--open"),$(".section__close-spot-content").addClass("section__close-spot-content--open"))}function o(e){e&&e.preventDefault(),r.emit("allow:scroll"),$(".spot-content").removeClass("spot-content--open"),$(".section__close-spot-content").removeClass("section__close-spot-content--open")}function i(e){r.emit("stop:scroll"),u=$(".nineveh-general-content"),u.addClass("nineveh-general-content--open"),$(".section__close-nineveh-general").addClass("section__close-nineveh-general--open")}function l(e){$(".section__close-nineveh-general--open").length>0&&(r.emit("allow:scroll"),$(".section__close-nineveh-general").removeClass("section__close-nineveh-general--open"),$(".nineveh-general-content").removeClass("nineveh-general-content--open"))}function a(e){$(e.target).is(c)&&o()}function s(e){$(e.target).is(u)&&l()}var r=window.mitt,c=void 0,u=void 0;t(),$(window).on("resize",function(){e.reBuild(),t()}),$(".map-points__spot").on("click",n),$(".section__close-spot-content").on("click",o),$(".nineveh-general-point").on("click",i),$(".section__close-nineveh-general").on("click",l),r.on("close:esc",l),r.on("close:esc",o),r.on("click:document",a),r.on("click:document",s)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){function t(e){e&&e.preventDefault(),o.emit("stop:scroll"),$(".fullpage-nav").addClass("fullpage-nav--open"),$(".fullpage__menu").addClass("fullpage__menu--dark")}function n(e){$(".fullpage-nav--open").length>0&&(o.emit("allow:scroll"),$(".fullpage-nav").removeClass("fullpage-nav--open"),$(".fullpage__menu").removeClass("fullpage__menu--dark"))}var o=window.mitt;$(".indicator").on("click",t),$(".fullpage-nav__close").on("click",n),$(".fullpage-nav a").on("click",n),o.on("close:all",n),o.on("close:esc",n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(){function e(){var e=$(".fullpage__menu__share > a"),t=e.parent().find("ul");t.hasClass("fullpage__menu__share--open")?(e.find("i").removeClass("ion-close-round"),t.removeClass("fullpage__menu__share--open")):(e.find("i").addClass("ion-close-round"),t.addClass("fullpage__menu__share--open"))}$(".fullpage__menu__share > a").on("click",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){function t(e){e&&e.preventDefault(),o.emit("stop:scroll");var t=$(this).attr("href").replace("#","");$('.section__modal[data-modal="'+t+'"]').addClass("section__modal--open")}function n(){if($(".section__modal--open").length>0){o.emit("allow:scroll");$(".section__modal--open").removeClass("section__modal--open")}}var o=window.mitt;$(".open-modal").on("click",t),$(".section__modal__close-modal").on("click",n),o.on("close:esc",n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.stopScroll=function(e){window.mitt.on("stop:scroll",function(){$("body").addClass("scroll-stoped"),e.setAllowScrolling(!1)})},t.allowScroll=function(e){window.mitt.on("allow:scroll",function(){$("body").removeClass("scroll-stoped"),e.setAllowScrolling(!0)})}}],[5]);