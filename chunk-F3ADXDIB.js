import{C as n,K as c,P as r,ib as l,x as s}from"./chunk-OZNZNZBL.js";var p=(()=>{let t=class t{constructor(e,a){this.elRef=e,this.translatePaidService=a}ngOnInit(){this.changeText()}ngOnChanges(){this.changeText()}changeText(){let e=this.translatePaidService.translate[this.translatePaid];this.params&&Object.keys(this.params).forEach(a=>{e=e.replace("{{"+a+"}}",this.params[a])}),this.elRef.nativeElement.innerHTML=e}};t.\u0275fac=function(a){return new(a||t)(r(c),r(l))},t.\u0275dir=s({type:t,selectors:[["","translatePaid",""]],inputs:{translatePaid:"translatePaid",params:"params"},standalone:!0,features:[n]});let i=t;return i})();export{p as a};
