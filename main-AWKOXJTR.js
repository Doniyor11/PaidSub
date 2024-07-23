import{b as U}from"./chunk-JU2BBAYR.js";import{a as G}from"./chunk-SCGMYTJN.js";import"./chunk-CTHILYG6.js";import{$a as D,A as y,Ca as _,Ea as I,F as M,Ga as h,Ha as v,La as A,N as w,O as a,P as d,T as u,V as x,Y as P,Za as O,_a as B,aa as g,ab as R,ba as E,bb as L,ca as S,da as T,db as q,ea as r,eb as H,fa as s,fb as $,ga as c,gb as b,ib as z,jb as N,ka as F,q as C,t as k,ta as l,ua as f,v as m,va as j}from"./chunk-OZNZNZBL.js";import"./chunk-DM275RSA.js";var tt=t=>({background:t});function et(t,e){if(t&1&&(r(0,"div",3)(1,"span",4),c(2,"img",5),s(),r(3,"div",6)(4,"p"),l(5),h(6,"translatePaid"),s(),r(7,"span"),l(8),h(9,"translatePaid"),s()(),r(10,"div",7),M(),r(11,"svg",8),c(12,"path",9),s()()()),t&2){let o=F().$implicit;x("routerLink",o.route),a(),P(I(11,tt,o.color)),a(),x("src",o.icon,w)("alt",o.title),a(3),f(v(6,7,o.title)),a(3),f(v(9,9,o.description))}}function it(t,e){if(t&1&&u(0,et,13,13,"div",3),t&2){let o=e.$implicit;g(0,o.isActive?0:-1)}}var K=(()=>{let e=class e{constructor(){this.backButton=k(b),this.menu=[{icon:"assets/images/SketchLogo.svg",title:"admin_panel_main_page__tariffs_button",description:"admin_panel_main_page__tariffs_button_substring",color:"#007AFF",route:"/tariffs",isActive:!0},{icon:"assets/images/MagicWand.svg",title:"admin_panel_main_page__marketing_button",description:"admin_panel_main_page__marketing_button_substring",color:"#FD2C55",route:"/marketing/menu",isActive:!0},{icon:"assets/images/Chats.svg",title:"admin_panel_main_page__resources_button",description:"admin_panel_main_page__resources_button_substring",color:"#AE51DE",route:"/resources",isActive:!0},{icon:"assets/images/CurrencyRub.svg",title:"admin_panel_main_page__finances_button",description:"admin_panel_main_page__finances_button_substring",color:"#34C759",route:"/finance/list/",isActive:!0},{icon:"assets/images/ChartDonut.svg",title:"admin_panel_main_page__stats_button",description:"admin_panel_main_page__stats_button_substring",color:"#FF9400",route:"/statistic",isActive:!0},{icon:"assets/images/GearSix.svg",title:"admin_panel_main_page__settings_button",description:"admin_panel_main_page__settings_button_substring",color:"#8E8E93",route:"/settings",isActive:!0}]}ngOnInit(){this.backButton.hide()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],standalone:!0,features:[_],decls:8,vars:3,consts:[[1,"main"],[1,"title"],[1,"menu"],[1,"card","item","container-white",3,"routerLink"],[1,"image"],[3,"src","alt"],[1,"infos"],[1,"right"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m9 5 7 7-7 7"]],template:function(n,p){n&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),l(3),h(4,"translatePaid"),s()(),r(5,"div",2),S(6,it,1,1,null,null,E),s()()),n&2&&(a(3),f(v(4,1,"admin_panel_main_page__page_label")),a(3),T(p.menu))},dependencies:[$,q,N],styles:[".card[_ngcontent-%COMP%]{margin:10px 0}.card[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{border-radius:10px;height:35px;width:35px}"]});let t=e;return t})();var J=[{path:"",redirectTo:"menu",pathMatch:"full"},{path:"menu",component:K},{path:"tariffs",loadChildren:()=>import("./chunk-GW22IWOY.js").then(t=>t.TariffModule)},{path:"resources",loadChildren:()=>import("./chunk-66RJR6DU.js").then(t=>t.ResourceModule)},{path:"marketing",loadChildren:()=>import("./chunk-4ZSEMR5J.js").then(t=>t.MarketingModule)},{path:"finance",loadChildren:()=>import("./chunk-IOO2MZ3Y.js").then(t=>t.FinanceModule)},{path:"statistic",loadChildren:()=>import("./chunk-BRVNKYNS.js").then(t=>t.StatisticModule)},{path:"settings",loadChildren:()=>import("./chunk-ZXBGF666.js").then(t=>t.SettingsModule)},{path:"users",loadComponent:()=>import("./chunk-IBVYMJHZ.js").then(t=>t.UsersComponent)}];var W=(()=>{let e=class e{intercept(i,n){return i=i.clone({setHeaders:{authorization:"qwerty"}}),n.handle(i)}static getErrorMessage(i){return i.error?typeof i.error.error=="string"?i.error.error:i.error.hasOwnProperty("exception")?i.error.exception.detail:i.error.title:i.statusText}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac});let t=e;return t})();function nt(){return import("./chunk-J3JBWOKA.js")}var X={providers:[y(B),H(J),U(),{provide:O,useClass:W,multi:!0},G({player:nt})]};var Q="1.2.59";function at(t,e){t&1&&c(0,"router-outlet")}var Y=(()=>{let e=class e{constructor(i,n,p){this.translatePaidService=i,this.backButton=n,this.activatedRoute=p,this.version=Q}ngOnInit(){this.backButton.hide(),A()&&this.translatePaidService.setTranslate("ru"),this.activatedRoute.queryParams.subscribe(i=>{this.translatePaidService.setTranslate(i.lang)})}};e.\u0275fac=function(n){return new(n||e)(d(z),d(b),d(R))},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[_],decls:4,vars:2,consts:[[2,"margin-top","30px","width","100%"],[1,"version"]],template:function(n,p){n&1&&(r(0,"div",0),u(1,at,1,0,"router-outlet"),r(2,"div",1),l(3),s()()),n&2&&(a(),g(1,p.translatePaidService.translate?1:-1),a(2),j("V ",p.version,""))},dependencies:[L],styles:[".version[_ngcontent-%COMP%]{position:fixed;bottom:5px;left:5px;color:#817d7dce}[_nghost-%COMP%]{width:100%!important;display:flex;justify-content:center}"]});let t=e;return t})();D(Y,X).catch(t=>console.error(t));var ot=t=>{if(!t)return!1;let e=t.tagName;return e=="INPUT"||e=="SELECT"||e=="TEXTAREA"||t.isContentEditable||t.tabIndex>=0};document.addEventListener("touchend",t=>{let e=t.target;e.classList.contains("do-not-hide-keyboard")?t.preventDefault():ot(e)||document.activeElement.blur()});
