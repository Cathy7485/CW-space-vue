import{_ as w,i as b,j as k,e as u,k as h,r as C,o as _,c as g,a,w as l,d as n,b as i,l as T,v as y,n as t,u as r,m as B,f as E}from"./index-BUk_Pi7G.js";const N={class:"nav navbar navbar-expand-lg nav-bg",ref:"nav"},S={class:"navbar-collapse"},V={class:"navbar-nav"},W={__name:"HeaderComponent",setup(m){const s=b(),c=k(),f=u(null),d=u(!1),v=u(!1),p=()=>{window.scrollY>80?d.value=!0:d.value=!1},x=()=>{v.value=!v.value};return window.addEventListener("scroll",p),h(()=>c.currentRoute.value.name,()=>{v.value=!1}),($,e)=>{const o=C("router-link");return _(),g("header",{class:t(["header",{"fixed-top":d.value}]),ref_key:"header",ref:f},[a(o,{class:"logo",to:"/",ref:"logo"},{default:l(()=>e[0]||(e[0]=[n("CW-space")])),_:1},512),i("button",{class:"navbar-toggler ms-auto",type:"button"},[i("span",{class:"navbar-toggler-icon",onClick:x})]),i("nav",N,[T(i("div",S,[i("div",V,[a(o,{class:t(["nav-link",r(s).path==="/"?"text-white":""]),to:"/about"},{default:l(()=>e[1]||(e[1]=[n(" 關於我們 ")])),_:1},8,["class"]),a(o,{class:t(["nav-link",r(s).path==="/"?"text-white":""]),to:"/space"},{default:l(()=>e[2]||(e[2]=[n(" 空間介紹 ")])),_:1},8,["class"]),a(o,{class:t(["nav-link",r(s).path==="/"?"text-white":""]),to:"/service"},{default:l(()=>e[3]||(e[3]=[n(" 方案介紹 ")])),_:1},8,["class"]),a(o,{class:t(["nav-link",r(s).path==="/"?"text-white":""]),to:"/contact"},{default:l(()=>e[4]||(e[4]=[n(" 聯絡我們 ")])),_:1},8,["class"]),a(o,{class:t(["nav-link",r(s).path==="/"?"text-white":""]),to:"/faq"},{default:l(()=>e[5]||(e[5]=[n(" 常見問題 ")])),_:1},8,["class"]),a(o,{class:t(["nav-link",r(s).path==="/"?"text-white":""]),to:"/reserve"},{default:l(()=>e[6]||(e[6]=[n(" 立即預約 ")])),_:1},8,["class"])])],512),[[y,v.value]])],512)],2)}}},I=w(W,[["__scopeId","data-v-2efb0a20"]]),F="/CW-space-vue/assets/logo-lg-IzMmucen.png",H={},L={class:"footer"};function R(m,s){return _(),g("div",L,s[0]||(s[0]=[B('<div class="container"><div class="row"><div class="col-lg-9 col-md-7"><ul><li>信箱：CWspace@gmail.com</li><li>電話：06-666-6666</li><li>傳真：06-666-6767</li><li>地址：臺南市安平區永華路二段777號</li><li>服務時間：周一至周五 08:30~17:30</li></ul></div><div class="col-lg-3 col-md-5 d-flex align-items-center"><div class="footer-logo"><img src="'+F+'" alt="logo"></div></div></div><div class="copyright"> Copyright © 2024- CW-space All rights reserved. </div></div>',1)]))}const M=w(H,[["render",R]]),Y={__name:"GoTop",setup(m){const s=u(null),c=u(!1),f=()=>{document.scrollingElement.scrollTop=0},d=()=>{window.scrollY>150?c.value=!0:c.value=!1};return E(()=>{window.addEventListener("scroll",d),s.value.addEventListener("click",f)}),(v,p)=>(_(),g("button",{ref_key:"goTopBtn",ref:s,type:"button",class:t(["go-top",{"d-block":c.value}])},p[0]||(p[0]=[i("span",null,"回頂端",-1)]),2))}};export{M as F,I as H,Y as _};
