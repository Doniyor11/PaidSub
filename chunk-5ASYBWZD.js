import{c as y,f as I,g as M,h as S,m as D,o as G,q as P,r as V,u as b}from"./chunk-ZKB7TWIX.js";import{Ca as N,Ga as v,Ha as C,O as a,P as m,V as l,_ as c,ea as p,fa as d,ga as u,ib as F,la as h,ta as f,ua as g,v as s}from"./chunk-VNFLLBY4.js";var A=(()=>{let e=class e{constructor(t){this.control=t,this.controlName="name",this.container=!0,this.residual=32}ngOnInit(){this.editForm=this.control.control,this.editForm.get(this.controlName).valueChanges.subscribe(t=>{this.residual=t?32-t.length:32})}};e.\u0275fac=function(i){return new(i||e)(m(I))},e.\u0275cmp=s({type:e,selectors:[["name"]],inputs:{placeholder:"placeholder",controlName:"controlName",container:"container"},standalone:!0,features:[N],decls:5,vars:9,consts:[[3,"formGroup"],["type","text","maxlength","32",3,"placeholder","formControlName"],[1,"right"]],template:function(i,o){if(i&1&&(p(0,"form",0),u(1,"input",1),v(2,"translatePaid"),p(3,"p",2),f(4),d()()),i&2){let n;c("",o.container?"container-white":""," position-relative"),l("formGroup",o.editForm),a(),h("placeholder",C(2,7,o.placeholder)),l("formControlName",(n=o.controlName)!==null&&n!==void 0?n:"name"),a(3),g(o.residual)}},dependencies:[b,D,y,M,S,V,G,P,F],encapsulation:2});let r=e;return r})();export{A as a};
