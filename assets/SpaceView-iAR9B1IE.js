import{r as x,o as t,c as o,b as s,a,w as v,d as n,u as d,F as c,e as f,s as $,m as L,f as S,g as p,n as B,t as _,q as V}from"./index-C1IzmBdl.js";import{u as q}from"./spaceStore-DMetbgw_.js";import{_ as N}from"./PageBanner-IdlZOiti.js";import"./axios-B4uVmeYG.js";const I="/CW-space-vue/assets/seat-bg-BzqqmJ59.svg",T={class:"flex-title"},z=s("div",{class:"title"},"空間資訊",-1),E={class:"container"},F={class:"row"},H=s("div",{class:"col-lg-6"},null,-1),M={class:"col-lg-6"},U={class:"seat-display"},W=["src"],j=s("div",{class:"remaining-seats"},[n(" 座位剩餘："),s("span",{class:"qty"},"8"),n("個 ")],-1),A=s("div",{class:"seat-text"},"座位表",-1),D={__name:"CoworkingSpace",setup(k){return(i,g)=>{const l=x("router-link");return t(),o(c,null,[s("div",T,[z,a(l,{to:"reserve",class:"button primary"},{default:v(()=>[n("立即預約")]),_:1})]),s("div",E,[s("div",F,[H,s("div",M,[s("div",U,[s("img",{src:d(I),alt:"座位圖"},null,8,W),j,A])])])])],64)}}},J="/CW-space-vue/assets/shared-banner-BgCOtoS9.jpg",O="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0364%203.7428L12.077%202.70217C12.5176%202.26155%2013.2301%202.26155%2013.6661%202.70217L22.7786%2011.81C23.2192%2012.2506%2023.2192%2012.9631%2022.7786%2013.399L13.6661%2022.5115C13.2254%2022.9522%2012.5129%2022.9522%2012.077%2022.5115L11.0364%2021.4709C10.5911%2021.0256%2010.6004%2020.299%2011.0551%2019.8631L16.7036%2014.4819H3.23169C2.60825%2014.4819%202.10669%2013.9803%202.10669%2013.3569V11.8569C2.10669%2011.2334%202.60825%2010.7319%203.23169%2010.7319H16.7036L11.0551%205.35061C10.5958%204.91467%2010.5864%204.18811%2011.0364%203.7428Z'%20fill='%23848484'/%3e%3c/svg%3e",R={class:"block container space-page mt-5"},Z={class:"space-tabs"},G=["onClick"],K={class:"space-info"},P={class:"col-lg-5 d-flex flex-column"},Q={class:"space-title"},X={class:"d-block mb-3"},Y=s("div",null,"開放時間：",-1),ss={key:0},es={class:"gray-info"},ts=s("div",{class:"title"},"詳細資訊",-1),os={class:"p-3"},as={class:"mt-auto"},cs={class:"col-lg-7 gy-5 gy-lg-0 position-relative"},ns={class:"space-img-box",loop:"true",navigation:{nextEl:".custom-next"}},is=["src","alt"],ls={class:"custom-next space-next-btn"},rs=["src"],_s={class:"space-detail"},ms={__name:"SpaceView",setup(k){const i=f(1),g=f("空間介紹"),l=q(),{spaceList:m}=$(l),{getSpaceList:C}=l,w=r=>{i.value=r},b=L(()=>m.value.filter(r=>r.id===i.value));return S(()=>{C()}),(r,ds)=>{const h=x("router-link");return t(),o(c,null,[a(N,{"images-url":d(J),"page-title":g.value},null,8,["images-url","page-title"]),s("div",R,[s("div",Z,[(t(!0),o(c,null,p(d(m),e=>(t(),o("div",{key:e.id,class:B(["space-tab-item",{active:e.id===i.value}]),onClick:u=>w(e.id)},_(e.name),11,G))),128))]),s("div",K,[(t(!0),o(c,null,p(b.value,e=>(t(),o("div",{class:"row",key:e.id},[s("div",P,[s("div",Q,_(e.name),1),s("div",X,[Y,e.open.weekdays?(t(),o("p",ss,"週一到週五 "+_(e.open.weekdays)+" (不含例假日)",1)):V("",!0)]),s("div",es,[ts,s("div",os,_(e.info),1)]),s("div",as,[a(h,{to:"reserve",class:"button primary me-3"},{default:v(()=>[n("立即預約")]),_:1}),a(h,{to:"reserve",class:"button"},{default:v(()=>[n("了解方案")]),_:1})])]),s("div",cs,[s("swiper-container",ns,[(t(!0),o(c,null,p(e.imgUrl,(u,y)=>(t(),o("swiper-slide",{class:"space-img",key:u},[s("img",{src:u,alt:`圖片${y}`},null,8,is)]))),128))]),s("div",ls,[s("img",{src:d(O),alt:"下一張圖片"},null,8,rs)])])]))),128))]),s("div",_s,[a(D)])])],64)}}};export{ms as default};
