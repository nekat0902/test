!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e,Object.assign(e.DEFAULTS,{lineHeights:{Default:"",Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"}}),e.PLUGINS.lineHeight=function(a){var r=a.$;return{_init:function e(){},apply:function n(e){a.selection.save(),a.html.wrap(!0,!0,!0,!0),a.selection.restore();var t=a.selection.blocks();a.selection.save();for(var i=0;i<t.length;i++)r(t[i]).css("line-height",e),""===r(t[i]).attr("style")&&r(t[i]).removeAttr("style");a.html.unwrap(),a.selection.restore()},refreshOnShow:function l(e,t){var i=a.selection.blocks();if(i.length){var n=r(i[0]);t.find(".fr-command").each(function(){var e=r(this).data("param1"),t=0<=(n.attr("style")||"").indexOf("line-height: "+e+";");r(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}}},e.RegisterCommand("lineHeight",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.lineHeights;for(var i in t)t.hasOwnProperty(i)&&(e+='<li role="presentation"><a class="fr-command '+i+'" tabIndex="-1" role="option" data-cmd="lineHeight" data-param1="'+t[i]+'" title="'+this.language.translate(i)+'">'+this.language.translate(i)+"</a></li>");return e+"</ul>"},title:"Line Height",callback:function(e,t){this.lineHeight.apply(t)},refreshOnShow:function(e,t){this.lineHeight.refreshOnShow(e,t)},plugin:"lineHeight"}),e.DefineIcon("lineHeight",{NAME:"arrows-v",FA5NAME:"arrows-alt-v",SVG_KEY:"lineHeight"})});