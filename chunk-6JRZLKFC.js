import{b as B}from"./chunk-YOG2K7P2.js";import{n as D,o as F}from"./chunk-KNFDVZSQ.js";import{$a as y,Cb as E,Db as I,Ia as d,Ka as s,Ra as m,Sa as x,Ta as f,U as k,Ua as w,Va as o,Wa as a,Xa as g,Z as M,cb as _,db as l,fa as v,ga as C,ha as O,ia as b,oc as H,pb as p,qb as T,rb as u,ua as h,xa as i,yb as S}from"./chunk-ZB6I7ORA.js";function V(e,n){if(e&1&&g(0,"img",12),e&2){let t=l().$implicit;s("src",t.source_url,h)}}function z(e,n){if(e&1&&g(0,"video",13),e&2){let t=l().$implicit;s("volume",0)("src",t.source_url,h)}}function A(e,n){if(e&1&&d(0,V,1,1,"img",12)(1,z,1,2),e&2){let t=n.$implicit;m(0,t.type===1||t.type===0?0:1)}}function j(e,n){if(e&1&&(o(0,"div",14),p(1),a()),e&2){let t=n.$implicit;i(),u(" ",t.text," ")}}function $(e,n){if(e&1&&(o(0,"div",11),f(1,j,2,1,"div",14,x),a()),e&2){let t=l(2);i(),w(t.keyboard_settings)}}function N(e,n){if(e&1){let t=y();o(0,"div",1),_("click",function(){v(t);let r=l();return C(r.changePreview())}),a(),o(1,"div",2)(2,"span",3),_("click",function(){v(t);let r=l();return C(r.changePreview())}),O(),o(3,"svg",4),g(4,"path",5),a()(),b(),o(5,"h1"),p(6),a(),o(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9),f(11,A,2,1,null,null,x),a(),o(13,"div",10)(14,"span"),p(15),a()()(),d(16,$,3,0,"div",11),a()()()}if(e&2){let t=l();s("@alertBackgroundAnimation",void 0),i(),s("@alertAnimation",void 0),i(5),u("\u041F\u0435\u0440\u0432\u044C\u044E ",t.title,""),i(5),w(t.images),i(4),T(t.message),i(),m(16,t.isHavebutton?16:-1)}}var W=(()=>{let n=class n{constructor(){this.isHavebutton=!1,this.notHaveInput=!1,this.notificationService=k(B),this.preview=!1,this.testButtons=[{text:"Text 1"},{text:"Text 2"}]}get images(){return this.getData("attachment")}get name(){return this.getData("name")}get message(){return this.getData("message")}get keyboard_settings(){return this.getData("keyboard_settings")}getData(c){return this.model?this.model[c]:this.form.get(c).value}changePreview(){this.message&&this.message.length?this.preview=!this.preview:this.notificationService.createNotification("notify__need_set_message_before_preview")}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=M({type:n,selectors:[["preview"]],inputs:{title:"title",isHavebutton:"isHavebutton",notHaveInput:"notHaveInput",model:"model",form:"form"},standalone:!0,features:[S],decls:4,vars:4,consts:[[1,"container-white","primary","text-center",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert",2,"padding","0 !important","width","100%"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"telegram-look"],[1,"post"],[1,"content"],[1,"images"],[1,"post-texts"],[1,"buttons"],["alt","post-image",3,"src"],["autoplay","","playsinline","",2,"pointer-events","none",3,"volume","src"],[1,"button"]],template:function(r,P){r&1&&(o(0,"div",0),_("click",function(){return P.changePreview()}),p(1),E(2,"translatePaid"),a(),d(3,N,17,5)),r&2&&(i(),u(" ",I(2,2,"broadcasting_page__before_payment_step_3_preview"),`
`),i(2),m(3,P.preview?3:-1))},dependencies:[H],styles:["h1[_ngcontent-%COMP%]{height:60px;align-items:center;display:flex;font-size:18px}.telegram-look[_ngcontent-%COMP%]{height:400px;width:100%;overflow-y:auto;background:linear-gradient(180deg,#84b2f4,#a1dbd6)}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{width:80vw;margin:10px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{border-radius:1rem;background-color:#fff;width:100%;height:auto;display:flex;flex-direction:column}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{border-radius:1rem;width:100%;object-fit:cover;max-height:200px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]{width:100%;margin:20px;text-align:start}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:600;font-size:16px;line-height:22.4px;width:90%;display:flex;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;width:90%;display:flex;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:10px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:#0000004d;width:var(--width);height:37px;margin:5px 0;border-radius:8px;display:flex;align-items:center;color:#fff;justify-content:center}"],data:{animation:[D,F]}});let e=n;return e})();export{W as a};
