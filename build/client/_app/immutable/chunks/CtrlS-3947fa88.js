import{S as O,i as R,s as j,e as M,b as S,R as K,f as x,g as z,t as L,d as F,h as f,a4 as U,k as g,a as C,q as w,l as b,m as v,c as N,r as E,n as d,C as p,ae as Y,N as G,Y as D,A as J,I as Q,ah as W,ai as X}from"./index-98fbb2d4.js";import{a as V}from"./index-7636af81.js";function q(r,e,n){const t=r.slice();return t[8]=e[n],t}function B(r){let e,n,t,s,a,l,c,i,h,k,o;function T(u,m){return u[0]?se:u[3]?ee:u[4]&&u[4].length?$:Z}let y=T(r),_=y(r);return{c(){e=g("div"),n=g("h6"),_.c(),t=C(),s=g("form"),a=g("button"),l=w("SAVE"),this.h()},l(u){e=b(u,"DIV",{class:!0});var m=v(e);n=b(m,"H6",{class:!0});var A=v(n);_.l(A),A.forEach(f),t=N(m),s=b(m,"FORM",{class:!0});var P=v(s);a=b(P,"BUTTON",{class:!0,type:!0});var H=v(a);l=E(H,"SAVE"),H.forEach(f),P.forEach(f),m.forEach(f),this.h()},h(){d(n,"class","flex max-w-max flex-row items-center gap-2 text-gray-600 md:mx-auto"),d(a,"class",c="btn px-10 sm:px-16 "+(r[0]?"loading":"")),d(a,"type","submit"),d(s,"class","max-w-max"),d(e,"class","bg-primary-100 fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between p-2 text-center text-sm shadow-lg md:p-3 md:px-5")},m(u,m){S(u,e,m),p(e,n),_.m(n,null),p(e,t),p(e,s),p(s,a),p(a,l),h=!0,k||(o=K(s,"submit",Y(r[5])),k=!0)},p(u,m){y===(y=T(u))&&_?_.p(u,m):(_.d(1),_=y(u),_&&(_.c(),_.m(n,null))),(!h||m&1&&c!==(c="btn px-10 sm:px-16 "+(u[0]?"loading":"")))&&d(a,"class",c)},i(u){h||(G(()=>{i||(i=D(e,V,{y:-20,duration:300},!0)),i.run(1)}),h=!0)},o(u){i||(i=D(e,V,{y:-20,duration:300},!1)),i.run(0),h=!1},d(u){u&&f(e),_.d(),u&&i&&i.end(),k=!1,o()}}}function Z(r){let e,n,t,s,a,l,c;return{c(){e=g("span"),n=w("There are unsaved changes on this page. Press"),t=C(),s=g("span"),a=g("b"),l=w("Ctrl + S"),c=w(" to save."),this.h()},l(i){e=b(i,"SPAN",{class:!0});var h=v(e);n=E(h,"There are unsaved changes on this page. Press"),h.forEach(f),t=N(i),s=b(i,"SPAN",{});var k=v(s);a=b(k,"B",{});var o=v(a);l=E(o,"Ctrl + S"),o.forEach(f),c=E(k," to save."),k.forEach(f),this.h()},h(){d(e,"class","sm:block")},m(i,h){S(i,e,h),p(e,n),S(i,t,h),S(i,s,h),p(s,a),p(a,l),p(s,c)},p:J,d(i){i&&f(e),i&&f(t),i&&f(s)}}}function $(r){let e,n=r[4],t=[];for(let s=0;s<n.length;s+=1)t[s]=I(q(r,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=M()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=M()},m(s,a){for(let l=0;l<t.length;l+=1)t[l].m(s,a);S(s,e,a)},p(s,a){if(a&16){n=s[4];let l;for(l=0;l<n.length;l+=1){const c=q(s,n,l);t[l]?t[l].p(c,a):(t[l]=I(c),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},d(s){Q(t,s),s&&f(e)}}}function ee(r){let e,n=(r[3]||"Success.")+"";return{c(){e=g("span"),this.h()},l(t){e=b(t,"SPAN",{class:!0});var s=v(e);s.forEach(f),this.h()},h(){d(e,"class","sm:block ")},m(t,s){S(t,e,s),e.innerHTML=n},p(t,s){s&8&&n!==(n=(t[3]||"Success.")+"")&&(e.innerHTML=n)},d(t){t&&f(e)}}}function se(r){let e,n=(r[2]||"Saving...")+"";return{c(){e=g("span"),this.h()},l(t){e=b(t,"SPAN",{class:!0});var s=v(e);s.forEach(f),this.h()},h(){d(e,"class","sm:block ")},m(t,s){S(t,e,s),e.innerHTML=n},p(t,s){s&4&&n!==(n=(t[2]||"Saving...")+"")&&(e.innerHTML=n)},d(t){t&&f(e)}}}function I(r){let e,n,t=r[8].message+"",s;return{c(){e=g("span"),n=new W(!1),s=C(),this.h()},l(a){e=b(a,"SPAN",{class:!0});var l=v(e);n=X(l,!1),s=N(l),l.forEach(f),this.h()},h(){n.a=s,d(e,"class","sm:block ")},m(a,l){S(a,e,l),n.m(t,e),p(e,s)},p(a,l){l&16&&t!==(t=a[8].message+"")&&n.p(t)},d(a){a&&f(e)}}}function te(r){let e,n,t,s,a=r[1]&&B(r);return{c(){a&&a.c(),e=M()},l(l){a&&a.l(l),e=M()},m(l,c){a&&a.m(l,c),S(l,e,c),n=!0,t||(s=K(window,"keydown",r[6]),t=!0)},p(l,[c]){l[1]?a?(a.p(l,c),c&2&&x(a,1)):(a=B(l),a.c(),x(a,1),a.m(e.parentNode,e)):a&&(z(),L(a,1,1,()=>{a=null}),F())},i(l){n||(x(a),n=!0)},o(l){L(a),n=!1},d(l){a&&a.d(l),l&&f(e),t=!1,s()}}}function ae(r,e,n){const t=U();let{loading:s=!1,formChanged:a=!1,loadingMessage:l=null,successMessage:c=null,errors:i=null}=e;function h(){t("save")}function k(o){!(o.keyCode===83&&(o.ctrlKey||o.metaKey))||(o.preventDefault(),t("save"))}return r.$$set=o=>{"loading"in o&&n(0,s=o.loading),"formChanged"in o&&n(1,a=o.formChanged),"loadingMessage"in o&&n(2,l=o.loadingMessage),"successMessage"in o&&n(3,c=o.successMessage),"errors"in o&&n(4,i=o.errors)},[s,a,l,c,i,h,k]}class re extends O{constructor(e){super(),R(this,e,ae,te,j,{loading:0,formChanged:1,loadingMessage:2,successMessage:3,errors:4})}}export{re as C};