import{g as o}from"./api-fa739876.js";const c=!1;async function s({url:e,params:l,fetch:n,context:p}){let r=e.searchParams.get("ref"),a=e.searchParams.get("product"),t;try{t=await o(`products/${a}`)}catch{}finally{}return{ref:r,product:t}}const u=Object.freeze(Object.defineProperty({__proto__:null,prerender:c,load:s},Symbol.toStringTag,{value:"Module"}));export{u as _,s as l,c as p};