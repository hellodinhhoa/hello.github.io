(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{uG9u:function(e,n,o){"use strict";o.r(n),o.d(n,"IonLoading",function(){return p}),o.d(n,"IonLoadingController",function(){return u});var t=o("B5Ai"),i=o("cBjU"),r=o("EXrR"),a=o("n9sr");function s(e,n){var o=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.3),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(o.addElement(n).easing("ease-in-out").duration(200).add(t).add(i))}function d(e,n){var o=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.3,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(o.addElement(n).easing("ease-in-out").duration(200).add(t).add(i))}function l(e,n){var o=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.5),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(o.addElement(n).easing("ease-in-out").duration(200).add(t).add(i))}function c(e,n){var o=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.5,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(o.addElement(n).easing("ease-in-out").duration(200).add(t).add(i))}var p=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentWillLoad=function(){void 0===this.spinner&&(this.spinner=this.config.get("loadingSpinner","ios"===this.mode?"lines":"crescent"))},e.prototype.componentDidLoad=function(){this.ionLoadingDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionLoadingDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,r.a)},e.prototype.present=function(){return t.a(this,void 0,void 0,function(){var e=this;return t.c(this,function(n){switch(n.label){case 0:return[4,Object(r.e)(this,"loadingEnter",s,l,void 0)];case 1:return n.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration+10)),[2]}})})},e.prototype.dismiss=function(e,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.b)(this,e,n,"loadingLeave",d,c)},e.prototype.onDidDismiss=function(){return Object(r.c)(this.el,"ionLoadingDidDismiss")},e.prototype.onWillDismiss=function(){return Object(r.c)(this.el,"ionLoadingWillDismiss")},e.prototype.hostData=function(){var e=this.translucent?Object(a.g)(this.mode,"loading-translucent"):{};return{style:{zIndex:4e4+this.overlayIndex},class:Object.assign({},Object(a.g)(this.mode,"loading"),e,Object(a.c)(this.cssClass))}},e.prototype.render=function(){return[Object(i.b)("ion-backdrop",{visible:this.showBackdrop,tappable:!1}),Object(i.b)("div",{class:"loading-wrapper",role:"dialog"},"hide"!==this.spinner&&Object(i.b)("div",{class:"loading-spinner"},Object(i.b)("ion-spinner",{name:this.spinner})),this.message&&Object(i.b)("div",{class:"loading-content"},this.message))]},Object.defineProperty(e,"is",{get:function(){return"ion-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionLoadingDidUnload",method:"ionLoadingDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidLoad",method:"ionLoadingDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-loading{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}ion-loading-controller{display:none}.loading-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;z-index:10}.loading-ios{font-size:14px}.loading-ios .loading-wrapper{border-radius:8px;padding:24px 34px;max-width:270px;max-height:90%;background-color:var(--ion-background-color-step-50,#f2f2f2);color:var(--ion-text-color,#000)}.loading-translucent-ios .loading-wrapper{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.loading-ios .loading-content{font-weight:700}.loading-ios .loading-spinner+.loading-content{margin-left:16px}.loading-ios .spinner-lines-ios line,.loading-ios .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-bubbles circle,.loading-ios .spinner-circles circle{fill:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-crescent circle{stroke:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),u=function(){function e(){}return e.prototype.create=function(e){return Object(r.f)(this.doc.createElement("ion-loading"),e)},e.prototype.dismiss=function(e,n,o){return Object(r.g)(this.doc,e,n,"ion-loading",o)},e.prototype.getTop=function(){return t.a(this,void 0,void 0,function(){return t.c(this,function(e){return[2,Object(r.h)(this.doc,"ion-loading")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-loading-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);