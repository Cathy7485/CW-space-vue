import{x as _,e as l,q as a}from"./index-DbwF4kcF.js";import{u as g}from"./statusStore-DIbjkyLJ.js";import{a as I}from"./axios-B4uVmeYG.js";var T={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_DATA_URL:h}=T,R=_("spaceStore",()=>{const t=l([]),s=l(0),o=l(["day","month","year"]),n=l(1),i=g(),{loadingActive:r}=i,c=a(()=>t.value.find(e=>e.id===s.value+1)||null),v=a(()=>c.value?c.value.type:null),d=a(()=>c.value&&c.value.space?c.value.space.type:null),y=a(()=>t.value.filter(e=>{const S=o.value[s.value];return e.type[0]&&e.type[0].price&&Object.keys(e.type[0].price).includes(S)})),u=a(()=>t.value.filter(e=>e.type[0]&&e.type[0].price&&!Object.keys(e.type[0].price).includes("free"))),p=a(()=>u.value.find(e=>e.id===n.value)||null),f=a(()=>p.value?p.value.type:null);return{getSpaceList:async()=>{try{r(!0);const e=await I.get(`${h}/spaces`);t.value=e.data}catch(e){console.error("Error loading space list:",e),t.value=[]}finally{r(!1)}},changeIdx:e=>{s.value=e},changeSpaceId:e=>{n.value=e},spaceList:t,activeIdx:s,activeSpace:c,spaceDetail:v,spaceType:d,planList:o,activePlan:y,spacePlan:u,spaceId:n,pickedSpace:p,pickedType:f}});export{R as u};
