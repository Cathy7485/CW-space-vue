import{s as v,l as f,e as h,h as D,o as l,c as r,b as t,F as u,f as y,t as n}from"./index-DKE_Alvk.js";import{a as E}from"./axios-B4uVmeYG.js";import{u as R}from"./statusStore-DycMDKlL.js";var T={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const g={class:"data-list"},k={class:"table table-striped align-middle table-rwd"},A={"data-label":"姓名"},L={"data-label":"公司名稱"},S={"data-label":"連絡電話"},x={"data-label":"email"},V={class:"text-center"},w=["onClick"],$={__name:"Index",setup(B){const i=R(),{isLoading:d}=v(i),_=f(),{VITE_DATA_URL:p}=T,o=h([]),m=async()=>{d.value=!0;const a=`${p}/comments`,s=await E.get(a);o.value=s.data,o.value.sort((e,c)=>c.appointment-e.appointment),d.value=!1},b=a=>{_.push(`/commentList/${a}`)};return D(()=>{m()}),(a,s)=>(l(),r(u,null,[s[1]||(s[1]=t("h4",null,"線上留言-列表",-1)),t("div",g,[t("table",k,[s[0]||(s[0]=t("thead",null,[t("tr",{class:"table-dark"},[t("td",null,"姓名"),t("td",null,"公司名稱"),t("td",null,"連絡電話"),t("td",null,"email"),t("td")])],-1)),t("tbody",null,[(l(!0),r(u,null,y(o.value,e=>(l(),r("tr",{key:e.id},[t("td",A,n(e.name),1),t("td",L,n(e.company),1),t("td",S,n(e.phone),1),t("td",x,n(e.email),1),t("td",V,[t("button",{type:"button",class:"btn btn-sm btn-outline-secondary",onClick:c=>b(e.id)}," 內容 ",8,w)])]))),128))])])])],64))}};export{$ as default};
