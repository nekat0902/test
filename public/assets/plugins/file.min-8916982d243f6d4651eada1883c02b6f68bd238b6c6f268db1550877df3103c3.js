!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(x){"use strict";x=x&&x.hasOwnProperty("default")?x["default"]:x,Object.assign(x.POPUP_TEMPLATES,{"file.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"}),Object.assign(x.DEFAULTS,{fileUpload:!0,fileUploadURL:null,fileUploadParam:"file",fileUploadParams:{},fileUploadToS3:!1,fileUploadMethod:"POST",fileMaxSize:10485760,fileAllowedTypes:["*"],fileInsertButtons:["fileBack","|"],fileUseSelectedText:!1}),x.PLUGINS.file=function(f){function l(){var e=f.popups.get("file.insert");e||(e=s()),e.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),e.find(".fr-file-progress-bar-layer").addClass("fr-active"),e.find(".fr-buttons").hide(),i(f.language.translate("Uploading"),0)}function n(e){var t=f.popups.get("file.insert");t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-file-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e&&(f.events.focus(),f.popups.hide("file.insert")))}function i(e,t){var i=f.popups.get("file.insert");if(i){var r=i.find(".fr-file-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function p(e,t,i){f.edit.on(),f.events.focus(!0),f.selection.restore(),f.opts.fileUseSelectedText&&f.selection.text().length&&(t=f.selection.text()),f.html.insert('<a href="'+e+'" target="_blank" id="fr-inserted-file" class="fr-file">'+t+"</a>");var r=f.$el.find("#fr-inserted-file");r.removeAttr("id"),f.popups.hide("file.insert"),f.undo.saveStep(),h(),f.events.trigger("file.inserted",[r,i])}function d(e){var t=this.status,i=this.response,r=this.responseXML,o=this.responseText;try{if(f.opts.fileUploadToS3)if(201===t){var n=function s(e){try{var t=m(e).find("Location").text(),i=m(e).find("Key").text();return!1===f.events.trigger("file.uploadedToS3",[t,i,e],!0)?(f.edit.on(),!1):t}catch(r){return v(C,e),!1}}(r);n&&p(n,e,i||r)}else v(C,i||r);else if(200<=t&&t<300){var a=function l(e){try{if(!1===f.events.trigger("file.uploaded",[e],!0))return f.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(v(U,e),!1)}catch(i){return v(C,e),!1}}(o);a&&p(a.link,e,i||o)}else v(S,i||o)}catch(T){v(C,i||o)}}function u(){v(C,this.response||this.responseText||this.responseXML)}function c(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;i(f.language.translate("Uploading"),t)}}function v(e,t){f.edit.on(),function r(e){l();var t=f.popups.get("file.insert").find(".fr-file-progress-bar-layer");t.addClass("fr-error");var i=t.find("h3");i.text(e),f.events.disableBlur(),i.focus()}(f.language.translate("Something went wrong. Please try again.")),f.events.trigger("file.error",[{code:e,message:k[e]},t])}function g(){f.edit.on(),n(!0)}function o(e){if(void 0!==e&&0<e.length){if(!1===f.events.trigger("file.beforeUpload",[e]))return!1;var t,i=e[0];if((null===f.opts.fileUploadURL||f.opts.fileUploadURL===y)&&!f.opts.fileUploadToS3)return function s(o){var n=new FileReader;n.onload=function(){for(var e=n.result,t=atob(n.result.split(",")[1]),i=[],r=0;r<t.length;r++)i.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(i)],{type:o.type})),f.file.insert(e,o.name,null)},l(),n.readAsDataURL(o)}(i),!1;if(i.size>f.opts.fileMaxSize)return v(T),!1;if(f.opts.fileAllowedTypes.indexOf("*")<0&&f.opts.fileAllowedTypes.indexOf(i.type.replace(/file\//g,""))<0)return v(w),!1;if(f.drag_support.formdata&&(t=f.drag_support.formdata?new FormData:null),t){var r;if(!1!==f.opts.fileUploadToS3)for(r in t.append("key",f.opts.fileUploadToS3.keyStart+(new Date).getTime()+"-"+(i.name||"untitled")),t.append("success_action_status","201"),t.append("X-Requested-With","xhr"),t.append("Content-Type",i.type),f.opts.fileUploadToS3.params)f.opts.fileUploadToS3.params.hasOwnProperty(r)&&t.append(r,f.opts.fileUploadToS3.params[r]);for(r in f.opts.fileUploadParams)f.opts.fileUploadParams.hasOwnProperty(r)&&t.append(r,f.opts.fileUploadParams[r]);t.append(f.opts.fileUploadParam,i);var o=f.opts.fileUploadURL;f.opts.fileUploadToS3&&(o=f.opts.fileUploadToS3.uploadURL?f.opts.fileUploadToS3.uploadURL:"https://"+f.opts.fileUploadToS3.region+".amazonaws.com/"+f.opts.fileUploadToS3.bucket);var n=f.core.getXHR(o,f.opts.fileUploadMethod);n.onload=function(){d.call(n,i.name)},n.onerror=u,n.upload.onprogress=c,n.onabort=g,l();var a=f.popups.get("file.insert");a&&(a.off("abortUpload"),a.on("abortUpload",function(){4!==n.readyState&&n.abort()})),n.send(t)}}}function a(){n()}function s(e){if(e)return f.popups.onHide("file.insert",a),!0;var t;f.opts.fileUpload||f.opts.fileInsertButtons.splice(f.opts.fileInsertButtons.indexOf("fileUpload"),1),t='<div class="fr-buttons fr-tabs">'+f.button.buildList(f.opts.fileInsertButtons)+"</div>";var i="";f.opts.fileUpload&&(i='<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'+f.id+'"><strong>'+f.language.translate("Drop file")+"</strong><br>("+f.language.translate("or click")+')<div class="fr-form"><input type="file" name="'+f.opts.fileUploadParam+'" accept="'+(0<=f.opts.fileAllowedTypes.indexOf("*")?"/":"")+f.opts.fileAllowedTypes.join(", ").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-file-upload-layer-'+f.id+'" role="button"></div></div>');var r={buttons:t,upload_layer:i,progress_bar:'<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>'},o=f.popups.create("file.insert",r);return function n(i){f.events.$on(i,"dragover dragenter",".fr-file-upload-layer",function(){return m(this).addClass("fr-drop"),!1},!0),f.events.$on(i,"dragleave dragend",".fr-file-upload-layer",function(){return m(this).removeClass("fr-drop"),!1},!0),f.events.$on(i,"drop",".fr-file-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),m(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;t&&t.files&&(i.data("instance")||f).file.upload(t.files)},!0),f.helpers.isIOS()&&f.events.$on(i,"touchstart",'.fr-file-upload-layer input[type="file"]',function(){m(this).trigger("click")}),f.events.$on(i,"change",'.fr-file-upload-layer input[type="file"]',function(){if(this.files){var e=i.data("instance")||f;e.events.disableBlur(),i.find("input:focus").blur(),e.events.enableBlur(),e.file.upload(this.files)}m(this).val("")},!0)}(o),o}function t(e){f.node.hasClass(e,"fr-file")}function r(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var i=t.files[0];if(i&&"undefined"!=typeof i.type){if(i.type.indexOf("image")<0){if(!f.opts.fileUpload)return e.preventDefault(),e.stopPropagation(),!1;f.markers.remove(),f.markers.insertAtPoint(e.originalEvent),f.$el.find(".fr-marker").replaceWith(x.MARKERS),f.popups.hideAll();var r=f.popups.get("file.insert");return r||(r=s()),f.popups.setContainer("file.insert",f.$sc),f.popups.show("file.insert",e.originalEvent.pageX,e.originalEvent.pageY),l(),o(t.files),e.preventDefault(),e.stopPropagation(),!1}}else i.type.indexOf("image")<0&&(e.preventDefault(),e.stopPropagation())}}function h(){var e,t=Array.prototype.slice.call(f.el.querySelectorAll("a.fr-file")),i=[];for(e=0;e<t.length;e++)i.push(t[e].getAttribute("href"));if(b)for(e=0;e<b.length;e++)i.indexOf(b[e].getAttribute("href"))<0&&f.events.trigger("file.unlink",[b[e]]);b=t}var b,m=f.$,y="https://i.froala.com/upload",U=2,S=3,C=4,T=5,w=6,k={1:"File cannot be loaded from the passed link."};return k[U]="No link in upload response.",k[S]="Error during file upload.",k[C]="Parsing response failed.",k[T]="File is too large.",k[w]="File file type is invalid.",k[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",{_init:function P(){!function e(){f.events.on("drop",r),f.events.$on(f.$win,"keydown",function(e){var t=e.which,i=f.popups.get("file.insert");i&&t===x.KEYCODE.ESC&&i.trigger("abortUpload")}),f.events.on("destroy",function(){var e=f.popups.get("file.insert");e&&e.trigger("abortUpload")})}(),f.events.on("link.beforeRemove",t),f.$wp&&(h(),f.events.on("contentChanged",h)),s(!0)},showInsertPopup:function A(){var e=f.$tb.find('.fr-command[data-cmd="insertFile"]'),t=f.popups.get("file.insert");if(t||(t=s()),n(),!t.hasClass("fr-active"))if(f.popups.refresh("file.insert"),f.popups.setContainer("file.insert",f.$tb),e.isVisible){var i=f.button.getPosition(e),r=i.left,o=i.top;f.popups.show("file.insert",r,o,e.outerHeight())}else f.position.forSelection(t),f.popups.show("file.insert")},upload:o,insert:p,back:function e(){f.events.disableBlur(),f.selection.restore(),f.events.enableBlur(),f.popups.hide("file.insert"),f.toolbar.showInline()},hideProgressBar:n}},x.DefineIcon("insertFile",{NAME:"file-o",FA5NAME:"file",SVG_KEY:"insertFile"}),x.RegisterCommand("insertFile",{title:"Upload File",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("file.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("file.insert")):this.file.showInsertPopup()},plugin:"file"}),x.DefineIcon("fileBack",{NAME:"arrow-left",SVG_KEY:"back"}),x.RegisterCommand("fileBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.file.back()},refresh:function(e){this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),x.RegisterCommand("fileDismissError",{title:"OK",callback:function(){this.file.hideProgressBar(!0)}})});