!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(p){"use strict";p=p&&p.hasOwnProperty("default")?p["default"]:p,Object.assign(p.DEFAULTS,{listAdvancedTypes:!0}),p.PLUGINS.lists=function(d){function c(e){return'<span class="fr-open-'+e.toLowerCase()+'"></span>'}function g(e){return'<span class="fr-close-'+e.toLowerCase()+'"></span>'}function s(e,t){!function f(e,t){for(var a=[],n=0;n<e.length;n++){var r=e[n].parentNode;"LI"==e[n].tagName&&r.tagName!=t&&a.indexOf(r)<0&&a.push(r)}for(var s=a.length-1;0<=s;s--){var i=m(a[s]);i.replaceWith("<"+t.toLowerCase()+" "+d.node.attributes(i.get(0))+">"+i.html()+"</"+t.toLowerCase()+">")}}(e,t);var a,n=d.html.defaultTag(),r=null;e.length&&(a="rtl"==d.opts.direction||"rtl"==m(e[0]).css("direction")?"margin-right":"margin-left");for(var s=0;s<e.length;s++)if("TD"!=e[s].tagName&&"TH"!=e[s].tagName&&"LI"!=e[s].tagName){var i=d.helpers.getPX(m(e[s]).css(a))||0;(e[s].style.marginLeft=null)===r&&(r=i);var o=0<r?"<"+t+' style="'+a+": "+r+'px ">':"<"+t+">",l="</"+t+">";for(i-=r;0<i/d.opts.indentMargin;)o+="<"+t+">",l+=l,i-=d.opts.indentMargin;n&&e[s].tagName.toLowerCase()==n?m(e[s]).replaceWith(o+"<li"+d.node.attributes(e[s])+">"+m(e[s]).html()+"</li>"+l):m(e[s]).wrap(o+"<li></li>"+l)}d.clean.lists()}function i(e){var t,a;for(t=e.length-1;0<=t;t--)for(a=t-1;0<=a;a--)if(m(e[a]).find(e[t]).length||e[a]==e[t]){e.splice(t,1);break}var n=[];for(t=0;t<e.length;t++){var r=m(e[t]),s=e[t].parentNode,i=r.attr("class");if(r.before(g(s.tagName)),"LI"==s.parentNode.tagName)r.before(g("LI")),r.after(c("LI"));else{var o="";i&&(o+=' class="'+i+'"');var l="rtl"==d.opts.direction||"rtl"==r.css("direction")?"margin-right":"margin-left";d.helpers.getPX(m(s).css(l))&&0<=(m(s).attr("style")||"").indexOf(l+":")&&(o+=' style="'+l+":"+d.helpers.getPX(m(s).css(l))+'px;"'),d.html.defaultTag()&&0===r.find(d.html.blockTagsQuery()).length&&r.wrapInner(d.html.defaultTag()+o),d.node.isEmpty(r.get(0),!0)||0!==r.find(d.html.blockTagsQuery()).length||r.append("<br>"),r.append(c("LI")),r.prepend(g("LI"))}r.after(c(s.tagName)),"LI"==s.parentNode.tagName&&(s=s.parentNode.parentNode),n.indexOf(s)<0&&n.push(s)}for(t=0;t<n.length;t++){var f=m(n[t]),p=f.html();p=(p=p.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>")).replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),f.replaceWith(d.node.openTagString(f.get(0))+p+d.node.closeTagString(f.get(0)))}d.$el.find("li:empty").remove(),d.$el.find("ul:empty, ol:empty").remove(),d.clean.lists(),d.html.wrap()}function o(e){d.selection.save();for(var t=0;t<e.length;t++){var a=e[t].previousSibling;if(a){var n=m(e[t]).find("> ul, ol").last().get(0);if(n){var r=m(document.createElement("li"));m(n).prepend(r);for(var s=d.node.contents(e[t])[0];s&&!d.node.isList(s);){var i=s.nextSibling;r.append(s),s=i}m(a).append(m(n)),m(e[t]).remove()}else{var o=m(a).find("> ul, ol").last().get(0);if(o)m(o).append(m(e[t]));else{var l=m("<"+e[t].parentNode.tagName+">");m(a).append(l),l.append(m(e[t]))}}}}d.clean.lists(),d.selection.restore()}function l(e){d.selection.save(),i(e),d.selection.restore()}function e(e){if("indent"==e||"outdent"==e){for(var t=!1,a=d.selection.blocks(),n=[],r=0;r<a.length;r++)"LI"==a[r].tagName?(t=!0,n.push(a[r])):"LI"==a[r].parentNode.tagName&&(t=!0,n.push(a[r].parentNode));t&&("indent"==e?o(n):l(n))}}var m=d.$;return{_init:function t(){d.events.on("commands.after",e),d.events.on("keydown",function(e){if(e.which==p.KEYCODE.TAB){for(var t=d.selection.blocks(),a=[],n=0;n<t.length;n++)"LI"==t[n].tagName?a.push(t[n]):"LI"==t[n].parentNode.tagName&&a.push(t[n].parentNode);if(1<a.length||a.length&&(d.selection.info(a[0]).atStart||d.node.isEmpty(a[0])))return e.preventDefault(),e.stopPropagation(),e.shiftKey?l(a):o(a),!1}},!0)},format:function f(e,t){var a,n;for(d.selection.save(),d.html.wrap(!0,!0,!0,!0),d.selection.restore(),n=d.selection.blocks(),a=0;a<n.length;a++)"LI"!=n[a].tagName&&"LI"==n[a].parentNode.tagName&&(n[a]=n[a].parentNode);if(d.selection.save(),function r(e,t){for(var a=!0,n=0;n<e.length;n++){if("LI"!=e[n].tagName)return!1;e[n].parentNode.tagName!=t&&(a=!1)}return a}(n,e)?t||i(n):s(n,e),d.html.unwrap(),d.selection.restore(),t=t||"default"){for(n=d.selection.blocks(),a=0;a<n.length;a++)"LI"!=n[a].tagName&&"LI"==n[a].parentNode.tagName&&(n[a]=n[a].parentNode);for(a=0;a<n.length;a++)"LI"==n[a].tagName&&(m(n[a].parentNode).css("list-style-type","default"===t?"":t),0===(m(n[a].parentNode).attr("style")||"").length&&m(n[a].parentNode).removeAttr("style"))}},refresh:function r(e,t){var a=m(d.selection.element());if(a.get(0)!=d.el){var n=a.get(0);(n="LI"!=n.tagName&&n.firstElementChild&&"LI"!=n.firstElementChild.tagName?a.parents("li").get(0):"LI"==n.tagName||n.firstElementChild?n.firstElementChild&&"LI"==n.firstElementChild.tagName?a.get(0).firstChild:a.get(0):a.parents("li").get(0))&&n.parentNode.tagName==t&&d.el.contains(n.parentNode)&&e.addClass("fr-active")}}}},p.DefineIcon("formatOLSimple",{NAME:"list-ol",SVG_KEY:"orderedList"}),p.RegisterCommand("formatOLSimple",{title:"Ordered List",type:"button",options:{"default":"Default",circle:"Circle",disc:"Disc",square:"Square"},refresh:function(e){this.lists.refresh(e,"OL")},callback:function(e,t){this.lists.format("OL",t)},plugin:"lists"}),p.RegisterCommand("formatUL",{title:"Unordered List",type:"button",hasOptions:function(){return this.opts.listAdvancedTypes},options:{"default":"Default",circle:"Circle",disc:"Disc",square:"Square"},refresh:function(e){this.lists.refresh(e,"UL")},callback:function(e,t){this.lists.format("UL",t)},plugin:"lists"}),p.RegisterCommand("formatOL",{title:"Ordered List",hasOptions:function(){return this.opts.listAdvancedTypes},options:{"default":"Default","lower-alpha":"Lower Alpha","lower-greek":"Lower Greek","lower-roman":"Lower Roman","upper-alpha":"Upper Alpha","upper-roman":"Upper Roman"},refresh:function(e){this.lists.refresh(e,"OL")},callback:function(e,t){this.lists.format("OL",t)},plugin:"lists"}),p.DefineIcon("formatUL",{NAME:"list-ul",SVG_KEY:"unorderedList"}),p.DefineIcon("formatOL",{NAME:"list-ol",SVG_KEY:"orderedList"})});