import{a as g}from"./chunk-6CPSFUO2.js";import"./chunk-INW2X4BE.js";import{a as y}from"./chunk-Q6VANP3P.js";import{$ as M,A as _,B,F as I,G as a,H as C,Ha as j,L as w,La as F,N as k,Qa as L,Sa as G,T as R,Ta as N,U as O,V as P,Va as z,W as T,X as i,Y as n,Z as l,aa as d,ba as m,ca as V,ja as u,ka as f,la as S,n as b,p as v,r as x,s as D,y as p,z as h}from"./chunk-4PB5C4AT.js";function $(r,e){if(r&1&&(l(0,"div",6),i(1,"div",7)(2,"span",8),u(3),n(),i(4,"div",9)(5,"p"),u(6),n(),i(7,"span"),u(8),n()(),i(9,"span",10),_(),i(10,"svg",11),l(11,"path",12),n()()()),r&2){let c=e.$implicit;a(),V("routerLink","",c.id,"/"),a(2),S(" ",c.name[0]," "),a(3),f(c.name),a(2),f(c.type)}}var A=(()=>{let e=class e{constructor(){this.resourceService=v(g),this.backButton=v(y)}ngOnInit(){this.backButton.getButton("/menu"),this.resourceService.resources().subscribe(o=>{this.resources=o})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=x({type:e,selectors:[["ng-component"]],decls:12,vars:0,consts:[[1,"main"],[1,"title-text"],[1,"container-white"],[1,"add"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"line"],[1,"channel","card",3,"routerLink"],[1,"image"],[1,"infos"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(t,s){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),u(3,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B"),n()(),i(4,"div",2)(5,"div",3)(6,"div"),_(),i(7,"svg",4),l(8,"path",5),n()(),u(9," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441 "),n(),P(10,$,12,5,null,null,O),n()()),t&2&&(a(10),T(s.resources))},dependencies:[N],styles:[".add[_ngcontent-%COMP%]{color:var(--primary);display:flex;align-items:center;height:40px;font-weight:500}.add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10px;width:40px;display:flex;justify-content:center}"]});let r=e;return r})();function q(r,e){if(r&1){let c=M();i(0,"div",1),d("click",function(){p(c);let t=m();return h(t.changeModal())}),n(),i(1,"div",2)(2,"span",3),d("click",function(){p(c);let t=m();return h(t.changeModal())}),_(),i(3,"svg",4),l(4,"path",5),n()(),B(),i(5,"h1"),u(6,"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441?"),n(),i(7,"p"),u(8,"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C\u0441\u044F"),n(),i(9,"button",6),d("click",function(){p(c);let t=m();return h(t.delete())}),u(10,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441"),n(),i(11,"button",7),d("click",function(){p(c);let t=m();return h(t.changeModal())}),u(12,"\u041E\u0442\u043C\u0435\u043D\u0430"),n()()}}var Z=(()=>{let e=class e{constructor(){this.resourceService=v(g),this.router=v(G),this.openModal=!1}changeModal(){this.openModal=!this.openModal}delete(){this.resourceService.delete(this.id).subscribe(()=>{this.router.navigate(["/resources"])})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=x({type:e,selectors:[["resource-delete"]],inputs:{id:"id"},decls:3,vars:1,consts:[[1,"container-white","delete",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"delete","container-white",3,"click"],[1,"cancel","container-white","primary",3,"click"]],template:function(t,s){t&1&&(i(0,"div",0),d("click",function(){return s.changeModal()}),u(1,` \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441
`),n(),w(2,q,13,0)),t&2&&(a(2),R(2,s.openModal?2:-1))},styles:[".delete[_ngcontent-%COMP%], .cancel[_ngcontent-%COMP%]{width:var(--width)}"]});let r=e;return r})();function K(r,e){if(r&1){let c=M();i(0,"div",1)(1,"div",2),l(2,"img",3),i(3,"h1"),u(4),n(),i(5,"span"),u(6),n()(),i(7,"div",4)(8,"div",5)(9,"p"),u(10,"TG ID:"),n(),i(11,"span",6),u(12),n()(),l(13,"div",7),i(14,"div",5)(15,"p"),u(16,"\u0421\u0442\u0430\u0442\u0443\u0441 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u0438:"),n(),i(17,"span",6),u(18),n()()(),i(19,"div",8),d("click",function(){p(c);let t=m();return h(t.openGroup(t.resource.invite_url))}),u(20," \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 "),n(),l(21,"resource-delete",9),n()}if(r&2){let c=m();a(2),k("src",c.resource.logo_url,I),a(2),f(c.resource.name),a(2),f(c.resource.type),a(6),f(c.resource.telegram_id),a(6),S(" ",c.resource.moderation_status," "),a(3),k("id",c.resourceId)}}var H=(()=>{let e=class e{constructor(o,t,s){this.route=o,this.backButton=t,this.resourceService=s}ngOnInit(){this.backButton.getButton("/resources"),this.route.params.subscribe(o=>{this.resourceId=o.id,this.loadResource()})}openGroup(o){location.replace(o)}loadResource(){this.resourceService.find(this.resourceId).subscribe(o=>{this.resource=o})}};e.\u0275fac=function(t){return new(t||e)(C(L),C(y),C(g))},e.\u0275cmp=x({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","resource-detail",4,"ngIf"],[1,"resource-detail"],[1,"header"],["alt","",3,"src"],[1,"container-white"],[1,"position-relative"],[1,"right"],[1,"line"],[1,"container-white","primary","text-center",2,"margin-top","20px",3,"click"],[3,"id"]],template:function(t,s){t&1&&w(0,K,22,6,"div",0),t&2&&k("ngIf",s.resource)},dependencies:[j,Z],styles:[".resource-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;display:flex;flex-direction:column;align-items:center}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:80%;font-size:24px;font-weight:600;line-height:28.13px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%;color:#636366}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;object-fit:cover}"]});let r=e;return r})();var xe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=D({type:e}),e.\u0275inj=b({imports:[z.forChild([{path:"",component:A},{path:":id",component:H}]),F]});let r=e;return r})();export{xe as ResourceModule};
