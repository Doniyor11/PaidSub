<<<<<<<< HEAD:chunk-UPZIVBLJ.js
import{a as y,b as q}from"./chunk-LLY6ARMA.js";import{n as J,o as K}from"./chunk-KNFDVZSQ.js";import{f as Z}from"./chunk-TRRUAURR.js";import{$a as R,Cb as d,Db as m,Ia as M,Ka as _,Pa as V,Q as T,Ra as b,Rb as G,Sa as j,Ta as L,U as C,Ua as F,Va as n,Wa as o,Wb as $,Xa as x,Z as w,_ as O,cb as f,db as p,fa as h,fc as z,ga as g,ha as P,hb as A,hc as N,ia as D,ic as U,kc as H,lc as B,oc as k,pb as l,qb as s,rb as v,ua as S,xa as r,ya as I}from"./chunk-ZB6I7ORA.js";import"./chunk-YHOLSLLF.js";function ie(i,e){if(i&1&&x(0,"img",6),i&2){let a=p().$implicit;_("src",a.logo_url,S)}}function ne(i,e){if(i&1&&(n(0,"span"),l(1),o()),i&2){let a=p(),c=a.$implicit,t=a.$index,u=p();V("image ",u.getColour(t),""),r(),v(" ",c.name[0]," ")}}function re(i,e){if(i&1&&(x(0,"div",4),n(1,"div",5),M(2,ie,1,1,"img",6)(3,ne,2,4),n(4,"div",7)(5,"p"),l(6),o(),n(7,"span"),l(8),o()(),n(9,"span",8),P(),n(10,"svg",9),x(11,"path",10),o()()()),i&2){let a=e.$implicit;r(),A("routerLink","",a.id,"/"),r(),b(2,a.logo_url?2:3),r(4),s(a.name),r(2),s(a.type)}}var W=(()=>{let e=class e{constructor(){this.getColour=Z,this.resourceService=C(y),this.backButton=C(B)}ngOnInit(){this.backButton.getButton("/menu"),this.loadResource()}loadResource(){this.resourceService.resources().subscribe(c=>{this.resources=c})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=w({type:e,selectors:[["ng-component"]],decls:9,vars:4,consts:[[1,"main"],[1,"title-text"],[1,"container-white"],[3,"loadResource","reverse"],[1,"line"],[1,"card",3,"routerLink"],["alt","",3,"src"],[1,"infos"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(t,u){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),l(3),d(4,"translatePaid"),o()(),n(5,"div",2)(6,"resource-create",3),f("loadResource",function(){return u.loadResource()}),o(),L(7,re,12,5,null,null,j),o()()),t&2&&(r(3),s(m(4,2,"resources_page__page_label")),r(3),_("reverse",!0),r(),F(u.resources))},dependencies:[U,q,k],styles:[".add[_ngcontent-%COMP%]{color:var(--primary);display:flex;align-items:center;height:40px;font-weight:500}.add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10px;width:40px;display:flex;justify-content:center}img[_ngcontent-%COMP%]{margin-right:10px;width:35px;height:35px;object-fit:cover;border-radius:50%}"]});let i=e;return i})();function oe(i,e){if(i&1){let a=R();n(0,"div",1),f("click",function(){h(a);let t=p();return g(t.changeModal())}),o(),n(1,"div",2)(2,"span",3),f("click",function(){h(a);let t=p();return g(t.changeModal())}),P(),n(3,"svg",4),x(4,"path",5),o()(),D(),n(5,"h1"),l(6),d(7,"translatePaid"),o(),n(8,"p"),l(9),d(10,"translatePaid"),o(),n(11,"button",6),f("click",function(){h(a);let t=p();return g(t.delete())}),l(12),d(13,"translatePaid"),o(),n(14,"button",7),f("click",function(){h(a);let t=p();return g(t.changeModal())}),l(15),d(16,"translatePaid"),o()()}i&2&&(_("@alertBackgroundAnimation",void 0),r(),_("@alertAnimation",void 0),r(5),s(m(7,6,"resource_explorer__drop_resource_label")),r(3),s(m(10,8,"resource_explorer__drop_resource_label_substring")),r(3),s(m(13,10,"resource_explorer__accept_drop_resource")),r(3),s(m(16,12,"resource_explorer__cancel_drop_resource")))}var X=(()=>{let e=class e{constructor(){this.resourceService=C(y),this.router=C(N),this.openModal=!1}changeModal(){this.openModal=!this.openModal}delete(){this.resourceService.delete(this.id).subscribe(()=>{this.router.navigate(["/resources"])})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=w({type:e,selectors:[["resource-delete"]],inputs:{id:"id"},decls:4,vars:4,consts:[[1,"container-white","delete",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"delete","container-white",3,"click"],[1,"cancel","container-white","primary",3,"click"]],template:function(t,u){t&1&&(n(0,"div",0),f("click",function(){return u.changeModal()}),l(1),d(2,"translatePaid"),o(),M(3,oe,17,14)),t&2&&(r(),v(" ",m(2,2,"resource_explorer__drop_resource"),`
========
import{a as y,b as q}from"./chunk-2EUJWTWE.js";import{f as Z}from"./chunk-O7OJAQ4K.js";import{n as J,o as K}from"./chunk-KNFDVZSQ.js";import{$a as R,Cb as d,Db as m,Ia as M,Ka as _,Pa as V,Q as T,Ra as b,Rb as G,Sa as j,Ta as L,U as C,Ua as F,Va as n,Wa as o,Wb as $,Xa as x,Z as w,_ as O,cb as f,db as p,fa as h,fc as z,ga as g,ha as P,hb as A,hc as N,ia as D,ic as U,kc as H,lc as B,oc as k,pb as l,qb as s,rb as v,ua as S,xa as r,ya as I}from"./chunk-7AOOGZWM.js";import"./chunk-YHOLSLLF.js";function ie(i,e){if(i&1&&x(0,"img",6),i&2){let a=p().$implicit;_("src",a.logo_url,S)}}function ne(i,e){if(i&1&&(n(0,"span"),l(1),o()),i&2){let a=p(),c=a.$implicit,t=a.$index,u=p();V("image ",u.getColour(t),""),r(),v(" ",c.name[0]," ")}}function re(i,e){if(i&1&&(x(0,"div",4),n(1,"div",5),M(2,ie,1,1,"img",6)(3,ne,2,4),n(4,"div",7)(5,"p"),l(6),o(),n(7,"span"),l(8),o()(),n(9,"span",8),P(),n(10,"svg",9),x(11,"path",10),o()()()),i&2){let a=e.$implicit;r(),A("routerLink","",a.id,"/"),r(),b(2,a.logo_url?2:3),r(4),s(a.name),r(2),s(a.type)}}var W=(()=>{let e=class e{constructor(){this.getColour=Z,this.resourceService=C(y),this.backButton=C(B)}ngOnInit(){this.backButton.getButton("/menu"),this.loadResource()}loadResource(){this.resourceService.resources().subscribe(c=>{this.resources=c})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=w({type:e,selectors:[["ng-component"]],decls:9,vars:4,consts:[[1,"main"],[1,"title-text"],[1,"container-white"],[3,"loadResource","reverse"],[1,"line"],[1,"card",3,"routerLink"],["alt","",3,"src"],[1,"infos"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(t,u){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),l(3),d(4,"translatePaid"),o()(),n(5,"div",2)(6,"resource-create",3),f("loadResource",function(){return u.loadResource()}),o(),L(7,re,12,5,null,null,j),o()()),t&2&&(r(3),s(m(4,2,"resources_page__page_label")),r(3),_("reverse",!0),r(),F(u.resources))},dependencies:[U,q,k],styles:[".add[_ngcontent-%COMP%]{color:var(--primary);display:flex;align-items:center;height:40px;font-weight:500}.add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10px;width:40px;display:flex;justify-content:center}img[_ngcontent-%COMP%]{margin-right:10px;width:35px;height:35px;object-fit:cover;border-radius:50%}"]});let i=e;return i})();function oe(i,e){if(i&1){let a=R();n(0,"div",1),f("click",function(){h(a);let t=p();return g(t.changeModal())}),o(),n(1,"div",2)(2,"span",3),f("click",function(){h(a);let t=p();return g(t.changeModal())}),P(),n(3,"svg",4),x(4,"path",5),o()(),D(),n(5,"h1"),l(6),d(7,"translatePaid"),o(),n(8,"p"),l(9),d(10,"translatePaid"),o(),n(11,"button",6),f("click",function(){h(a);let t=p();return g(t.delete())}),l(12),d(13,"translatePaid"),o(),n(14,"button",7),f("click",function(){h(a);let t=p();return g(t.changeModal())}),l(15),d(16,"translatePaid"),o()()}i&2&&(_("@alertBackgroundAnimation",void 0),r(),_("@alertAnimation",void 0),r(5),s(m(7,6,"resource_explorer__drop_resource_label")),r(3),s(m(10,8,"resource_explorer__drop_resource_label_substring")),r(3),s(m(13,10,"resource_explorer__accept_drop_resource")),r(3),s(m(16,12,"resource_explorer__cancel_drop_resource")))}var X=(()=>{let e=class e{constructor(){this.resourceService=C(y),this.router=C(N),this.openModal=!1}changeModal(){this.openModal=!this.openModal}delete(){this.resourceService.delete(this.id).subscribe(()=>{this.router.navigate(["/resources"])})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=w({type:e,selectors:[["resource-delete"]],inputs:{id:"id"},decls:4,vars:4,consts:[[1,"container-white","delete",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"delete","container-white",3,"click"],[1,"cancel","container-white","primary",3,"click"]],template:function(t,u){t&1&&(n(0,"div",0),f("click",function(){return u.changeModal()}),l(1),d(2,"translatePaid"),o(),M(3,oe,17,14)),t&2&&(r(),v(" ",m(2,2,"resource_explorer__drop_resource"),`
>>>>>>>> 6f8488aff092126a0678a1d8dd09424abac94b68:chunk-2KVTGYNQ.js
`),r(2),b(3,u.openModal?3:-1))},dependencies:[k],styles:[".delete[_ngcontent-%COMP%], .cancel[_ngcontent-%COMP%]{width:var(--width)}"],data:{animation:[J,K]}});let i=e;return i})();function ce(i,e){if(i&1){let a=R();n(0,"div",1)(1,"div",2),x(2,"img",3),n(3,"h1"),l(4),o(),n(5,"span"),l(6),o()(),n(7,"div",4)(8,"div",5)(9,"p"),l(10,"TG ID:"),o(),n(11,"span",6),l(12),o()(),x(13,"div",7),n(14,"div",5)(15,"p"),l(16),d(17,"translatePaid"),o(),n(18,"span",6),l(19),d(20,"translatePaid"),o()()(),n(21,"div",8),f("click",function(){h(a);let t=p();return g(t.openGroup(t.resource.invite_url))}),l(22),d(23,"translatePaid"),o(),x(24,"resource-delete",9),o()}if(i&2){let a=p();r(2),_("src",a.resource.logo_url,S),r(2),s(a.resource.name),r(2),s(a.resource.type),r(6),s(a.resource.telegram_id),r(4),s(m(17,8,"resource_explorer__moderation_status")),r(3),v(" ",m(20,10,"resource_explorer__moderation_status_"+a.resource.moderation_status)," "),r(3),v(" ",m(23,12,"resource_explorer__go_to_group")," "),r(2),_("id",a.resourceId)}}var Y=(()=>{let e=class e{constructor(c,t,u){this.route=c,this.backButton=t,this.resourceService=u}ngOnInit(){this.backButton.getButton("/resources"),this.route.params.subscribe(c=>{this.resourceId=c.id,this.loadResource()})}openGroup(c){location.replace(c)}loadResource(){this.resourceService.find(this.resourceId).subscribe(c=>{this.resource=c})}};e.\u0275fac=function(t){return new(t||e)(I(z),I(B),I(y))},e.\u0275cmp=w({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","resource-detail",4,"ngIf"],[1,"resource-detail"],[1,"header"],["alt","",3,"src"],[1,"container-white"],[1,"position-relative"],[1,"right"],[1,"line"],[1,"container-white","primary","text-center",2,"margin-top","20px",3,"click"],[3,"id"]],template:function(t,u){t&1&&M(0,ce,25,14,"div",0),t&2&&_("ngIf",u.resource)},dependencies:[G,X,k],styles:[".resource-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;display:flex;flex-direction:column;align-items:center;width:100%}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:80%;font-size:24px;font-weight:600;line-height:28.13px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%;color:#636366}.resource-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;object-fit:cover}"]});let i=e;return i})();var Ve=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=T({imports:[H.forChild([{path:"",component:W},{path:":id",component:Y}]),$]});let i=e;return i})();export{Ve as ResourceModule};
