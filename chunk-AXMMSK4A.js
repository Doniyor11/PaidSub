import{a as st,b as L}from"./chunk-YUFBGKKM.js";import{a as ot,b as ut,c as rt}from"./chunk-I4XTAV2I.js";import{a as it}from"./chunk-HPDJ3FLJ.js";import{S as V}from"./chunk-MC25QCV2.js";import"./chunk-SUL5D3F3.js";import{d as at}from"./chunk-SN74OY2T.js";import"./chunk-JHVCJPUA.js";import{a as nt}from"./chunk-R3DMKSVX.js";import"./chunk-DB6HNUG5.js";import{$a as u,$b as Q,Ca as r,Fb as _,Hb as l,Ib as f,Jb as M,Lb as Z,Na as g,Pa as p,Tb as Y,U as G,V as z,Wa as F,Wb as q,Xa as B,Ya as I,Yb as J,Z as C,Za as k,_a as n,_b as K,ab as d,ca as w,cc as W,da as H,db as R,eb as A,hb as S,ib as c,ka as v,kc as X,la as h,ma as x,mb as U,na as E,nc as D,pc as tt,qc as P,rc as et,tb as N,tc as O,ub as s,vb as m,wb as b}from"./chunk-3QAT4SY5.js";import"./chunk-YHOLSLLF.js";var ct=(()=>{let i=class i{constructor(){this.resourceUrl=et("stats"),this.http=C(W)}main(a){return this.http.get(`${this.resourceUrl}/botStats`,{params:this.convert(a)})}tariff(a,o){return this.http.get(`${this.resourceUrl}/tariffStats/${a}`,{params:this.convert(o)})}loadTariffStatistic(a,o){return this.http.get(`${this.resourceUrl}/tariffStats/${a}/subscriptionStats`,{params:this.convert(o)})}loadStatistic(a){return this.http.get(`${this.resourceUrl}/botStats/subscriptionStats`,{params:this.convert(a)})}convert(a){return Object.keys(a).forEach(o=>{a[o]||delete a[o]}),a}};i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=G({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var T=t=>({active:t}),pt=t=>({currency:t});function Ct(t,i){if(t&1&&(s(0),l(1,"dateRus")),t&2){let e=c(2);b(" ",M(1,1,e.firstDate,e.lastDate)," - ")}}function xt(t,i){if(t&1){let e=A();n(0,"div",7)(1,"div",8),S("click",function(){v(e);let o=c(2);return h(o.contentAbout="users_count")}),x(),n(2,"svg",9),d(3,"path",10),u(),E(),n(4,"div",11),s(5," \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0432\u0448\u0438\u0445 \u0431\u043E\u0442 "),u()(),n(6,"span",12),s(7),u(),n(8,"p",13),s(9),l(10,"translatePaid"),u()()}if(t&2){let e=c(2);r(4),p("ngClass",_(5,T,e.contentAbout==="users_count")),r(3),m(e.stats.users_count),r(2),m(f(10,3,"stats_page__metric_users_count"))}}function gt(t,i){if(t&1){let e=A();n(0,"div",7)(1,"div",8),S("click",function(){v(e);let o=c(2);return h(o.contentAbout="inactive_users")}),x(),n(2,"svg",9),d(3,"path",10),u(),E(),n(4,"div",14),s(5," \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043E\u0442 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B "),u()(),n(6,"span",12),s(7),u(),n(8,"p",13),s(9),l(10,"translatePaid"),u()()}if(t&2){let e=c(2);r(4),p("ngClass",_(5,T,e.contentAbout==="inactive_users")),r(3),m(e.stats.inactive_users),r(2),m(f(10,3,"stats_page__metric_inactive_users"))}}function vt(t,i){t&1&&R(0)}function ht(t,i){if(t&1&&(n(0,"p"),s(1),g(2,vt,1,0,"ng-container",20),u()),t&2){let e=i.$implicit;c(2);let a=N(2);r(),b("",e.amount," "),r(),p("ngTemplateOutlet",a)("ngTemplateOutletContext",_(3,pt,e.currency))}}function St(t,i){t&1&&R(0)}function Et(t,i){if(t&1&&(n(0,"p"),s(1),g(2,St,1,0,"ng-container",20),u()),t&2){let e=i.$implicit;c(2);let a=N(2);r(),b("",e.amount," "),r(),p("ngTemplateOutlet",a)("ngTemplateOutletContext",_(3,pt,e.currency))}}function bt(t,i){t&1&&(n(0,"div",21)(1,"p"),s(2),l(3,"translatePaid"),u(),n(4,"span",22),x(),n(5,"svg",23),d(6,"path",24),u()()()),t&2&&(r(2),m(f(3,1,"stats_page__subs_stats__tariff_stats")))}function yt(t,i){if(t&1){let e=A();n(0,"div",2)(1,"div",3)(2,"p"),s(3),l(4,"translatePaid"),n(5,"a",4),g(6,Ct,2,4),s(7),l(8,"dateRus"),u()()(),n(9,"div",5),g(10,xt,11,7,"div",6)(11,gt,11,7,"div",6),n(12,"div",7)(13,"div",8),S("click",function(){v(e);let o=c();return h(o.contentAbout="buyed_users")}),x(),n(14,"svg",9),d(15,"path",10),u(),E(),n(16,"div",11),s(17," \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0432 \u0431\u043E\u0442\u0435 "),u()(),n(18,"span",12),s(19),u(),n(20,"p",13),s(21,"\u041A\u0443\u043F\u0438\u0432\u0448\u0438\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"),u()(),n(22,"div",7)(23,"div",8),S("click",function(){v(e);let o=c();return h(o.contentAbout="cr")}),x(),n(24,"svg",9),d(25,"path",10),u(),E(),n(26,"div",14),s(27," \u042D\u0442\u043E \u043C\u0435\u0442\u0440\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u043A\u0430\u043A\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0432\u0448\u0438\u0445 \u0431\u043E\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043B\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 "),u()(),n(28,"span",12),s(29),l(30,"mask"),u(),n(31,"p",13),s(32),l(33,"translatePaid"),u()(),n(34,"div",7)(35,"div",8),S("click",function(){v(e);let o=c();return h(o.contentAbout="subscription_lifetime_days")}),x(),n(36,"svg",9),d(37,"path",10),u(),E(),n(38,"div",11),s(39," \u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438 \u0438\u043C\u0435\u044E\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0430 \u0432\u0430\u0448 \u0442\u0430\u0440\u0438\u0444 "),u()(),n(40,"span",12),s(41),u(),n(42,"p",13),s(43),l(44,"translatePaid"),u()(),n(45,"div",7)(46,"div",8),S("click",function(){v(e);let o=c();return h(o.contentAbout="income_stats")}),x(),n(47,"svg",9),d(48,"path",10),u(),E(),n(49,"div",14),s(50," \u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0434\u043E\u0445\u043E\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 "),u()(),n(51,"div",15),I(52,ht,3,5,"p",null,B),u(),n(54,"p",13),s(55,"\u0414\u043E\u0445\u043E\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"),u()()(),n(56,"div",16)(57,"div",8),S("click",function(){v(e);let o=c();return h(o.contentAbout="projected_income_stats")}),x(),n(58,"svg",9),d(59,"path",10),u(),E(),n(60,"div",14),s(61," \u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438 \u0438\u043C\u0435\u044E\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0430 \u0432\u0430\u0448 \u0442\u0430\u0440\u0438\u0444 "),u()(),n(62,"div",15),I(63,Et,3,5,"p",null,B),u(),n(65,"p",13),s(66),l(67,"translatePaid"),u()(),n(68,"div",3)(69,"p"),s(70),l(71,"translatePaid"),u()(),n(72,"div",17)(73,"statistica-grafig",18),S("params",function(o){v(e);let y=c();return h(y.params=o)}),u()(),g(74,bt,7,3,"div",19),u()}if(t&2){let e=c();r(3),b(" ",f(4,21,"stats_page__period")," "),r(3),F(6,e.firstDate&&e.firstDate!==e.lastDate?6:-1),r(),b(" ",M(8,23,e.lastDate,e.firstDate),""),r(3),p("ngIf",!e.tariffId),r(),p("ngIf",!e.tariffId),r(5),p("ngClass",_(37,T,e.contentAbout==="buyed_users")),r(3),m(e.tariffId?e.tariffStats.buyed_users_count:e.stats.buyed_subs_users_count),r(7),p("ngClass",_(39,T,e.contentAbout==="cr")),r(3),b("",M(30,26,e.tariffId?e.tariffStats.cr:e.stats.cr,"separator.2"),"%"),r(3),m(f(33,29,"stats_page__metric_cr")),r(6),p("ngClass",_(41,T,e.contentAbout==="subscription_lifetime_days")),r(3),b("",e.tariffId?e.tariffStats.subscriber_lifetime_days:e.stats.subscription_lifetime_days," \u0434\u043D\u0435\u0439"),r(2),m(f(44,31,"stats_page__metric_subscription_lifetime_days")),r(6),p("ngClass",_(43,T,e.contentAbout==="income_stats")),r(3),k(e.tariffId?e.tariffStats.income_stats:e.stats.income_stats),r(8),p("ngClass",_(45,T,e.contentAbout==="projected_income_stats")),r(3),k(e.tariffId?e.tariffStats.projected_income_stats:e.stats.projected_income_stats),r(3),m(f(67,33,"stats_page__metric_projected_income_stats")),r(4),m(f(71,35,"stats_page__subs_stats_section")),r(3),p("columns",e.columns)("labels",e.labels)("statistics",e.data),r(),p("ngIf",!e.tariffId)}}function Tt(t,i){t&1&&s(0," \u20BD ")}function wt(t,i){t&1&&s(0," $ ")}function Mt(t,i){t&1&&s(0," \u20AC ")}function Pt(t,i){if(t&1&&g(0,Tt,1,0)(1,wt,1,0)(2,Mt,1,0),t&2){let e=i.currency,a=c();F(0,e===a.currencyType.RUB?0:e===a.currencyType.USD?1:2)}}var $=(()=>{let i=class i{constructor(){this.backButton=C(P),this.activatedRoute=C(X),this.statisticService=C(ct),this.lastDate=new Date().getTime(),this.currencyType=rt,this.columns=["active","count_gived_by_admin","count_trial_subs_users_count","not_prolong_users_count"],this.labels=["\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A","\u0412\u044B\u0434\u0430\u043D\u043E \u0430\u0434\u043C\u0438\u043D\u043E\u043C","\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438 \u0441 \u0442\u0440\u0438\u0430\u043B \u043F\u0435\u0440\u0438\u043E\u0434\u043E\u043C","\u041D\u0435 \u043F\u0440\u043E\u0434\u043B\u0438\u0432\u0448\u0438\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"]}ngOnInit(){this.backButton.getButton("/menu"),this.loadDate(),this.activatedRoute.params.subscribe(a=>{this.tariffId=a.id,this.checkLoad()})}checkLoad(){this.tariffId?(this.backButton.getButton("/statistic/tariffs"),this.loadTariffStats(),this.loadTariffStatistic()):(this.loadStats(),this.loadStatistic())}loadStats(){this.statisticService.main(this.params).subscribe(a=>{this.stats=a})}loadTariffStats(){this.statisticService.tariff(this.tariffId,this.params).subscribe(a=>{this.tariffStats=a})}loadDate(){let a=localStorage.getItem("statistic_"+ot),o=localStorage.getItem("statistic_"+ut);a&&(this.lastDate=Number(a)),o&&(this.firstDate=Number(o))}loadStatistic(){this.loadFunc(this.statisticService.loadStatistic(this.params))}loadTariffStatistic(){this.loadFunc(this.statisticService.loadTariffStatistic(this.tariffId,this.params))}loadFunc(a){a.subscribe(o=>this.data=o)}get params(){return{start:this.firstDate,end:this.lastDate}}set params(a){this.firstDate=a.start,this.lastDate=a.end,this.checkLoad()}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=w({type:i,selectors:[["ng-component"]],decls:3,vars:1,consts:[["amountType",""],["class","main","style","margin-bottom: 35px;",4,"ngIf"],[1,"main",2,"margin-bottom","35px"],[1,"title-text"],["href","javascript:void(0)","routerLink","/statistic/calendar"],[1,"white-containers"],["class","item",4,"ngIf"],[1,"item"],[1,"about",3,"click"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.92308 12C8.92308 12.1826 8.86894 12.361 8.76751 12.5128C8.66608 12.6646 8.52192 12.7829 8.35325 12.8528C8.18458 12.9227 7.99898 12.941 7.81992 12.9053C7.64086 12.8697 7.47638 12.7818 7.34729 12.6527C7.21819 12.5236 7.13028 12.3591 7.09466 12.1801C7.05904 12.001 7.07732 11.8154 7.14719 11.6468C7.21706 11.4781 7.33537 11.3339 7.48717 11.2325C7.63897 11.1311 7.81743 11.0769 8 11.0769C8.24482 11.0769 8.4796 11.1742 8.65271 11.3473C8.82583 11.5204 8.92308 11.7552 8.92308 12ZM8 3.69231C6.30308 3.69231 4.92308 4.93461 4.92308 6.46154V6.76923C4.92308 6.93244 4.98791 7.08896 5.10332 7.20437C5.21873 7.31978 5.37525 7.38461 5.53846 7.38461C5.70167 7.38461 5.8582 7.31978 5.97361 7.20437C6.08901 7.08896 6.15385 6.93244 6.15385 6.76923V6.46154C6.15385 5.61538 6.98231 4.92308 8 4.92308C9.01769 4.92308 9.84616 5.61538 9.84616 6.46154C9.84616 7.30769 9.01769 8 8 8C7.83679 8 7.68027 8.06483 7.56486 8.18024C7.44945 8.29565 7.38462 8.45217 7.38462 8.61538V9.23077C7.38462 9.39398 7.44945 9.5505 7.56486 9.66591C7.68027 9.78132 7.83679 9.84615 8 9.84615C8.16321 9.84615 8.31974 9.78132 8.43514 9.66591C8.55055 9.5505 8.61539 9.39398 8.61539 9.23077V9.17538C10.0185 8.91769 11.0769 7.79846 11.0769 6.46154C11.0769 4.93461 9.69692 3.69231 8 3.69231ZM16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462403 11.1126 0.153721 9.56072C-0.15496 8.00887 0.00346628 6.40034 0.608967 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C10.121 0.00223986 12.1546 0.845814 13.6544 2.34562C15.1542 3.84542 15.9978 5.87895 16 8ZM14.7692 8C14.7692 6.66117 14.3722 5.35241 13.6284 4.23922C12.8846 3.12602 11.8274 2.25839 10.5905 1.74605C9.35356 1.2337 7.99249 1.09965 6.67939 1.36084C5.36629 1.62203 4.16013 2.26674 3.21343 3.21343C2.26674 4.16012 1.62203 5.36629 1.36084 6.67939C1.09965 7.99249 1.2337 9.35356 1.74605 10.5905C2.2584 11.8274 3.12603 12.8846 4.23922 13.6284C5.35241 14.3722 6.66117 14.7692 8 14.7692C9.79469 14.7672 11.5153 14.0534 12.7843 12.7843C14.0534 11.5153 14.7672 9.79468 14.7692 8Z","fill","black","fill-opacity","0.3"],[1,"content",3,"ngClass"],[1,"amount"],[1,"description"],[1,"content","right-info",3,"ngClass"],[1,"price"],[1,"month-amount"],[1,"container-white"],[3,"params","columns","labels","statistics"],["class","container-white position-relative","style","margin-top: 20px;","routerLink","tariffs/",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLink","tariffs/",1,"container-white","position-relative",2,"margin-top","20px"],[1,"right"],["width","7","height","12","viewBox","0 0 7 12","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(o,y){o&1&&g(0,yt,75,47,"div",1)(1,Pt,3,1,"ng-template",null,0,Z),o&2&&p("ngIf",y.stats||y.tariffStats)},dependencies:[Y,q,J,D,V,st,at,O],styles:[".white-containers[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;width:calc(var(--width) + 40px)}.white-containers[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:calc(50% - 46px);background-color:#fff;border-radius:10px;min-height:70px;padding:14px 16px;position:relative}.white-containers[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#636366;font-size:14px;line-height:18px}.white-containers[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%], .white-containers[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:19px;font-weight:500;line-height:22.67px;font-family:SF Pro Text,sans-serif}.white-containers[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600}.about[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;cursor:pointer}.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;width:194px;top:20px;right:-119px;z-index:100;background-color:#000;color:#fff;border-radius:8px;line-height:20px;font-size:14px;padding:8px;display:none}.about[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{display:block}.about[_ngcontent-%COMP%]   .right-info[_ngcontent-%COMP%]{right:-13px}.month-amount[_ngcontent-%COMP%]{width:calc(var(--width) - 8px);background-color:#fff;border-radius:10px;min-height:70px;padding:14px 16px;position:relative;margin:30px 0}.month-amount[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px}.month-amount[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#636366;font-size:14px;line-height:18px}.month-amount[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:19px;font-weight:600;line-height:22.67px;font-family:SF Pro Text,sans-serif}.title-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;font-weight:600;line-height:22.27px}.title-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#007aff;text-decoration:none}"]});let t=i;return t})();var Ft=t=>({drop_date:t});function Bt(t,i){if(t&1&&(d(0,"p",5),l(1,"date")),t&2){let e=c().$implicit;p("params",_(4,Ft,M(1,1,e.drop_timestamp,"dd.MM.YYYY")))}}function It(t,i){if(t&1&&(n(0,"p"),s(1),l(2,"translatePaid"),u()),t&2){let e=c().$implicit;r(),m(f(2,1,e.display_option))}}function kt(t,i){if(t&1&&(n(0,"div",3)(1,"div",4)(2,"span"),s(3),u(),g(4,Bt,2,6,"p",5)(5,It,3,3),u(),n(6,"span",6),x(),n(7,"svg",7),d(8,"path",8),u()()()),t&2){let e=i.$implicit;U("routerLink","/statistic/tariff/",e.id,""),r(3),m(e.name),r(),F(4,e.is_drop_marked?4:5)}}var lt=(()=>{let i=class i{constructor(){this.backButton=C(P),this.tariffService=C(it)}ngOnInit(){this.backButton.getButton("/statistic"),this.tariffService.tariff().subscribe(a=>{this.tariffs=a})}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=w({type:i,selectors:[["ng-component"]],decls:7,vars:3,consts:[[1,"main",2,"margin-bottom","20px"],[1,"title-text"],[2,"font-weight","600","font-size","19px","line-height","22.27px"],[1,"container-white","card",2,"margin","5px 0",3,"routerLink"],[1,"info"],["translatePaid","admin_panel_tariffs_page__tariff_marked_drop",2,"color","red",3,"params"],[1,"right"],["width","7","height","12","viewBox","0 0 7 12","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z","fill","#3C3C43","fill-opacity","0.3"]],template:function(o,y){o&1&&(n(0,"div",0)(1,"div",1)(2,"p",2),s(3),l(4,"translatePaid"),u()(),I(5,kt,9,4,"div",3,B),u()),o&2&&(r(3),m(f(4,1,"stats_page__subs_stats__tariff_stats")),r(2),k(y.tariffs))},dependencies:[D,nt,K,O],styles:[".card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e8e93;font-size:14px}"]});let t=i;return t})();var mt=(()=>{let i=class i{constructor(){this.backButton=C(P)}ngOnInit(){this.backButton.getButton()}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=w({type:i,selectors:[["ng-component"]],decls:1,vars:0,consts:[["entityName","statistic"]],template:function(o,y){o&1&&d(0,"calendar",0)},dependencies:[L],encapsulation:2});let t=i;return t})();var ge=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=H({type:i}),i.\u0275inj=z({imports:[Q,tt.forChild([{path:"",component:$},{path:"tariffs",component:lt},{path:"tariff/:id",component:$},{path:"calendar",component:mt}]),L,V]});let t=i;return t})();export{ge as StatisticModule};
