import{Ba as T,D as _,E as u,F as O,G as k,N as C,O as a,T as g,V as x,aa as p,ba as v,ca as h,da as f,ea as i,fa as o,ga as m,ia as y,ja as d,ka as l,ta as s,ua as b,v as M,va as P}from"./chunk-ZECMEQJD.js";function E(t,n){if(t&1&&m(0,"img",12),t&2){let e=l().$implicit;x("src",e.source_url,C)}}function S(t,n){if(t&1&&m(0,"video",13),t&2){let e=l().$implicit;x("volume",0)("src",e.source_url,C)}}function F(t,n){if(t&1&&g(0,E,1,1,"img",12)(1,S,1,2),t&2){let e=n.$implicit;p(0,e.type===1||e.type===0?0:1)}}function I(t,n){if(t&1&&(i(0,"div",14),s(1),o()),t&2){let e=n.$implicit;a(),P(" ",e.text," ")}}function H(t,n){if(t&1&&(i(0,"div",11),h(1,I,2,1,"div",14,v),o()),t&2){let e=l(2);a(),f(e.keyboard_settings)}}function D(t,n){if(t&1){let e=y();i(0,"div",1),d("click",function(){_(e);let r=l();return u(r.changePreview())}),o(),i(1,"div",2)(2,"span",3),d("click",function(){_(e);let r=l();return u(r.changePreview())}),O(),i(3,"svg",4),m(4,"path",5),o()(),k(),i(5,"h1"),s(6),o(),i(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9),h(11,F,2,1,null,null,v),o(),i(13,"div",10)(14,"span"),s(15),o()()(),g(16,H,3,0,"div",11),o()()()}if(t&2){let e=l();a(6),P("\u041F\u0435\u0440\u0432\u044C\u044E ",e.title,""),a(5),f(e.images),a(4),b(e.message),a(),p(16,e.isHavebutton?16:-1)}}var B=(()=>{let n=class n{constructor(){this.isHavebutton=!1,this.notHaveInput=!1,this.preview=!1,this.testButtons=[{text:"Text 1"},{text:"Text 2"}]}get images(){return this.getData("attachment")}get name(){return this.getData("name")}get message(){return this.getData("message")}get keyboard_settings(){return this.getData("keyboard_settings")}getData(c){return this.model?this.model[c]:this.form.get(c).value}changePreview(){this.preview=!this.preview}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=M({type:n,selectors:[["preview"]],inputs:{title:"title",isHavebutton:"isHavebutton",notHaveInput:"notHaveInput",model:"model",form:"form"},standalone:!0,features:[T],decls:3,vars:1,consts:[[1,"container-white","primary","text-center",2,"margin-top","20px",3,"click"],[1,"background",3,"click"],[1,"alert",2,"padding","0 10px !important"],[1,"close",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-6","h-6","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"telegram-look"],[1,"post"],[1,"content"],[1,"images"],[1,"post-texts"],[1,"buttons"],["alt","post-image",3,"src"],["autoplay","","playsinline","",2,"pointer-events","none",3,"volume","src"],[1,"button"]],template:function(r,w){r&1&&(i(0,"div",0),d("click",function(){return w.changePreview()}),s(1,` \u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440
`),o(),g(2,D,17,3)),r&2&&(a(2),p(2,w.preview?2:-1))},styles:["h1[_ngcontent-%COMP%]{height:60px;align-items:center;display:flex;font-size:18px}.telegram-look[_ngcontent-%COMP%]{height:400px;width:100%;overflow-y:auto;background:linear-gradient(180deg,#84b2f4,#a1dbd6)}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{width:80vw;margin:10px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{border-radius:1rem;background-color:#fff;width:100%;height:auto;display:flex;flex-direction:column}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{border-radius:1rem;width:100%;object-fit:cover;max-height:200px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]{width:100%;margin:20px;text-align:start}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:600;font-size:16px;line-height:22.4px;width:90%;display:flex}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-texts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;width:90%;display:flex}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:10px}.telegram-look[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:#0000004d;width:var(--width);height:37px;margin:5px 0;border-radius:8px;display:flex;align-items:center;color:#fff;justify-content:center}"]});let t=n;return t})();export{B as a};
