import{a as pt}from"./chunk-7I5TBVU4.js";import{a as L,b as V}from"./chunk-PHZ3STRR.js";import{a as R}from"./chunk-LBBNVGGO.js";import{a as nt}from"./chunk-INW2X4BE.js";import{A as H,B as r,C as _,Ca as ut,E as k,Ea as B,F as C,G as I,Ga as ot,H as Z,Ha as at,Ia as rt,J as P,Ja as j,K as J,L as K,La as st,M as W,N as e,Na as lt,O as i,P as l,Pa as mt,Q as X,R as g,S as E,Sa as ct,T as U,Ta as dt,U as x,V as S,W as b,X as o,Y as m,Z as Y,_ as A,e as N,h as $,i as q,k as v,m as p,n as z,pa as tt,qa as et,t as M,u as D,ua as y,v as f,w as F,wa as T,xa as O,za as it}from"./chunk-3QXEDT4S.js";var h=(()=>{let u=class u{constructor(){this.http=v(et),this.resourceUrl=nt("marketing/utm")}utms(){return this.http.get(this.resourceUrl)}create(t){return this.http.post(this.resourceUrl,t)}detail(t){return this.http.get(`${this.resourceUrl}/${t}`)}period(t){return this.http.get(`${this.resourceUrl}/${t}/stats`)}periods(t){return this.http.get(`${this.resourceUrl}/${t}/period_stats`)}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`)}};u.\u0275fac=function(n){return new(n||u)},u.\u0275prov=$({token:u,factory:u.\u0275fac,providedIn:"root"});let s=u;return s})();function St(s,u){if(s&1&&(e(0,"div",7)(1,"div",8)(2,"p"),o(3),i(),e(4,"span"),o(5),i()(),e(6,"span",9),f(),e(7,"svg",10),l(8,"path",11),i()()()),s&2){let c=u.$implicit;U("routerLink","view/",c.id,"/"),r(3),m(c.name),r(2),Y("\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440: ",c.utm,"")}}var ht=(()=>{let u=class u{constructor(){this.utmService=v(h),this.titles={data:"\u0412\u0430\u0448\u0438 UTM-\u043C\u0435\u0442\u043A\u0438",noData:"UTM-\u043C\u0435\u0442\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442\u0443.."},this.description={data:"UTM-\u043C\u0435\u0442\u043A\u0438 \u044D\u0442\u043E \u0442\u0435\u0433\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0441\u0441\u044B\u043B\u043A\u0443. \u041E\u043D\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043A\u0430\u0436\u0434\u043E\u043C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0435 \u0442\u0440\u0430\u0444\u0438\u043A\u0430.",noData:"\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0438\u0436\u0435"},this.images={noData:"assets/images/image 11.svg",data:"assets/images/image 9.svg"},this.mode="noData"}ngOnInit(){this.utmService.utms().subscribe(t=>{this.utms=t,t.length>0&&(this.mode="data")})}};u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=p({type:u,selectors:[["ng-component"]],decls:15,vars:6,consts:[[1,"title"],["alt","",3,"src"],["routerLink","create/",1,"create"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 20 20","fill","none"],["cx","10","cy","10","r","10","fill","white"],["x","9","y","5","width","2","height","10","rx","1","fill","#007AFF"],["x","15","y","9","width","2","height","10","rx","1","transform","rotate(90 15 9)","fill","#007AFF"],[1,"container-white","card",3,"routerLink"],[1,"infos"],[1,"right"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(n,a){n&1&&(e(0,"div")(1,"div",0),l(2,"img",1),e(3,"h1"),o(4),i(),e(5,"p"),o(6),i()(),e(7,"button",2),f(),e(8,"svg",3),l(9,"circle",4)(10,"rect",5)(11,"rect",6),i(),o(12," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0440\u0438\u0444 "),i(),K(13,St,9,4,"div",7,J),i()),n&2&&(Z("main ",a.mode,""),r(2),C("src",a.images[a.mode],H),r(2),m(a.titles[a.mode]),r(2),m(a.description[a.mode]),r(7),W(a.utms))},dependencies:[O],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.main[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]{width:calc(var(--width) + 20px)}"]});let s=u;return s})();var vt=(()=>{let u=class u{constructor(){this.utmService=v(h),this.router=v(T),this.editForm=new rt({name:new j("",[B.required,B.minLength(1),B.maxLength(32)]),utm:new j("")})}save(){this.utmService.create(this.editForm.getRawValue()).subscribe(()=>{this.router.navigate(["/marketing/utm"])})}};u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=p({type:u,selectors:[["ng-component"]],decls:14,vars:2,consts:[[1,"main",3,"ngSubmit","formGroup"],[1,"title-text"],[1,"container-white"],["placeholder","UTM",3,"container"],[1,"line"],[1,"position-relative"],["type","text","formControlName","utm","placeholder","\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"],[1,"down-description"],[1,"down-button"],["type","submit"]],template:function(n,a){n&1&&(e(0,"form",0),g("ngSubmit",function(){return a.save()}),e(1,"div",1)(2,"h1"),o(3,"\u041D\u043E\u0432\u0430\u044F UTM-\u043C\u0435\u0442\u043A\u0430"),i()(),e(4,"div",2),l(5,"name",3)(6,"div",4),e(7,"div",5),l(8,"input",6),i()(),e(9,"p",7),o(10," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 UTM-\u043C\u0435\u0442\u043A\u0438 (\u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435) "),i(),e(11,"div",8)(12,"button",9),o(13," \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C "),i()()()),n&2&&(C("formGroup",a.editForm),r(5),C("container",!1))},dependencies:[st,ut,ot,at,lt,mt,R],encapsulation:2});let s=u;return s})();function bt(s,u){if(s&1){let c=X();e(0,"div",1),g("click",function(){M(c);let n=E();return D(n.changeDeleteAlert())}),i(),e(1,"div",2)(2,"span",3),g("click",function(){M(c);let n=E();return D(n.changeDeleteAlert())}),f(),e(3,"svg",4),l(4,"path",5),i()(),F(),e(5,"h1"),o(6,"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C UTM-\u043C\u0435\u0442\u043A\u0443?"),i(),e(7,"p"),o(8,"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C\u0441\u044F"),i(),e(9,"button",0),g("click",function(){M(c);let n=E();return D(n.deleteMailing())}),o(10,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C UTM-\u043C\u0435\u0442\u043A\u0443"),i(),e(11,"button",6),g("click",function(){M(c);let n=E();return D(n.changeDeleteAlert())}),o(12,"\u041E\u0442\u043C\u0435\u043D\u0430"),i()()}}var _t=(()=>{let u=class u{constructor(){this.utmService=v(h),this.router=v(T),this.openModal=!1}changeDeleteAlert(){this.openModal=!this.openModal}deleteMailing(){this.changeDeleteAlert(),this.utmService.delete(this.id).subscribe(()=>{this.router.navigate(["/marketing/utm/"])})}};u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=p({type:u,selectors:[["utm-delete"]],inputs:{id:"id"},decls:3,vars:1,consts:[[1,"delete","container-white",3,"click"],[1,"background",3,"click"],[1,"alert"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"cancel","container-white","primary",3,"click"]],template:function(n,a){n&1&&(e(0,"button",0),g("click",function(){return a.changeDeleteAlert()}),o(1,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C UTM-\u043C\u0435\u0442\u043A\u0443"),i(),k(2,bt,13,0)),n&2&&(r(2),P(2,a.openModal?2:-1))},encapsulation:2});let s=u;return s})();function yt(s,u){if(s&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),o(3),i()(),e(4,"div",2)(5,"p"),o(6," \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),i()(),e(7,"div",3)(8,"div",4)(9,"p"),o(10,"\u0412\u0441\u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432"),i(),e(11,"span",5),o(12),i()(),l(13,"div",6),e(14,"div",4)(15,"p"),o(16,"\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043E\u0442\u0430"),i(),e(17,"span",5),o(18),i()(),l(19,"div",6),e(20,"div",4)(21,"p"),o(22,"\u041A\u0443\u043F\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),i(),e(23,"span",5),o(24),i()(),l(25,"div",6),e(26,"div",4)(27,"p"),o(28,"\u041D\u0435 \u043F\u0440\u043E\u0434\u043B\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),i(),e(29,"span",5),o(30),i()(),l(31,"div",6),e(32,"div",7)(33,"p"),o(34,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"),i(),e(35,"span",5),f(),e(36,"svg",8),l(37,"path",9),i()()()(),F(),e(38,"div",2)(39,"p"),o(40," \u0414\u043E\u0445\u043E\u0434 \u0441 \u043F\u0440\u043E\u0434\u0430\u0436 "),i()(),e(41,"div",3)(42,"div",4)(43,"p"),o(44,"RUB"),i(),e(45,"span",5),o(46),i()(),l(47,"div",6),e(48,"div",4)(49,"p"),o(50,"USD"),i(),e(51,"span",5),o(52),i()(),l(53,"div",6),e(54,"div",7)(55,"p"),o(56,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"),i(),e(57,"span",5),f(),e(58,"svg",8),l(59,"path",9),i()()()(),F(),l(60,"utm-delete",10),i()),s&2){let c=E();r(3),m(c.utm.name),r(9),m(c.stats.users_count),r(6),m(c.stats.inactive_users_count),r(6),m(c.stats.buyed_subs_users_count),r(6),m(c.stats.not_prolong_subs_users_count),r(2),U("routerLink","../../view-statistica/",c.utmId,""),r(14),m(c.stats.finance_stats[1].amount),r(6),m(c.stats.finance_stats[0].amount),r(2),U("routerLink","../../view-statistica-price/",c.utmId,""),r(6),C("id",c.utmId)}}var ft=(()=>{let u=class u{constructor(t,n){this.activatedRoute=t,this.utmService=n}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.utmId=t.id,this.loadUtm()})}loadUtm(){this.utmService.detail(this.utmId).subscribe(t=>{this.utm=t,this.loadPeriod()})}loadPeriod(){this.utmService.period(this.utm.name).subscribe(t=>{this.stats=t})}};u.\u0275fac=function(n){return new(n||u)(_(y),_(h))},u.\u0275cmp=p({type:u,selectors:[["ng-component"]],decls:1,vars:1,consts:[[1,"main"],[1,"title-text"],[1,"container-title"],[1,"container-white"],[1,"position-relative"],[1,"right"],[1,"line"],[1,"position-relative","primary",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","7","height","12","viewBox","0 0 7 12","fill","none"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#007AFF"],[3,"id"]],template:function(n,a){n&1&&k(0,yt,61,12,"div",0),n&2&&P(0,a.utm&&a.stats?0:-1)},dependencies:[O,_t],encapsulation:2});let s=u;return s})();var gt=N(pt());var Mt=["users_count_tmpl"],Dt=["buyed_subs_users_count_tmpl"],Ft=["inactive_users_count_tmpl"],It=["not_prolong_subs_users_count_tmpl"],Ct=(()=>{let u=class u{constructor(t,n){this.activatedRoute=t,this.utmService=n,this.data={users_count:{data:[],sum:0,action:0,persentage:0,color:"#3178DE"},inactive_users_count:{data:[],sum:0,action:0,persentage:0,color:"#B84041"},buyed_subs_users_count:{data:[],sum:0,action:0,persentage:0,color:"#4CC063"},not_prolong_subs_users_count:{data:[],sum:0,action:0,persentage:0,color:"#F7931A"}}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.utmId=t.id,this.loadUtm()})}loadUtm(){this.utmService.detail(this.utmId).subscribe(t=>{this.utm=t,this.loadPeriods()})}loadPeriods(){this.utmService.periods(this.utm.name).subscribe(t=>{this.stats=t,this.fromToDate=V(t[0].date,t[t.length-1].date),this.calculateInfos("users_count",this.users_count_tmpl),this.calculateInfos("inactive_users_count",this.inactive_users_count_tmpl),this.calculateInfos("buyed_subs_users_count",this.buyed_subs_users_count_tmpl),this.calculateInfos("not_prolong_subs_users_count",this.not_prolong_subs_users_count_tmpl)})}calculateInfos(t,n){this.stats.forEach(a=>{this.data[t].data.push({x:a.date,y:a[t]}),this.data[t].sum+=a[t]}),this.data[t].action=this.stats[this.stats.length-1][t]-this.stats[this.stats.length-2][t],this.data[t].persentage=Math.floor(this.stats[this.stats.length-1][t]/this.stats[this.stats.length-2][t]*100),this.loadChart(n,this.data[t].data,this.data[t].color)}loadChart(t,n,a){this.canvas=t.nativeElement,this.ctx=this.canvas.getContext("2d"),new gt.Chart(this.ctx,{type:"line",data:{datasets:[{label:"Broadcasted",backgroundColor:"rgba(255, 99, 132, 0.0)",borderColor:a,fill:!0,data:n}]},options:{plugins:{legend:!1},responsive:!0,scales:{xAxes:[{type:"linear",position:"bottom",ticks:{userCallback:d=>L(new Date(d).getMonth())+" "+new Date(d).getDate()}}],yAxes:[{type:"linear",ticks:{userCallback:function(d){return d.toString()}}}]}}})}};u.\u0275fac=function(n){return new(n||u)(_(y),_(h))},u.\u0275cmp=p({type:u,selectors:[["ng-component"]],viewQuery:function(n,a){if(n&1&&(x(Mt,5),x(Dt,5),x(Ft,5),x(It,5)),n&2){let d;S(d=b())&&(a.users_count_tmpl=d.first),S(d=b())&&(a.buyed_subs_users_count_tmpl=d.first),S(d=b())&&(a.inactive_users_count_tmpl=d.first),S(d=b())&&(a.not_prolong_subs_users_count_tmpl=d.first)}},decls:74,vars:28,consts:[["users_count_tmpl",""],["buyed_subs_users_count_tmpl",""],["inactive_users_count_tmpl",""],["not_prolong_subs_users_count_tmpl",""],[1,"main"],[1,"title-text"],[1,"container-title","position-relative"],[1,"position-relative"],[1,"right"],[1,"container-white","period-main-infos"],[1,"persentage"],[1,"current"],[1,"amount"],[1,"name"],[1,"container-title"],[1,"container-white"],[1,"from-to"],["width","340","height","350"]],template:function(n,a){n&1&&(e(0,"div",4)(1,"div",5)(2,"h1"),o(3,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"),i()(),e(4,"div",6)(5,"p",7),o(6," \u043E\u0431\u0449\u0430\u044F "),e(7,"span",8),o(8," 23 \u0430\u043F\u0440. 2023\u0433. - 30 \u043C\u0430\u044F 2023 \u0433. "),i()()(),e(9,"div",9)(10,"div",10)(11,"div",11)(12,"span",12),o(13),i(),e(14,"span"),o(15),i()(),e(16,"p",13),o(17,"\u0412\u0441\u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432"),i()(),e(18,"div",10)(19,"div",11)(20,"span",12),o(21),i(),e(22,"span"),o(23),i()(),e(24,"p",13),o(25,"\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043E\u0442\u0430"),i()(),e(26,"div",10)(27,"div",11)(28,"span",12),o(29),i(),e(30,"span"),o(31),i()(),e(32,"p",13),o(33,"\u041A\u0443\u043F\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),i()(),e(34,"div",10)(35,"div",11)(36,"span",12),o(37),i(),e(38,"span"),o(39),i()(),e(40,"p",13),o(41,"\u041D\u0435 \u043F\u0440\u043E\u0434\u043B\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),i()()(),e(42,"div",14)(43,"p"),o(44,"\u0412\u0441\u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432"),i()(),e(45,"div",15)(46,"span",16),o(47),i(),l(48,"canvas",17,0),i(),e(50,"div",14)(51,"p"),o(52,"\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043E\u0442\u0430"),i()(),e(53,"div",15)(54,"span",16),o(55),i(),l(56,"canvas",17,1),i(),e(58,"div",14)(59,"p"),o(60,"\u041A\u0443\u043F\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),i()(),e(61,"div",15)(62,"span",16),o(63),i(),l(64,"canvas",17,2),i(),e(66,"div",14)(67,"p"),o(68,"\u041D\u0435 \u043F\u0440\u043E\u0434\u043B\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),i()(),e(69,"div",15)(70,"span",16),o(71),i(),l(72,"canvas",17,3),i()()),n&2&&(r(13),m(a.data.users_count.sum),r(),I(a.data.users_count.action>0?"plus":"minus"),r(),A(" ",a.data.users_count.action," (",a.data.users_count.persentage,"%) "),r(6),m(a.data.buyed_subs_users_count.sum),r(),I(a.data.buyed_subs_users_count.action>0?"plus":"minus"),r(),A(" ",a.data.buyed_subs_users_count.action," (",a.data.buyed_subs_users_count.persentage,"%) "),r(6),m(a.data.inactive_users_count.sum),r(),I(a.data.inactive_users_count.action>0?"plus":"minus"),r(),A(" ",a.data.inactive_users_count.action," (",a.data.inactive_users_count.persentage,"%) "),r(6),m(a.data.not_prolong_subs_users_count.sum),r(),I(a.data.not_prolong_subs_users_count.action>0?"plus":"minus"),r(),A(" ",a.data.not_prolong_subs_users_count.action," (",a.data.not_prolong_subs_users_count.persentage,"%) "),r(8),m(a.fromToDate),r(8),m(a.fromToDate),r(8),m(a.fromToDate),r(8),m(a.fromToDate))},styles:['.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]{width:calc(50% - 8px);margin:10px 4px}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{color:#000;font-size:17px;font-style:normal;font-weight:600;line-height:normal;letter-spacing:-.5px;margin-right:3px}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]{font-size:12px;color:#b84041}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before{content:"+"}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{font-size:12px;color:#38913b}.main[_ngcontent-%COMP%]   .period-main-infos[_ngcontent-%COMP%]   .persentage[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#636366;font-size:13px;font-style:normal;font-weight:400;line-height:18px}']});let s=u;return s})();var Et=N(pt());var Ut=["price"],xt=(()=>{let u=class u{constructor(t,n){this.activatedRoute=t,this.utmService=n,this.priceData={rub:[],usd:[]}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.utmId=t.id,this.loadUtm()})}loadUtm(){this.utmService.detail(this.utmId).subscribe(t=>{this.utm=t,this.loadPeriod()})}loadPeriod(){this.utmService.periods(this.utm.name).subscribe(t=>{this.stats=t,t.forEach(n=>{this.priceData.rub.push({x:n.date,y:n.finance_stats[1].amount}),this.priceData.usd.push({x:n.date,y:n.finance_stats[0].amount})}),this.fromToDate=V(t[0].date,t[t.length-1].date),this.loadChart()})}loadChart(){this.canvas=this.price.nativeElement,this.ctx=this.canvas.getContext("2d"),new Et.Chart(this.ctx,{type:"line",data:{datasets:[{label:"USD",backgroundColor:"rgba(255, 99, 132, 0.0)",borderColor:"#3178DE",fill:!0,data:this.priceData.usd},{label:"RUB",backgroundColor:"rgba(255, 99, 132, 0.0)",borderColor:"#4CC063",fill:!0,data:this.priceData.rub}]},options:{plugins:{legend:!1},responsive:!0,scales:{xAxes:[{type:"linear",position:"bottom",ticks:{userCallback:t=>L(new Date(t).getMonth())+" "+new Date(t).getDate()}}],yAxes:[{type:"linear",ticks:{userCallback:function(t){return t.toString()}}}]}}})}};u.\u0275fac=function(n){return new(n||u)(_(y),_(h))},u.\u0275cmp=p({type:u,selectors:[["ng-component"]],viewQuery:function(n,a){if(n&1&&x(Ut,5),n&2){let d;S(d=b())&&(a.price=d.first)}},decls:9,vars:1,consts:[["price",""],[1,"main"],[1,"title-text"],[1,"container-white"],[1,"from-to"],["width","340","height","350"]],template:function(n,a){n&1&&(e(0,"div",1)(1,"div",2)(2,"h1"),o(3,"\u0414\u043E\u0445\u043E\u0434 \u0441 \u043F\u0440\u043E\u0434\u0430\u0436"),i()(),e(4,"div",3)(5,"span",4),o(6),i(),l(7,"canvas",5,0),i()()),n&2&&(r(6),m(a.fromToDate))},encapsulation:2});let s=u;return s})();var he=(()=>{let u=class u{};u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=z({type:u}),u.\u0275inj=q({imports:[it.forChild([{path:"",component:ht},{path:"create",component:vt},{path:"view/:id",component:ft},{path:"view-statistica/:id",component:Ct},{path:"view-statistica-price/:id",component:xt}]),dt,ct,tt,R]});let s=u;return s})();export{he as UtmModule};
