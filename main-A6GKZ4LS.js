import{a as B}from"./chunk-FMT5MFOK.js";import{B as h,N as n,O as o,P as u,X as a,Z as v,da as l,h as d,k as s,ka as x,la as w,m,qa as k,r as f,ra as b,sa as C,ua as E,v as c,va as y,w as g,wa as S,xa as T,ya as M}from"./chunk-7S4PQULL.js";var j=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],standalone:!0,features:[l],decls:27,vars:0,consts:[[1,"main"],[1,"title",2,"margin-bottom","30px"],[1,"menu"],["routerLink","/tariffs",1,"card","item","container-white"],[1,"image","edit"],["src","assets/images/Frame 69.png","alt",""],[1,"infos"],[1,"right"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m9 5 7 7-7 7"],["routerLink","/marketing",1,"card","item","container-white"],["src","assets/images/Frame 70.png","alt",""]],template:function(i,p){i&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),a(3,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C"),o()(),n(4,"div",2)(5,"div",3)(6,"span",4),u(7,"img",5),o(),n(8,"div",6)(9,"p"),a(10,"\u0422\u0430\u0440\u0438\u0444\u044B"),o(),n(11,"span"),a(12,"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0440\u0438\u0444"),o()(),n(13,"div",7),c(),n(14,"svg",8),u(15,"path",9),o()()(),g(),n(16,"div",10)(17,"span",4),u(18,"img",11),o(),n(19,"div",6)(20,"p"),a(21,"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"),o(),n(22,"span"),a(23,"\u0410\u0432\u0442\u043E\u0432\u0435\u0431\u0438\u043D\u0430\u0440\u044B, \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430, A/B \u0442\u0435\u0441\u0442\u044B ..."),o()(),n(24,"div",7),c(),n(25,"svg",8),u(26,"path",9),o()()()()())},dependencies:[M,S],styles:[".infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}"]});let t=e;return t})();var P=[{path:"",redirectTo:"menu",pathMatch:"full"},{path:"menu",component:j},{path:"tariffs",loadChildren:()=>import("./chunk-J33FGVRH.js").then(t=>t.TariffModule)},{path:"marketing",loadChildren:()=>import("./chunk-5B4JXT7F.js").then(t=>t.MarketingModule)}];var A=(()=>{let e=class e{intercept(r,i){return r=r.clone({setHeaders:{authorization:"qwerty"}}),i.handle(r)}static getErrorMessage(r){return r.error?typeof r.error.error=="string"?r.error.error:r.error.hasOwnProperty("exception")?r.error.exception.detail:r.error.title:r.statusText}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac});let t=e;return t})();var F={providers:[f(b),T(P),B(),{provide:k,useClass:A,multi:!0}]};var L="0.0.10";var I=(()=>{let e=class e{constructor(){this._location=s(w),this.location=s(x),this.router=s(y),this.path="/menu",this.version=L}ngOnInit(){this.router.events.subscribe(()=>{let r=this.location.path().split("?")[0];r!==this.path&&r!=="/"?window?.Telegram?.WebApp.BackButton.show():window?.Telegram?.WebApp.BackButton.hide()}),window?.Telegram?.WebApp?.onEvent("backButtonClicked",()=>{this._location.back()})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:4,vars:1,consts:[[2,"margin-top","30px"],[1,"version"]],template:function(i,p){i&1&&(n(0,"div",0),u(1,"router-outlet"),n(2,"div",1),a(3),o()()),i&2&&(h(3),v("V ",p.version,""))},dependencies:[E],styles:[".version[_ngcontent-%COMP%]{position:fixed;bottom:5px;left:5px;color:#817d7dce}"]});let t=e;return t})();C(I,F).catch(t=>console.error(t));var O=t=>{if(!t)return!1;let e=t.tagName;return e=="INPUT"||e=="SELECT"||e=="TEXTAREA"||t.isContentEditable||t.tabIndex>=0};document.addEventListener("touchend",t=>{let e=t.target;e.classList.contains("do-not-hide-keyboard")?t.preventDefault():O(e)||document.activeElement.blur()});
