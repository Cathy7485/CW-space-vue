import{s as x,e as m,f as y,o as s,c as t,a as b,u as e,b as a,F as i,g as _,n as N,t as r,d as B,h}from"./index-CtDL4sg3.js";import{u as C}from"./spaceStore-CGZ3sK7A.js";import{_ as S}from"./PageBanner-B79xvVyk.js";import"./statusStore-CHkOZXJh.js";import"./axios-B4uVmeYG.js";const T="/CW-space-vue/assets/plan-banner-BkqdBv23.jpg",V={class:"block container mt-5"},L={class:"space-tabs"},$=["onClick"],F={class:"img"},I=["src"],P={class:"right"},U={class:"name"},j={key:0},q={key:1},w={key:2},z={class:"text-bg"},D={key:1,class:"d-flex align-item-center flex-column"},E=a("h2",{class:"text-center mb-3"},"不限空間種類，每月租金打0.8折，會議室免費使用",-1),M=a("h4",{class:"text-center mb-3"},"細節請來電聯繫專人為您服務！",-1),R=a("h4",{class:"text-center"},[a("a",{class:"text-danger",href:"tel:+886-6-666-6666"},"06-666-6666")],-1),W=[E,M,R],Z={__name:"ServiceView",setup(A){const d=C(),{getSpaceList:p,changeIdx:v,getPlanList:g}=d,{activePlan:u,activeIdx:c,planList:l}=x(d),k=m("方案介紹"),f=m(["日租方案","月租方案","年租方案"]);return y(()=>{p(),c.value=0}),(G,H)=>(s(),t(i,null,[b(S,{"images-url":e(T),"page-title":k.value},null,8,["images-url","page-title"]),a("div",V,[a("div",L,[(s(!0),t(i,null,_(f.value,(n,o)=>(s(),t("div",{key:n,class:N(["space-tab-item",{active:o===e(c)}]),onClick:J=>e(v)(o)},r(n),11,$))),128))]),e(u).length>0?(s(!0),t(i,{key:0},_(e(u),n=>(s(),t("div",{class:"service-detail",key:n.id},[a("div",F,[a("img",{src:n.imgUrl[0],alt:""},null,8,I)]),a("div",P,[a("div",U,r(n.name),1),(s(!0),t(i,null,_(e(g)(n.name),o=>(s(),t("div",{key:o},[B(" NT$ "+r(o.price[e(l)[e(c)]])+" / ",1),e(l)[e(c)]==="day"?(s(),t("span",j,"日")):e(l)[e(c)]==="month"?(s(),t("span",q,"月")):h("",!0),n.name==="獨立辦公空間"?(s(),t("span",w," ( "+r(o.sort)+" 辦公室 )",1)):h("",!0)]))),128)),a("div",z,r(n.enName),1)])]))),128)):(s(),t("div",D,W))])],64))}};export{Z as default};
