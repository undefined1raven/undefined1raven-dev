function v(){}const lt=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function H(){return Object.create(null)}function E(t){t.forEach(K)}function F(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(at(e,n))}function Lt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t){return t??""}function Jt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const U=typeof window<"u";let ft=U?()=>window.performance.now():()=>Date.now(),L=U?t=>requestAnimationFrame(t):v;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&L(V)}function dt(t){let e;return $.size===0&&L(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}const _t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in _t;let O=!1;function ht(){O=!0}function mt(){O=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=c?r+1:pt(1,r,h=>e[n[h]].claim_order,c))-1;i[l]=n[d]+1;const a=d+1;n[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const d=c<u.length?u[c]:null;t.insertBefore(s[l],d)}}function gt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=Z("style");return xt(X(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function $t(t,e){if(O){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){O&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Qt(){return W(" ")}function Ut(){return W("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Yt(t,e,n){return et(t,e,n,Z)}function Zt(t,e,n){return et(t,e,n,wt)}function Nt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function te(t){return Nt(t," ")}function ee(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e){return new t(e)}const M=new Map;let j=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function I(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*u(y);c+=y*100+`%{${s(g,1-g)}}
`}const d=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(d)}_${o}`,h=X(t),{stylesheet:f,rules:_}=M.get(h)||St(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,j+=1,a}function At(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),j-=r,j||Ct())}function Ct(){L(()=>{j||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),M.clear())})}let S;function k(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function re(t){P().$$.on_mount.push(t)}function se(t){P().$$.after_update.push(t)}function oe(t){P().$$.on_destroy.push(t)}function le(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=nt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const x=[],G=[];let w=[];const J=[],it=Promise.resolve();let B=!1;function rt(){B||(B=!0,it.then(st))}function ce(){return rt(),it}function D(t){w.push(t)}const R=new Set;let b=0;function st(){if(b!==0)return;const t=S;do{try{for(;b<x.length;){const e=x[b];b++,k(e),Mt(e.$$)}}catch(e){throw x.length=0,b=0,e}for(k(null),x.length=0,b=0;G.length;)G.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];R.has(n)||(R.add(n),n())}w.length=0}while(x.length);for(;J.length;)J.pop()();B=!1,R.clear(),k(t)}function Mt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function jt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let N;function Dt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function z(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function ue(){p={r:0,c:[],p}}function ae(){p.r||E(p.c),p=p.p}function Ot(t,e){t&&t.i&&(C.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function de(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,o=null,l=null,c=null;function d(){c&&At(t,c)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=lt,tick:g=v,css:T}=u||Pt,q={start:ft()+_,b:f};f||(q.group=p,p.r+=1),o||l?l=q:(T&&(d(),c=I(t,s,f,m,_,y,T)),f&&g(0,1),o=a(q,m),D(()=>z(t,f,"start")),dt(A=>{if(l&&A>l.start&&(o=a(l,m),l=null,z(t,o.b,"start"),T&&(d(),c=I(t,s,o.b,o.duration,0,y,u.css))),o){if(A>=o.end)g(s=o.b,1-s),z(t,o.b,"end"),l||(o.b?d():--o.group.r||E(o.group.c)),o=null;else if(A>=o.start){const ot=A-o.start;s=o.a+o.d*y(ot/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(f){F(u)?Dt().then(()=>{u=u(r),h(f)}):h(f)},end(){d(),o=l=null}}}const Tt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Tt];function _e(t){t&&t.c()}function he(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(K).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),u.forEach(D)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(jt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(x.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,u,s,o=[-1]){const l=S;k(t);const c=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=_)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](_),d&&zt(t,a)),h}):[],c.update(),d=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){ht();const a=vt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),mt(),st()}k(l)}class pe{$destroy(){Rt(this,1),this.$destroy=v}$on(e,n){if(!F(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{qt as A,Rt as B,Lt as C,Ht as D,It as E,Wt as F,$t as G,v as H,Ft as I,lt as J,Jt as K,wt as L,Zt as M,D as N,de as O,Vt as P,Gt as Q,F as R,pe as S,E as T,le as U,oe as V,Qt as a,Kt as b,te as c,fe as d,Ut as e,ae as f,Ot as g,Y as h,me as i,se as j,Z as k,Yt as l,vt as m,Xt as n,re as o,ne as p,W as q,Nt as r,Bt as s,ce as t,ee as u,ue as v,G as w,ie as x,_e as y,he as z};