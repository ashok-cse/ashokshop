import{g as l}from"./api-fa739876.js";async function g({url:p,params:f,fetch:m,parent:i,setHeaders:s}){var n;const{store:t}=await i();let r=!1,e,o,c;try{r=!0,e=(await l(`categories/megamenu?store=${t==null?void 0:t.id}`)).filter(d=>d.name==="New Arrivals");const a=await l(`products?categories=${(n=e[0])==null?void 0:n._id}&store=${t==null?void 0:t.id}`);o=a==null?void 0:a.data,c=a==null?void 0:a.count}catch{}finally{r=!1}return s({"cache-control":"public, max-age=300"}),{newArrivals:e,products:o,productsCount:c}}const w=Object.freeze(Object.defineProperty({__proto__:null,load:g},Symbol.toStringTag,{value:"Module"}));export{w as _,g as l};