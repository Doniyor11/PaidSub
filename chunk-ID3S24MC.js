import{a as Et}from"./chunk-MAAQSTPP.js";import{a as q,b as $,d as k}from"./chunk-Q2HNSVUD.js";import{a as H}from"./chunk-KTEV526X.js";import{b as z}from"./chunk-SCGMYTJN.js";import{b as _t,c as ht,d as Pt}from"./chunk-QXDOXOUL.js";import{a as ut}from"./chunk-F3ADXDIB.js";import{c as vt,e as R,g as ft,h as gt,i as xt,k as J,m as bt,o as Ct,q as St,t as yt,u as wt}from"./chunk-CTHILYG6.js";import{D as B,E as T,Ea as Z,F as C,G as O,Ga as c,Ha as m,O as n,P as b,T as V,V as S,Wa as pt,Ya as ct,Z as U,_ as at,aa as j,ab as D,ba as ot,ca as rt,cb as N,da as st,db as Q,ea as e,fa as i,fb as mt,ga as d,gb as G,hb as dt,ia as lt,ja as y,jb as f,ka as w,na as F,pa as P,q as et,qa as E,r as it,ra as I,t as h,ta as s,ua as l,v,va as x,w as nt,wa as A}from"./chunk-OZNZNZBL.js";import{a as X,b as Y,f as tt}from"./chunk-DM275RSA.js";var g=(()=>{let r=class r{constructor(){this.http=h(ct),this.resourceUrl=dt("marketing/utm")}utms(){return this.http.get(this.resourceUrl)}create(t){return this.http.post(this.resourceUrl,t)}detail(t,a){return this.http.get(`${this.resourceUrl}/${a}/stats/${t}`)}periods(t){return this.http.get(`${this.resourceUrl}/${t}/period_stats`)}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`)}};r.\u0275fac=function(a){return new(a||r)},r.\u0275prov=et({token:r,factory:r.\u0275fac,providedIn:"root"});let p=r;return p})();var Ft=p=>({path:p}),At=p=>({id:p});function Rt(p,r){if(p&1&&(e(0,"div",7)(1,"div",8)(2,"p"),s(3),i(),d(4,"span",9),i(),e(5,"span",10),C(),e(6,"svg",11),d(7,"path",12),i()()()),p&2){let u=r.$implicit;F("routerLink","view/",u.created_at,"/",u.utm,""),n(3),l(u.name),n(),S("params",Z(5,At,u.utm))}}var It=(()=>{let r=class r{constructor(){this.utmService=h(g),this.backButton=h(G),this.titles={data:"utm_exists_page_label",noData:"utm_not_exists_page_label"},this.description={data:"utm_exists_page_label_substring",noData:"utm_not_exists_page_label_substring"},this.images={noData:"assets/Enot web/enot_thinking.json",data:"assets/Enot web/enot_business.json"},this.mode="noData"}ngOnInit(){this.backButton.getButton("/marketing/menu"),this.utmService.utms().subscribe(t=>{this.utms=t,t.length>0&&(this.mode="data")})}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=v({type:r,selectors:[["ng-component"]],decls:18,vars:15,consts:[[1,"title"],[3,"options"],["routerLink","create/",1,"create"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 20 20","fill","none"],["cx","10","cy","10","r","10","fill","white"],["x","9","y","5","width","2","height","10","rx","1","fill","#007AFF"],["x","15","y","9","width","2","height","10","rx","1","transform","rotate(90 15 9)","fill","#007AFF"],[1,"container-white","card","m-4",3,"routerLink"],[1,"infos"],["translatePaid","utm_element_id",3,"params"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(a,o){a&1&&(e(0,"div")(1,"div",0),d(2,"ng-lottie",1),e(3,"h1"),s(4),c(5,"translatePaid"),i(),e(6,"p"),s(7),c(8,"translatePaid"),i()(),e(9,"button",2),C(),e(10,"svg",3),d(11,"circle",4)(12,"rect",5)(13,"rect",6),i(),s(14),c(15,"translatePaid"),i(),rt(16,Rt,8,7,"div",7,ot),i()),a&2&&(at("main ",o.mode,""),n(2),S("options",Z(13,Ft,o.images[o.mode])),n(2),l(m(5,7,o.titles[o.mode])),n(3),l(m(8,9,o.description[o.mode])),n(7),x(" ",m(15,11,"utm_create")," "),n(2),st(o.utms))},dependencies:[Q,z,ut,f],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.main[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]{width:calc(var(--width) + 20px)}"]});let p=r;return p})();var Mt=(()=>{let r=class r{constructor(){this.utmService=h(g),this.router=h(N),this.notificationService=h(_t),this.editForm=new xt({name:new J(null,[R.required,R.minLength(1),R.maxLength(32)]),label:new J(null,[R.required])})}save(){if(this.editForm.controls.label.valid){if(!this.editForm.controls.name.valid){this.notificationService.createNotification("notify__utm_id_is_required");return}}else{this.notificationService.createNotification("notify__utm_name_is_required");return}this.utmService.create(this.editForm.getRawValue()).subscribe(()=>{this.router.navigate(["/marketing/utm"])})}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=v({type:r,selectors:[["ng-component"]],decls:19,vars:11,consts:[[1,"main",3,"ngSubmit","formGroup"],[1,"title-text"],[1,"container-white"],["placeholder","utm_create_form__name_textbox",3,"container"],[1,"line"],[1,"position-relative"],["type","text","formControlName","label","placeholder","\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"],[1,"down-description"],[1,"bottom"],[1,"down-button"],["type","submit"]],template:function(a,o){a&1&&(e(0,"form",0),y("ngSubmit",function(){return o.save()}),e(1,"div",1)(2,"h1"),s(3),c(4,"translatePaid"),i()(),e(5,"div",2),d(6,"name",3)(7,"div",4),e(8,"div",5),d(9,"input",6),i()(),e(10,"p",7),s(11),c(12,"translatePaid"),i(),e(13,"div",8),d(14,"alert-notify"),e(15,"div",9)(16,"button",10),s(17),c(18,"translatePaid"),i()()()()),a&2&&(S("formGroup",o.editForm),n(3),l(m(4,5,"utm_create_form_label")),n(3),S("container",!1),n(5),x(" ",m(12,7,"utm_create_form__substring")," "),n(6),x(" ",m(18,9,"ab_tests__settings__msg_save")," "))},dependencies:[bt,vt,ft,gt,Ct,St,H,ht,f],encapsulation:2});let p=r;return p})();function Lt(p,r){if(p&1){let u=lt();e(0,"div",1),y("click",function(){B(u);let a=w();return T(a.changeDeleteAlert())}),i(),e(1,"div",2)(2,"span",3),y("click",function(){B(u);let a=w();return T(a.changeDeleteAlert())}),C(),e(3,"svg",4),d(4,"path",5),i()(),O(),e(5,"h1"),s(6),c(7,"translatePaid"),i(),e(8,"p"),s(9),c(10,"translatePaid"),i(),e(11,"button",0),y("click",function(){B(u);let a=w();return T(a.deleteMailing())}),s(12),c(13,"translatePaid"),i(),e(14,"button",6),y("click",function(){B(u);let a=w();return T(a.changeDeleteAlert())}),s(15),c(16,"translatePaid"),i()()}p&2&&(n(6),l(m(7,4,"utm_drop_page_label")),n(3),l(m(10,6,"resource_explorer__drop_resource_label_substring")),n(3),l(m(13,8,"utm_explorer_page_drop_utm")),n(3),l(m(16,10,"utm_drop_page__cancel_drop")))}var Dt=(()=>{let r=class r{constructor(){this.utmService=h(g),this.router=h(N),this.openModal=!1}changeDeleteAlert(){this.openModal=!this.openModal}deleteMailing(){this.changeDeleteAlert(),this.utmService.delete(this.label).subscribe(()=>{this.router.navigate(["/marketing/utm/"])})}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=v({type:r,selectors:[["utm-delete"]],inputs:{label:"label"},decls:4,vars:4,consts:[[1,"delete","container-white",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"cancel","container-white","primary",3,"click"]],template:function(a,o){a&1&&(e(0,"button",0),y("click",function(){return o.changeDeleteAlert()}),s(1),c(2,"translatePaid"),i(),V(3,Lt,17,12)),a&2&&(n(),l(m(2,2,"utm_explorer_page_drop_utm")),n(2),j(3,o.openModal?3:-1))},dependencies:[f],encapsulation:2});let p=r;return p})();function jt(p,r){if(p&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),s(3),i()(),e(4,"div",2)(5,"p"),s(6),c(7,"translatePaid"),i()(),e(8,"div",3)(9,"div",4)(10,"p"),s(11),c(12,"translatePaid"),i(),e(13,"span",5),s(14),i()(),d(15,"div",6),e(16,"div",4)(17,"p"),s(18),c(19,"translatePaid"),i(),e(20,"span",5),s(21),i()(),d(22,"div",6),e(23,"div",4)(24,"p"),s(25),c(26,"translatePaid"),i(),e(27,"span",5),s(28),i()(),d(29,"div",6),e(30,"div",4)(31,"p"),s(32),c(33,"translatePaid"),i(),e(34,"span",5),s(35),i()(),d(36,"div",6),e(37,"div",7)(38,"p"),s(39,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"),i(),e(40,"span",5),C(),e(41,"svg",8),d(42,"path",9),i()()()(),O(),e(43,"div",2)(44,"p"),s(45),c(46,"translatePaid"),i()(),e(47,"div",3)(48,"div",4)(49,"p"),s(50,"RUB"),i(),e(51,"span",5),s(52),i()(),d(53,"div",6),e(54,"div",4)(55,"p"),s(56,"USD"),i(),e(57,"span",5),s(58),i()(),d(59,"div",6),e(60,"div",7)(61,"p"),s(62,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"),i(),e(63,"span",5),C(),e(64,"svg",8),d(65,"path",9),i()()()(),O(),d(66,"utm-delete",10),i()),p&2){let u=w();n(3),l(u.label),n(3),x(" ",m(7,20,"utm_explorer_page_stats_section")," "),n(5),l(m(12,22,"utm__stats_explorer_page__registration_count")),n(3),l(u.utm.users_count),n(4),l(m(19,24,"ab_tests__metric_blocked_bot_count")),n(3),l(u.utm.inactive_users_count),n(4),l(m(26,26,"autowebinar_settings_page__stats_buy_subs_count")),n(3),l(u.utm.buyed_subs_users_count),n(4),l(m(33,28,"utm_explorer_page_stats__not_prolong_subscription_count")),n(3),l(u.utm.not_prolong_subs_users_count),n(2),F("routerLink","/marketing/utm/view-statistica/",u.created_at,"/",u.label,""),n(8),x(" ",m(46,30,"utm_explorer_page_finance_stats_section")," "),n(7),l(u.utm.finance_stats[1].amount),n(6),l(u.utm.finance_stats[0].amount),n(2),F("routerLink","/marketing/utm/view-statistica-price/",u.created_at,"/",u.label,""),n(6),S("label",u.label)}}var kt=(()=>{let r=class r{constructor(t,a,o){this.activatedRoute=t,this.utmService=a,this.backButton=o}ngOnInit(){this.backButton.getButton("/marketing/utm"),this.activatedRoute.params.subscribe(t=>{this.created_at=t.created_at,this.label=t.label,this.loadUtm()})}loadUtm(){this.utmService.detail(this.created_at,this.label).subscribe(t=>{this.utm=Y(X({},t),{finance_stats:t.finance_stats.length?t.finance_stats:[{amount:0,currency:"RUB"},{amount:0,currency:"USD"}]})})}};r.\u0275fac=function(a){return new(a||r)(b(D),b(g),b(G))},r.\u0275cmp=v({type:r,selectors:[["ng-component"]],decls:1,vars:1,consts:[[1,"main"],[1,"title-text"],[1,"container-title"],[1,"container-white"],[1,"position-relative"],[1,"right"],[1,"line"],[1,"position-relative","primary",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#007AFF"],[3,"label"]],template:function(a,o){a&1&&V(0,jt,67,32,"div",0),a&2&&j(0,o.utm?0:-1)},dependencies:[Q,Dt,f],encapsulation:2});let p=r;return p})();var Bt=tt(Et());var Nt=["users_count_tmpl"],Qt=["buyed_subs_users_count_tmpl"],Gt=["inactive_users_count_tmpl"],qt=["not_prolong_subs_users_count_tmpl"],Tt=(()=>{let r=class r{constructor(t,a){this.activatedRoute=t,this.utmService=a,this.data={users_count:{data:[],sum:0,action:0,persentage:0,color:"#3178DE"},inactive_users_count:{data:[],sum:0,action:0,persentage:0,color:"#B84041"},buyed_subs_users_count:{data:[],sum:0,action:0,persentage:0,color:"#4CC063"},not_prolong_subs_users_count:{data:[],sum:0,action:0,persentage:0,color:"#F7931A"}}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.created_at=t.created_at,this.label=t.label,this.loadPeriods()})}loadPeriods(){this.utmService.periods(this.label).subscribe(t=>{this.stats=t,this.fromToDate=$(t[0].date,t[t.length-1].date),this.calculateInfos("users_count",this.users_count_tmpl),this.calculateInfos("inactive_users_count",this.inactive_users_count_tmpl),this.calculateInfos("buyed_subs_users_count",this.buyed_subs_users_count_tmpl),this.calculateInfos("not_prolong_subs_users_count",this.not_prolong_subs_users_count_tmpl)})}calculateInfos(t,a){this.stats.forEach(o=>{this.data[t].data.push({x:o.date,y:o[t]}),this.data[t].sum+=o[t]}),this.data[t].action=this.stats[this.stats.length-1][t]-this.stats[this.stats.length-2][t],this.data[t].persentage=Math.floor((this.stats[this.stats.length-1][t]??1/this.stats[this.stats.length-2][t]??1)*100),this.loadChart(a,this.data[t].data,this.data[t].color)}loadChart(t,a,o){this.canvas=t.nativeElement,this.ctx=this.canvas.getContext("2d"),new Bt.Chart(this.ctx,{type:"line",data:{datasets:[{label:"Broadcasted",backgroundColor:"rgba(255, 99, 132, 0.0)",borderColor:o,fill:!0,data:a}]},options:{plugins:{legend:!0},responsive:!0,scales:{xAxes:[{type:"linear",position:"bottom",ticks:{userCallback:_=>q(new Date(k(_)).getMonth())+" "+new Date(k(_)).getDate()}}],yAxes:[{type:"linear",ticks:{userCallback:function(_){return _.toString()}}}]}}})}};r.\u0275fac=function(a){return new(a||r)(b(D),b(g))},r.\u0275cmp=v({type:r,selectors:[["ng-component"]],viewQuery:function(a,o){if(a&1&&(P(Nt,5),P(Qt,5),P(Gt,5),P(qt,5)),a&2){let _;E(_=I())&&(o.users_count_tmpl=_.first),E(_=I())&&(o.buyed_subs_users_count_tmpl=_.first),E(_=I())&&(o.inactive_users_count_tmpl=_.first),E(_=I())&&(o.not_prolong_subs_users_count_tmpl=_.first)}},decls:84,vars:59,consts:[["users_count_tmpl",""],["buyed_subs_users_count_tmpl",""],["inactive_users_count_tmpl",""],["not_prolong_subs_users_count_tmpl",""],[1,"main"],[1,"title-text"],[1,"container-title","position-relative"],[1,"position-relative"],[1,"right"],[1,"container-white","period-main-infos"],[1,"persentage"],[1,"current"],[1,"amount"],[1,"name"],[1,"container-title"],[1,"container-white"],[1,"from-to"],["width","340","height","350"]],template:function(a,o){a&1&&(e(0,"div",4)(1,"div",5)(2,"h1"),s(3),c(4,"translatePaid"),i()(),e(5,"div",6)(6,"p",7),s(7),c(8,"translatePaid"),e(9,"span",8),s(10),i()()(),e(11,"div",9)(12,"div",10)(13,"div",11)(14,"span",12),s(15),i(),e(16,"span"),s(17),i()(),e(18,"p",13),s(19),c(20,"translatePaid"),i()(),e(21,"div",10)(22,"div",11)(23,"span",12),s(24),i(),e(25,"span"),s(26),i()(),e(27,"p",13),s(28),c(29,"translatePaid"),i()(),e(30,"div",10)(31,"div",11)(32,"span",12),s(33),i(),e(34,"span"),s(35),i()(),e(36,"p",13),s(37),c(38,"translatePaid"),i()(),e(39,"div",10)(40,"div",11)(41,"span",12),s(42),i(),e(43,"span"),s(44),i()(),e(45,"p",13),s(46),c(47,"translatePaid"),i()()(),e(48,"div",14)(49,"p"),s(50),c(51,"translatePaid"),i()(),e(52,"div",15)(53,"span",16),s(54),i(),d(55,"canvas",17,0),i(),e(57,"div",14)(58,"p"),s(59),c(60,"translatePaid"),i()(),e(61,"div",15)(62,"span",16),s(63),i(),d(64,"canvas",17,1),i(),e(66,"div",14)(67,"p"),s(68),c(69,"translatePaid"),i()(),e(70,"div",15)(71,"span",16),s(72),i(),d(73,"canvas",17,2),i(),e(75,"div",14)(76,"p"),s(77),c(78,"translatePaid"),i()(),e(79,"div",15)(80,"span",16),s(81),i(),d(82,"canvas",17,3),i()()),a&2&&(n(3),l(m(4,39,"utm__stats_explorer_page_label")),n(4),x(" ",m(8,41,"utm__stats_explorer_page__main_stats_label")," "),n(3),x(" ",o.fromToDate," "),n(5),l(o.data.users_count.sum),n(),U(o.data.users_count.action>0?"plus":"minus"),n(),A(" ",o.data.users_count.action," (",o.data.users_count.persentage,"%) "),n(2),l(m(20,43,"ab_tests__metric_reg_count")),n(5),l(o.data.buyed_subs_users_count.sum),n(),U(o.data.buyed_subs_users_count.action>0?"plus":"minus"),n(),A(" ",o.data.buyed_subs_users_count.action," (",o.data.buyed_subs_users_count.persentage,"%) "),n(2),l(m(29,45,"utm_explorer_page_stats__blocked_bot_count")),n(5),l(o.data.inactive_users_count.sum),n(),U(o.data.inactive_users_count.action>0?"plus":"minus"),n(),A(" ",o.data.inactive_users_count.action," (",o.data.inactive_users_count.persentage,"%) "),n(2),l(m(38,47,"utm__stats_explorer_page__buy_subscription_count")),n(5),l(o.data.not_prolong_subs_users_count.sum),n(),U(o.data.not_prolong_subs_users_count.action>0?"plus":"minus"),n(),A(" ",o.data.not_prolong_subs_users_count.action," (",o.data.not_prolong_subs_users_count.persentage,"%) "),n(2),l(m(47,49,"utm_explorer_page_stats__not_prolong_subscription_count")),n(4),l(m(51,51,"utm__stats_explorer_page__registration_count")),n(4),l(o.fromToDate),n(5),l(m(60,53,"ab_tests__metric_blocked_bot_count")),n(4),l(o.fromToDate),n(5),l(m(69,55,"autowebinar_settings_page__stats_buy_subs_count")),n(4),l(o.fromToDate),n(5),l(m(78,57,"utm_explorer_page_stats__not_prolong_subscription_count")),n(4),l(o.fromToDate))},dependencies:[f],styles:['.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]{width:calc(50% - 8px);margin:10px 4px}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{color:#000;font-size:17px;font-style:normal;font-weight:600;line-height:normal;letter-spacing:-.5px;margin-right:3px}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]{font-size:12px;color:#b84041}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before{content:"+"}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{font-size:12px;color:#38913b}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#636366;font-size:13px;font-style:normal;font-weight:400;line-height:18px}']});let p=r;return p})();var Ot=tt(Et());var $t=["price"],Ut=(()=>{let r=class r{constructor(t,a){this.activatedRoute=t,this.utmService=a,this.priceData={rub:[],usd:[]}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.created_at=t.created_at,this.label=t.label,this.loadPeriod()})}loadPeriod(){var t=0;this.utmService.periods(this.label).subscribe(a=>{this.stats=a,a.forEach(o=>{o.finance_stats.length?(this.priceData.rub.push({x:o.date,y:o.finance_stats[1]?.amount}),this.priceData.usd.push({x:o.date,y:o.finance_stats[0].amount})):(this.priceData.rub.push({x:o.date,y:0}),this.priceData.usd.push({x:o.date,y:0}))}),this.fromToDate=$(a[0].date,a[a.length-1].date),this.loadChart()})}loadChart(){this.canvas=this.price.nativeElement,this.ctx=this.canvas.getContext("2d"),new Ot.Chart(this.ctx,{type:"line",data:{datasets:[{label:"USD",backgroundColor:"rgba(255, 99, 132, 0.0)",borderColor:"#3178DE",fill:!0,data:this.priceData.usd},{label:"RUB",backgroundColor:"rgba(255, 99, 132, 0.0)",borderColor:"#4CC063",fill:!0,data:this.priceData.rub}]},options:{plugins:{legend:!0},responsive:!0,scales:{xAxes:[{type:"linear",position:"bottom",ticks:{userCallback:t=>q(new Date(k(t)).getMonth())+" "+new Date(k(t)).getDate()}}],yAxes:[{type:"linear",ticks:{userCallback:function(t){return t.toString()}}}]}}})}};r.\u0275fac=function(a){return new(a||r)(b(D),b(g))},r.\u0275cmp=v({type:r,selectors:[["ng-component"]],viewQuery:function(a,o){if(a&1&&P($t,5),a&2){let _;E(_=I())&&(o.price=_.first)}},decls:10,vars:4,consts:[["price",""],[1,"main"],[1,"title-text"],[1,"container-white"],[1,"from-to"],["width","340","height","350"]],template:function(a,o){a&1&&(e(0,"div",1)(1,"div",2)(2,"h1"),s(3),c(4,"translatePaid"),i()(),e(5,"div",3)(6,"span",4),s(7),i(),d(8,"canvas",5,0),i()()),a&2&&(n(3),l(m(4,2,"utm_explorer_page_finance_stats_section")),n(4),l(o.fromToDate))},dependencies:[f],encapsulation:2});let p=r;return p})();var Qe=(()=>{let r=class r{};r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=nt({type:r}),r.\u0275inj=it({imports:[mt.forChild([{path:"",component:It},{path:"create",component:Mt},{path:"view/:created_at/:label",component:kt},{path:"view-statistica/:created_at/:label",component:Tt},{path:"view-statistica-price/:created_at/:label",component:Ut}]),wt,yt,pt,H,z,Pt]});let p=r;return p})();export{Qe as UtmModule};
