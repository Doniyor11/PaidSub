import{a as T}from"./chunk-MLKN6EZQ.js";import{N as i,O as n,P as u,X as a,da as p,h as d,ia as g,k as m,ka as v,la as x,m as s,pa as w,qa as C,r as f,ra as k,ta as E,ua as S,v as l,va as M,w as h,wa as B,xa as y}from"./chunk-QJBWZWRR.js";var D=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],standalone:!0,features:[p],decls:27,vars:0,consts:[[1,"main"],[1,"title",2,"margin-bottom","30px"],[1,"menu"],["routerLink","/tariffs",1,"card","item","container-white"],[1,"image","edit"],["src","assets/images/Frame 69.png","alt",""],[1,"infos"],[1,"right"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m9 5 7 7-7 7"],["routerLink","/marketing",1,"card","item","container-white"],["src","assets/images/Frame 70.png","alt",""]],template:function(o,c){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),a(3,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C"),n()(),i(4,"div",2)(5,"div",3)(6,"span",4),u(7,"img",5),n(),i(8,"div",6)(9,"p"),a(10,"\u0422\u0430\u0440\u0438\u0444\u044B"),n(),i(11,"span"),a(12,"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0440\u0438\u0444"),n()(),i(13,"div",7),l(),i(14,"svg",8),u(15,"path",9),n()()(),h(),i(16,"div",10)(17,"span",4),u(18,"img",11),n(),i(19,"div",6)(20,"p"),a(21,"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"),n(),i(22,"span"),a(23,"\u0410\u0432\u0442\u043E\u0432\u0435\u0431\u0438\u043D\u0430\u0440\u044B, \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430, A/B \u0442\u0435\u0441\u0442\u044B ..."),n()(),i(24,"div",7),l(),i(25,"svg",8),u(26,"path",9),n()()()()())},dependencies:[y,M],styles:[".infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}"]});let t=e;return t})();var F=[{path:"",redirectTo:"menu",pathMatch:"full"},{path:"menu",component:D},{path:"tariffs",loadChildren:()=>import("./chunk-CCYRWDPQ.js").then(t=>t.TariffModule)},{path:"marketing",loadChildren:()=>import("./chunk-HO2UV7MV.js").then(t=>t.MarketingModule)}];var A=(()=>{let e=class e{intercept(r,o){return r=r.clone({setHeaders:{authorization:"qwerty"}}),o.handle(r)}static getErrorMessage(r){return r.error?typeof r.error.error=="string"?r.error.error:r.error.hasOwnProperty("exception")?r.error.exception.detail:r.error.title:r.statusText}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac});let t=e;return t})();var P={providers:[f(C),B(F),T(),{provide:w,useClass:A,multi:!0}]};var R=(()=>{let e=class e{constructor(){this._location=m(x),this.location=m(v),this.router=m(S),this.path="/marketing/menu"}ngOnInit(){g()||(this.router.events.subscribe(()=>{this.location.path()!==this.path&&this.location.path()!=="/"?window?.Telegram?.WebApp.BackButton.show():window?.Telegram?.WebApp.BackButton.hide()}),window?.Telegram?.WebApp?.onEvent("backButtonClicked",()=>{this._location.back()}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:2,vars:0,consts:[[2,"margin-top","30px"]],template:function(o,c){o&1&&(i(0,"div",0),u(1,"router-outlet"),n())},dependencies:[E]});let t=e;return t})();k(R,P).catch(t=>console.error(t));
