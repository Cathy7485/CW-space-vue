import{s as p,i as b,j as v,e as f,f as k,o as g,c as y,b as t,t as a,F as D}from"./index-BUk_Pi7G.js";import{a as R}from"./axios-B4uVmeYG.js";import{u as _}from"./statusStore-CIKxEbig.js";var E={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const T={class:"table table-bordered border-secondary mb-4"},x={__name:"[id]",setup(A){const n=_(),{isLoading:o}=p(n),r=b(),u=v(),{VITE_DATA_URL:d}=E,s=f({}),c=async()=>{o.value=!0;const{id:l}=r.params,e=`${d}/comments/${l}`,m=await R.get(e);s.value=m.data,o.value=!1},i=()=>{u.go(-1)};return k(()=>{try{c()}catch{console.log("資料存取錯誤，請重新再試")}}),(l,e)=>(g(),y(D,null,[e[5]||(e[5]=t("h4",{class:"mb-4"},"留言內容",-1)),t("table",T,[t("tbody",null,[t("tr",null,[e[0]||(e[0]=t("td",{class:"table-dark"},"姓名",-1)),t("td",null,a(s.value.name),1)]),t("tr",null,[e[1]||(e[1]=t("td",{class:"table-dark"},"公司名稱",-1)),t("td",null,a(s.value.company),1)]),t("tr",null,[e[2]||(e[2]=t("td",{class:"table-dark"},"連絡電話",-1)),t("td",null,a(s.value.phone),1)]),t("tr",null,[e[3]||(e[3]=t("td",{class:"table-dark"},"信箱",-1)),t("td",null,a(s.value.email),1)]),t("tr",null,[e[4]||(e[4]=t("td",{class:"table-dark"},"問題內容",-1)),t("td",null,a(s.value.content),1)])])]),t("div",{class:"text-center"},[t("button",{type:"button",class:"btn btn-secondary",onClick:i},"返回列表")])],64))}};export{x as default};
