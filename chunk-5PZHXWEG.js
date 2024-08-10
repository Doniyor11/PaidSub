import{a as S}from"./chunk-Z7EGFY67.js";import{Ab as I,Ia as m,Ka as y,Na as w,P as v,Pa as M,Q as h,Ra as d,U as g,Va as c,Wa as a,Xa as s,Z as u,_ as x,db as P,ha as C,xa as r}from"./chunk-G7DRHVH5.js";var l=function(t){return t[t.error=0]="error",t[t.success=1]="success",t}(l||{}),f=(()=>{let i=class i{set notification(e){e?this.getInterval():this.clearInterval(),this.notification$=e}getInterval(){this.intervalPercent&&this.clearInterval(),this.setInterval(),this.intervalStop=setTimeout(()=>{this.clearInterval(),this.notification=void 0},5e3)}setInterval(){let e=100;this.intervalPercent=setInterval(()=>{this.notification$.percent=--e},50)}clearInterval(){clearInterval(this.intervalPercent),clearTimeout(this.intervalStop)}get notification(){return this.notification$}createNotification(e,n=l.error,p={}){this.notification={text:e,type:n,percent:100,params:p}}deleteNotification(){this.clearInterval(),this.notification=void 0}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=v({token:i,factory:i.\u0275fac});let t=i;return t})();var T=t=>({width:t});function b(t,i){t&1&&(C(),c(0,"svg",2),s(1,"path",4),a())}function L(t,i){t&1&&(C(),c(0,"svg",5),s(1,"path",6),a())}function O(t,i){if(t&1&&(c(0,"div")(1,"div",1),m(2,b,2,0,":svg:svg",2)(3,L,2,0),a(),s(4,"p",3)(5,"span"),a()),t&2){let o=P();M("alert-notify ",o.notificationService.notification.type===o.notificationType.success?"few-bottom":"",""),r(2),d(2,o.notificationService.notification.type===o.notificationType.success?2:3),r(2),y("translatePaid",o.notificationService.notification.text)("params",o.notificationService.notification.params),r(),w(I(8,T,"calc("+o.notificationService.notification.percent+"% - 20px)"))}}var V=(()=>{let i=class i{constructor(){this.notificationService=g(f),this.notificationType=l}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=u({type:i,selectors:[["alert-notify"]],decls:1,vars:1,consts:[[3,"class"],[1,"logo"],["width","22","height","22","viewBox","0 0 22 22","fill","none","xmlns","http://www.w3.org/2000/svg"],[3,"translatePaid","params"],["d","M11 0.4375C8.91094 0.4375 6.86879 1.05698 5.13179 2.2176C3.3948 3.37822 2.04098 5.02786 1.24153 6.95791C0.442077 8.88795 0.232904 11.0117 0.64046 13.0606C1.04802 15.1096 2.054 16.9916 3.53119 18.4688C5.00838 19.946 6.89044 20.952 8.93936 21.3595C10.9883 21.7671 13.1121 21.5579 15.0421 20.7585C16.9721 19.959 18.6218 18.6052 19.7824 16.8682C20.943 15.1312 21.5625 13.0891 21.5625 11C21.5595 8.19956 20.4458 5.51466 18.4656 3.53445C16.4853 1.55424 13.8004 0.440457 11 0.4375ZM15.6373 9.13734L9.94985 14.8248C9.87439 14.9004 9.78478 14.9603 9.68614 15.0012C9.58751 15.0421 9.48178 15.0631 9.375 15.0631C9.26823 15.0631 9.1625 15.0421 9.06386 15.0012C8.96523 14.9603 8.87562 14.9004 8.80016 14.8248L6.36266 12.3873C6.2102 12.2349 6.12455 12.0281 6.12455 11.8125C6.12455 11.5969 6.2102 11.3901 6.36266 11.2377C6.51512 11.0852 6.7219 10.9995 6.9375 10.9995C7.15311 10.9995 7.35989 11.0852 7.51235 11.2377L9.375 13.1013L14.4877 7.98766C14.5631 7.91217 14.6528 7.85228 14.7514 7.81143C14.85 7.77058 14.9557 7.74955 15.0625 7.74955C15.1693 7.74955 15.275 7.77058 15.3736 7.81143C15.4722 7.85228 15.5619 7.91217 15.6373 7.98766C15.7128 8.06314 15.7727 8.15276 15.8136 8.2514C15.8544 8.35003 15.8755 8.45574 15.8755 8.5625C15.8755 8.66926 15.8544 8.77497 15.8136 8.8736C15.7727 8.97223 15.7128 9.06185 15.6373 9.13734Z","fill","white"],["width","23","height","20","viewBox","0 0 23 20","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M22.1251 16.3682L13.585 1.53711C13.3716 1.17376 13.067 0.872483 12.7013 0.663148C12.3355 0.453814 11.9215 0.343689 11.5001 0.343689C11.0787 0.343689 10.6646 0.453814 10.2989 0.663148C9.93318 0.872483 9.62852 1.17376 9.41511 1.53711L0.875071 16.3682C0.669735 16.7196 0.561523 17.1193 0.561523 17.5264C0.561523 17.9334 0.669735 18.3331 0.875071 18.6846C1.08575 19.0501 1.38989 19.353 1.75628 19.5622C2.12268 19.7714 2.53814 19.8794 2.96003 19.875H20.0401C20.4617 19.879 20.8767 19.7709 21.2428 19.5617C21.6088 19.3526 21.9126 19.0498 22.1231 18.6846C22.3288 18.3333 22.4373 17.9337 22.4376 17.5266C22.438 17.1196 22.3301 16.7198 22.1251 16.3682ZM10.7188 8.15625C10.7188 7.94905 10.8011 7.75034 10.9476 7.60383C11.0942 7.45731 11.2929 7.375 11.5001 7.375C11.7073 7.375 11.906 7.45731 12.0525 7.60383C12.199 7.75034 12.2813 7.94905 12.2813 8.15625V12.0625C12.2813 12.2697 12.199 12.4684 12.0525 12.6149C11.906 12.7614 11.7073 12.8438 11.5001 12.8438C11.2929 12.8438 11.0942 12.7614 10.9476 12.6149C10.8011 12.4684 10.7188 12.2697 10.7188 12.0625V8.15625ZM11.5001 16.75C11.2683 16.75 11.0417 16.6813 10.849 16.5525C10.6563 16.4237 10.5061 16.2407 10.4174 16.0266C10.3287 15.8125 10.3055 15.5768 10.3507 15.3495C10.3959 15.1222 10.5075 14.9134 10.6714 14.7495C10.8353 14.5856 11.0441 14.474 11.2715 14.4288C11.4988 14.3836 11.7344 14.4068 11.9485 14.4955C12.1627 14.5842 12.3457 14.7344 12.4745 14.9271C12.6032 15.1198 12.6719 15.3464 12.6719 15.5781C12.6719 15.8889 12.5485 16.187 12.3287 16.4068C12.1089 16.6265 11.8109 16.75 11.5001 16.75Z","fill","white"]],template:function(n,p){n&1&&m(0,O,6,10,"div",0),n&2&&d(0,p.notificationService.notification?0:-1)},dependencies:[S],styles:[".alert-notify[_ngcontent-%COMP%]{background:#0009;width:var(--width);border-radius:10px;padding:10px 0;display:flex;align-items:center;color:#fff;margin:0 auto 25px;position:relative}.alert-notify[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:60px;height:30px;display:flex;align-items:center;justify-content:center}.alert-notify[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:18.2px}.alert-notify[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:3px;left:10px;background-color:#fff;height:2px}"]});let t=i;return t})();var q=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=x({type:i}),i.\u0275inj=h({providers:[f]});let t=i;return t})();export{l as a,f as b,V as c,q as d};
