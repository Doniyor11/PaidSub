import{S as k}from"./chunk-KOPPRX7Z.js";import{a as Z}from"./chunk-VSJ4LOTF.js";import{b as q}from"./chunk-2COSUHQW.js";import{b as ut,c as z,d as wt}from"./chunk-YOG2K7P2.js";import{a as dt}from"./chunk-5CAY3D4N.js";import{n as yt,o as Pt}from"./chunk-KNFDVZSQ.js";import{c as _t,e as j,g as ft,h as ht,i as vt,k as K,m as gt,o as bt,q as xt,t as Ct,u as St}from"./chunk-S7DGSHZ6.js";import{b as H}from"./chunk-TRRUAURR.js";import{$a as st,Ab as P,Cb as m,Db as c,Ia as V,Ka as _,Oa as U,P as tt,Pa as nt,Q as et,Ra as N,Sa as at,Ta as rt,U as h,Ua as ot,Va as e,Wa as n,Wb as lt,Xa as u,Z as v,Zb as pt,_ as it,cb as f,db as E,fa as T,fc as D,ga as F,ha as y,hc as G,ia as I,ic as $,jb as O,kc as mt,lc as w,mc as ct,oc as b,pb as s,qb as p,rb as C,sb as A,xa as i,ya as g,zb as L}from"./chunk-ZB6I7ORA.js";import{a as X,b as Y}from"./chunk-YHOLSLLF.js";var x=(()=>{let a=class a{constructor(){this.http=h(pt),this.resourceUrl=ct("marketing/utm")}utms(){return this.http.get(this.resourceUrl)}create(t){return this.http.post(this.resourceUrl,t)}detail(t,r){return this.http.get(`${this.resourceUrl}/${r}/stats/${t}`)}periods(t,r){return this.http.get(`${this.resourceUrl}/${t}/period_stats`,{params:r})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`)}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=tt({token:a,factory:a.\u0275fac,providedIn:"root"});let l=a;return l})();var Ut=l=>({path:l}),Ot=l=>({id:l});function At(l,a){if(l&1&&(e(0,"div",7)(1,"div",9)(2,"p"),s(3),n(),u(4,"span",10),n(),e(5,"span",11),y(),e(6,"svg",12),u(7,"path",13),n()()()),l&2){let d=a.$implicit;O("routerLink","view/",d.created_at,"/",d.utm,"/",d.name,""),i(3),p(d.name),i(),_("params",P(6,Ot,d.utm))}}var It=(()=>{let a=class a{constructor(){this.utmService=h(x),this.backButton=h(w),this.titles={data:"utm_exists_page_label",noData:"utm_not_exists_page_label"},this.description={data:"utm_exists_page_label_substring",noData:"utm_not_exists_page_label_substring"},this.images={noData:"assets/Enot web/enot_thinking.json",data:"assets/Enot web/enot_business.json"},this.mode="noData"}ngOnInit(){this.backButton.getButton("/marketing/menu"),this.utmService.utms().subscribe(t=>{this.utms=t,t.length>0&&(this.mode="data")})}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=v({type:a,selectors:[["ng-component"]],decls:20,vars:15,consts:[[1,"title"],[3,"options"],["routerLink","create/",1,"create"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 20 20","fill","none"],["cx","10","cy","10","r","10","fill","white"],["x","9","y","5","width","2","height","10","rx","1","fill","#007AFF"],["x","15","y","9","width","2","height","10","rx","1","transform","rotate(90 15 9)","fill","#007AFF"],[1,"container-white","card","m-4",3,"routerLink"],[1,"bottom"],[1,"infos"],["translatePaid","utm_element_id",3,"params"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(r,o){r&1&&(e(0,"div")(1,"div",0),u(2,"ng-lottie",1),e(3,"h1"),s(4),m(5,"translatePaid"),n(),e(6,"p"),s(7),m(8,"translatePaid"),n()(),e(9,"button",2),y(),e(10,"svg",3),u(11,"circle",4)(12,"rect",5)(13,"rect",6),n(),s(14),m(15,"translatePaid"),n(),rt(16,At,8,8,"div",7,at),I(),e(18,"div",8),u(19,"alert-notify"),n()()),r&2&&(nt("main ",o.mode,""),i(2),_("options",P(13,Ut,o.images[o.mode])),i(2),p(c(5,7,o.titles[o.mode])),i(3),p(c(8,9,o.description[o.mode])),i(7),C(" ",c(15,11,"utm_create")," "),i(2),ot(o.utms))},dependencies:[$,q,dt,z,b],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.main[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]{width:calc(var(--width) + 20px)}"]});let l=a;return l})();var Et=(()=>{let a=class a{constructor(){this.utmService=h(x),this.router=h(G),this.notificationService=h(ut),this.editForm=new vt({name:new K(null,[j.required,j.minLength(1),j.maxLength(32)]),label:new K(null,[j.required])})}save(){if(/[а-яё]/i.test(this.editForm.controls.label.value)){this.notificationService.createNotification("notify__utm_bad_text");return}else if(this.editForm.controls.name.invalid){this.notificationService.createNotification("notify__utm_name_is_required");return}else if(this.editForm.controls.label.invalid){this.notificationService.createNotification("notify__utm_id_is_required");return}this.utmService.create(this.editForm.getRawValue()).subscribe(()=>{this.notificationService.createNotification("notify__utm_created"),this.router.navigate(["/marketing/utm"])})}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=v({type:a,selectors:[["ng-component"]],decls:19,vars:11,consts:[[1,"main",3,"ngSubmit","formGroup"],[1,"title-text"],[1,"container-white"],["placeholder","utm_create_form__name_textbox",3,"container"],[1,"line"],[1,"position-relative"],["type","text","formControlName","label","placeholder","\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"],[1,"down-description"],[1,"bottom"],[1,"down-button"],["type","submit"]],template:function(r,o){r&1&&(e(0,"form",0),f("ngSubmit",function(){return o.save()}),e(1,"div",1)(2,"h1"),s(3),m(4,"translatePaid"),n()(),e(5,"div",2),u(6,"name",3)(7,"div",4),e(8,"div",5),u(9,"input",6),n()(),e(10,"p",7),s(11),m(12,"translatePaid"),n(),e(13,"div",8),u(14,"alert-notify"),e(15,"div",9)(16,"button",10),s(17),m(18,"translatePaid"),n()()()()),r&2&&(_("formGroup",o.editForm),i(3),p(c(4,5,"utm_create_form_label")),i(3),_("container",!1),i(5),C(" ",c(12,7,"utm_create_form__substring")," "),i(6),C(" ",c(18,9,"ab_tests__settings__msg_save")," "))},dependencies:[gt,_t,ft,ht,bt,xt,Z,z,b],encapsulation:2});let l=a;return l})();function Lt(l,a){if(l&1){let d=st();e(0,"div",1),f("click",function(){T(d);let r=E();return F(r.changeDeleteAlert())}),n(),e(1,"div",2)(2,"span",3),f("click",function(){T(d);let r=E();return F(r.changeDeleteAlert())}),y(),e(3,"svg",4),u(4,"path",5),n()(),I(),e(5,"h1"),s(6),m(7,"translatePaid"),n(),e(8,"p"),s(9),m(10,"translatePaid"),n(),e(11,"button",0),f("click",function(){T(d);let r=E();return F(r.deleteMailing())}),s(12),m(13,"translatePaid"),n(),e(14,"button",6),f("click",function(){T(d);let r=E();return F(r.changeDeleteAlert())}),s(15),m(16,"translatePaid"),n()()}l&2&&(_("@alertBackgroundAnimation",void 0),i(),_("@alertAnimation",void 0),i(5),p(c(7,6,"utm_drop_page_label")),i(3),p(c(10,8,"resource_explorer__drop_resource_label_substring")),i(3),p(c(13,10,"utm_explorer_page_drop_utm")),i(3),p(c(16,12,"utm_drop_page__cancel_drop")))}var Mt=(()=>{let a=class a{constructor(){this.utmService=h(x),this.router=h(G),this.openModal=!1}changeDeleteAlert(){this.openModal=!this.openModal}deleteMailing(){this.changeDeleteAlert(),this.utmService.delete(this.label).subscribe(()=>{this.router.navigate(["/marketing/utm/"])})}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=v({type:a,selectors:[["utm-delete"]],inputs:{label:"label"},decls:4,vars:4,consts:[[1,"delete","container-white",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"cancel","container-white","primary",3,"click"]],template:function(r,o){r&1&&(e(0,"button",0),f("click",function(){return o.changeDeleteAlert()}),s(1),m(2,"translatePaid"),n(),V(3,Lt,17,14)),r&2&&(i(),p(c(2,2,"utm_explorer_page_drop_utm")),i(2),N(3,o.openModal?3:-1))},dependencies:[b],encapsulation:2,data:{animation:[yt,Pt]}});let l=a;return l})();function Rt(l,a){if(l&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),s(3),n()(),e(4,"div",2)(5,"p"),s(6),m(7,"translatePaid"),n()(),e(8,"div",3)(9,"div",4)(10,"p"),s(11),m(12,"translatePaid"),n(),e(13,"span",5),s(14),n()(),u(15,"div",6),e(16,"div",4)(17,"p"),s(18),m(19,"translatePaid"),n(),e(20,"span",5),s(21),n()(),u(22,"div",6),e(23,"div",4)(24,"p"),s(25),m(26,"translatePaid"),n(),e(27,"span",5),s(28),n()(),u(29,"div",6),e(30,"div",4)(31,"p"),s(32),m(33,"translatePaid"),n(),e(34,"span",5),s(35),n()(),u(36,"div",6),e(37,"div",7)(38,"p"),s(39,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"),n(),e(40,"span",5),y(),e(41,"svg",8),u(42,"path",9),n()()()(),I(),e(43,"div",2)(44,"p"),s(45),m(46,"translatePaid"),n()(),e(47,"div",3)(48,"div",4)(49,"p"),s(50,"RUB"),n(),e(51,"span",5),s(52),n()(),u(53,"div",6),e(54,"div",4)(55,"p"),s(56,"USD"),n(),e(57,"span",5),s(58),n()(),u(59,"div",6),e(60,"div",7)(61,"p"),s(62,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"),n(),e(63,"span",5),y(),e(64,"svg",8),u(65,"path",9),n()()()(),I(),u(66,"utm-delete",10),n()),l&2){let d=E();i(3),p(d.name),i(3),C(" ",c(7,22,"utm_explorer_page_stats_section")," "),i(5),p(c(12,24,"utm__stats_explorer_page__registration_count")),i(3),p(d.utm.users_count),i(4),p(c(19,26,"ab_tests__metric_blocked_bot_count")),i(3),p(d.utm.inactive_users_count),i(4),p(c(26,28,"autowebinar_settings_page__stats_buy_subs_count")),i(3),p(d.utm.buyed_subs_users_count),i(4),p(c(33,30,"utm_explorer_page_stats__not_prolong_subscription_count")),i(3),p(d.utm.not_prolong_subs_users_count),i(2),O("routerLink","/marketing/utm/view-statistica/",d.created_at,"/",d.label,"/",d.name,""),i(8),C(" ",c(46,32,"utm_explorer_page_finance_stats_section")," "),i(7),p(d.utm.finance_stats[1].amount),i(6),p(d.utm.finance_stats[0].amount),i(2),O("routerLink","/marketing/utm/view-statistica-price/",d.created_at,"/",d.label,"/",d.name,""),i(6),_("label",d.label)}}var Dt=(()=>{let a=class a{constructor(t,r,o){this.activatedRoute=t,this.utmService=r,this.backButton=o}ngOnInit(){this.backButton.getButton("/marketing/utm"),this.activatedRoute.params.subscribe(t=>{this.created_at=t.created_at,this.label=t.label,this.name=t.name,this.loadUtm()})}loadUtm(){this.utmService.detail(this.created_at,this.label).subscribe(t=>{this.utm=Y(X({},t),{finance_stats:t.finance_stats.length?t.finance_stats:[{amount:0,currency:"RUB"},{amount:0,currency:"USD"}]})})}};a.\u0275fac=function(r){return new(r||a)(g(D),g(x),g(w))},a.\u0275cmp=v({type:a,selectors:[["ng-component"]],decls:1,vars:1,consts:[[1,"main"],[1,"title-text"],[1,"container-title"],[1,"container-white"],[1,"position-relative"],[1,"right"],[1,"line"],[1,"position-relative","primary",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#007AFF"],[3,"label"]],template:function(r,o){r&1&&V(0,Rt,67,34,"div",0),r&2&&N(0,o.utm?0:-1)},dependencies:[$,Mt,b],encapsulation:2});let l=a;return l})();var Nt=()=>({column:"users_count",color:"#3178DE"}),J=l=>[l],Gt=()=>({column:"buyed_subs_users_count",color:"#B84041"}),$t=()=>({column:"inactive_users_count",color:"#4CC063"}),Ht=()=>({column:"not_prolong_subs_users_count",color:"#F7931A"}),kt=(()=>{let a=class a{constructor(t,r,o){this.activatedRoute=t,this.utmService=r,this.backButton=o,this.data={users_count:{sum:0,action:0,persentage:0,color:"#3178DE"},inactive_users_count:{sum:0,action:0,persentage:0,color:"#B84041"},buyed_subs_users_count:{sum:0,action:0,persentage:0,color:"#4CC063"},not_prolong_subs_users_count:{sum:0,action:0,persentage:0,color:"#F7931A"}},this.lastDate=new Date().getTime()}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.created_at=t.created_at,this.label=t.label,this.name=t.name,this.loadPeriods(),this.backButton.getButton("/marketing/utm/view/"+this.created_at+"/"+this.label+"/"+this.name)})}loadPeriods(){this.utmService.periods(this.label,this.params).subscribe(t=>{this.stats=t,this.fromToDate=H(t[0].date,t[t.length-1].date),this.calculateInfos("users_count"),this.calculateInfos("inactive_users_count"),this.calculateInfos("buyed_subs_users_count"),this.calculateInfos("not_prolong_subs_users_count")})}calculateInfos(t){this.stats.forEach(r=>{this.data[t].sum+=r[t]}),this.stats.length>1&&(this.data[t].action=this.stats[this.stats.length-1][t]-this.stats[this.stats.length-2][t],this.data[t].persentage=Math.floor((this.stats[this.stats.length-1][t]??1/this.stats[this.stats.length-2][t]??1)*100))}get params(){return{start:this.firstDate,end:this.lastDate}}set params(t){this.firstDate=t.start,this.lastDate=t.end,this.loadPeriods()}};a.\u0275fac=function(r){return new(r||a)(g(D),g(x),g(w))},a.\u0275cmp=v({type:a,selectors:[["ng-component"]],decls:72,vars:83,consts:[[1,"main"],[1,"title-text"],[1,"container-title","position-relative"],[1,"position-relative"],[1,"right"],[1,"container-white","period-main-infos"],[1,"persentage"],[1,"current"],[1,"amount"],[1,"name"],[1,"container-title"],[1,"container-white"],[3,"params","dateIncrease","dayType","statistics","fields"]],template:function(r,o){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),s(3),m(4,"translatePaid"),n()(),e(5,"div",2)(6,"p",3),s(7),m(8,"translatePaid"),e(9,"span",4),s(10),n()()(),e(11,"div",5)(12,"div",6)(13,"div",7)(14,"span",8),s(15),n(),e(16,"span"),s(17),n()(),e(18,"p",9),s(19),m(20,"translatePaid"),n()(),e(21,"div",6)(22,"div",7)(23,"span",8),s(24),n(),e(25,"span"),s(26),n()(),e(27,"p",9),s(28),m(29,"translatePaid"),n()(),e(30,"div",6)(31,"div",7)(32,"span",8),s(33),n(),e(34,"span"),s(35),n()(),e(36,"p",9),s(37),m(38,"translatePaid"),n()(),e(39,"div",6)(40,"div",7)(41,"span",8),s(42),n(),e(43,"span"),s(44),n()(),e(45,"p",9),s(46),m(47,"translatePaid"),n()()(),e(48,"div",10)(49,"p"),s(50),m(51,"translatePaid"),n()(),e(52,"div",11)(53,"statistica-grafig",12),f("params",function(S){return o.params=S}),n()(),e(54,"div",10)(55,"p"),s(56),m(57,"translatePaid"),n()(),e(58,"div",11)(59,"statistica-grafig",12),f("params",function(S){return o.params=S}),n()(),e(60,"div",10)(61,"p"),s(62),m(63,"translatePaid"),n()(),e(64,"div",11)(65,"statistica-grafig",12),f("params",function(S){return o.params=S}),n()(),e(66,"div",10)(67,"p"),s(68),m(69,"translatePaid"),n()(),e(70,"div",11)(71,"statistica-grafig",12),f("params",function(S){return o.params=S}),n()()()),r&2&&(i(3),p(c(4,51,"utm__stats_explorer_page_label")),i(4),C(" ",c(8,53,"utm__stats_explorer_page__main_stats_label")," "),i(3),C(" ",o.fromToDate," "),i(5),p(o.data.users_count.sum),i(),U(o.data.users_count.action>0?"plus":"minus"),i(),A(" ",o.data.users_count.action," (",o.data.users_count.persentage,"%) "),i(2),p(c(20,55,"ab_tests__metric_reg_count")),i(5),p(o.data.buyed_subs_users_count.sum),i(),U(o.data.buyed_subs_users_count.action>0?"plus":"minus"),i(),A(" ",o.data.buyed_subs_users_count.action," (",o.data.buyed_subs_users_count.persentage,"%) "),i(2),p(c(29,57,"utm_explorer_page_stats__blocked_bot_count")),i(5),p(o.data.inactive_users_count.sum),i(),U(o.data.inactive_users_count.action>0?"plus":"minus"),i(),A(" ",o.data.inactive_users_count.action," (",o.data.inactive_users_count.persentage,"%) "),i(2),p(c(38,59,"utm__stats_explorer_page__buy_subscription_count")),i(5),p(o.data.not_prolong_subs_users_count.sum),i(),U(o.data.not_prolong_subs_users_count.action>0?"plus":"minus"),i(),A(" ",o.data.not_prolong_subs_users_count.action," (",o.data.not_prolong_subs_users_count.persentage,"%) "),i(2),p(c(47,61,"utm_explorer_page_stats__not_prolong_subscription_count")),i(4),p(c(51,63,"utm__stats_explorer_page__registration_count")),i(3),_("dateIncrease",!0)("dayType",o.dayType)("statistics",o.stats)("fields",P(72,J,L(71,Nt))),i(3),p(c(57,65,"ab_tests__metric_blocked_bot_count")),i(3),_("dateIncrease",!0)("dayType",o.dayType)("statistics",o.stats)("fields",P(75,J,L(74,Gt))),i(3),p(c(63,67,"autowebinar_settings_page__stats_buy_subs_count")),i(3),_("dateIncrease",!0)("dayType",o.dayType)("statistics",o.stats)("fields",P(78,J,L(77,$t))),i(3),p(c(69,69,"utm_explorer_page_stats__not_prolong_subscription_count")),i(3),_("dateIncrease",!0)("dayType",o.dayType)("statistics",o.stats)("fields",P(81,J,L(80,Ht))))},dependencies:[k,b],styles:['.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]{width:calc(50% - 8px);margin:10px 4px}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{color:#000;font-size:17px;font-style:normal;font-weight:600;line-height:normal;letter-spacing:-.5px;margin-right:3px}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]{font-size:12px;color:#b84041}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before{content:"+"}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{font-size:12px;color:#38913b}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#636366;font-size:13px;font-style:normal;font-weight:400;line-height:18px}']});let l=a;return l})();var Tt=(()=>{let a=class a{constructor(t,r,o){this.activatedRoute=t,this.utmService=r,this.backButton=o,this.fields=[{label:"USD",column:"usd",color:"#4CC063"},{label:"RUB",column:"rub",color:"#3178DE"}],this.lastDate=new Date().getTime()}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.created_at=t.created_at,this.label=t.label,this.name=t.name,this.loadPeriod(),this.backButton.getButton("/marketing/utm/view/"+this.created_at+"/"+this.label+"/"+this.name)})}loadPeriod(){this.utmService.periods(this.label,this.params).subscribe(t=>{this.stats=t,this.stats.forEach(r=>{r.finance_stats.length?(r.rub=r.finance_stats[1]?.amount,r.usd=r.finance_stats[0].amount):(r.rub=0,r.usd=0)}),this.fromToDate=H(t[0].date,t[t.length-1].date)})}get params(){return{start:this.firstDate,end:this.lastDate}}set params(t){this.firstDate=t.start,this.lastDate=t.end,this.loadPeriod()}};a.\u0275fac=function(r){return new(r||a)(g(D),g(x),g(w))},a.\u0275cmp=v({type:a,selectors:[["ng-component"]],decls:7,vars:6,consts:[[1,"main"],[1,"title-text"],[1,"container-white"],[3,"params","dateIncrease","fields","statistics"]],template:function(r,o){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),s(3),m(4,"translatePaid"),n()(),e(5,"div",2)(6,"statistica-grafig",3),f("params",function(S){return o.params=S}),n()()()),r&2&&(i(3),p(c(4,4,"utm_explorer_page_finance_stats_section")),i(3),_("dateIncrease",!0)("fields",o.fields)("statistics",o.stats))},dependencies:[k,b],encapsulation:2});let l=a;return l})();var Ne=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=it({type:a}),a.\u0275inj=et({imports:[mt.forChild([{path:"",component:It},{path:"create",component:Et},{path:"view/:created_at/:label/:name",component:Dt},{path:"view-statistica/:created_at/:label/:name",component:kt},{path:"view-statistica-price/:created_at/:label/:name",component:Tt}]),St,Ct,lt,Z,q,wt,k]});let l=a;return l})();export{Ne as UtmModule};
