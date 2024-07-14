import{a as v,b as S}from"./chunk-I4XTAV2I.js";import{Ca as L,D as F,E,Ea as y,Fa as R,Ga as p,Ha as D,Ia as x,O as l,Ra as Y,T as I,V as _,Wa as V,Z as M,_ as N,aa as k,ba as u,ca as P,da as O,ea as o,fa as s,ga as f,ia as A,ib as j,ja as $,ka as g,ta as c,ua as h,v as b,va as B,wa as z,y as w}from"./chunk-VNFLLBY4.js";var U=(()=>{let i=class i{constructor(){this.monthNames=["\u042F\u043D\u0432\u0430\u0440\u044C","\u0424\u0435\u0432\u0440\u0430\u043B\u044C","\u041C\u0430\u0440\u0442","\u0410\u043F\u0440\u0435\u043B\u044C","\u041C\u0430\u0439","\u0418\u044E\u043D\u044C","\u0418\u044E\u043B\u044C","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u041E\u043A\u0442\u044F\u0431\u0440\u044C","\u041D\u043E\u044F\u0431\u0440\u044C","\u0414\u0435\u043A\u0430\u0431\u0440\u044C"]}transform(t,e){if(t){let n=new Date(t),d;return e?d=new Date(e):d=new Date,n.getFullYear()!==d.getFullYear()?`${n.getDate()} ${this.monthNames[n.getMonth()]} ${n.getFullYear()}`:`${n.getDate()} ${this.monthNames[n.getMonth()]}`}return""}};i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=w({name:"dateRus",type:i,pure:!0,standalone:!0});let a=i;return a})();var q=a=>({active:a}),K=(a,i)=>({today:a,future:i});function Q(a,i){if(a&1&&c(0),a&2){let r=g().$implicit;B(" ",r.day," ")}}function W(a,i){if(a&1){let r=A();f(0,"div"),o(1,"div",9),$("click",function(){let e=F(r).$implicit,n=g(2);return E(n.setDay(e))}),I(2,Q,1,1),s(),f(3,"div")}if(a&2){let r=i.$implicit,t=g(2);M(t.isLastDate(r)),l(),N("item ",t.dayStatus(r),""),_("ngClass",R(11,K,r.isToday,r.future)),l(),k(2,r.oldDay?-1:2),l(),M(t.isFirstDate(r))}}function X(a,i){if(a&1&&(o(0,"div",6)(1,"div",7),c(2),s(),o(3,"div",8),P(4,W,4,14,null,null,u),s()()),a&2){let r=i.$implicit,t=g();l(2),z(" ",t.monthNames[r.month],", ",r.year," "),l(2),O(r.days)}}var ot=(()=>{let i=class i{constructor(){this.date=new Date,this.year=this.date.getFullYear(),this.month=this.date.getMonth(),this.lastDateActive=!0,this.months=[],this.monthNames=["\u042F\u043D\u0432\u0430\u0440\u044C","\u0424\u0435\u0432\u0440\u0430\u043B\u044C","\u041C\u0430\u0440\u0442","\u0410\u043F\u0440\u0435\u043B\u044C","\u041C\u0430\u0439","\u0418\u044E\u043D\u044C","\u0418\u044E\u043B\u044C","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u041E\u043A\u0442\u044F\u0431\u0440\u044C","\u041D\u043E\u044F\u0431\u0440\u044C","\u0414\u0435\u043A\u0430\u0431\u0440\u044C"]}ngOnInit(){this.changeCalendar(this.year,this.month),this.changeCalendar(this.year,this.month-1),this.changeCalendar(this.year,this.month-2),this.subscribeScroll(),this.loadDate()}loadDate(){let t=localStorage.getItem(this.entityName+"_"+v),e=localStorage.getItem(this.entityName+"_"+S);t&&(this.lastDate={dayTimeStamp:Number(t)}),e&&(this.firstDate={dayTimeStamp:Number(e)})}subscribeScroll(){setTimeout(()=>{this.monthsDocument=document.getElementById("months"),this.monthsDocument.scrollTo(0,300),this.monthsDocument.addEventListener("scroll",()=>{document.getElementById("months").scrollTop<10&&this.scrollUp()})},100)}scrollUp(){this.months[0].month?this.changeCalendar(this.months[0].year,this.months[0].month-1):this.changeCalendar(this.months[0].year-1,11),this.monthsDocument.scrollTo(0,221)}changeCalendar(t,e){let n={year:t,month:e,days:[]},d=new Date(t,e,1).getDay(),G=new Date(t,e+1,0).getDate(),H=new Date(t,e,0).getDate();for(let m=d-1;m>0;m--)n.days.push({oldDay:H-m+1});for(let m=1;m<=G;m++){let T,C;m===this.date.getDate()&&e===this.month&&t===this.year?T=!0:(e>this.month&&t>=this.year||e===this.month&&m>this.date.getDate()&&t==this.year)&&(C=!0),n.days.push({dayTimeStamp:new Date(t,e,m).getTime(),day:m,isToday:T,future:C})}this.months.unshift(n)}setDay(t){!t.future&&!t.oldDay&&(this.lastDateActive?(this.lastDateActive=!1,t.dayTimeStamp<this.firstDate?.dayTimeStamp?(this.lastDate=this.firstDate,this.firstDate=t):this.lastDate=t):(this.lastDate?.dayTimeStamp<t.dayTimeStamp?(this.firstDate=this.lastDate,this.lastDate=t):this.firstDate=t,this.lastDateActive=!0),localStorage.setItem(this.entityName+"_"+v,this.lastDate?.dayTimeStamp+""),localStorage.setItem(this.entityName+"_"+S,this.firstDate?.dayTimeStamp+""))}dayStatus(t){return t.dayTimeStamp?this.firstDate?.dayTimeStamp===t.dayTimeStamp||this.lastDate?.dayTimeStamp===t.dayTimeStamp?"active":this.firstDate?.dayTimeStamp<t.dayTimeStamp&&t.dayTimeStamp<this.lastDate?.dayTimeStamp?"inside":"":""}isLastDate(t){return!t.dayTimeStamp||!this.firstDate?"":this.lastDate?.dayTimeStamp===t.dayTimeStamp?"last-date":""}isFirstDate(t){return!t.dayTimeStamp||!this.lastDate?"":this.firstDate?.dayTimeStamp===t.dayTimeStamp?"first-date":""}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=b({type:i,selectors:[["calendar"]],inputs:{entityName:"entityName"},standalone:!0,features:[L],decls:34,vars:20,consts:[[1,"calendar"],[1,"currents"],[1,"last",3,"ngClass"],[1,"first",3,"ngClass"],[1,"week-days"],["id","months"],[1,"month"],[1,"current-month"],[1,"days"],[3,"click","ngClass"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),c(4),p(5,"translatePaid"),s(),o(6,"span"),c(7),p(8,"dateRus"),s()(),o(9,"div",3)(10,"p"),c(11),p(12,"translatePaid"),s(),o(13,"span"),c(14),p(15,"dateRus"),s()()(),o(16,"div",4)(17,"div"),c(18,"\u041F\u041D"),s(),o(19,"div"),c(20,"\u0432\u0442"),s(),o(21,"div"),c(22,"\u0441\u0440"),s(),o(23,"div"),c(24,"\u0447\u0442"),s(),o(25,"div"),c(26,"\u043F\u0442"),s(),o(27,"div"),c(28,"\u0441\u0431"),s(),o(29,"div"),c(30,"\u0432\u0441"),s()(),o(31,"div",5),P(32,X,6,2,"div",6,u),s()()),e&2&&(l(2),_("ngClass",y(16,q,n.lastDateActive)),l(2),h(D(5,6,"financial_page__search_start")),l(3),h(x(8,8,n.lastDate==null?null:n.lastDate.dayTimeStamp,n.firstDate==null?null:n.firstDate.dayTimeStamp)),l(2),_("ngClass",y(18,q,!n.lastDateActive)),l(2),h(D(12,11,"financial_page__search_end")),l(3),h(x(15,13,n.firstDate==null?null:n.firstDate.dayTimeStamp,n.lastDate==null?null:n.lastDate.dayTimeStamp)),l(18),O(n.months))},dependencies:[V,Y,U,j],styles:['.calendar[_ngcontent-%COMP%]{height:100vh;margin-top:-30px;padding:4px;background-color:#fff}.calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]{display:flex;width:100%;margin-bottom:10px}.calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]{width:50%;margin:10px 15px;border-bottom:2px solid rgba(0,0,0,.2)}.calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#8e8e93;font-size:14px;font-weight:400;line-height:18px}.calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;line-height:25.29px;margin-top:4px}.calendar[_ngcontent-%COMP%]   .currents[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-bottom:2px solid #007AFF}.calendar[_ngcontent-%COMP%]   .week-days[_ngcontent-%COMP%]{display:flex;gap:10px;background-color:#efeef3}.calendar[_ngcontent-%COMP%]   .week-days[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;height:25px;width:calc(14.2857142857% - 10px);font-size:12px;text-transform:uppercase}.calendar[_ngcontent-%COMP%]   .current-month[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:10px;font-size:19px;font-weight:600;line-height:22.27px;margin-left:15px}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]{height:80vh;overflow-y:auto}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{display:flex;list-style:none;overflow-x:auto;gap:0;flex-wrap:wrap}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:5px 0;display:flex;justify-content:space-around;align-items:center;height:50px;width:14.2857142857%;font-weight:400;line-height:20.29px;font-size:17px;position:relative}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .todays[_ngcontent-%COMP%]:after{content:" ";width:10px;height:10px;background-color:#007aff;border-radius:50%;position:absolute;bottom:0;left:inherit;right:inherit}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .future[_ngcontent-%COMP%]{color:#8e8e93}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#007aff;border-radius:50%;color:#fff;z-index:100;position:relative}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]{background-color:#efeef3}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .first-date[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-date[_ngcontent-%COMP%]{z-index:0;background-color:#efeef3;width:30px;height:50px;margin:5px 0 5px -30px}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .last-date[_ngcontent-%COMP%]{margin-left:0;margin-right:-30px}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(20), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(41), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(48), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(62), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(83){border-top-right-radius:50%;border-bottom-right-radius:50%}.calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(23), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(44), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(65), .calendar[_ngcontent-%COMP%]   #months[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(86){border-top-left-radius:50%;border-bottom-left-radius:50%}']});let a=i;return a})();export{U as a,ot as b};
