import{b as $}from"./chunk-FWVVK4VH.js";import{h as D,i as V}from"./chunk-YJWMZDQW.js";import{$ as d,Ba as g,Ca as T,Da as u,H as x,I as h,J as y,K as b,Ka as B,Ma as M,Oa as E,Pa as I,S as v,T as a,Za as F,ba as p,ia as m,ja as f,ka as w,la as P,ma as r,na as c,oa as _,qa as S,ra as C,sa as l,sb as H,x as k,z as O}from"./chunk-LB6P6J35.js";var z=t=>({"w-100":t});function A(t,n){if(t&1&&_(0,"img",12),t&2){let e=l(),o=e.$implicit,i=e.$index,s=l(2);p("ngClass",M(2,z,i===0&&s.toqLength))("src",o.source_url,v)}}function j(t,n){if(t&1&&_(0,"video",13),t&2){let e=l(),o=e.$implicit,i=e.$index,s=l(2);p("ngClass",M(3,z,i===0&&s.toqLength))("volume",0)("src",o.source_url,v)}}function L(t,n){if(t&1&&d(0,A,1,4,"img",12)(1,j,1,5),t&2){let e=n.$implicit;m(0,e.type===1||e.type===0?0:1)}}function q(t,n){if(t&1&&(r(0,"div",14),g(1),c()),t&2){let e=n.$implicit;a(),u(" ",e.text," ")}}function N(t,n){if(t&1&&(r(0,"div",11),w(1,q,2,1,"div",14,f),c()),t&2){let e=l(2);a(),P(e.keyboard_settings)}}function U(t,n){if(t&1){let e=S();r(0,"div",1),C("click",function(){x(e);let i=l();return h(i.changePreview())}),c(),r(1,"div",2)(2,"span",3),C("click",function(){x(e);let i=l();return h(i.changePreview())}),y(),r(3,"svg",4),_(4,"path",5),c()(),b(),r(5,"h1"),g(6),c(),r(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9),w(11,L,2,1,null,null,f),c(),r(13,"div",10)(14,"span"),g(15),c()()(),d(16,N,3,0,"div",11),c()()()}if(t&2){let e=l();p("@alertBackgroundAnimation",void 0),a(),p("@alertAnimation",void 0),a(5),u("\u041F\u0435\u0440\u0432\u044C\u044E ",e.title,""),a(5),P(e.images),a(4),T(e.message),a(),m(16,e.isHaveButton?16:-1)}}var tt=(()=>{let n=class n{constructor(){this.isHaveButton=!1,this.notHaveInput=!1,this.notificationService=k($),this.preview=!1}get images(){return this.getData("attachment")}get toqLength(){return this.images.length%2===1}get name(){return this.getData("name")}get message(){return this.getData("message")}get keyboard_settings(){return this.getData("keyboard_settings")}getData(o){return this.model?this.model[o]:this.form.get(o)?.value}changePreview(){this.message&&this.message.length?this.preview=!this.preview:this.notificationService.createNotification("notify__need_set_message_before_preview")}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=O({type:n,selectors:[["preview"]],inputs:{title:"title",isHaveButton:"isHaveButton",notHaveInput:"notHaveInput",model:"model",form:"form"},standalone:!0,features:[B],decls:4,vars:4,consts:[[1,"container-white","primary","text-center",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert",2,"padding","0 !important","width","100%"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"telegram-look"],[1,"post"],[1,"content"],[1,"images"],[1,"post-texts"],[1,"buttons"],["alt","post-image",1,"responsive",3,"ngClass","src"],["autoplay","","playsinline","",1,"responsive",2,"pointer-events","none",3,"ngClass","volume","src"],[1,"button"]],template:function(i,s){i&1&&(r(0,"div",0),C("click",function(){return s.changePreview()}),g(1),E(2,"translatePaid"),c(),d(3,U,17,5)),i&2&&(a(),u(" ",I(2,2,"broadcasting_page__before_payment_step_3_preview"),`
`),a(2),m(3,s.preview?3:-1))},dependencies:[H,F],styles:["h1[_ngcontent-%COMP%]{height:60px;align-items:center;display:flex;font-size:18px}.telegram-look[_ngcontent-%COMP%]{height:400px;width:100%;overflow-y:auto;background:linear-gradient(180deg,#84b2f4,#a1dbd6)}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{width:80vw;margin:10px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{border-radius:1rem;background-color:#fff;width:100%;height:auto;display:flex;flex-direction:column}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{gap:5px;display:flex;flex-wrap:wrap;padding:5px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{border-radius:1rem;object-fit:cover;height:200px;width:calc(50% - 3px)}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]{width:100%}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]{width:100%;margin:20px;text-align:start}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:600;font-size:16px;line-height:22.4px;width:90%;display:flex;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:pre-line}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;width:90%;display:flex;-ms-word-break:break-all;word-break:break-all;white-space:pre-line;word-break:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:10px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:#0000004d;width:var(--width);height:37px;margin:5px 0;border-radius:8px;display:flex;align-items:center;color:#fff;justify-content:center}"],data:{animation:[D,V]}});let t=n;return t})();export{tt as a};
