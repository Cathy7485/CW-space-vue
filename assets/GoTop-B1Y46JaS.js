import{_ as r,r as u,o as i,c as d,b as s,a,w as l,d as n,h as g,i as m}from"./index-Cdrxrgta.js";const h={name:"HomeHeader"},f={class:"nav navbar navbar-expand-lg nav-bg fixed-top",ref:"nav"},b={class:"container d-flex"},$=s("button",{class:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),k={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},w={class:"navbar-nav w-100 d-flex justify-content-end"};function x(e,t,v,p,_,c){const o=u("router-link");return i(),d("nav",f,[s("div",b,[a(o,{class:"logo",to:"/",ref:"logo"},{default:l(()=>[n("CW-space")]),_:1},512),$,s("div",k,[s("div",w,[a(o,{class:"nav-link",to:"/about"},{default:l(()=>[n("關於我們")]),_:1}),a(o,{class:"nav-link",to:"/service"},{default:l(()=>[n("方案介紹")]),_:1}),a(o,{class:"nav-link",to:"/contact"},{default:l(()=>[n("聯絡我們")]),_:1}),a(o,{class:"nav-link",to:"/faq"},{default:l(()=>[n("常見問題")]),_:1})])])])],512)}const B=r(h,[["render",x]]),T="/CW-space-vue/assets/logo-lg-IzMmucen.png",C={},H={class:"footer"},N=g('<div class="container"><div class="row"><div class="col-lg-9 col-md-7"><ul><li>信箱：CWspace@gmail.com</li><li>電話：06-666-6666</li><li>傳真：06-666-6767</li><li>地址：臺南市安平區永華路二段777號</li><li>服務時間：周一至周五 08:30~17:30</li></ul></div><div class="col-lg-3 col-md-5 d-flex align-items-center"><div class="footer-logo"><img src="'+T+'" alt="logo"></div></div></div><div class="copyright"> Copyright © 2024- CW-space All rights reserved. </div></div>',1),y=[N];function E(e,t){return i(),d("div",H,y)}const G=r(C,[["render",E]]),V={data(){return{show:!1}},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},toggleShow(){const e=document.documentElement,t=e.scrollHeight-e.clientHeight;e.scrollTop/t>.1?this.show=!0:this.show=!1}},mounted(){document.addEventListener("scroll",this.toggleShow)},unmounted(){document.removeEventListener("scroll",this.toggleShow)}},A=s("span",null,"回頂端",-1),M=[A];function S(e,t,v,p,_,c){return _.show?(i(),d("button",{key:0,type:"button",class:"go-top",onClick:t[0]||(t[0]=(...o)=>c.scrollToTop&&c.scrollToTop(...o))},M)):m("",!0)}const L=r(V,[["render",S]]);export{L as G,B as H,G as a};
