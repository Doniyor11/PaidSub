import{a as ft}from"./chunk-DNOMEFTT.js";import{a as j}from"./chunk-LIRF6KDA.js";import{a as T}from"./chunk-KTEV526X.js";import{c as at,e as S,g as rt,h as st,i as ct,k as b,m as lt,n as pt,o as mt,q as dt,u as ut}from"./chunk-CTHILYG6.js";import{D as v,E as w,F as B,G as H,Ga as l,Ha as p,O as s,P as h,Qa as Y,T as N,V as E,Ya as tt,_ as Q,aa as F,ab as D,ba as O,ca as Z,cb as et,da as z,db as it,ea as o,fa as r,fb as nt,ga as d,gb as M,hb as ot,ia as V,ja as _,jb as I,ka as g,ma as J,pa as K,q as G,qa as W,r as A,ra as X,t as k,ta as c,ua as m,v as C,va as x,w as U,y as q}from"./chunk-OZNZNZBL.js";import{a as R,b as $}from"./chunk-DM275RSA.js";var y=(()=>{let e=class e{constructor(){this.http=k(tt)}resourceUrl(t){return ot(`marketing/webinars/${t}/notifications`)}notifications(t){return this.http.get(this.resourceUrl(t))}detail(t,i){return this.http.get(`${this.resourceUrl(i)}/${t}`)}delete(t,i){return this.http.delete(`${this.resourceUrl(i)}/${t}`)}create(t,i){return this.http.post(this.resourceUrl(t),i)}update(t,i,a){return this.http.put(`${this.resourceUrl(t)}/${i}`,a)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var _t=(()=>{let e=class e{transform(t){let i=Math.floor(t/24),a=t-Math.floor(t/24)*24;var f="\u0417\u0430 ";return i!==0&&(f+=i.toString()+" \u0434\u043D\u044F \u0438 "),f+=a.toString()+" \u0447\u0430\u0441\u0430 \u0434\u043E \u0441\u0442\u0430\u0440\u0442\u0430",f}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=q({name:"date",type:e,pure:!0});let n=e;return n})();function It(n,e){if(n&1&&(o(0,"div",6)(1,"div",7)(2,"p"),c(3),r(),o(4,"span"),c(5),l(6,"date"),r()(),o(7,"div",8),B(),o(8,"svg",9),d(9,"path",10),r()()()),n&2){let u=e.$implicit;J("routerLink","update/",u.id,""),s(3),m(u.message),s(2),m(p(6,4,u.before_start_hours))}}var vt=(()=>{let e=class e{constructor(t,i,a){this.activatedRoute=t,this.notificationService=i,this.backButton=a,this.mode="noData",this.titles={data:"autowebinar_settings_page__notification_settings",noData:"autowebinar_not_notifications"},this.description={data:"autowebinars_page_not_autowebinars_your_webinars_sublabel",noData:"autowebinar_not_notifications_sublabel"}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.webinarId=t["webinar-id"],this.loadNotification(),this.backButton.getButton(`/marketing/webinar/view/${this.webinarId}`)})}loadNotification(){this.notificationService.notifications(this.webinarId).subscribe(t=>{this.notifications=t,t.length>0?this.mode="data":this.mode="noData"})}};e.\u0275fac=function(i){return new(i||e)(h(D),h(y),h(M))},e.\u0275cmp=C({type:e,selectors:[["ng-component"]],decls:17,vars:12,consts:[[1,"title"],["routerLink","create/",1,"create"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 20 20","fill","none"],["cx","10","cy","10","r","10","fill","white"],["x","9","y","5","width","2","height","10","rx","1","fill","#007AFF"],["x","15","y","9","width","2","height","10","rx","1","transform","rotate(90 15 9)","fill","#007AFF"],[1,"container-white","card",3,"routerLink"],[1,"infos"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(i,a){i&1&&(o(0,"div")(1,"div",0)(2,"h1"),c(3),l(4,"translatePaid"),r(),o(5,"p"),c(6),l(7,"translatePaid"),r()(),o(8,"div",1),B(),o(9,"svg",2),d(10,"circle",3)(11,"rect",4)(12,"rect",5),r(),c(13),l(14,"translatePaid"),r(),Z(15,It,10,6,"div",6,O),r()),i&2&&(Q("main m-7 ",a.mode,""),s(3),m(p(4,6,a.titles[a.mode])),s(3),m(p(7,8,a.description[a.mode])),s(7),x(" ",p(14,10,"autowebinar_create_notification_page_label")," "),s(2),z(a.notifications))},dependencies:[it,I,_t],encapsulation:2});let n=e;return n})();function St(n,e){if(n&1){let u=V();o(0,"div",1),_("click",function(){v(u);let i=g();return w(i.changeModal())}),r(),o(1,"div",2)(2,"span",3),_("click",function(){v(u);let i=g();return w(i.changeModal())}),B(),o(3,"svg",4),d(4,"path",5),r()(),H(),o(5,"h1"),c(6,"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435?"),r(),o(7,"p"),c(8),l(9,"translatePaid"),r(),o(10,"button",0),_("click",function(){v(u);let i=g();return w(i.deleteNotification())}),c(11),l(12,"translatePaid"),r(),o(13,"button",6),_("click",function(){v(u);let i=g();return w(i.changeModal())}),c(14),l(15,"translatePaid"),r()()}n&2&&(s(8),m(p(9,3,"admin_panel_tariffs_page__settings_page_drop_tariff_substring")),s(3),m(p(12,5,"autowebinar_notifications_drop")),s(3),m(p(15,7,"subscribers_page__search_cancel")))}var wt=(()=>{let e=class e{constructor(){this.close=!1,this.router=k(et),this.notificationService=k(y)}changeModal(){this.close=!this.close}deleteNotification(){this.notificationService.delete(this.notificationId,this.webinarId).subscribe(()=>{this.router.navigate(["/marketing/notification/"+this.webinarId])})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["notification-delete"]],inputs:{notificationId:"notificationId",webinarId:"webinarId"},decls:4,vars:4,consts:[["type","button",1,"delete","container-white",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],["type","button",1,"cancel","container-white","primary",3,"click"]],template:function(i,a){i&1&&(o(0,"button",0),_("click",function(){return a.changeModal()}),c(1),l(2,"translatePaid"),r(),N(3,St,16,9)),i&2&&(s(),m(p(2,2,"autowebinar_notifications_drop")),s(2),F(3,a.close?3:-1))},dependencies:[I],encapsulation:2});let n=e;return n})();var kt=["media"];function Bt(n,e){if(n&1&&d(0,"notification-delete",14),n&2){let u=g();E("webinarId",u.webinarId)("notificationId",u.notificationId)}}function Nt(n,e){n&1&&(c(0),l(1,"translatePaid")),n&2&&x(" ",p(1,1,"broadcasting_page__before_payment_step_3_ok")," ")}function Ft(n,e){n&1&&(c(0),l(1,"translatePaid")),n&2&&x(" ",p(1,1,"save_button")," ")}var L=(()=>{let e=class e{constructor(t,i,a,f){this.activatedRoute=t,this.notificationService=i,this.backButton=a,this._location=f,this.editForm=new ct({name:new b(null,S.required),before_start_hours:new b(0),message:new b(null,[S.required,S.minLength(1),S.maxLength(32)]),attachment:new b([],S.required),day:new b(0),hours:new b(0),minuts:new b(0)}),this.mode="create",this.titles={update:"autowebinar_notifications_settings_page_label",create:"autowebinar_create_notification_page_label"}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.webinarId=t["webinar-id"],this.backButton.getButton(`/marketing/notification/${this.webinarId}`),t.id&&(this.notificationId=t.id,this.loadNotification())})}loadNotification(){this.notificationService.detail(this.notificationId,this.webinarId).subscribe(t=>{this.notification=t,this.editForm.patchValue($(R({},t),{hours:t.before_start_hours})),this.media.loadImages(),this.mode="update"})}save(){this.editForm.valid&&this[this.mode]()}create(){this.notificationService.create(this.webinarId,this.rowValue).subscribe(()=>{this._location.back()})}update(){this.notificationService.update(this.webinarId,this.notificationId,this.rowValue).subscribe(()=>{this._location.back()})}get rowValue(){return{before_start_hours:this.beforeStartHours,message:this.editForm.get("message").value,attachment:this.images,name:this.editForm.get("name").value}}get images(){return console.log(this.editForm.get("attachment").value),this.editForm.get("attachment").value.map(t=>t.id)}get beforeStartHours(){let t=0;return t+=typeof this.editForm.controls.hours.value=="number"?this.editForm.controls.hours.value:0,t+=typeof this.editForm.controls.day.value=="number"?this.editForm.controls.day.value*24:0,t+=typeof this.editForm.controls.minuts.value=="number"?Math.floor(this.editForm.controls.minuts.value/60):0,t}};e.\u0275fac=function(i){return new(i||e)(h(D),h(y),h(M),h(Y))},e.\u0275cmp=C({type:e,selectors:[["ng-component"]],viewQuery:function(i,a){if(i&1&&K(kt,5),i&2){let f;W(f=X())&&(a.media=f.first)}},decls:45,vars:28,consts:[["media",""],[1,"main",3,"ngSubmit","formGroup"],[1,"title-text"],["placeholder","autowebinar_notifications_name_textbox"],[1,"down-description"],["placeholder","autowebinar_notifications_message_textbox","messageControlName","message"],[1,"container-title"],[1,"container-white"],[1,"position-relative"],["type","number","formControlName","day","placeholder","0"],[1,"right"],[1,"line"],["type","number","placeholder","0","formControlName","hours"],["type","number","placeholder","0","formControlName","minuts"],[3,"webinarId","notificationId"],["title","\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435",3,"form"],[1,"down-button"],["type","submit"]],template:function(i,a){if(i&1){let f=V();o(0,"form",1),_("ngSubmit",function(){return v(f),w(a.save())}),o(1,"div",2)(2,"h1"),c(3),l(4,"translatePaid"),r()(),d(5,"name",3),o(6,"p",4),c(7),l(8,"translatePaid"),r(),d(9,"media",5,0),o(11,"p",4),c(12),l(13,"translatePaid"),r(),o(14,"div",6)(15,"p"),c(16),l(17,"translatePaid"),r()(),o(18,"div",7)(19,"div",8),d(20,"input",9),o(21,"p",10),c(22),l(23,"translatePaid"),r()(),d(24,"div",11),o(25,"div",8),d(26,"input",12),o(27,"p",10),c(28),l(29,"translatePaid"),r()(),d(30,"div",11),o(31,"div",8),d(32,"input",13),o(33,"p",10),c(34),l(35,"translatePaid"),r()()(),o(36,"p",4),c(37),l(38,"translatePaid"),r(),N(39,Bt,1,2,"notification-delete",14),d(40,"preview",15),o(41,"div",16)(42,"button",17),N(43,Nt,2,3)(44,Ft,2,3),r()()()}i&2&&(E("formGroup",a.editForm),s(3),m(p(4,12,a.titles[a.mode])),s(4),x(" ",p(8,14,"broadcasting_page__before_payment_settings_menu_sublabel")," "),s(5),m(p(13,16,"broadcasting_page__create_step_2_msg_text_input_sublabel")),s(4),m(p(17,18,"autowebinar_notifications_send_message_period_section")),s(6),m(p(23,20,"day_2")),s(6),m(p(29,22,"autowebinar_notifications_send_message_period_hours")),s(6),m(p(35,24,"autowebinar_notifications_send_message_period_minutes")),s(3),x(" ",p(38,26,"autowebinar_notifications_send_message_period_section_sublabel")," "),s(2),F(39,a.notificationId?39:-1),s(),E("form",a.editForm),s(3),F(43,a.mode==="create"?43:44))},dependencies:[lt,at,pt,rt,st,mt,dt,T,j,ft,wt,I],encapsulation:2});let n=e;return n})();var le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=U({type:e}),e.\u0275inj=A({imports:[nt.forChild([{path:":webinar-id",component:vt},{path:":webinar-id/create",component:L},{path:":webinar-id/update/:id",component:L}]),ut,T,j]});let n=e;return n})();export{le as NotificationModule};
