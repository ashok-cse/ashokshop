import"./navigation-f5e1c401.js";import{r as m}from"./index-297b380d.js";import{c as i}from"./cookie-universal-common-1e0fc125.js";i();const p=!1;async function f({url:e,params:h,parent:a,fetch:l}){const{me:t,cart:r,store:o}=await a();if(!t)throw m(302,`/auth/otp-login?ref=${e.pathname}${e.search}`);const s=e.pathname==="/";let n=+e.searchParams.get("page")||1,c=e.searchParams.get("q")||"";return{url:e.href,currentPage:n,q:c,isHome:s,me:t,cart:r,store:o}}const u=Object.freeze(Object.defineProperty({__proto__:null,prerender:p,load:f},Symbol.toStringTag,{value:"Module"}));export{u as _,f as l,p};
