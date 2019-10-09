/*!
 * froala_editor v3.0.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2019 Froala Labs
 */


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(e){"use strict";(e=e&&e.hasOwnProperty("default")?e["default"]:e).PLUGINS.fullscreen=function(r){var t,o,s,n,i=r.$;function a(){return r.$box.hasClass("fr-fullscreen")}function e(){if(r.helpers.isIOS()&&r.core.hasFocus())return r.$el.blur(),setTimeout(f,250),!1;t=r.helpers.scrollTop(),r.$box.toggleClass("fr-fullscreen"),i("body").first().toggleClass("fr-fullscreen"),r.helpers.isMobile()&&(r.$tb.data("parent",r.$tb.parent()),r.$box.prepend(r.$tb),r.$tb.data("sticky-dummy")&&r.$tb.after(r.$tb.data("sticky-dummy"))),o=r.opts.height,s=r.opts.heightMax,n=r.opts.zIndex,r.opts.height=r.o_win.innerHeight-(r.opts.toolbarInline?0:r.$tb.outerHeight()+(r.$second_tb?r.$second_tb.outerHeight():0)),r.opts.zIndex=2147483641,r.opts.heightMax=null,r.size.refresh(),r.opts.toolbarInline&&r.toolbar.showInline();for(var e=r.$box.parent();!e.first().is("body");)e.addClass("fr-fullscreen-wrapper"),e=e.parent();r.opts.toolbarContainer&&r.$box.prepend(r.$tb),r.events.trigger("charCounter.update"),r.events.trigger("codeView.update"),r.$win.trigger("scroll")}function l(){if(r.helpers.isIOS()&&r.core.hasFocus())return r.$el.blur(),setTimeout(f,250),!1;r.$box.toggleClass("fr-fullscreen"),i("body").first().toggleClass("fr-fullscreen"),r.$tb.data("parent")&&r.$tb.data("parent").prepend(r.$tb),r.$tb.data("sticky-dummy")&&r.$tb.after(r.$tb.data("sticky-dummy")),r.opts.height=o,r.opts.heightMax=s,r.opts.zIndex=n,r.size.refresh(),i(r.o_win).scrollTop(t),r.opts.toolbarInline&&r.toolbar.showInline(),r.events.trigger("charCounter.update"),r.opts.toolbarSticky&&r.opts.toolbarStickyOffset&&(r.opts.toolbarBottom?r.$tb.css("bottom",r.opts.toolbarStickyOffset).data("bottom",r.opts.toolbarStickyOffset):r.$tb.css("top",r.opts.toolbarStickyOffset).data("top",r.opts.toolbarStickyOffset));for(var e=r.$box.parent();!e.first().is("body");)e.removeClass("fr-fullscreen-wrapper"),e=e.parent();r.opts.toolbarContainer&&i(r.opts.toolbarContainer).append(r.$tb),i(r.o_win).trigger("scroll"),r.events.trigger("codeView.update")}function f(){a()?l():e(),c(r.$tb.find('.fr-command[data-cmd="fullscreen"]')),r.refresh.moreText(r.$tb.find('.fr-command[data-cmd="moreText"]')),r.refresh.moreParagraph(r.$tb.find('.fr-command[data-cmd="moreParagraph"]')),r.refresh.moreRich(r.$tb.find('.fr-command[data-cmd="moreRich"]')),r.refresh.moreMisc(r.$tb.find('.fr-command[data-cmd="moreMisc"]'))}function c(e){var t=a();e.toggleClass("fr-active",t).attr("aria-pressed",t),e.find("> *").not(".fr-sr-only").replaceWith(t?r.icon.create("fullscreenCompress"):r.icon.create("fullscreen"))}return{_init:function d(){if(!r.$wp)return!1;r.events.$on(i(r.o_win),"resize",function(){a()&&(l(),e())}),r.events.on("toolbar.hide",function(){if(a()&&r.helpers.isMobile())return!1}),r.events.on("position.refresh",function(){if(r.helpers.isIOS())return!a()}),r.events.on("destroy",function(){a()&&l()},!0)},toggle:f,refresh:c,isActive:a}},e.RegisterCommand("fullscreen",{title:"Fullscreen",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.fullscreen.toggle()},refresh:function(e){this.fullscreen.refresh(e)},plugin:"fullscreen"}),e.DefineIcon("fullscreen",{NAME:"expand",SVG_KEY:"fullscreen"}),e.DefineIcon("fullscreenCompress",{NAME:"compress",SVG_KEY:"exitFullscreen"})});