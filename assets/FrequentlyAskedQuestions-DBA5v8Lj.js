import{x as d,e as u,s as _,f as p,o as c,c as r,b as a,F as f,g as h,t as i,u as b}from"./index-Dxvrt6TE.js";import{u as g}from"./statusStore-C1JuOEDb.js";import{a as v}from"./axios-B4uVmeYG.js";var q={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_DATA_URL:S}=q,m=d("fqaStore",()=>{const t=u([]),e=g(),{loadingActive:o}=e;return{getFqaList:async()=>{o(!0);const l=await v.get(`${S}/fqa`);t.value=l.data,o(!1)},fqaList:t}}),A={class:"block home-faq"},E={class:"faq-list accordion accordion-flush",id:"accordionFlushExample"},F=["id"],L=["data-bs-target","aria-controls"],y=["id","aria-labelledby"],x={class:"accordion-body"},k={__name:"FrequentlyAskedQuestions",setup(t){const e=m(),{fqaList:o}=_(e),{getFqaList:n}=e;return p(()=>n()),(l,T)=>(c(),r("div",A,[a("div",E,[(c(!0),r(f,null,h(b(o),s=>(c(),r("div",{class:"accordion-item",key:s.id},[a("h2",{class:"accordion-header",id:`flush-heading-${s.id}`},[a("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":`#flush-collapse-${s.id}`,"aria-expanded":"false","aria-controls":`flush-collapse-${s.id}`}," Q. "+i(s.question),9,L)],8,F),a("div",{id:`flush-collapse-${s.id}`,class:"accordion-collapse collapse","aria-labelledby":`flush-heading-${s.id}`,"data-bs-parent":"#accordionFlushExample"},[a("div",x," A. "+i(s.answer),1)],8,y)]))),128))])]))}};export{k as _};
