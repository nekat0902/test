/*!
 * froala_editor v3.0.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2019 Froala Labs
 */


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(o){"use strict";o=o&&o.hasOwnProperty("default")?o["default"]:o,Object.assign(o.DEFAULTS,{inlineStyles:{"Big Red":"font-size: 20px; color: red;","Small Blue":"font-size: 14px; color: blue;"}}),o.PLUGINS.inlineStyle=function(i){return{apply:function a(e){if(""!==i.selection.text())for(var t=e.split(";"),n=0;n<t.length;n++){var l=t[n].split(":");t[n].length&&2==l.length&&i.format.applyStyle(l[0].trim(),l[1].trim())}else i.html.insert('<span style="'+e+'">'+o.INVISIBLE_SPACE+o.MARKERS+"</span>")}}},o.RegisterCommand("inlineStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.inlineStyles;for(var n in t){if(t.hasOwnProperty(n))e+='<li role="presentation"><span style="'+(t[n]+(-1===t[n].indexOf("display:block;")?" display:block;":""))+'" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineStyle" data-param1="'+t[n]+'" title="'+this.language.translate(n)+'">'+this.language.translate(n)+"</a></span></li>"}return e+="</ul>"},title:"Inline Style",callback:function(e,t){this.inlineStyle.apply(t)},plugin:"inlineStyle"}),o.DefineIcon("inlineStyle",{NAME:"paint-brush",SVG_KEY:"inlineStyle"})});
