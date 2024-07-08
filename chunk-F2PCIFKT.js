import{c as H,g as N,l as V,t as Z}from"./chunk-ZKB7TWIX.js";import{Aa as T,Ca as E,F as M,G as x,Ga as j,Ha as $,N as y,O as r,P as m,T as g,V as P,Ya as B,aa as f,ab as R,ba as O,ca as w,da as U,db as A,ea as o,fa as l,ga as c,gb as D,ib as W,ja as b,ka as d,la as S,na as I,q as C,t as h,ta as p,ua as k,v,va as _,ya as F,za as L}from"./chunk-VNFLLBY4.js";import"./chunk-DM275RSA.js";var q=(()=>{let e=class e{constructor(){this.resourceUrl=D("users"),this.http=h(B)}users(n){let i={};return n&&(i.filter=n),this.http.get(this.resourceUrl,{params:i})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function K(t,e){if(t&1&&(o(0,"div",9),p(1),l()),t&2){let a=d().$implicit;r(),_(" ",a.name[0]," ")}}function Q(t,e){if(t&1&&c(0,"img",11),t&2){let a=d().$implicit;P("src",a.avatar_url,y)("alt",a.username)}}function X(t,e){t&1&&c(0,"div",10)}function Y(t,e){if(t&1&&(o(0,"div",8),g(1,K,2,1,"div",9)(2,Q,1,2),o(3,"p"),p(4),l()(),g(5,X,1,0,"div",10)),t&2){let a=e.$implicit,n=e.$index,i=e.$count,s=d();I("routerLink","",s.routeUrl,"/",a.telegram_id,""),r(),f(1,a.avatar_url?2:1),r(3),k(a.name),r(),f(5,n!==i-1?5:-1)}}var ce=(()=>{let e=class e{constructor(n,i){this.activatedRoute=n,this.userService=i}ngOnInit(){this.activatedRoute.queryParams.subscribe(n=>{this.routeUrl=n.routeUrl}),this.loadUsers()}loadUsers(){this.userService.users(this.filter).subscribe(n=>{this.users=n})}};e.\u0275fac=function(i){return new(i||e)(m(R),m(q))},e.\u0275cmp=v({type:e,selectors:[["ng-component"]],standalone:!0,features:[E],decls:12,vars:5,consts:[[1,"main"],[1,"header"],[1,"search"],["width","17","height","17","viewBox","0 0 17 17","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.4839 10.3803C13.3037 7.98519 13.1203 4.55437 10.9337 2.36803C8.54681 -0.0185094 4.67697 -0.0185094 2.29013 2.36803C-0.0967106 4.75457 -0.0967106 8.62391 2.29013 11.0104C4.47703 13.1971 7.90886 13.3802 10.3043 11.56L14.6872 15.9421L14.7726 16.0166C15.0993 16.2652 15.5675 16.2404 15.8659 15.9421C16.1914 15.6166 16.1914 15.089 15.8659 14.7635L11.4839 10.3803ZM3.07591 3.15371C5.02878 1.20108 8.19501 1.20108 10.1479 3.15371C12.1007 5.10633 12.1007 8.27215 10.1479 10.2248C8.19501 12.1774 5.02878 12.1774 3.07591 10.2248C1.12304 8.27215 1.12304 5.10633 3.07591 3.15371Z","fill","#3C3C43","fill-opacity","0.6"],["type","text","placeholder","\u041F\u043E\u0438\u0441\u043A",3,"ngModelChange","ngModel"],[1,"cancel",3,"routerLink"],[1,"container-white","users"],[1,"user",3,"routerLink"],[1,"img"],[1,"line"],[3,"src","alt"]],template:function(i,s){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),M(),o(3,"svg",3),c(4,"path",4),l(),x(),o(5,"input",5),T("ngModelChange",function(u){return L(s.filter,u)||(s.filter=u),u}),b("ngModelChange",function(){return s.loadUsers()}),l()(),o(6,"button",6),p(7),j(8,"translatePaid"),l()(),o(9,"div",7),w(10,Y,6,6,null,null,O),l()()),i&2&&(r(5),F("ngModel",s.filter),r(),S("routerLink",s.routeUrl),r(),_(" ",$(8,3,"admin_panel_tariffs_page__user_exception_list__cancel")," "),r(3),U(s.users))},dependencies:[A,Z,H,N,V,W],styles:[".header[_ngcontent-%COMP%]{width:calc(var(--width) + 21px);display:flex;justify-content:center}.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{background-color:#7676801f;border-radius:20px;width:85%;display:flex;align-items:center;padding:8px 10px}.header[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{background:none;border:none;width:20%}.users[_ngcontent-%COMP%]{margin-top:20px}.users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:flex;align-items:center}.users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:10px}.users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background:linear-gradient(168deg,#6fd3fb 5.04%,#2c9ff0 91.24%);color:#fff;display:flex;justify-content:center;align-items:center}"]});let t=e;return t})();export{ce as UsersComponent};
