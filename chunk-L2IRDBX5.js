import{a as f}from"./chunk-PMGK6CSA.js";import"./chunk-INW2X4BE.js";import{$ as V,A as B,E as b,F as c,Fa as F,G as w,Ha as j,Ia as L,J as D,Ka as G,L as M,La as k,R as I,S as R,T as O,U as P,V as t,W as n,X as l,Y as T,Z as h,_ as C,ea as o,fa as d,ga as _,m as y,o as m,q as p,r as E,x as v,y as g,z as x}from"./chunk-WOTPGTLC.js";function H(r,e){if(r&1&&(l(0,"div",6),t(1,"div",7)(2,"span",8),o(3),n(),t(4,"div",9)(5,"p"),o(6),n(),t(7,"span"),o(8),n()(),t(9,"span",10),x(),t(10,"svg",11),l(11,"path",12),n()()()),r&2){let s=e.$implicit;c(),V("routerLink","",s.id,"/"),c(2),_(" ",s.name[0]," "),c(3),d(s.name),c(2),d(s.type)}}var z=(()=>{let e=class e{constructor(){this.resourceService=m(f),this.backButton=m(k)}ngOnInit(){this.backButton.getButton("/menu"),this.resourceService.resources().subscribe(u=>{this.resources=u})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:12,vars:0,consts:[[1,"main"],[1,"title-text"],[1,"container-white"],[1,"add"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"line"],[1,"channel","card",3,"routerLink"],[1,"image"],[1,"infos"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),o(3,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B"),n()(),t(4,"div",2)(5,"div",3)(6,"div"),x(),t(7,"svg",4),l(8,"path",5),n()(),o(9," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441 "),n(),O(10,H,12,5,null,null,R),n()()),i&2&&(c(10),P(a.resources))},dependencies:[L],styles:[".add[_ngcontent-%COMP%]{color:var(--primary);display:flex;align-items:center;height:40px;font-weight:500}.add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10px;width:40px;display:flex;justify-content:center}"]});let r=e;return r})();function U(r,e){if(r&1){let s=T();t(0,"div",1),h("click",function(){v(s);let i=C();return g(i.changeModal())}),n(),t(1,"div",2)(2,"span",3),h("click",function(){v(s);let i=C();return g(i.changeModal())}),x(),t(3,"svg",4),l(4,"path",5),n()(),B(),t(5,"h1"),o(6,"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441?"),n(),t(7,"p"),o(8,"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C\u0441\u044F"),n(),t(9,"button",6),h("click",function(){v(s);let i=C();return g(i.delete())}),o(10,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441"),n(),t(11,"button",7),h("click",function(){v(s);let i=C();return g(i.changeModal())}),o(12,"\u041E\u0442\u043C\u0435\u043D\u0430"),n()()}}var A=(()=>{let e=class e{constructor(){this.resourceService=m(f),this.router=m(j),this.openModal=!1}changeModal(){this.openModal=!this.openModal}delete(){this.resourceService.delete(this.id).subscribe(()=>{this.router.navigate(["/resources"])})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["resource-delete"]],inputs:{id:"id"},decls:3,vars:1,consts:[[1,"container-white","delete",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"delete","container-white",3,"click"],[1,"cancel","container-white","primary",3,"click"]],template:function(i,a){i&1&&(t(0,"div",0),h("click",function(){return a.changeModal()}),o(1,` \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441
`),n(),D(2,U,13,0)),i&2&&(c(2),I(2,a.openModal?2:-1))},styles:[".delete[_ngcontent-%COMP%], .cancel[_ngcontent-%COMP%]{width:var(--width)}"]});let r=e;return r})();var N=(()=>{let e=class e{constructor(u,i,a){this.route=u,this.backButton=i,this.resourceService=a}ngOnInit(){this.backButton.getButton("/resources"),this.route.params.subscribe(u=>{this.resourceId=u.id,this.loadResource()})}loadResource(){this.resourceService.find(this.resourceId).subscribe(u=>{this.resource=u})}};e.\u0275fac=function(i){return new(i||e)(w(F),w(k),w(f))},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:22,vars:6,consts:[[1,"resource-detail"],[1,"header"],["alt","",3,"src"],[1,"container-white"],[1,"position-relative"],[1,"right"],[1,"line"],[1,"container-white","primary","text-center",2,"margin-top","20px"],[3,"id"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1),l(2,"img",2),t(3,"h1"),o(4),n(),t(5,"span"),o(6),n()(),t(7,"div",3)(8,"div",4)(9,"p"),o(10,"TG ID:"),n(),t(11,"span",5),o(12),n()(),l(13,"div",6),t(14,"div",4)(15,"p"),o(16,"\u0421\u0442\u0430\u0442\u0443\u0441 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u0438:"),n(),t(17,"span",5),o(18),n()()(),t(19,"div",7),o(20," \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 "),n(),l(21,"resource-delete",8),n()),i&2&&(c(2),M("src",a.resource.logo_url,b),c(2),d(a.resource.name),c(2),d(a.resource.type),c(6),d(a.resource.telegram_id),c(6),_(" ",a.resource.moderation_status," "),c(3),M("id",a.resourceId))},dependencies:[A],styles:[".resource-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;display:flex;flex-direction:column;align-items:center}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:80%;font-size:24px;font-weight:600;line-height:28.13px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%;color:#636366}"]});let r=e;return r})();var me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=E({type:e}),e.\u0275inj=y({imports:[G.forChild([{path:"",component:z},{path:":id",component:N}])]});let r=e;return r})();export{me as ResourceModule};
