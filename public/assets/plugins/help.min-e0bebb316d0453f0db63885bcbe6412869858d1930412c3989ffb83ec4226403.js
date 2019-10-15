!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e,Object.assign(e.DEFAULTS,{helpSets:[{title:"Inline Editor",commands:[{val:"OSkeyE",desc:"Show the editor"}]},{title:"Common actions",commands:[{val:"OSkeyC",desc:"Copy"},{val:"OSkeyX",desc:"Cut"},{val:"OSkeyV",desc:"Paste"},{val:"OSkeyZ",desc:"Undo"},{val:"OSkeyShift+Z",desc:"Redo"},{val:"OSkeyK",desc:"Insert Link"},{val:"OSkeyP",desc:"Insert Image"}]},{title:"Basic Formatting",commands:[{val:"OSkeyA",desc:"Select All"},{val:"OSkeyB",desc:"Bold"},{val:"OSkeyI",desc:"Italic"},{val:"OSkeyU",desc:"Underline"},{val:"OSkeyS",desc:"Strikethrough"},{val:"OSkey]",desc:"Increase Indent"},{val:"OSkey[",desc:"Decrease Indent"}]},{title:"Quote",commands:[{val:"OSkey'",desc:"Increase quote level"},{val:"OSkeyShift+'",desc:"Decrease quote level"}]},{title:"Image / Video",commands:[{val:"OSkey+",desc:"Resize larger"},{val:"OSkey-",desc:"Resize smaller"}]},{title:"Table",commands:[{val:"Alt+Space",desc:"Select table cell"},{val:"Shift+Left/Right arrow",desc:"Extend selection one cell"},{val:"Shift+Up/Down arrow",desc:"Extend selection one row"}]},{title:"Navigation",commands:[{val:"OSkey/",desc:"Shortcuts"},{val:"Alt+F10",desc:"Focus popup / toolbar"},{val:"Esc",desc:"Return focus to previous position"}]}]}),e.PLUGINS.help=function(d){var a,o=d.$,s="help";return{_init:function e(){},show:function c(){if(!a){var e="<h4>"+d.language.translate("Shortcuts")+"</h4>",t=function n(){for(var e='<div class="fr-help-modal">',t=0;t<d.opts.helpSets.length;t++){var l=d.opts.helpSets[t],a="<table>";a+="<thead><tr><th>"+d.language.translate(l.title)+"</th></tr></thead>",a+="<tbody>";for(var o=0;o<l.commands.length;o++){var s=l.commands[o];a+="<tr>",a+="<td>"+d.language.translate(s.desc)+"</td>",a+="<td>"+s.val.replace("OSkey",d.helpers.isMac()?"&#8984;":"Ctrl+")+"</td>",a+="</tr>"}e+=a+="</tbody></table>"}return e+"</div>"}(),l=d.modals.create(s,e,t);a=l.$modal,d.events.$on(o(d.o_win),"resize",function(){d.modals.resize(s)})}d.modals.show(s),d.modals.resize(s)},hide:function t(){d.modals.hide(s)}}},e.DefineIcon("help",{NAME:"question",SVG_KEY:"help"}),e.RegisterShortcut(e.KEYCODE.SLASH,"help",null,"/"),e.RegisterCommand("help",{title:"Help",icon:"help",undo:!1,focus:!1,modal:!0,callback:function(){this.help.show()},plugin:"help",showOnMobile:!1})});