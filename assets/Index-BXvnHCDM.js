import{s as h,j as m,e as f,f as D,y,o as l,c as d,b as t,F as i,g as R,l as g,t as s}from"./index-8s_xUr8i.js";import{a as k}from"./axios-B4uVmeYG.js";import{u as E}from"./statusStore-C3eq9W_1.js";var T={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const A=t("h4",null,"預約空間-列表",-1),L={class:"data-list"},S={class:"table table-striped align-middle table-rwd"},w=t("thead",null,[t("tr",{class:"table-dark"},[t("td",null,"填寫時間"),t("td",null,"姓名"),t("td",null,"公司名稱"),t("td",null,"方案"),t("td",null,"空間"),t("td",null,"分類"),t("td",null,"預約時間"),t("td")])],-1),x={"data-label":"填寫時間"},V={"data-label":"姓名"},B={"data-label":"公司名稱"},I={"data-label":"方案"},C={"data-label":"空間"},U={"data-label":"分類"},$={"data-label":"預約時間"},j={class:"text-center"},F=["onClick"],W={__name:"Index",setup(M){const _=E(),{isLoading:r}=h(_),u=m(),{VITE_DATA_URL:p}=T,n=f([]),v=async()=>{r.value=!0;const a=`${p}/reserves`,c=await k.get(a);n.value=c.data,n.value.sort((o,e)=>e.appointment-o.appointment),r.value=!1},b=a=>{u.push(`/reserveList/${a}`)};return D(()=>{v()}),(a,c)=>{const o=y("timeformat");return l(),d(i,null,[A,t("div",L,[t("table",S,[w,t("tbody",null,[(l(!0),d(i,null,R(n.value,e=>(l(),d("tr",{key:e.id},[t("td",x,[g(t("span",null,null,512),[[o,e.appointment]])]),t("td",V,s(e.name),1),t("td",B,s(e.company),1),t("td",I,s(e.plan),1),t("td",C,s(e.space),1),t("td",U,s(e.kind),1),t("td",$,s(e.time),1),t("td",j,[t("button",{type:"button",class:"btn btn-sm btn-outline-secondary",onClick:O=>b(e.id)}," 內容 ",8,F)])]))),128))])])])],64)}}};export{W as default};
