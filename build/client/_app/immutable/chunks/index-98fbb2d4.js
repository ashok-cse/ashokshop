function x(){}const J=t=>t;function Ct(t,e){for(const n in e)t[n]=e[n];return t}function Tt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function _t(t){return t()}function ot(){return Object.create(null)}function S(t){t.forEach(_t)}function B(t){return typeof t=="function"}function ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function ie(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function Mt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function se(t){let e;return ht(t,n=>e=n)(),e}function re(t,e,n){t.$$.on_destroy.push(ht(e,n))}function ce(t,e,n,i){if(t){const s=mt(t,e,n,i);return t[0](s)}}function mt(t,e,n,i){return t[1]&&i?Ct(n.ctx.slice(),t[1](i(e))):n.ctx}function le(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function oe(t,e,n,i,s,c){if(s){const r=mt(e,n,i,c);t.p(r,s)}}function ae(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ue(t){return t==null?"":t}function fe(t,e,n){return t.set(n),e}function de(t){return t&&B(t.destroy)?t.destroy:x}const pt=typeof window<"u";let K=pt?()=>window.performance.now():()=>Date.now(),nt=pt?t=>requestAnimationFrame(t):x;const N=new Set;function yt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&nt(yt)}function Q(t){let e;return N.size===0&&nt(yt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let V=!1;function jt(){V=!0}function Dt(){V=!1}function qt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:qt(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[d]+1;const f=d+1;n[f]=l,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(r[l],d)}}function gt(t,e){t.appendChild(e)}function bt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function zt(t){const e=X("style");return Bt(bt(t),e),e.sheet}function Bt(t,e){return gt(t.head||t,e),e.sheet}function Ht(t,e){if(V){for(Rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){t.insertBefore(e,n||null)}function Ot(t,e,n){V&&!n?Ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function _e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function it(t){return document.createTextNode(t)}function he(){return it(" ")}function me(){return it("")}function at(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ye(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:xt(t,i,e[i])}function ge(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:xt(t,e,n)}function be(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function we(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function vt(t,e,n,i,s=!1){$t(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function kt(t,e,n,i){return vt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function xe(t,e,n){return kt(t,e,n,X)}function $e(t,e,n){return kt(t,e,n,wt)}function Wt(t,e){return vt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>it(e),!0)}function ve(t){return Wt(t," ")}function ut(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ke(t,e){const n=ut(t,"HTML_TAG_START",0),i=ut(t,"HTML_TAG_END",n);if(n===i)return new ft(void 0,e);$t(t);const s=t.splice(n,i-n+1);C(s[0]),C(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ft(c,e)}function Ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ae(t,e){t.value=e==null?"":e}function Se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ne(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Ce(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let P;function It(){if(P===void 0){P=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{P=!0}}return P}function Te(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=It();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=at(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=at(i.contentWindow,"resize",e)}),gt(t,i),()=>{(s||c&&i.contentWindow)&&c(),C(i)}}function Me(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function je(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ft{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=wt(n.nodeName):this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class ft extends Ft{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ot(this.t,this.n[n],e)}}const G=new Map;let U=0;function Gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ut(t,e){const n={stylesheet:zt(e),rules:{}};return G.set(t,n),n}function q(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Gt(d)}_${o}`,u=bt(t),{stylesheet:_,rules:h}=G.get(u)||Ut(u,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,U+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),U-=s,U||Jt())}function Jt(){nt(()=>{U||(G.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),G.clear())})}function De(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:c=0,duration:r=300,easing:o=J,start:l=K()+c,end:a=l+r,tick:d=x,css:f}=n(t,{from:e,to:s},i);let u=!0,_=!1,h;function p(){f&&(h=q(t,0,1,r,c,o,f)),c||(_=!0)}function m(){f&&R(t,h),u=!1}return Q(g=>{if(!_&&g>=l&&(_=!0),_&&g>=a&&(d(1,0),m()),!u)return!1;if(_){const b=g-l,w=0+1*o(b/r);d(w,1-w)}return!0}),p(),d(0,1),m}function qe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Kt(t,s)}}function Kt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let z;function E(t){z=t}function M(){if(!z)throw new Error("Function called outside component initialization");return z}function Re(t){M().$$.before_update.push(t)}function ze(t){M().$$.on_mount.push(t)}function Be(t){M().$$.after_update.push(t)}function He(t){M().$$.on_destroy.push(t)}function Le(){const t=M();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=Et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Oe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const D=[],dt=[],I=[],tt=[],At=Promise.resolve();let et=!1;function St(){et||(et=!0,At.then(st))}function Pe(){return St(),At}function T(t){I.push(t)}function We(t){tt.push(t)}const Z=new Set;let W=0;function st(){const t=z;do{for(;W<D.length;){const e=D[W];W++,E(e),Qt(e.$$)}for(E(null),D.length=0,W=0;dt.length;)dt.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];Z.has(n)||(Z.add(n),n())}I.length=0}while(D.length);for(;tt.length;)tt.pop()();et=!1,Z.clear(),E(t)}function Qt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let j;function rt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function A(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const F=new Set;let k;function Vt(){k={r:0,c:[],p:k}}function Xt(){k.r||S(k.c),k=k.p}function ct(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Nt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),k.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt={duration:0};function Ie(t,e,n){let i=e(t,n),s=!1,c,r,o=0;function l(){c&&R(t,c)}function a(){const{delay:f=0,duration:u=300,easing:_=J,tick:h=x,css:p}=i||lt;p&&(c=q(t,0,1,u,f,_,p,o++)),h(0,1);const m=K()+f,g=m+u;r&&r.abort(),s=!0,T(()=>A(t,!0,"start")),r=Q(b=>{if(s){if(b>=g)return h(1,0),A(t,!0,"end"),l(),s=!1;if(b>=m){const w=_((b-m)/u);h(w,1-w)}}return s})}let d=!1;return{start(){d||(d=!0,R(t),B(i)?(i=i(),rt().then(a)):a())},invalidate(){d=!1},end(){s&&(l(),s=!1)}}}function Fe(t,e,n){let i=e(t,n),s=!0,c;const r=k;r.r+=1;function o(){const{delay:l=0,duration:a=300,easing:d=J,tick:f=x,css:u}=i||lt;u&&(c=q(t,1,0,a,l,d,u));const _=K()+l,h=_+a;T(()=>A(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),A(t,!1,"end"),--r.r||S(r.c),!1;if(p>=_){const m=d((p-_)/a);f(1-m,m)}}return s})}return B(i)?rt().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),s&&(c&&R(t,c),s=!1)}}}function Ge(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,o=null,l=null;function a(){l&&R(t,l)}function d(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function f(u){const{delay:_=0,duration:h=300,easing:p=J,tick:m=x,css:g}=s||lt,b={start:K()+_,b:u};u||(b.group=k,k.r+=1),r||o?o=b:(g&&(a(),l=q(t,c,u,h,_,p,g)),u&&m(0,1),r=d(b,h),T(()=>A(t,u,"start")),Q(w=>{if(o&&w>o.start&&(r=d(o,h),o=null,A(t,r.b,"start"),g&&(a(),l=q(t,c,r.b,r.duration,0,p,s.css))),r){if(w>=r.end)m(c=r.b,1-c),A(t,r.b,"end"),o||(r.b?a():--r.group.r||S(r.group.c)),r=null;else if(w>=r.start){const H=w-r.start;c=r.a+r.d*p(H/r.duration),m(c,1-c)}}return!!(r||o)}))}return{run(u){B(s)?rt().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=o=null}}}function Ue(t,e){const n=e.token={};function i(s,c,r,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;r!==void 0&&(l=l.slice(),l[r]=o);const a=s&&(e.current=s)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==c&&f&&(Vt(),Nt(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Xt())}):e.block.d(1),a.c(),ct(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[c]=a),d&&st()}if(Tt(t)){const s=M();if(t.then(c=>{E(s),i(e.then,1,e.value,c),E(null)},c=>{if(E(s),i(e.catch,2,e.error,c),E(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Je(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Ke=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Qe(t,e){t.d(1),e.delete(t.key)}function Yt(t,e){Nt(t,1,1,()=>{e.delete(t.key)})}function Ve(t,e){t.f(),Yt(t,e)}function Xe(t,e,n,i,s,c,r,o,l,a,d,f){let u=t.length,_=c.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=_;h--;){const y=f(s,c,h),$=n(y);let v=r.get($);v?i&&v.p(y,e):(v=a($,y),v.c()),g.set($,m[h]=v),$ in p&&b.set($,Math.abs(h-p[$]))}const w=new Set,H=new Set;function Y(y){ct(y,1),y.m(o,d),r.set(y.key,y),d=y.first,_--}for(;u&&_;){const y=m[_-1],$=t[u-1],v=y.key,L=$.key;y===$?(d=y.first,u--,_--):g.has(L)?!r.has(v)||w.has(v)?Y(y):H.has(L)?u--:b.get(v)>b.get(L)?(H.add(v),Y(y)):(w.add(L),u--):(l($,r),u--)}for(;u--;){const y=t[u];g.has(y.key)||l(y,r)}for(;_;)Y(m[_-1]);return m}function Ye(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ze(t){return typeof t=="object"&&t!==null?t:{}}function tn(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function en(t){t&&t.c()}function nn(t,e){t&&t.l(e)}function Zt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||T(()=>{const l=c.map(_t).filter(B);r?r.push(...l):S(l),t.$$.on_mount=[]}),o.forEach(T)}function te(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(t,e){t.$$.dirty[0]===-1&&(D.push(t),St(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function sn(t,e,n,i,s,c,r,o=[-1]){const l=z;E(t);const a=t.$$={fragment:null,ctx:null,props:c,update:x,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ot(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,..._)=>{const h=_.length?_[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&ee(t,f)),u}):[],a.update(),d=!0,S(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){jt();const f=Pt(e.target);a.fragment&&a.fragment.l(f),f.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&ct(t.$$.fragment),Zt(t,e.target,e.anchor,e.customElement),Dt(),st()}E(l)}class rn{$destroy(){te(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{K as $,x as A,ce as B,Ht as C,oe as D,ae as E,le as F,re as G,B as H,_e as I,Xe as J,qe as K,Kt as L,De as M,T as N,Ie as O,Fe as P,Ve as Q,at as R,rn as S,S as T,J as U,wt as V,$e as W,Ke as X,Ge as Y,se as Z,Ct as _,he as a,Q as a0,ie as a1,He as a2,Me as a3,Le as a4,Re as a5,dt as a6,ge as a7,Te as a8,Yt as a9,ye as aa,Ae as ab,Ye as ac,Ze as ad,pe as ae,tn as af,We as ag,ft as ah,ke as ai,fe as aj,ue as ak,Ue as al,Je as am,je as an,Ce as ao,Ne as ap,be as aq,Qe as ar,we as as,Oe as at,de as au,Ot as b,ve as c,Xt as d,me as e,ct as f,Vt as g,C as h,sn as i,Be as j,X as k,xe as l,Pt as m,xt as n,ze as o,Se as p,it as q,Wt as r,ne as s,Nt as t,Ee as u,en as v,nn as w,Zt as x,te as y,Pe as z};
