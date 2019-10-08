/*!
 * froala_editor v3.0.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2019 Froala Labs
 */


!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],e):e(n.FroalaEditor)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n["default"]:n,Object.assign(n.DEFAULTS,{inlineClasses:{"fr-class-code":"Code","fr-class-highlighted":"Highlighted","fr-class-transparency":"Transparent"}}),n.PLUGINS.inlineClass=function(a){var i=a.$;return{apply:function e(n){a.format.toggle("span",{"class":n})},refreshOnShow:function s(n,e){e.find(".fr-command").each(function(){var n=i(this).data("param1"),e=a.format.is("span",{"class":n});i(this).toggleClass("fr-active",e).attr("aria-selected",e)})}}},n.RegisterCommand("inlineClass",{type:"dropdown",title:"Inline Class",html:function(){var n='<ul class="fr-dropdown-list" role="presentation">',e=this.opts.inlineClasses;for(var a in e)e.hasOwnProperty(a)&&(n+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineClass" data-param1="'+a+'" title="'+e[a]+'">'+e[a]+"</a></li>");return n+="</ul>"},callback:function(n,e){this.inlineClass.apply(e)},refreshOnShow:function(n,e){this.inlineClass.refreshOnShow(n,e)},plugin:"inlineClass"}),n.DefineIcon("inlineClass",{NAME:"tag",SVG_KEY:"inlineClass"})});
