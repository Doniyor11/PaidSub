<<<<<<<< HEAD:chunk-LIRF6KDA.js
import{c as U,f as k,g as G,h as D,m as B,o as $,q as z,u as R}from"./chunk-CTHILYG6.js";import{Ca as T,D as g,E as C,F as _,Ga as b,Ha as E,N as M,O as m,P as x,T as f,V as u,Ya as I,Z as V,aa as h,ba as S,ca as O,da as P,ea as r,fa as l,ga as s,hb as L,ia as v,ja as y,jb as j,ka as c,q as w,t as F,v as N}from"./chunk-OZNZNZBL.js";var A=(()=>{let o=class o{constructor(){this.http=F(I),this.resourceUrl=L("marketing/uploadMedia")}create(t){return this.http.post(this.resourceUrl,t)}};o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();function q(i,o){i&1&&(r(0,"label",3)(1,"span",5),_(),r(2,"svg",6),s(3,"path",7),l()()())}function J(i,o){i&1&&(r(0,"label",3)(1,"span",5),_(),r(2,"svg",6),s(3,"path",7),l()()())}function K(i,o){if(i&1){let a=v();r(0,"input",8),y("change",function(n){g(a);let e=c();return C(e.sendMedia(n))}),l()}}function Q(i,o){if(i&1){let a=v();r(0,"input",9),y("change",function(n){g(a);let e=c();return C(e.sendMedia(n))}),l()}}function W(i,o){if(i&1&&s(0,"img",18),i&2){let a=c().$implicit;u("src",a.source_url,M)("alt",a.id)}}function X(i,o){if(i&1&&s(0,"video",19),i&2){let a=c().$implicit;u("volume",0)("src",a.source_url,M)}}function Y(i,o){if(i&1){let a=v();r(0,"div",12)(1,"div",13),y("click",function(){let n=g(a).$implicit,e=c(2);return C(e.deleteMedia(n))}),_(),r(2,"svg",14),s(3,"circle",15)(4,"rect",16)(5,"rect",17),l()(),f(6,W,1,2,"img",18)(7,X,1,2),l()}if(i&2){let a=o.$implicit;m(6),h(6,a.type===1||a.type===0?6:a.type===2?7:-1)}}function ee(i,o){if(i&1&&(s(0,"div",10),r(1,"div",11),O(2,Y,8,1,"div",12,S),l()),i&2){let a=c();m(2),P(a.editForm.get(a.attachmentControlName).value)}}var se=(()=>{let o=class o{constructor(t,n){this.controlContainer=t,this.mediaService=n,this.messageControlName="message",this.attachmentControlName="attachment",this.container=!0,this.unity=!1}ngOnInit(){this.editForm=this.controlContainer.control}loadImages(){this.unity?this.mediaChangeUnity():this.mediaChangeMultiple()}mediaChangeUnity(){let t=this.editForm.get(this.attachmentControlName);t.value&&t.setValue([{id:t.value[0].video??t.value[0].photo,source_url:t.value[0].source_url,type:t.value[0].type}])}mediaChangeMultiple(){let t=this.editForm.get(this.attachmentControlName);if(!t.value)t.setValue([]);else{let n=[];t.value.forEach(e=>{n.push({source_url:e.source_url,id:e.video??e.photo,type:e.type})}),t.setValue(n)}}generateType(t){return t.type.split("/")[0]==="image"?1:2}sendMedia(t){let n=new FormData;for(let e of t.target.files)n.append("media",e);this.mediaService.create(n).subscribe(e=>{let d=[];for(let p=0;p<e.length;p++)d.push({source_url:URL.createObjectURL(t.target.files[p]),id:e[p],type:this.generateType(t.target.files[p])});this.unity?this.editForm.get(this.attachmentControlName).setValue(d):this.editForm.get(this.attachmentControlName).setValue([...this.editForm.get(this.attachmentControlName).value,...d])})}deleteMedia(t){let n=this.editForm.get(this.attachmentControlName),e=n.value.indexOf(t),d=n.value;d.splice(e,1),n.setValue(d)}get disabledInputMedia(){return this.editForm.get(this.attachmentControlName).value?.length<1}get inputClose(){return this.editForm.get(this.attachmentControlName).value?.length<10}};o.\u0275fac=function(n){return new(n||o)(x(k),x(A))},o.\u0275cmp=N({type:o,selectors:[["media"]],inputs:{messageControlName:"messageControlName",attachmentControlName:"attachmentControlName",placeholder:"placeholder",container:"container",unity:"unity"},standalone:!0,features:[T],decls:9,vars:11,consts:[[3,"formGroup"],[1,"position-relative"],["type","text",2,"width","86%",3,"placeholder","formControlName"],["for","upload-media"],["type","file","id","upload-media","accept","image/*,video/*"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","viewBox","0 0 28 28","fill","none"],["d","M21.0811 16.096L15.7931 21.384C13.2589 23.9182 9.15018 23.9182 6.616 21.384C4.08181 18.8498 4.08181 14.7411 6.616 12.2069L13.7341 5.08883C15.4248 3.39808 18.1661 3.39808 19.8568 5.08883C21.5476 6.77957 21.5476 9.5208 19.8568 11.2115L12.5145 18.5539C11.7201 19.3483 10.4322 19.3483 9.63779 18.5539C8.84342 17.7595 8.84342 16.4716 9.63779 15.6772L15.1501 10.1649C15.43 9.88501 15.43 9.43115 15.1501 9.15122C14.8701 8.87129 14.4163 8.87129 14.1363 9.15122L8.62407 14.6635C7.26983 16.0177 7.26983 18.2134 8.62407 19.5676C9.9783 20.9219 12.174 20.9219 13.5282 19.5676L20.8705 12.2253C23.1211 9.97466 23.1211 6.32571 20.8705 4.0751C18.6199 1.82449 14.971 1.82449 12.7204 4.0751L5.60227 11.1932C2.50822 14.2872 2.50822 19.3037 5.60227 22.3977C8.69632 25.4918 13.7128 25.4918 16.8068 22.3977L22.0948 17.1097C22.3748 16.8298 22.3748 16.3759 22.0948 16.096C21.8149 15.8161 21.361 15.8161 21.0811 16.096Z","fill","#858E99"],["type","file","id","upload-media","accept","image/*,video/*",3,"change"],["type","file","multiple","","id","upload-media","accept","image/*,video/*",3,"change"],[1,"line"],[1,"images"],[1,"image"],[1,"close",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 16 16","fill","none"],["cx","8","cy","8","r","7.5","fill","#3C3C43","fill-opacity","0.3","stroke","white"],["x","4.79297","y","4","width","10.4","height","1.12","rx","0.56","transform","rotate(45 4.79297 4)","fill","white"],["x","12.1465","y","4.79199","width","10.4","height","1.12","rx","0.56","transform","rotate(135 12.1465 4.79199)","fill","white"],[3,"src","alt"],["autoplay","","playsinline","",2,"pointer-events","none",3,"volume","src"]],template:function(n,e){n&1&&(r(0,"form",0)(1,"div",1),s(2,"input",2),b(3,"translatePaid"),f(4,q,4,0,"label",3)(5,J,4,0)(6,K,1,0,"input",4)(7,Q,1,0),l(),f(8,ee,4,0),l()),n&2&&(V(e.container?"container-white":""),u("formGroup",e.editForm),m(2),u("placeholder",E(3,9,e.placeholder))("formControlName",e.messageControlName),m(2),h(4,!e.unity&&e.inputClose?4:e.disabledInputMedia?5:-1),m(2),h(6,e.unity?6:7),m(2),h(8,e.editForm.get(e.attachmentControlName).value&&e.editForm.get(e.attachmentControlName).value.length>0?8:-1))},dependencies:[R,B,U,G,D,$,z,j],styles:[".images[_ngcontent-%COMP%]{display:flex;gap:8px;width:100%;overflow-y:auto}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;height:70px;width:70px}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;object-fit:cover;border-radius:5px}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;right:4px;top:4px;z-index:100}#upload-media[_ngcontent-%COMP%]{display:none}"]});let i=o;return i})();export{se as a};
========
import{c as U,f as k,g as G,h as D,m as B,o as $,q as z,u as R}from"./chunk-CTHILYG6.js";import{Ca as T,D as g,E as C,F as _,Ga as b,Ha as E,N as x,O as m,P as M,T as f,V as u,Ya as I,Z as V,aa as h,ba as S,ca as O,da as P,ea as r,fa as l,ga as s,hb as L,ia as v,ja as y,jb as j,ka as c,q as w,t as F,v as N}from"./chunk-OZNZNZBL.js";var A=(()=>{let o=class o{constructor(){this.http=F(I),this.resourceUrl=L("marketing/uploadMedia")}create(t){return this.http.post(this.resourceUrl,t)}};o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();function q(i,o){i&1&&(r(0,"label",3)(1,"span",5),_(),r(2,"svg",6),s(3,"path",7),l()()())}function J(i,o){i&1&&(r(0,"label",3)(1,"span",5),_(),r(2,"svg",6),s(3,"path",7),l()()())}function K(i,o){if(i&1){let a=v();r(0,"input",8),y("change",function(n){g(a);let e=c();return C(e.sendMedia(n))}),l()}}function Q(i,o){if(i&1){let a=v();r(0,"input",9),y("change",function(n){g(a);let e=c();return C(e.sendMedia(n))}),l()}}function W(i,o){if(i&1&&s(0,"img",18),i&2){let a=c().$implicit;u("src",a.source_url,x)("alt",a.id)}}function X(i,o){if(i&1&&s(0,"video",19),i&2){let a=c().$implicit;u("volume",0)("src",a.source_url,x)}}function Y(i,o){if(i&1){let a=v();r(0,"div",12)(1,"div",13),y("click",function(){let n=g(a).$implicit,e=c(2);return C(e.deleteMedia(n))}),_(),r(2,"svg",14),s(3,"circle",15)(4,"rect",16)(5,"rect",17),l()(),f(6,W,1,2,"img",18)(7,X,1,2),l()}if(i&2){let a=o.$implicit;m(6),h(6,a.type===1||a.type===0?6:a.type===2?7:-1)}}function ee(i,o){if(i&1&&(s(0,"div",10),r(1,"div",11),O(2,Y,8,1,"div",12,S),l()),i&2){let a=c();m(2),P(a.editForm.get(a.attachmentControlName).value)}}var se=(()=>{let o=class o{constructor(t,n){this.controlContainer=t,this.mediaService=n,this.messageControlName="message",this.attachmentControlName="attachment",this.container=!0,this.unity=!1}ngOnInit(){this.editForm=this.controlContainer.control}loadImages(){this.unity?this.mediaChangeUnity():this.mediaChangeMultiple()}mediaChangeUnity(){let t=this.editForm.get(this.attachmentControlName);t.value&&t.setValue([{id:t.value[0].video??t.value[0].photo,source_url:t.value[0].source_url,type:t.value[0].type}])}mediaChangeMultiple(){let t=this.editForm.get(this.attachmentControlName);if(!t.value)t.setValue([]);else{let n=[];t.value.forEach(e=>{n.push({source_url:e.source_url,id:e.video??e.photo,type:e.type})}),t.setValue(n)}}generateType(t){return t.type.split("/")[0]==="image"?1:2}sendMedia(t){let n=new FormData;for(let e of t.target.files)n.append("media",e);this.mediaService.create(n).subscribe(e=>{let d=[];for(let p=0;p<e.length;p++)d.push({source_url:URL.createObjectURL(t.target.files[p]),id:e[p],type:this.generateType(t.target.files[p])});this.unity?this.editForm.get(this.attachmentControlName).setValue(d):this.editForm.get(this.attachmentControlName).setValue([...this.editForm.get(this.attachmentControlName).value,...d])})}deleteMedia(t){let n=this.editForm.get(this.attachmentControlName),e=n.value.indexOf(t),d=n.value;d.splice(e,1),n.setValue(d)}get disabledInputMedia(){return this.editForm.get(this.attachmentControlName).value?.length<1}get inputClose(){return this.editForm.get(this.attachmentControlName).value?.length<10}};o.\u0275fac=function(n){return new(n||o)(M(k),M(A))},o.\u0275cmp=N({type:o,selectors:[["media"]],inputs:{messageControlName:"messageControlName",attachmentControlName:"attachmentControlName",placeholder:"placeholder",container:"container",unity:"unity"},standalone:!0,features:[T],decls:9,vars:11,consts:[[3,"formGroup"],[1,"position-relative"],["type","text",2,"width","86%",3,"placeholder","formControlName"],["for","upload-media"],["type","file","id","upload-media","accept","image/*,video/*"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","28","height","28","viewBox","0 0 28 28","fill","none"],["d","M21.0811 16.096L15.7931 21.384C13.2589 23.9182 9.15018 23.9182 6.616 21.384C4.08181 18.8498 4.08181 14.7411 6.616 12.2069L13.7341 5.08883C15.4248 3.39808 18.1661 3.39808 19.8568 5.08883C21.5476 6.77957 21.5476 9.5208 19.8568 11.2115L12.5145 18.5539C11.7201 19.3483 10.4322 19.3483 9.63779 18.5539C8.84342 17.7595 8.84342 16.4716 9.63779 15.6772L15.1501 10.1649C15.43 9.88501 15.43 9.43115 15.1501 9.15122C14.8701 8.87129 14.4163 8.87129 14.1363 9.15122L8.62407 14.6635C7.26983 16.0177 7.26983 18.2134 8.62407 19.5676C9.9783 20.9219 12.174 20.9219 13.5282 19.5676L20.8705 12.2253C23.1211 9.97466 23.1211 6.32571 20.8705 4.0751C18.6199 1.82449 14.971 1.82449 12.7204 4.0751L5.60227 11.1932C2.50822 14.2872 2.50822 19.3037 5.60227 22.3977C8.69632 25.4918 13.7128 25.4918 16.8068 22.3977L22.0948 17.1097C22.3748 16.8298 22.3748 16.3759 22.0948 16.096C21.8149 15.8161 21.361 15.8161 21.0811 16.096Z","fill","#858E99"],["type","file","id","upload-media","accept","image/*,video/*",3,"change"],["type","file","multiple","","id","upload-media","accept","image/*,video/*",3,"change"],[1,"line"],[1,"images"],[1,"image"],[1,"close",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 16 16","fill","none"],["cx","8","cy","8","r","7.5","fill","#3C3C43","fill-opacity","0.3","stroke","white"],["x","4.79297","y","4","width","10.4","height","1.12","rx","0.56","transform","rotate(45 4.79297 4)","fill","white"],["x","12.1465","y","4.79199","width","10.4","height","1.12","rx","0.56","transform","rotate(135 12.1465 4.79199)","fill","white"],[3,"src","alt"],["autoplay","","playsinline","",2,"pointer-events","none",3,"volume","src"]],template:function(n,e){n&1&&(r(0,"form",0)(1,"div",1),s(2,"input",2),b(3,"translatePaid"),f(4,q,4,0,"label",3)(5,J,4,0)(6,K,1,0,"input",4)(7,Q,1,0),l(),f(8,ee,4,0),l()),n&2&&(V(e.container?"container-white":""),u("formGroup",e.editForm),m(2),u("placeholder",E(3,9,e.placeholder))("formControlName",e.messageControlName),m(2),h(4,!e.unity&&e.inputClose?4:e.disabledInputMedia?5:-1),m(2),h(6,e.unity?6:7),m(2),h(8,e.editForm.get(e.attachmentControlName).value&&e.editForm.get(e.attachmentControlName).value.length>0?8:-1))},dependencies:[R,B,U,G,D,$,z,j],styles:[".images[_ngcontent-%COMP%]{display:flex;gap:8px;width:100%;overflow-x:scroll}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;height:70px;width:70px}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:70px;height:70px;object-fit:cover;border-radius:5px}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;right:4px;top:4px;z-index:100}#upload-media[_ngcontent-%COMP%]{display:none}"]});let i=o;return i})();export{se as a};
>>>>>>>> 9665e412309c0e54a170c1f2a5d39467ef3be3a9:chunk-7OFQO3HE.js
