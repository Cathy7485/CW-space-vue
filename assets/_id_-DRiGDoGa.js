import{s as v,i as b,j as m,e as h,q as f,f as k,o as D,c as y,b as t,t as s,F as R,B as g}from"./index-CtDL4sg3.js";import{a as E}from"./axios-B4uVmeYG.js";import{u as T}from"./statusStore-CHkOZXJh.js";var x={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const A=t("h4",{class:"mb-4"},"預約內容",-1),B={class:"table table-bordered border-secondary mb-4"},S=t("td",{class:"table-dark"},"填寫時間",-1),V=t("td",{class:"table-dark"},"姓名",-1),L=t("td",{class:"table-dark"},"公司名稱",-1),M=t("td",{class:"table-dark"},"連絡電話",-1),Y=t("td",{class:"table-dark"},"信箱",-1),j=t("td",{class:"table-dark"},"方案",-1),w=t("td",{class:"table-dark"},"空間",-1),I=t("td",{class:"table-dark"},"空間分類",-1),U=t("td",{class:"table-dark"},"預約時間",-1),$={__name:"[id]",setup(C){const n=T(),{isLoading:l}=v(n),r=b(),c=m(),{VITE_DATA_URL:u}=x,e=h([]),d=async()=>{l.value=!0;const{id:a}=r.params,o=`${u}/reserves/${a}`,p=await E.get(o);e.value=p.data,l.value=!1},_=()=>{c.go(-1)},i=f(()=>g.unix(e.value.appointment).format("YYYY/MM/DD"));return k(()=>{try{d()}catch{console.log("資料存取錯誤，請重新再試")}}),(a,o)=>(D(),y(R,null,[A,t("table",B,[t("tbody",null,[t("tr",null,[S,t("td",null,s(i.value),1)]),t("tr",null,[V,t("td",null,s(e.value.name),1)]),t("tr",null,[L,t("td",null,s(e.value.company),1)]),t("tr",null,[M,t("td",null,s(e.value.phone),1)]),t("tr",null,[Y,t("td",null,s(e.value.email),1)]),t("tr",null,[j,t("td",null,s(e.value.plan),1)]),t("tr",null,[w,t("td",null,s(e.value.space),1)]),t("tr",null,[I,t("td",null,s(e.value.kind),1)]),t("tr",null,[U,t("td",null,s(e.value.time),1)])])]),t("div",{class:"text-center"},[t("button",{type:"button",class:"btn btn-secondary",onClick:_},"返回列表")])],64))}};export{$ as default};