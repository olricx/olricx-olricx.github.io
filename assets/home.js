!function(e){function t(t){for(var r,a,c=t[0],s=t[1],d=t[2],l=0,g=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);g.length;)g.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;i.push([11,1]),n()}({11:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=(n(6),n(8),n(9),n(0)),a=document.querySelector(".section--hero"),c=document.querySelector(".section--product-demo"),s=document.querySelector(".section--about"),d=document.querySelector(".section--service");if(a){var u=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&(i.a.timeline({easing:"cubicBezier(0.4, 0, 0.2, 1)"}).add({targets:".hero-mid",duration:1200,width:["100%","33.3333%"],easing:"cubicBezier(0.83, 0, 0.17, 1)"}).add({targets:".hero-mid img",duration:300,opacity:[0,1]}).add({targets:".text-split",duration:500,translateY:[25,0],opacity:[0,1],delay:function(e,t){return 175*t}}).add({targets:".hand-left",duration:500,translateX:[-25,0],opacity:[0,1]}).add({targets:".hand-right",duration:500,translateX:[25,0],opacity:[0,1]},"-=500"),u.unobserve(e[0].target))}));u.observe(a)}if(c){var l=new IntersectionObserver((function(e){e[0].isIntersecting&&(i.a.timeline({easing:"cubicBezier(0.4, 0, 0.2, 1)"}).add({targets:".section--product-demo .animate:nth-child(1) > *",duration:600,translateY:["50",0],rotate:[5,0],opacity:[0,1],delay:function(e,t){return 200*t}}).add({targets:".section--product-demo .animate:nth-child(2) > *",duration:600,translateY:["50",0],rotate:[5,0],opacity:[0,1],delay:function(e,t){return 200*t}},"-=600"),l.unobserve(e[0].target))}),{rootMargin:"-100px",threshold:.25});l.observe(c)}if(s){var g=new IntersectionObserver((function(e){e[0].isIntersecting&&(i.a.timeline({easing:"cubicBezier(0.83, 0, 0.17, 1)"}).add({targets:".section--about .img-wrapper",duration:1e3,width:[0,"100%"],delay:function(e,t){return 175*t}}).add({targets:[".section--about .text-block .sub-heading-1",".section--about .text-block .display-1"],easing:"cubicBezier(0.4, 0, 0.2, 1)",duration:500,translateY:[25,0],opacity:[0,1],delay:function(e,t){return 100*t}},"-=500"),g.unobserve(e[0].target))}));g.observe(s)}if(d){var p=new IntersectionObserver((function(e){e[0].isIntersecting&&(i.a.timeline({easing:"cubicBezier(0.83, 0, 0.17, 1)"}).add({targets:".section--service .service-box",duration:1e3,translateY:["100%",0]}).add({targets:".section--service .service-box > *",easing:"cubicBezier(0.4, 0, 0.2, 1)",duration:500,translateY:[25,0],opacity:[0,1],delay:function(e,t){return 100*t}},"-=400"),p.unobserve(e[0].target))}));p.observe(d)}var f=document.querySelector(".product-detail-head");if(f){var v=new IntersectionObserver((function(e){e[0].isIntersecting&&(i.a.timeline({easing:"cubicBezier(0.83, 0, 0.17, 1)"}).add({targets:".product-detail-head .img-wrapper > img",easing:"cubicBezier(0.4, 0, 0.2, 1)",duration:1e3,opacity:[0,1]}).add({targets:".product-detail-head .title > div",duration:1200,width:[0,"100%"],delay:function(e,t){return 175*t}}),v.unobserve(e[0].target))}));v.observe(f)}var b=n(2),y=n.n(b),m=(n(10),window.innerWidth,window.innerHeight,document.querySelector(".section--products"),document.querySelector(".productBg")),h=document.querySelector(".products-list"),w=document.querySelector(".section--service"),S=h.getBoundingClientRect().height;console.log(S);for(var O=new y.a.Controller,B=(new y.a.Scene({offset:-620,duration:S+100,triggerElement:h,triggerHook:0}).addIndicators().setPin(m).addTo(O),new y.a.Controller),I=(new y.a.Scene({triggerElement:w}).addIndicators().addTo(B),function(e){o()(".item"+e).hover((function(){var t="assets/images/image"+e+".png";o()(".section--products .products-container .img-wrapper").css("background-image","url('"+t+"')"),console.log(t)}))}),q=1;q<=3;q++)I(q)},8:function(e,t){var n=document.querySelector("body"),r=document.getElementById("navToggle"),o=document.getElementById("navCloseToggle");r.addEventListener("click",(function(){n.classList.add("navbar-opened")})),o.addEventListener("click",(function(){n.classList.contains("navbar-opened")&&n.classList.remove("navbar-opened")}))},9:function(e,t){var n=window.scrollY,r=document.querySelector("nav"),o=r.offsetHeight;window.addEventListener("scroll",(function(){(n=window.scrollY)>=o?r.classList.add("scrolled"):r.classList.remove("scrolled"),console.log(n)}))}});