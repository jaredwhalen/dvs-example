import"./disclose-version.Bg9kRutz.js";import{m as x,p as _,o as j,n as k,v as q,w as B}from"./runtime.D7Ktz9Fp.js";import{b as D,t as E}from"./template.CmkbG8x9.js";import{s as K}from"./snippet.DodKK5hw.js";import{b as M}from"./this.cl6ioxLA.js";import{p as i}from"./props.Q2Jhy3h0.js";function Q(s,t,c){if(c){if(s.classList.contains(t))return;s.classList.add(t)}else{if(!s.classList.contains(t))return;s.classList.remove(t)}}var V=E("<div><!></div>");function U(s,t){j(t,!0);let c=i(t,"root",3,null),l=i(t,"top",3,0),m=i(t,"bottom",3,0),d=i(t,"increments",3,100),v=i(t,"value",15,void 0),r=[],h=[],p=[],f=[],u;function I(){let e=0,o=0;for(let n=0;n<r.length;n++)r[n]>e&&(e=r[n],o=n);e>0?v(o):v(void 0)}function w(e,o){const n=y=>{y[0].isIntersecting;const R=y[0].intersectionRatio;r[o]=R,I()},S=l()?l()*-1:0,T=m()?m()*-1:0,A=`${S}px 0px ${T}px 0px`,O={root:c(),rootMargin:A,threshold:h};f[o]&&f[o].disconnect();const g=new IntersectionObserver(n,O);g.observe(e),f[o]=g}function b(){p.length&&p.forEach(w)}x(()=>{for(let e=0;e<d()+1;e++)h.push(e/d());p=u.querySelectorAll(":scope > *:not(iframe)"),b()}),x(()=>{l(),m(),b()});var a=V(),L=q(a);K(L,()=>t.children??k),B(a),M(a,e=>u=e,()=>u),D(s,a),_()}const z={title:"Title TK",description:"Description tk."},C=[{section:"intro",content:[{type:"h4",value:"An h4 element with no attributes"},{type:"text",value:"Some random text here, followed by an img tag."},{type:"img",value:{src:"../assets/demo/test.jpg",alt:"A cat"}},{type:"Test",value:{label:"I’m a custom component!",value:"50"}}]}],W={meta:z,body:C};export{U as S,W as c,Q as t};
