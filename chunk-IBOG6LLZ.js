import{$,A as F,Aa as Z,C as L,G as j,H as M,La as q,M as R,N as x,O as u,R as k,Ta as W,_ as h,_a as V,a as c,ab as K,b as f,c as y,ca as T,da as N,e as v,f as A,fb as Q,g as l,h as b,i as I,k as m,o as w,p,pa as B,q as S,r as C,u as O,w as D,y as o,ya as E,z as s,za as P}from"./chunk-O5ISDAQM.js";function g(i){i||(j(g),i=o(x));let e=new c(a=>i.onDestroy(a.next.bind(a)));return a=>a.pipe(S(e))}var J=["container"],U=new D("LottieOptions");function z(){let i=o(h),{player:e,useWebWorker:a}=o(U),t=i.runOutsideAngular(()=>e());return(W(t)?v(t).pipe(l(r=>r.default||r)):A(t)).pipe(C(r=>r.useWebWorker?.(a)),w({bufferSize:1,refCount:!0}))}var G=(()=>{let e=class e{constructor(){this.player$=z().pipe(b(t=>H(this.ngZone).pipe(l(()=>t)))),this.ngZone=o(h)}loadAnimation(t){return this.player$.pipe(l(n=>this.createAnimationItem(n,t)))}resolveOptions(t,n){return Object.assign({container:n,renderer:"svg",loop:!0,autoplay:!0},t)}createAnimationItem(t,n){return this.ngZone.runOutsideAngular(()=>t.loadAnimation(n))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function H(i){return new c(e=>{let a=i.runOutsideAngular(()=>requestAnimationFrame(()=>{e.next(),e.complete()}));return()=>cancelAnimationFrame(a)})}function jt(i){return[{provide:U,useValue:i}]}var X=(()=>{let e=class e{constructor(){this.options=u(null),this.containerClass=u(null),this.styles=u(null),this.animationCreated=this.getAnimationItem(),this.complete=this.awaitAnimationItemAndStartListening("complete"),this.loopComplete=this.awaitAnimationItemAndStartListening("loopComplete"),this.enterFrame=this.awaitAnimationItemAndStartListening("enterFrame"),this.segmentStart=this.awaitAnimationItemAndStartListening("segmentStart"),this.configReady=this.awaitAnimationItemAndStartListening("config_ready"),this.dataReady=this.awaitAnimationItemAndStartListening("data_ready"),this.domLoaded=this.awaitAnimationItemAndStartListening("DOMLoaded"),this.destroy=this.awaitAnimationItemAndStartListening("destroy"),this.error=this.awaitAnimationItemAndStartListening("error"),this.ngZone=o(h),this.isBrowser=Q(o(k)),this.animationLoader=o(G),this.loadAnimation$=new f,this.animationItem$=new y(null),this.setupLoadAnimationListener()}ngOnDestroy(){this.destroyAnimation()}loadAnimation(t,n){this.ngZone.runOutsideAngular(()=>this.loadAnimation$.next([t,n]))}getAnimationItem(){return I(()=>this.animationItem$).pipe(m(t=>t!==null))}awaitAnimationItemAndStartListening(t){return this.getAnimationItem().pipe(p(n=>new c(r=>{this.ngZone.runOutsideAngular(()=>{n.addEventListener(t,d=>{this.ngZone.runOutsideAngular(()=>{r.next(d)})})})})))}setupLoadAnimationListener(){this.loadAnimation$.pipe(m(([n])=>this.isBrowser&&n.options!==void 0)).pipe(p(([n,r])=>(this.destroyAnimation(),this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(n.options.currentValue,r)))),g()).subscribe(n=>{this.ngZone.run(()=>this.animationItem$.next(n))})}destroyAnimation(){let t=this.animationItem$.getValue();t!==null&&(t.destroy(),this.animationItem$.next(null))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=L({type:e,selectors:[["","lottie",""]],inputs:{options:[s.SignalBased,"options"],containerClass:[s.SignalBased,"containerClass"],styles:[s.SignalBased,"styles"]},outputs:{animationCreated:"animationCreated",complete:"complete",loopComplete:"loopComplete",enterFrame:"enterFrame",segmentStart:"segmentStart",configReady:"configReady",dataReady:"dataReady",domLoaded:"domLoaded",destroy:"destroy",error:"error"}});let i=e;return i})();var Mt=(()=>{let e=class e extends X{constructor(){super(...arguments),this.width=u(null),this.height=u(null),this.container=null}ngOnChanges(t){super.loadAnimation(t,this.container.nativeElement)}};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=R(e)))(r||e)}})(),e.\u0275cmp=F({type:e,selectors:[["ng-lottie"]],viewQuery:function(n,r){if(n&1&&E(J,7),n&2){let d;P(d=Z())&&(r.container=d.first)}},inputs:{width:[s.SignalBased,"width"],height:[s.SignalBased,"height"]},standalone:!0,features:[$,M,q],decls:2,vars:6,consts:[["container",""],[3,"ngStyle","ngClass"]],template:function(n,r){n&1&&B(0,"div",1,0),n&2&&(N("width",r.width()||"100%")("height",r.height()||"100%"),T("ngStyle",r.styles())("ngClass",r.containerClass()))},dependencies:[K,V],encapsulation:2,changeDetection:0});let i=e;return i})();export{jt as a,Mt as b};
