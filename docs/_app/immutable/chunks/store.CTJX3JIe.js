import{q as M,at as T,ac as k,R as j,J as C,an as U,F as $,C as P,b as x,au as J,h as g,av as W,g as N,z as y,s as L,d as h,f as q,aw as O,H as A,a as Q,Q as K,e as X,ax as Z,O as ee,G as te,ay as re,c as ne,o as ae,p as se,k as oe,n as R,u as ie,az as ue,U as ce,a5 as fe,a2 as le}from"./runtime.D7Ktz9Fp.js";import{a as de}from"./template.CmkbG8x9.js";function Te(e,t){if(t){const r=document.body;e.autofocus=!0,M(()=>{document.activeElement===r&&e.focus()})}}let H=!1;function _e(){H||(H=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function z(e){var t=j,r=C;T(null),k(null);try{return e()}finally{T(t),k(r)}}function ke(e,t,r,a=r){e.addEventListener(t,()=>z(r));const s=e.__on_r;s?e.__on_r=()=>{s(),a()}:e.__on_r=a,_e()}const B=new Set,D=new Set;function Le(e,t,r,a){function s(n){if(a.capture||w.call(t,n),!n.cancelBubble)return z(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?M(()=>{t.addEventListener(e,s,a)}):t.addEventListener(e,s,a),s}function Se(e){for(var t=0;t<e.length;t++)B.add(e[t]);for(var r of D)r(e)}function w(e){var V;var t=this,r=t.ownerDocument,a=e.type,s=((V=e.composedPath)==null?void 0:V.call(e))||[],n=s[0]||e.target,l=0,v=e.__root;if(v){var d=s.indexOf(v);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var _=s.indexOf(t);if(_===-1)return;d<=_&&(l=d)}if(n=s[l]||e.target,n!==t){U(e,"currentTarget",{configurable:!0,get(){return n||r}});var S=j,c=C;T(null),k(null);try{for(var o,i=[];n!==null;){var f=n.assignedSlot||n.parentNode||n.host||null;try{var p=n["__"+a];if(p!==void 0&&!n.disabled)if($(p)){var[Y,...G]=p;Y.apply(n,[e,...G])}else p.call(n,e)}catch(E){o?i.push(E):o=E}if(e.cancelBubble||f===t||f===null)break;n=f}if(o){for(let E of i)queueMicrotask(()=>{throw E});throw o}}finally{e.__root=t,delete e.currentTarget,T(S),k(c)}}}let u;function pe(){u=void 0}function Ae(e){let t=null,r=g;var a;if(g){for(t=h,u===void 0&&(u=q(document.head));u!==null&&(u.nodeType!==8||u.data!==W);)u=N(u);u===null?y(!1):u=L(N(u))}g||(a=document.head.appendChild(P()));try{x(()=>e(a),J)}finally{r&&(y(!0),u=h,L(t))}}function Ne(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const he=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Oe(e){return he.includes(e)}const ve={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function Re(e){return e=e.toLowerCase(),ve[e]??e}const be=["touchstart","touchmove"];function ye(e){return be.includes(e)}function De(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ge(e,t){return F(e,t)}function Ie(e,t){O(),t.intro=t.intro??!1;const r=t.target,a=g,s=h;try{for(var n=q(r);n&&(n.nodeType!==8||n.data!==W);)n=N(n);if(!n)throw A;y(!0),L(n),Q();const l=F(e,{...t,anchor:n});if(h===null||h.nodeType!==8||h.data!==K)throw X(),A;return y(!1),l}catch(l){if(l===A)return t.recover===!1&&Z(),O(),ee(r),y(!1),ge(e,t);throw l}finally{y(a),L(s),pe()}}const b=new Map;function F(e,{target:t,anchor:r,props:a={},events:s,context:n,intro:l=!0}){O();var v=new Set,d=c=>{for(var o=0;o<c.length;o++){var i=c[o];if(!v.has(i)){v.add(i);var f=ye(i);t.addEventListener(i,w,{passive:f});var p=b.get(i);p===void 0?(document.addEventListener(i,w,{passive:f}),b.set(i,1)):b.set(i,p+1)}}};d(te(B)),D.add(d);var _=void 0,S=re(()=>{var c=r??t.appendChild(P());return ne(()=>{if(n){ae({});var o=oe;o.c=n}s&&(a.$$events=s),g&&de(c,null),_=e(c,a)||{},g&&(C.nodes_end=h),n&&se()}),()=>{var f;for(var o of v){t.removeEventListener(o,w);var i=b.get(o);--i===0?(document.removeEventListener(o,w),b.delete(o)):b.set(o,i)}D.delete(d),I.delete(_),c!==r&&((f=c.parentNode)==null||f.removeChild(c))}});return I.set(_,S),_}let I=new WeakMap;function Ce(e){const t=I.get(e);t&&t()}function we(e,t,r){if(e==null)return t(void 0),R;const a=ie(()=>e.subscribe(t,r));return a.unsubscribe?()=>a.unsubscribe():a}let m=!1;function Ve(e,t,r){const a=r[t]??(r[t]={store:null,source:ce(void 0),unsubscribe:R});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=R;else{var s=!0;a.unsubscribe=we(e,n=>{s?a.source.v=n:le(a.source,n)}),s=!1}return fe(a.source)}function He(){const e={};return ue(()=>{for(var t in e)e[t].unsubscribe()}),e}function Me(e){var t=m;try{return m=!1,[e(),m]}finally{m=t}}export{De as a,Ve as b,_e as c,Le as d,Se as e,Te as f,Oe as g,Me as h,Ne as i,Ie as j,Ae as k,ke as l,ge as m,Re as n,He as s,Ce as u};
