import{s as v,i as b,j as f,e as k,J as D,f as y,o as g,c as R,b as t,t as l,F as E,O as T}from"./index-BUk_Pi7G.js";import{a as x}from"./axios-B4uVmeYG.js";import{u as A}from"./statusStore-CIKxEbig.js";var S={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const V={class:"table table-bordered border-secondary mb-4"},_={__name:"[id]",setup(B){const n=A(),{isLoading:o}=v(n),r=b(),u=f(),{VITE_DATA_URL:d}=S,a=k([]),i=async()=>{o.value=!0;const{id:e}=r.params,s=`${d}/visit/${e}`,m=await x.get(s);a.value=m.data,o.value=!1},p=()=>{u.go(-1)},c=D(()=>T.unix(a.value.appointment).format("YYYY/MM/DD"));return y(()=>{try{i()}catch{console.log("資料存取錯誤，請重新再試")}}),(e,s)=>(g(),R(E,null,[s[7]||(s[7]=t("h4",{class:"mb-4"},"預約內容",-1)),t("table",V,[t("tbody",null,[t("tr",null,[s[0]||(s[0]=t("td",{class:"table-dark"},"填寫時間",-1)),t("td",null,l(c.value),1)]),t("tr",null,[s[1]||(s[1]=t("td",{class:"table-dark"},"姓名",-1)),t("td",null,l(a.value.name),1)]),t("tr",null,[s[2]||(s[2]=t("td",{class:"table-dark"},"公司名稱",-1)),t("td",null,l(a.value.company),1)]),t("tr",null,[s[3]||(s[3]=t("td",{class:"table-dark"},"連絡電話",-1)),t("td",null,l(a.value.phone),1)]),t("tr",null,[s[4]||(s[4]=t("td",{class:"table-dark"},"信箱",-1)),t("td",null,l(a.value.email),1)]),t("tr",null,[s[5]||(s[5]=t("td",{class:"table-dark"},"參觀空間",-1)),t("td",null,l(a.value.space),1)]),t("tr",null,[s[6]||(s[6]=t("td",{class:"table-dark"},"參觀時間",-1)),t("td",null,l(a.value.time),1)])])]),t("div",{class:"text-center"},[t("button",{type:"button",class:"btn btn-secondary",onClick:p},"返回列表")])],64))}};export{_ as default};
