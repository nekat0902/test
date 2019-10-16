!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(o.FroalaEditor)}(this,function(E){"use strict";E=E&&E.hasOwnProperty("default")?E["default"]:E,Object.assign(E.POPUP_TEMPLATES,{"textColor.picker":"[_BUTTONS_][_TEXT_COLORS_][_CUSTOM_COLOR_]","backgroundColor.picker":"[_BUTTONS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"}),Object.assign(E.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsHEXInput:!0,colorsButtons:["colorsBack","|","-"]}),E.PLUGINS.colors=function(b){function l(o){for(var t="text"===o?b.opts.colorsText:b.opts.colorsBackground,r='<div class="fr-color-set fr-'.concat(o,'-color fr-selected-set">'),e=0;e<t.length;e++)0!==e&&e%b.opts.colorsStep==0&&(r+="<br>"),"REMOVE"!==t[e]?r+='<span class="fr-command fr-select-color" style="background:'.concat(t[e],';" \n        tabIndex="-1" aria-selected="false" role="button" data-cmd="apply').concat(o,'Color" \n        data-param1="').concat(t[e],'"><span class="fr-sr-only"> ').concat(b.language.translate("Color")).concat(t[e]," \n        &nbsp;&nbsp;&nbsp;</span></span>"):r+='<span class="fr-command fr-select-color" data-cmd="apply'.concat(o,'Color"\n         tabIndex="-1" role="button" data-param1="REMOVE" \n         title="').concat(b.language.translate("Clear Formatting"),'">').concat(b.icon.create("remove"),' \n        <span class="fr-sr-only"> ').concat(b.language.translate("Clear Formatting")," </span></span>");return r+"</div>"}function s(o){var t,r=b.popups.get("".concat(o,"Color.picker")),e=g(b.selection.element());t="background"===o?"background-color":"color";var a=r.find(".fr-".concat(o,"-color .fr-select-color"));for(a.find(".fr-selected-color").remove(),a.removeClass("fr-active-item"),a.not('[data-param1="REMOVE"]').attr("aria-selected",!1);e.get(0)!==b.el;){if("transparent"!==e.css(t)&&"rgba(0, 0, 0, 0)"!==e.css(t)){var c=r.find(".fr-".concat(o,'-color .fr-select-color[data-param1="').concat(b.helpers.RGBToHex(e.css(t)),'"]'));c.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>'),c.addClass("fr-active-item").attr("aria-selected",!0);break}e=e.parent()}!function n(o){var t=b.popups.get("".concat(o,"Color.picker")),r=t.find(".fr-".concat(o,"-color .fr-active-item")).attr("data-param1"),e=t.find(".fr-color-hex-layer input");r||(r=""),e.length&&g(e.val(r).input).trigger("change")}(o)}function e(o){"REMOVE"!==o?b.format.applyStyle("background-color",b.helpers.HEXtoRGB(o)):b.format.removeStyle("background-color"),b.popups.hide("backgroundColor.picker")}function a(o){"REMOVE"!==o?b.format.applyStyle("color",b.helpers.HEXtoRGB(o)):b.format.removeStyle("color"),b.popups.hide("textColor.picker")}var g=b.$,i='<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer- \n  '.concat(b.id,'"><div class="fr-input-line"><input maxlength="7" id="[ID]"\n  type="text" placeholder="').concat(b.language.translate("HEX Color"),'" \n  tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button \n  type="button" class="fr-command fr-submit" data-cmd="[COMMAND]" tabIndex="2" role="button">\n  ').concat(b.language.translate("OK"),"</button></div></div>");return{showColorsPopup:function p(o){var t=b.$tb.find('.fr-command[data-cmd="'.concat(o,'"]')),r=b.popups.get("".concat(o,".picker"));if(r||(r=function n(o){var t="";b.opts.toolbarInline&&0<b.opts.colorsButtons.length&&(t+='<div class="fr-buttons fr-colors-buttons fr-tabs">\n        '.concat(b.button.buildList(b.opts.colorsButtons),"\n        </div>"));var r,e="";r="textColor"===o?(b.opts.colorsHEXInput&&(e=i.replace(/\[ID\]/g,"fr-color-hex-layer-text-".concat(b.id)).replace(/\[COMMAND\]/g,"customTextColor")),{buttons:t,text_colors:l("text"),custom_color:e}):(b.opts.colorsHEXInput&&(e=i.replace(/\[ID\]/g,"fr-color-hex-layer-background-".concat(b.id)).replace(/\[COMMAND\]/g,"customBackgroundColor")),{buttons:t,background_colors:l("background"),custom_color:e});var a=b.popups.create("".concat(o,".picker"),r);return function c(f,C){b.events.on("popup.tab",function(o){var t=g(o.currentTarget);if(!b.popups.isVisible(C)||!t.is("span"))return!0;var r=o.which,e=!0;if(E.KEYCODE.TAB===r){var a=f.find(".fr-buttons");e=!b.accessibility.focusToolbar(a,!!o.shiftKey)}else if(E.KEYCODE.ARROW_UP===r||E.KEYCODE.ARROW_DOWN===r||E.KEYCODE.ARROW_LEFT===r||E.KEYCODE.ARROW_RIGHT===r){if(t.is("span.fr-select-color")){var c=t.parent().find("span.fr-select-color"),n=c.index(t),l=b.opts.colorsStep,s=Math.floor(c.length/l),i=n%l,p=Math.floor(n/l)*l+i,u=s*l;E.KEYCODE.ARROW_UP===r?p=((p-l)%u+u)%u:E.KEYCODE.ARROW_DOWN===r?p=(p+l)%u:E.KEYCODE.ARROW_LEFT===r?p=((p-1)%u+u)%u:E.KEYCODE.ARROW_RIGHT===r&&(p=(p+1)%u);var d=g(c.get(p));b.events.disableBlur(),d.focus(),e=!1}}else E.KEYCODE.ENTER===r&&(b.button.exec(t),e=!1);return!1===e&&(o.preventDefault(),o.stopPropagation()),e},!0)}(a,"".concat(o,".picker")),a}(o)),!r.hasClass("fr-active"))if(b.popups.setContainer("".concat(o,".picker"),b.$tb),s("textColor"===o?"text":"background"),t.isVisible()){var e=b.button.getPosition(t),a=e.left,c=e.top;b.popups.show("".concat(o,".picker"),a,c,t.outerHeight())}else b.position.forSelection(r),b.popups.show("".concat(o,".picker"))},background:e,customColor:function c(o){var t=b.popups.get("".concat(o,"Color.picker")).find(".fr-color-hex-layer input");if(t.length){var r=t.val();"background"===o?e(r):a(r)}},text:a,back:function o(){b.popups.hide("textColor.picker"),b.popups.hide("backgroundColor.picker"),b.toolbar.showInline()}}},E.DefineIcon("textColor",{NAME:"tint",SVG_KEY:"textColor"}),E.RegisterCommand("textColor",{title:"Text Color",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("textColor.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("textColor.picker")):this.colors.showColorsPopup("textColor")}}),E.RegisterCommand("applytextColor",{undo:!0,callback:function(o,t){this.colors.text(t)}}),E.RegisterCommand("customTextColor",{title:"OK",undo:!0,callback:function(){this.colors.customColor("text")}}),E.DefineIcon("backgroundColor",{NAME:"paint-brush",SVG_KEY:"backgroundColor"}),E.RegisterCommand("backgroundColor",{title:"Background Color",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("backgroundColor.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("backgroundColor.picker")):this.colors.showColorsPopup("backgroundColor")}}),E.RegisterCommand("applybackgroundColor",{undo:!0,callback:function(o,t){this.colors.background(t)}}),E.RegisterCommand("customBackgroundColor",{title:"OK",undo:!0,callback:function(){this.colors.customColor("background")}}),E.DefineIcon("colorsBack",{NAME:"arrow-left",SVG_KEY:"back"}),E.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),E.DefineIcon("remove",{NAME:"eraser",SVG_KEY:"remove"})});