/*!
 * froala_editor v3.0.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2019 Froala Labs
 */


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(b){"use strict";b=b&&b.hasOwnProperty("default")?b["default"]:b,Object.assign(b.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video",".fr-embedly"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),b.PLUGINS.lineBreaker=function(c){var v,t,a,m=c.$;function f(e,t){var n,r,a,o,i,s,f,l;if(null==e)i=(o=t.parent()).offset().top,n=(f=t.offset().top)-Math.min((f-i)/2,c.opts.lineBreakerOffset),a=o.outerWidth(),r=o.offset().left;else if(null==t)(s=(o=e.parent()).offset().top+o.outerHeight())<(l=e.offset().top+e.outerHeight())&&(s=(o=m(o).parent()).offset().top+o.outerHeight()),n=l+Math.min(Math.abs(s-l)/2,c.opts.lineBreakerOffset),a=o.outerWidth(),r=o.offset().left;else{o=e.parent();var p=e.offset().top+e.height(),u=t.offset().top;if(u<p)return!1;n=(p+u)/2,a=o.outerWidth(),r=o.offset().left}if(c.opts.iframe){var d=c.helpers.getPX(c.$wp.find(".fr-iframe").css("padding-top")),g=c.helpers.getPX(c.$wp.find(".fr-iframe").css("padding-left"));r+=c.$iframe.offset().left-c.helpers.scrollLeft()+g,n+=c.$iframe.offset().top-c.helpers.scrollTop()+d}c.$box.append(v),v.css("top",n-c.win.pageYOffset),v.css("left",r-c.win.pageXOffset),v.css("width",a),v.data("tag1",e),v.data("tag2",t),v.addClass("fr-visible").data("instance",c)}function l(e){if(e){var t=m(e);if(0===c.$el.find(t).length)return null;if(e.nodeType!=Node.TEXT_NODE&&t.is(c.opts.lineBreakerTags.join(",")))return t;if(0<t.parents(c.opts.lineBreakerTags.join(",")).length)return e=t.parents(c.opts.lineBreakerTags.join(",")).get(0),0!==c.$el.find(m(e)).length&&m(e).is(c.opts.lineBreakerTags.join(","))?m(e):null}return null}function o(e,t){var n=c.doc.elementFromPoint(e,t);return n&&!m(n).closest(".fr-line-breaker").length&&!c.node.isElement(n)&&n!=c.$wp.get(0)&&function r(e){if("undefined"!=typeof e.inFroalaWrapper)return e.inFroalaWrapper;for(var t=e;e.parentNode&&e.parentNode!==c.$wp.get(0);)e=e.parentNode;return t.inFroalaWrapper=e.parentNode==c.$wp.get(0),t.inFroalaWrapper}(n)?n:null}function i(e,t,n){for(var r=n,a=null;r<=c.opts.lineBreakerOffset&&!a;)(a=o(e,t-r))||(a=o(e,t+r)),r+=n;return a}function p(e,t,n){for(var r=null,a=100;!r&&e>c.$box.offset().left&&e<c.$box.offset().left+c.$box.outerWidth()&&0<a;)(r=o(e,t))||(r=i(e,t,5)),"left"==n?e-=c.opts.lineBreakerHorizontalOffset:e+=c.opts.lineBreakerHorizontalOffset,a-=c.opts.lineBreakerHorizontalOffset;return r}function n(e){var t=a=null,n=null,r=c.doc.elementFromPoint(e.pageX-c.win.pageXOffset,e.pageY-c.win.pageYOffset);(t=r&&("HTML"==r.tagName||"BODY"==r.tagName||c.node.isElement(r)||0<=(r.getAttribute("class")||"").indexOf("fr-line-breaker"))?((n=i(e.pageX-c.win.pageXOffset,e.pageY-c.win.pageYOffset,1))||(n=p(e.pageX-c.win.pageXOffset-c.opts.lineBreakerHorizontalOffset,e.pageY-c.win.pageYOffset,"left")),n||(n=p(e.pageX-c.win.pageXOffset+c.opts.lineBreakerHorizontalOffset,e.pageY-c.win.pageYOffset,"right")),l(n)):l(r))?function s(e,t){var n,r,a=e.offset().top,o=e.offset().top+e.outerHeight();if(Math.abs(o-t)<=c.opts.lineBreakerOffset||Math.abs(t-a)<=c.opts.lineBreakerOffset)if(Math.abs(o-t)<Math.abs(t-a)){for(var i=(r=e.get(0)).nextSibling;i&&i.nodeType==Node.TEXT_NODE&&0===i.textContent.length;)i=i.nextSibling;if(!i)return f(e,null),!0;if(n=l(i))return f(e,n),!0}else{if(!(r=e.get(0)).previousSibling)return f(null,e),!0;if(n=l(r.previousSibling))return f(n,e),!0}v.removeClass("fr-visible").removeData("instance")}(t,e.pageY):c.core.sameInstance(v)&&v.removeClass("fr-visible").removeData("instance")}function r(e){return!(v.hasClass("fr-visible")&&!c.core.sameInstance(v))&&(c.popups.areVisible()||c.el.querySelector(".fr-selected-cell")?(v.removeClass("fr-visible"),!0):void(!1!==t||c.edit.isDisabled()||(a&&clearTimeout(a),a=setTimeout(n,30,e))))}function s(){a&&clearTimeout(a),v&&v.hasClass("fr-visible")&&v.removeClass("fr-visible").removeData("instance")}function u(){t=!0,s()}function d(){t=!1}function g(e){e.preventDefault();var t=v.data("instance")||c;v.removeClass("fr-visible").removeData("instance");var n=v.data("tag1"),r=v.data("tag2"),a=c.html.defaultTag();null==n?a&&"TD"!=r.parent().get(0).tagName&&0===r.parents(a).length?r.before("<"+a+">"+b.MARKERS+"<br></"+a+">"):r.before(b.MARKERS+"<br>"):a&&"TD"!=n.parent().get(0).tagName&&0===n.parents(a).length?n.after("<"+a+">"+b.MARKERS+"<br></"+a+">"):n.after(b.MARKERS+"<br>"),t.selection.restore()}return{_init:function h(){if(!c.$wp)return!1;!function e(){c.shared.$line_breaker||(c.shared.$line_breaker=m(document.createElement("div")).attr("class","fr-line-breaker").html('<a class="fr-floating-btn" role="button" tabIndex="-1" title="'+c.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="17" y="7" width="2" height="8"/><rect x="10" y="13" width="7" height="2"/><path d="M10.000,10.000 L10.000,18.013 L5.000,14.031 L10.000,10.000 Z"/></svg></a>')),v=c.shared.$line_breaker,c.events.on("shared.destroy",function(){v.html("").removeData().remove(),v=null},!0),c.events.on("destroy",function(){v.removeData("instance").removeClass("fr-visible"),m("body").first().append(v),clearTimeout(a)},!0),c.events.$on(v,"mousemove",function(e){e.stopPropagation()},!0),c.events.bindClick(v,"a",g)}(),t=!1,c.events.$on(c.$win,"mousemove",r),c.events.$on(m(c.win),"scroll",s),c.events.on("popups.show.table.edit",s),c.events.on("commands.after",s),c.events.$on(m(c.win),"mousedown",u),c.events.$on(m(c.win),"mouseup",d)}}}});